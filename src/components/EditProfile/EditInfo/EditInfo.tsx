import React, { FormEvent, useState , useContext, useRef, useEffect} from 'react';
import DOMPurify from 'dompurify';
import axios from 'axios';
//
import useMutation from '../../hooks/useMutation';
import AuthContext from '../../../context/AuthContext';
import useFetch from '../../hooks/useFetch';


function EditInfo() {

  const userId = useContext(AuthContext).user.userInfos.userId;
  const imageRef = useRef<HTMLInputElement>(null);

  const [newUsername, setNewUsername] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [body, setBody] = useState<object>(null);
  const [userImage, setUserImage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const regexes = {
    username: /^[a-zA-Z0-9_]{4,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]{8,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  };

  const isValidUsername = regexes.username.test(newUsername);
  const isValidEmail = regexes.email.test(newEmail);  
  console.log(isValidUsername, isValidEmail);
  
  const { data : user, loading } = useFetch(`/user/${userId}`, 'GET');

  useEffect(() => {
    if (!user?.image_url) return;
    if (loading) return;
    setNewUsername(user?.username);
    setNewEmail(user?.email);
    setUserImage(import.meta.env.VITE_SERVER_URL + user?.image_url);
  }, [user?.image_url])

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setBody(null); // Reset messages
    if (!isValidUsername || !isValidEmail) {
      setErrorMessage('Votre nom d\'utilisateur doit contenir au moins 2 caractères et votre email doit être valide.');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmitUsername = (e : FormEvent) => {

    e.preventDefault();
    setErrorMessage('');

    const cleanNewUsername = DOMPurify.sanitize(newUsername);
    const body = {
      id : userId,
      username: cleanNewUsername,
    };

    if (!cleanNewUsername) {
      setErrorMessage('Veuillez saisir un nom d\'utilisateur.');
      return;
    }

    if (!isValidUsername) {
      setErrorMessage('Votre nom d\'utilisateur doit contenir au moins 2 caractères.');
      return;
    }

    setBody(body);
  };

  const handleSubmitEmail = (e : FormEvent) => {

    e.preventDefault();
    setErrorMessage('');

    const body = {
      id : userId,
      email : newEmail
    };

    if (!newEmail) {
      setErrorMessage('Veuillez saisir un email.');
      return;
    }

    if (!isValidEmail) {
      setErrorMessage('Votre email doit être valide.');
      return; 
    }

    setBody(body);
  };

  const handleChangeImage = (e : any) => {
    e.preventDefault();
    imageRef.current.click();
  };

  const handleChangeImageFile = async (e : any) => {
    const validFilesTypes = ["image/png", "image/jpg", "image/jpeg","image/svg", "image/webp"];
    const maxSize = 1024 * 1024 * 1024; // 1024 mo

    if (!validFilesTypes.find((type) => type === e.target.files[0].type)) {
      console.log("File must be an png or jpg type");
      return;
    } else if (e.target.files[0].size > maxSize) {
      console.log("File must not exceded 1024 mo");
      return;
    }
    else {  

    const formData = new FormData();
    formData.append('id', userId.toString());
    formData.append('image', e.target.files[0]);

    await axios.patch(import.meta.env.VITE_SERVER_URL + '/user/image', formData , {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(import.meta.env.VITE_SERVER_URL + res.data.data.image_url);
      setUserImage(import.meta.env.VITE_SERVER_URL + res.data.data.image_url);
    }
    ).catch((err) => {
      console.log(err);
    }
    );
  }};

    const { data , error } = useMutation('/user', body, 'PATCH');

  return (
    <div className='flex flex-col shadow-xl bg-neutral-focus border border-gray-700 rounded-xl items-center text-left sm:w-1/2'>
      <form className="w-full flex flex-col items-center gap-6 py-4" onChange={handleChange}>
        <h1 className="text-2xl">Edit profile</h1>
        <div className="w-full px-6 sm:flex sm:flex-col">
          <label htmlFor="username" className="label-text text-base">Change your username</label>
          <div className="flex gap-2 justify-between items-center mt-4">
            <input id="username" name="username" type="text" className="input input-sm input-bordered w-3/4" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
            <button type="button" className="btn btn-sm" onClick={handleSubmitUsername}>Save</button>
          </div>
        </div>

        <div className="w-full px-6 sm:flex sm:flex-col">
          <label htmlFor="email" className="label-text text-base">Change your email</label>
          <div className="flex gap-2 justify-between items-center mt-4">
            <input id="email" name="email" type="email" className="input input-sm input-bordered w-3/4" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
            <button type="button" className="btn btn-sm" onClick={handleSubmitEmail}>Save</button>
          </div>
        </div>

        {errorMessage ? <div className='text-red-600 text-xs italic mx-4 text-center'>
            {errorMessage}
            </div> : null }
        {data ? <div className='text-green-500 text-xs italic mx-4 text-center'>
            Votre changement a bien été pris en compte
            </div> : null}

      </form>

      <form encType="multipart/form-data" className="w-full flex flex-col items-center gap-6 py-4">

        <div className="avatar flex flex-col items-center gap-6 px-6">
          <div className="w-20 rounded-full">
            <label  htmlFor='image' className='cursor-pointer' onClick={handleChangeImage}>{userImage ? <img src={userImage} alt='user_image' /> : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user_avatar" />}</label>
            <input type="file" hidden ref={imageRef} className="input input-sm input-bordered" id="image" name="image" onChange={handleChangeImageFile} />
          </div>
        </div>
        <p className="text-xs px-4 mb-10 sm:text-sm">Click on your profile picture to chose a new one</p>

      </form>
    </div>

  );
}

export default EditInfo;

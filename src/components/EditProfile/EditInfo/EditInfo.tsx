import React, { FormEvent, useState , useContext} from 'react';
import { Link } from 'react-router-dom';
import useMutation from '../../hooks/useMutation';
import DOMPurify from 'dompurify';
import AuthContext from '../../../context/AuthContext';

function EditInfo() {

  const userId = useContext(AuthContext).user.userInfos.userId;

  const [newUsername, setNewUsername] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [loading, setLoading] = useState<string>('');
  const [body, setBody] = useState<object>(null);

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  const handleSaveUsername = (e : FormEvent) => {
    e.preventDefault();
    let body = {
      id : userId,
      username: newUsername,
    };
    setBody(body);
  };

  const handleSaveEmail = (e: FormEvent) => {
    e.preventDefault();
    console.log('save email');
  };

  const { data, error } = useMutation('/user', body);
  console.log(data);
  

  return (
    <form className="flex flex-col shadow-xl bg-neutral-focus border border-gray-700 rounded-xl gap-6 py-4 items-center text-left sm:w-1/2">
      <h1 className="text-2xl">Edit profile</h1>
      <div className="w-full px-6 sm:flex sm:flex-col">
        <label htmlFor="email" className="label-text text-base">Change your username</label>
        <div className="flex gap-2 justify-between items-center mt-4">
          <input type="text" placeholder="New username" className="input input-sm input-bordered w-3/4" onChange={handleChangeUsername} value={newUsername}/>
          <button type="button" className="btn btn-sm" onClick={handleSaveUsername}>Save</button>
        </div>
      </div>
      <div className="w-full px-6 sm:flex sm:flex-col">
        <label htmlFor="email" className="label-text text-base">Change your email</label>
        <div className="flex gap-2 justify-between items-center mt-4">
          <input type="email" placeholder="New email" className="input input-sm input-bordered w-3/4" onChange={handleChangeEmail} value={newEmail}/>
          <button type="button" className="btn btn-sm" onClick={handleSaveEmail}>Save</button>
        </div>
      </div>
      {/* Le link ouvrira une fenêtre pour glisser déposer la nouvelle image */}
      {/* <Link> */}
      <div className="avatar flex flex-col items-center gap-6 px-6">
        <div className="w-20 rounded-full">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user_avatar" />
        </div>
      </div>
      {/* </Link> */}
      <p className="text-xs px-4 sm:text-sm">Click on your profile picture to chose a new one</p>
    </form>
  );
}

export default EditInfo;

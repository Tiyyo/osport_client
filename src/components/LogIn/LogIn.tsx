import React, {
 useState, useContext, FormEvent, ChangeEvent,
} from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
//
import AuthContext from '../../context/AuthContext';

const LogIn: React.FC = () => {
  const { logUser } = useContext(AuthContext);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isServerValid, setIsServerValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const resetValidationStates = () => {
    setErrorMessage(''); // Reset error messages
    setIsServerValid(true); // Reset validation state
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setter(event.target.value);
    setIsServerValid(true); // Reset validation state
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const cleanUsername = DOMPurify.sanitize(username);
    resetValidationStates();

    if (!cleanUsername || !password) {
      setErrorMessage('All fields are required');
      setIsServerValid(false);
      return;
    }

    const result = await logUser(cleanUsername, password);

    if (result) {
      setErrorMessage(result);
      setIsServerValid(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as unknown as FormEvent); // Casting nécessaire pour satisfaire les types
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 py-6 px-4 mb-10">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-6xl">O'sport</h1>
        <div className="text-xl">Welcome on O'Sport</div>
      </div>

      <form className="flex flex-col w-full min-[820px]:w-1/2 items-center p-6 gap-4 bg-neutral-focus shadow-sm border border-gray-500 rounded-xl">
        <div className="form-control w-full">
          <label className="label" htmlFor="first-name">
            <span className="label-text text-lg">Username : </span>
          </label>
          <input
            id="first-name"
            type="text"
            className="input input-bordered"
            name="username"
            placeholder=""
            value={username}
            onChange={(e) => handleInputChange(setUsername, e)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="form-control w-full">
          <label className="label" htmlFor="password">
            <span className="label-text text-lg">Password : </span>
          </label>
          <input
            id="password"
            type="password"
            placeholder=""
            className="input input-bordered"
            name="password"
            value={password}
            onChange={(e) => handleInputChange(setPassword, e)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {!isServerValid && (
          <span className="flex gap-2 text-error text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {errorMessage}
          </span>
        )}

        <div className="flex self-end">
          <Link to="/" className="link link-info text-sm">
            Password forgotten ?
          </Link>
        </div>

        <button type="button" className="btn btn-ghost btn-wide border-2 border-gray-500 sm:btn-md" onClick={handleSubmit}>
          Sign in
        </button>
      </form>

      <div className="text-center w-full min-[820px]:w-1/2 shadow-sm bg-neutral-focus p-4 border border-gray-500 rounded-lg text-sm sm:text-md">
        New on O'Sport ? &nbsp;
        <Link to="/signup" className="link link-info">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default LogIn;

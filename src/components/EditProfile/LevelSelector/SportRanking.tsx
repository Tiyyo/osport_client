import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../../context/AuthContext';

interface SportRankingProps {
    sportSelected: string;
    ownRank: number | undefined;
  }

function SportRanking ( { sportSelected, ownRank } : SportRankingProps) {

    const [level, setLevel] = useState<string>('Choice');
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const userId = useContext(AuthContext).user.userInfos.userId;

    console.log(level);

    useEffect(() => {
      switch (ownRank) {
        case 2:
          setLevel('Beginner');
          break;
        case 5:
          setLevel('Intermediate');
          break;
        case 8:
          setLevel('Confirmed');
          break;
        default:
          setLevel('Choice');
          break;
      }

      if (ownRank > 0) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    }, [sportSelected]);

    const handleChangeLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setLevel(event.target.value);
    };

    const handleSubmit = async () => {
      if (sportSelected === 'Choice' && level === 'Choice') {
        console.log('Tu dois choisir un sport et un niveau');
      } else if (sportSelected === 'Choice') {
        console.log('Tu dois choisir un sport');
      } else if (level === 'Choice') {
        console.log('Tu dois choisir un niveau');
      } else {
        console.log('Tu est ' + level + ' en ' + sportSelected);
        setIsDisabled(true);
        let sportId: number;
        switch (sportSelected) {
          case 'Football':
            sportId = 1;
            break;
          case 'Basketball':
            sportId = 2;
            break;
        }
        console.log('Body : ' + userId, sportId, level);
        const body = {
          "user_id": userId, // Number
          "sport_id": sportId, // Number
          "rating": level // " Beginner" | "Intermediate" | "Advanced"
        };
        await axios.post(import.meta.env.VITE_SERVER_URL + '/user/sport', body , {})
        .then((res) => {
          console.log(res);
        }
        ).catch((err) => {
          console.log(err);
        }
        );
      }
    };

    return (
      <form className="flex flex-col items-center form-control w-full px-6 gap-4">
        <label className="label-text text-base self-start" htmlFor="sport">Now you can chose your level</label>
        <select className="select select-bordered text-neutral-content w-full" value={level} onChange={handleChangeLevel} disabled={isDisabled} >
          <option value='Choice' disabled className='font-bold italic'>Choose your level</option>
          <option value='Beginner'>Beginner</option>
          <option value='Intermediate'>Intermediate</option>
          <option value='Confirmed'>Confirmed</option>
        </select>
        <button className="btn w-fit sm:mt-6" type="button" onClick={handleSubmit} disabled={isDisabled}>Save your level</button>
      </form>
    )
}    

export default SportRanking;

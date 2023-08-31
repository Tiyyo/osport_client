/* eslint-disable no-nested-ternary */
// Nested ternary pour afficher le composant qui affiche le score avec la bonne couleur
// Si les scores sont égaux, on affiche <FinalScoreDraw />
// Si le score n'est pas égal et que le score de la première équipe est supérieur,
// on affiche <FinalScoreVictory />
// sinon on affiche <FinalScoreDefeat />
// et inversee pour la deuxième équipe

import React from 'react';
import FinalScoreVictory from './FinalScoreNumber/FinalScoreVictory';
import FinalScoreDefeat from './FinalScoreNumber/FinalScoreDefeat';
import FinalScoreDraw from './FinalScoreNumber/FinalScoreDraw';

interface ScoreProps {
  firstTeamScore: number;
  secondTeamScore: number;
}
function FinalScore({firstTeamScore, secondTeamScore}: ScoreProps) {
  return (
    <div className="flex flex-col gap-4 items-center px-6 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 w-full h-full sm:flex-row sm:justify-evenly">
      <h2 className="text-2xl">Final Score</h2>
      <div className="flex p-4">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Team 1</h3>
          {
            firstTeamScore === secondTeamScore
            ? <FinalScoreDraw score={firstTeamScore} />
            : firstTeamScore > secondTeamScore
            ? <FinalScoreVictory score={firstTeamScore} />
            : <FinalScoreDefeat score={firstTeamScore} />
          }
        </div>
        <div className="divider divider-horizontal" />
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Team 2</h3>
          {
            firstTeamScore === secondTeamScore
            ? <FinalScoreDraw score={secondTeamScore} />
            : firstTeamScore < secondTeamScore
            ? <FinalScoreVictory score={secondTeamScore} />
            : <FinalScoreDefeat score={secondTeamScore} />
          }
        </div>
      </div>
    </div>
  );
}

export default FinalScore;

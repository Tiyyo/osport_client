export interface Players {
  players: Player[];
  nbPlayers: number;
}

export type Status = 'pending' | 'accepted' | 'rejected';

export interface Player {
  status: Status;
  user?: User;
  team?: number;
}

export interface User {
  id: number;
  avatar: string;
  username: string;
}

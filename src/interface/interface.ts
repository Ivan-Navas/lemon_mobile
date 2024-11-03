export interface User {
  id: number;
  nickName: string;
  userImage: string;
}
export interface MessageProps {
  id: number;
  user: User;
  title: string;
  message: string | null;
  type: string;
  timestamp: string;
  read: boolean;
  file: boolean;
}

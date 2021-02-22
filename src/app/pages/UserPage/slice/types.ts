/* --- STATE --- */
import { User } from '../../../../types/User';

export interface UserPageState {
  users: User[];
  error: Error | null;
}

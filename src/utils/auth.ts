import { auth } from '../config/firebase';

export const getToken = async () => {
  const user = auth.currentUser;
  if (user) {
    return user.getIdToken();
  }
  throw new Error('No user logged in');
};
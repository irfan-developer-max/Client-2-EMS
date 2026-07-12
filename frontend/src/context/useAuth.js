import { useContext } from 'react';
import { UserProvide } from './userContext';

export const useAuth = () => useContext(UserProvide);

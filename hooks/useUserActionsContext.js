import { useContext } from 'react';
import { UserContext } from '../screens/UserConfirm/Context';

export const useUserActions = () => {
    const actions = useContext(UserContext)   
    return {
        ...actions
    }
}   
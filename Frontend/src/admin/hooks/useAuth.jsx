import { useState } from 'react';
import users from '../data/users.json';
import { generateMockToken, saveSession } from '../utils/authUtils';

export const useAuth = () => {
    const [error, setError] = useState('');

    const login = ({ email, password }) => {
    setError('');

    const foundUser = users.find(
        (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!foundUser) {
        setError('Incorrect email or password');
        return null;
    }

    const token = generateMockToken(foundUser.email);
    saveSession(foundUser, token);
    return foundUser;
    };

    return { login, error };
};

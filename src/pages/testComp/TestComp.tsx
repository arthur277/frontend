import React from 'react';
import { useHistory } from 'react-router-dom';

export default function TestComp() {
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login')
    }
    return (
        <div>
            <button onClick={handleLogout}> Logout </button>
        </div>
    )
}

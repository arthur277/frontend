import React from 'react';
import { useHistory } from 'react-router-dom';

export default function TestComp() {

    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login')
    }
    return (
        <div className='h-screen w-full bg-black'>
            <div className='w-full h-20  flex flex-row justify-center items-center'>
                <a href="/myCards">

                    <h2 className='m-4 font-monospace font-extrabold text-white hover:text-green hover:cursor-pointer hover:border-b-2'>My Cards</h2>
                </a>
                <a onClick={handleLogout}>
                    <h2 className='m-4 font-monospace font-extrabold text-white hover:text-green hover:cursor-pointer hover:border-b-2'>logout</h2>

                </a>
            </div>

        </div>
    )
}

import React from 'react';
import LogoutButton from '../../utils/logoutButton.tsx';
import Nav from '../../components/ui/Nav.tsx';



export default function TestComp() {


    return (
        <div className='h-screen w-full bg-white flex flex-col justify-between'>
            <Nav />

            <div className='flex justify-center items-center self-center mb-80 '>
                <h1 className='text-black text-[100px] font-extrabold  font-monospace'>Welcome and that !!</h1>
            </div>
        </div>
    )
}

import React from 'react'
import LogoutButton from '../../utils/logoutButton.tsx'

function Nav() {
    return (
        <div className='w-full h-16  flex flex-row justify-center  items-center border-b-2'>
            < a href="/Cards" >

                <h2 className='m-4 font-monospace font-extrabold text-black hover:text-green hover:cursor-pointer hover:border-b-2'>Cards</h2>

            </a >< a href="/addCard" >

                <h2 className='m-4 font-monospace font-extrabold text-black hover:text-green hover:cursor-pointer hover:border-b-2'>Add Cards</h2>

            </a >
            < a href="/store" >

                <h2 className='m-4 font-monospace font-extrabold text-black hover:text-green hover:cursor-pointer hover:border-b-2'>Gallery</h2>

            </a >

            <LogoutButton />
        </div >
    )
}

export default Nav

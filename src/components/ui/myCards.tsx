import React, { useEffect, useState } from 'react'
import geralt from "../../assets/images/geralt.png";
import yennefer from "../../assets/images/yennefer.png";
import decoy from "../../assets/images/decoy.png";
import Nav from './Nav.tsx';

interface Card {
    id: number;
    name: string;
    type: string;
    strength: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    UserId: number;
}
export default function MyCards() {
    const [myCards, setMyCards] = useState<Card[]>([])
    useEffect(() => {
        getAllCards();
    }, [])

    const getAllCards = async () => {
        try {
            const response = await fetch('http://localhost:3000/getCards');
            const data = await response.json()
            setMyCards(data)
            console.log(data);

        } catch (error) {
            console.log("an error occured in ftching cards", error);

        }
    }

    const myImages = [
        geralt, yennefer, decoy
    ]

    return (
        <div className='h-screen w-full bg-black flex flex-col '>
            <Nav />

            <div className='bg-black self-center flex flex-col md:flex-row gap-10'>
                {
                    myCards.map((card) => (
                        <div key={card.id} className='w-[250px] h-[500px] border-2 border-white rounded-lg flex flex-col'>
                            <div className='  h-4/6 relative rounded-[5px] '>
                                <img className='border-b-2 border-b-white' src={myImages[card.id - 1] || decoy} alt="" />
                                <div className=' rounded-[100%] border-2 border-golden bg-white w-[50px] h-[50px] absolute top-2 left-2
                         flex items-center justify-center text-black text-[38px] font-monospace font-bold  '>
                                    <h1>{card.strength}</h1>
                                </div>
                            </div>
                            <div className=' text-white font-monospace flex flex-col  items-center mt-10 w-[240px] h-[120px] relative self-center  '>
                                <h1 className='text-golden '>{card.name}</h1>
                                <h1 className='mt-5'> {card.description} </h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >

    )
}



import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import busimg from './img/bus.png'
import Loading from './Loading';

const Home = () => {

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['availableSeats'],
        queryFn: async () => {
            const res = await fetch('https://ticket-chi.vercel.app/availableSeats');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <div className=''> 
                <img src={busimg} alt="" srcset=""  className='h-[50%] w-[40%] mx-auto'/>
                <h1 className='text-3xl text-center text-black my-5' >Welcome to Bus Stop Choice your seat </h1>
            </div>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 p-5 w-[70%] mx-auto'>
                {
                    data.map((seat, index) => <Cart key={index} seat={seat} refetch={refetch}></Cart>)
                }
            </div>
        </div>

    );
};

export default Home;
import React, { useState } from 'react';
import Modal from './Modal';

const Cart = ({ seat,refetch}) => {
    const [modal,setModal] = useState(null);
   
    return (
    <div>
        <div className="card w-52 bg-[#87A1E4] shadow-xl image-full">
            <div className="card-body">
                <h2 className="card-title text-[#F5D2D3]">Seat NO {seat.seat}</h2>
                <div className="card-actions justify-end">
                { seat.book ? <h1 className='text-white'>Booked</h1> : <label htmlFor="my-modal" className="btn btn-outline text-black bg-[#B7C9BE]" onClick={() =>setModal(seat)}> BOOk</label>}
                </div>
            </div>
        </div>
      
        { 
           modal  &&  <Modal modal ={modal} setModal={setModal}  refetch={refetch} ></Modal>
        }
    </div >
    );
};

export default Cart;
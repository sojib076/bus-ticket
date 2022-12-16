import React from 'react';
import { toast } from 'react-hot-toast';
const Modal = ({ modal, setModal,refetch }) => {
    const { seat,_id } = modal;
    const handelbook  = (id) => {
        console.log(id);
        const book = {
            isBooked: true,
            bookId : id
        }
            fetch(`https://ticket-chi.vercel.app/bookSeat`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(book)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    refetch()
                    setModal(null)
                    toast.success('Seat Booked Successfully')
                }else{
                    toast.error(' The Seat is already booked by someone else ')
                }
            }) 
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"> Hello User </h3>
                    <p className="py-4">Please confirm your seat for seat no : {seat}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn" onClick={()=>handelbook(_id)}> COnfirm </label>
                        <label htmlFor="my-modal" className="btn btn-ghost" onClick={() => setModal(null)}> Cancel </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
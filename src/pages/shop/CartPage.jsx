import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import useCart from '../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';



const CartPage = () => {
    const {user} = useContext(AuthContext);
    const [cart, refetch] = useCart();
    console.log(cart)

    const handledeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:3000/carts/${item._id}`,
                {
                   method: "DELETE"
                }
            )                
                .then((res) => res.json())
                .then((data)=>{
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                    }
                })              
            }
        });
    }
  return (
    <div className='section-container'>
        {/* Banner */}
       <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className='py-48 flex flex-col justify-center items-center gap-8'>           
                {/* Text side */}
                <div className='text-center space-y-7'>
                    <h2 className='md:text-5xl text-4xl font-bold leading-sung'>
                    Items Added to The <span className='text-green'>Cart</span>
                    </h2>                    
                </div>                
            </div>
        </div>
        {/* Table of items */}
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-green text-white '>
                <tr>                            
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* rows */}
                {
                    cart.map((item, index) => {
                        return ( 
                        <tr key={index}> 
                        <td>
                            {index+1}
                        </td>                       
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={item.image}
                                    alt="" />
                                </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {item.name}                            
                        </td>
                        <td>{item.price}</td>
                        <th>
                            <button className="btn btn-ghost btn-xs text-red" onClick={()=>{handledeleteItem(item)}}><FaTrash/></button>
                        </th>
                    </tr>
                        )
                    })
                }
                </tbody>                        
            </table>
        </div>
    </div>
  )
}

export default CartPage

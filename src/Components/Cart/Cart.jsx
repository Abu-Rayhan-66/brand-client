/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";

import Swal from "sweetalert2";

// eslint-disable-next-line no-unused-vars
const Cart = ({cart, carts, setCarts}) => {
  
  
    
    // eslint-disable-next-line no-unused-vars
    const {_id, brand, name, photo, price, type, rating, userEmail} = cart || {}

    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/cart/${id}`,{
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)

                if(data.deletedCount > 0){
                  Swal.fire(
                'Deleted!',
                'Your cart has been deleted.',
                'success'
              )
              const remainingProduct  = carts.filter(product => product._id !==id)
              setCarts(remainingProduct)
                }
                 

              })
            }
          })
          
    }

    return (
        <div className=" mb-8 mx-4 md:mx-20 mt-10">
            <div className=" card card-side bg-base-100 shadow-xl">
  <figure><img className="h-[150px] w-[200px] md:h-[300px] md:w-[400px]" src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name: {name}</h2>
    <p>Brand Name: {brand}</p>
    <p>Category: {type}</p>
    <p>Rating: <Rating name="size-medium" defaultValue={rating} readOnly/></p>
    <p>Price: ${price}</p>
    <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white rounded-3xl hover:text-black w-28 text-lg font-semibold">DELETE</button>
    
  </div>
</div>
        </div>
    );
};

export default Cart;
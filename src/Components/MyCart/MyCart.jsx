import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";




const MyCart = () => {
   
    
    const [carts, setCarts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/cart')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div>
            {
                carts.map(cart => <Cart key={cart._id}
                     cart={cart} carts={carts} setCarts={setCarts} ></Cart>)
            }

        </div>
    );
};

export default MyCart;
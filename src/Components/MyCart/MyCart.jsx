import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";




const MyCart = () => {
   
    
    const [carts, setCarts] = useState([])
    useEffect(() =>{
        fetch('https://brand-server-lf8rrhpi0-abu-rayhan-s-projects.vercel.app/cart')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div>
           {
              (carts.length ==0) ? <img className="mt-10 mb-10 w-full h-[40vh] md:h-[80vh]" src="https://i.ibb.co/3MW18n8/error1.png" alt="" /> : <div>
              {
                  carts.map(cart => <Cart key={cart._id}
                       cart={cart} carts={carts} setCarts={setCarts} ></Cart>)
              }
              </div>
           }
            

        </div>
    );
};

export default MyCart;
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Slider from "../Slider/Slider";


const BrandProductCard = ({card}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, name} = card ||{}

    
    const [data,setData] = useState([])
    const [filter,setFilter] = useState([])
    
    useEffect(()=>{
        fetch('https://brand-server-jupp2a5jy-abu-rayhan-s-projects.vercel.app/brands')
        .then(res => res.json())
        .then(data => {
            setData(data)

        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])
    useEffect(()=>{
        const filterData = data.filter(brand => brand.brand == name)
        setFilter(filterData)
    },[data, name])
   console.log(filter)
    console.log(data)

    return (
        
       <div>
        <Slider></Slider>

        {
            (filter.length ==0) ? <img className="mt-10 mb-10 w-full h-[40vh] md:h-[80vh]" src="https://i.ibb.co/mD3V2Rm/error2.png" alt="" /> :  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mx-10 mb-20 mt-10 md:mx-20 gap-12">
            
            {
                filter.map(product => <Brand key={product._id} product={product}></Brand>)
                
            }
            
        </div>
        }
        
       </div>
    );
};

export default BrandProductCard;
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
        fetch('http://localhost:5000/brands')
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
         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mx-10 mb-20 mt-20 md:mx-20 gap-12">
            
            {
                filter.map(product => <Brand key={product._id} product={product}></Brand>)
                
            }
            
        </div>
       </div>
    );
};

export default BrandProductCard;
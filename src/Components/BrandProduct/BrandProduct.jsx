import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProductCard from "../BrandProductCard/BrandProductCard";




const BrandProduct = () => {

    const [card,setCard] = useState({})
    const {id} = useParams()
    const cards = useLoaderData()
    // console.log(cards)

    useEffect(()=>{
        const findCards = cards?.find(card => card.id == id)
        setCard(findCards)
    },[id,cards])

    return (
        <div>
            
            <BrandProductCard card={card}></BrandProductCard>
            
        </div>
    );
};

export default BrandProduct;
import { useEffect, useState } from "react";
import Card from "../Card/Card";




const Cards = () => {
    
    const [cards, setCards] = useState([])

    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div>
            <h2 className="text-5xl font-extrabold text-center mb-10">Top Brands </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 md:mx-20">
            
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;
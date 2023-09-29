import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utilits/constants";
import { useParams } from 'react-router-dom';

const RestrauntMenu = () => {
    const {resid}  = useParams();
    console.log(resid);
    const [menuList, setMenuList] = useState(null);
    useEffect(()=> {
        fetchMenuData();
    }, []);
    
   
    const fetchMenuData = async () => {
    const data = await fetch(MENU_API+resid);
    const dataJson = await data.json(); 
    // console.log(dataJson.data);
    setMenuList(dataJson.data);
    }
    if(menuList === null) return <Shimmer />

      const {name, cuisines} = menuList.cards[0].card.card.info;
      const {itemCards} = menuList.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    //   console.log(itemCards);
    return (
        <div className="restraunt-inside-data">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <ul>
                {itemCards.map((cardsMenu) => (
                    <li key={cardsMenu.card.info.id}>{cardsMenu.card.info.name}</li>
                    )      
                )}
            </ul>
        </div>
    )
}
export default RestrauntMenu;
import Restraunt from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';

const Body = () => {
  console.log("Body rendered");
  // hooks
  const [listOfRestro, setlistOfRestro] = useState([]);
  // for search bar
  const [searchText, setSearchText] = useState("");
  //for filter
  const [filteredData , setFilteredData] = useState([]);

  // console.log(listOfRestro);
  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8507962&lng=80.9147625&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const jsonData = await data.json();
    // console.log(jsonData.data.cards[2].card.card)
    // console.log('api response ' +
    // jsonData
    // );
    // optional chaining
    setlistOfRestro(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
         ?.restaurants
    );
    // for filter data
    setFilteredData(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
        );
  };

  useEffect(() => {
    console.log("inside use effect");
    // console.log(listOfRestro);
    fetchApi();
  }, []);

  //   if( listOfRestro.length === 0){
  //     return <Shimmer />
  //   }
  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body">
      <div className="secondary-header">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredSearchData = listOfRestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredData(filteredSearchData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestro.filter(
              (res) => res.info.avgRating > 3.9
            );
            setFilteredData(filteredData);
          }}
        >
          4+ Rating Restraunts
        </button>
      </div>
      <div className="cards">
        {
            filteredData.length === 0 ? <h1>Sorry no data</h1> : filteredData.map((foods) => {
                return <Link to={'/menu/'+foods.info.id} key={foods.info.id}><Restraunt foodname={foods} /></Link>;
              })
        }
      </div>
    </div>
  );
};
export default Body;

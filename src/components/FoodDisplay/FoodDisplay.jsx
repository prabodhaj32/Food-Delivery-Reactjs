import React, { useContext } from 'react'
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
  const{food_list} = useContext(StoreContext)


  return (
    <section className='food-display' id='food-display'>
      <div className="food-display-heading">
        <div>
          <p className='eyebrow'>Trending today</p>
          <h2>Top dishes near you</h2>
          <p className='subtext'>Handpicked favourites from kitchens with <strong>4.5★+</strong> ratings.</p>
        </div>
        <div className="filters">
          <span className="pill">Filter: {category}</span>
        </div>
      </div>

      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return(
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }
          return null
        })}
      </div>    
    </section>
  )
}

export default FoodDisplay
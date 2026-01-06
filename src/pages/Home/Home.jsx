import React, { useState } from 'react'
import'./Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'



const Home = () => {

const[category,setCategory] = useState("All");

  return (
    <div className='home'>
      <Header/>
      <div className="section-shell">
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
      </div>
    </div>
  )
}

export default Home
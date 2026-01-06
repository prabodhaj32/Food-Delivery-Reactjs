import PropTypes from 'prop-types'
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <section className='explore-menu' id='explore-menu'>
      <div className="explore-header">
        <div>
          <p className='eyebrow'>Chef curated</p>
          <h2>Explore the menu</h2>
          <p className='explore-menu-text'>
            Pick a mood, and we will serve you the best from nearby cloud kitchens
            and premium restaurants.
          </p>
        </div>
        <div className="pill">Swipe →</div>
      </div>

      <div className='explore-menu-list' role="tablist" aria-label="Food categories">
        {menu_list.map((item,index)=>(
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={category===item.menu_name}
            onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
            className={category===item.menu_name? "explore-menu-list-item active":"explore-menu-list-item"}
          >
            <div className="thumb">
              <img src={item.menu_image} alt={item.menu_name}/>
            </div>
            <span>{item.menu_name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ExploreMenu

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
}
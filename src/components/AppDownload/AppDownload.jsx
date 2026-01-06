import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <section className='app-download glass-surface' id='app-download'>
      <div className="app-download-copy">
        <p className="eyebrow">Move faster</p>
        <h3>Download the Taste Corner app</h3>
        <p className="subtext">
          Get live tracking, smarter reorders, and app-only offers. Optimized for both light and dark mode.
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="Google Play" />
          <img src={assets.app_store} alt="App Store" />
        </div>
      </div>
      <div className="app-download-badge">ETA <span>12</span> min</div>
    </section>
  )
}

export default AppDownload
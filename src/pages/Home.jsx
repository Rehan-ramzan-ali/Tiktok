import React from 'react'
import TikTokShopCard from './TikTokShopCard'
import ShopDataSection from './ShopDataSection'
import QuickActions from './QuickActions'
import SalesChart from './SalesChart'
import FAQSection from './FAQSection'
import Navbar from '../component/Navebar'

const Home = () => {
  return (
    
    <div>
      
      <TikTokShopCard/>
      <ShopDataSection/>
      <QuickActions/>
      <SalesChart/>
      <FAQSection/>
      <Navbar/>
    </div>
  )
}

export default Home

import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import TikTokShopCard from './component/Header'
import Home from './pages/Home'
import AccountStatus from './pages/FAQsection/AccountStatus'
import ProductListManagement from './pages/FAQsection/ProductListManagement'
import AdvertisingRegulations from './pages/FAQsection/AdvertisingRegulations'
import TransportationRules from './pages/FAQsection/TransportationRules'
import CapitalSafetyManagement from './pages/FAQsection/CapitalSafetyManagement'
import ComplaintsAndDisputes from './pages/FAQsection/ComplaintsAndDisputes'
import StoreManagement from './pages/FAQsection/StoreManagement'
import ScrollToTop from './pages/ScrollToTop'
import Recharge from './pages/QuickActions/Recharge'
import Navbar from './component/Navebar'
import WithdrawalPage from './pages/QuickActions/WithdrawalPage'
import UpgradeVIP from './pages/QuickActions/UpgradeVIP'
import ShopSettings from './pages/QuickActions/ShopSettings'
import SignInPage from './pages/QuickActions/SignInPage'
import MessageCenter from './pages/MessageCenter'
import Product from './pages/Product'
import Distribution from './pages/Distribution'
import ProductManagement from './pages/ProductManagement'
import Order from './pages/Order'
import EvaluationCenter from './pages/EvaluationCenter'
import Mypages from './pages/Profile'
import ProductID from './pages/ProductID'
import Setting from './pages/Setting'
import Baseinfo from './pages/Baseinfo'
import UploadBanner from './pages/UploadBanner'


const App = () => {
  return (
    
      <div>

<ScrollToTop />

  {/* <Navbar/> */}

        <Routes>
          {/* Home page ke liye route setup */}
          <Route path="/" element={<Home />} />

          {/* FAQ Routes */}

          <Route path="/account-status" element={<AccountStatus />} />
          <Route path="/product-management" element={<ProductListManagement />} />
          <Route path="/advertising-rules" element={<AdvertisingRegulations />} />
          <Route path="/transportation" element={<TransportationRules />} />
          <Route path="/capital-safety" element={<CapitalSafetyManagement />} />
          <Route path="/complaints" element={<ComplaintsAndDisputes />} />
          <Route path="/store-management" element={<StoreManagement />} />

          {/* Quick Actions Routes */}

          <Route path="/recharge" element={<Recharge />} />
          <Route path="/withdrawal" element={<WithdrawalPage />} />
          <Route path="/upgrade-vip" element={<UpgradeVIP />} />
          <Route path="/shop-settings" element={<ShopSettings />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/message" element={<MessageCenter />} />
          
         

          <Route path="/product" element={<Product />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/goods" element={<ProductManagement />} />
          <Route path="/order" element={<Order />} />
          <Route path="/comment" element={<EvaluationCenter />} />
          <Route path="/profile" element={<Mypages />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/baseinfo" element={<Baseinfo   />} />
          <Route path="/uploadBanner" element={<UploadBanner   />} />

          {/* Product ID ke liye dynamic route */}
          <Route path="/product/:id" element={<ProductID />} />


        </Routes>
      </div>
    
  )
}

export default App
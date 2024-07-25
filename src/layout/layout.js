import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <main style={{minHeight:"calc(100vh - 128px)"}} className='main'>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;

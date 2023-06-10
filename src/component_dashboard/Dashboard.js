import React from 'react'
import NavbarDashbord from './NavbarDashbord';
import HomeDashboard from './HomeDashboard';



export default function Dashboard() {
  return (
    <>
      <div className='container'>

        <NavbarDashbord />

        <HomeDashboard />

      </div>
    </>

  )
}

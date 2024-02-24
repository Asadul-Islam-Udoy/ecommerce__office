import React, { useState } from 'react'
import './Admin.css'
import Admin_Headers from '../component/admin/homes/Admin_Headers'
import Admin_Sidebar from '../component/admin/homes/Admin_Sidebar'
import Title from '../component/helper/Title'
function Adimn() {
 const[sidebar,setSideBar] = useState(true)
  return (
    <>
    <Title title='Admin Page'/>
     <div style={{minHeight:'90vh'}}>
      <div>
        <Admin_Headers setSideBar={setSideBar}/>
      </div>
       <div className='controll__side__box'>
         <div style={{marginTop:'60px',position:'absolute'}}>
          <Admin_Sidebar  sidebar={sidebar}/>
         </div>
         <div className='wellcame__class'>
             <h1>Well Come to Our Dashboard</h1>
         </div>
       </div>
     </div>
    </>
  )
}

export default Adimn

import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <>
          <nav className='nav-bar'>
                 <ul   className='nav-ul'>
                     <li><Link className='link-header'>home</Link></li> 
                     <li><Link className='link-header'>Store</Link></li> 
                     <li><Link className='link-header'>Servece</Link></li> 
                     <li><Link className='link-header'>Contact</Link></li> 
                 </ul>
          </nav>
    </>
  )
}

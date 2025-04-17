import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='px-2 flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className="w-36" alt='' />
      <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
        <NavLink to='/' className='flex flex-col items-center gap-0.5'>
          <p>Home</p>
          <hr className='w-3/4 h-[1.5px] border-none bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-0.5'>
          <p>Collection</p>
          <hr className='w-3/4 h-[1.5px] border-none bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-0.5'>
          <p>About</p>
          <hr className='w-3/4 h-[1.5px] border-none bg-gray-500 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-0.5'>
          <p>Contact</p>
          <hr className='w-3/4 h-[1.5px] border-none bg-gray-500 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt='' />

        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col w-36 px-5 py-3 gap-2 bg-gray-300 text-gray-600 rounded'>
              <p className='cursor-pointer hover:text-black'>my profile</p>
              <p className='cursor-pointer hover:text-black'>order</p>
              <p className='cursor-pointer hover:text-black'>logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5'></img>
          <p className='absolute right-[-5px] bottom-[-5px] leading-4 w-4 text-center bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor_pointer sm:hidden' />

      </div>
      {/* sidebar menu for small screen */}
      <div className={`absolute right-0 top-0 bottom-0 overflow-hidden transition-all bg-white ${visible ? 'w-full' :'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img  className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>

        </div>
      </div>

    </div >
  )
}

export default navbar
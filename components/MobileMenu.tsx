import React from 'react'
import Link from 'next/link'
import { menuItems } from '@/constants/data'

const MenuMobile = ({ setMobileMenu }: MobileMenuProps) => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
      {menuItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className='py-4 px-5 border-b'>
              <Link href='' onClick={() => setMobileMenu(false)}>
                {item.name}
              </Link>
            </li>
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default MenuMobile

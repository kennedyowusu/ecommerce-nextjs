import React from "react";
import Link from "next/link";
import { menuItems } from "@/constants/data";

const Menu = () => {
    return (
      <ul className='hidden md:flex items-center gap-8 text-black/8'>
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              className='cursor-pointer'
            >
              <Link href=''>{item.name}</Link>
              </li>

            )
          })}
      </ul>
    )
};

export default Menu;

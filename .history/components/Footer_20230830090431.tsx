import MainWrapper from "@/constants/wrapper";
import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'


const Footer = () => {
    return (
      <MainWrapper className='flex justify-between items-end bg-black text-white pt-14 pb-3  bottom-0 left-0 right-0'>
        <div className='text-[10px] text-white font-semibold hover:text-white cursor-pointer text-center md:text-left'>
          © 2023 Brand, Inc. All Rights Reserved
        </div>

        <div className='flex gap-4 justify-center md:justify-start'>
          <Link
            href='https://www.linkedin.com/in/kennedy-owusu/'
            target='_blank'
            className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white cursor-pointer'
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href='https://twitter.com/_iamkobby'
            target='_blank'
            className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white cursor-pointer'
          >
            <FaTwitter size={20} />
          </Link>

          <Link
            href='https://twitter.com/_iamkobby'
            target='_blank'
            className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white cursor-pointer'
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href='
              https://www.youtube.com/channel/UCkGH8kYlQAgtB8MuuHOsvJQ'
            target='_blank'
            className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white cursor-pointer'
          >
            <FaYoutube size={20} />
          </Link>
        </div>
      </MainWrapper>
    )
};

export default Footer;

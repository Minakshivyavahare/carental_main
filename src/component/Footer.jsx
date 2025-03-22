import React from 'react'
import FooterSubscribe from "./FooterSubscribe";
import FooterServices from './FooterServices';
import FooterCopyright from './FooterCopyright'

const Footer = () => {
  return (
    <>
      <footer className="h-auto w-auto bg-[#313131] text-white ">
        <FooterSubscribe />
        <FooterServices />
        <FooterCopyright />
      </footer>
    </>
  )
}

export default Footer

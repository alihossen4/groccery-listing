import Image from 'next/image'
import React from 'react'
import logo from "../../public/logo.png"
import Link from 'next/link'
import Search from './Search'
const Header = () => {
  return (
    <header>
        <div className="container flex items-center justify-between py-4">
            <div className="logo">
                <Link href={"/"}>
                    <Image src={logo} alt='logo' width={200} height={70}/>
                </Link>
            </div>
            <Search />
        </div>
    </header>
  )
}

export default Header
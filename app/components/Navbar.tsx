"use client"
import { useState, useEffect, useRef } from "react"
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { CiDeliveryTruck,CiShop } from "react-icons/ci";

import Image from "next/image"

const Navbar = () => {

  const [isHamBurgerOpen, setIsHamBurgerOpen] = useState(true)
  const [searchData, setSearchData] = useState({
    Search: ""
  })
  const handleSearch = async (e: any) => {
    e.preventDefault()
    console.log(searchData)
  }
  const handleChange = async (e: any) => {
    const { name, value } = e.target
    setSearchData({
      ...searchData,
      [name]: value
    })


  }


  return (

    <>
        {
      !isHamBurgerOpen && (
        <div className="fixed top-22 right-0 w-full bg-[#2c3e50] text-white flex flex-col items-start gap-4 px-6 py-4 z-50 md:hidden">
          <p className="pb-2 w-full flex gap-2"><span className="text-xl"><CiShop/></span><span>Become a Seller</span></p>
          <p className="pb-2 w-full flex gap-2"><span className="text-xl"><CiDeliveryTruck/></span><span>My Orders</span></p>
          <p className="pb-2 w-full flex gap-2"><span className="text-xl"><FaShoppingCart/></span><span>Cart</span></p>
          <p className="pb-2 w-full flex gap-2"><span className="text-xl"><CgProfile/></span><span>Profile</span></p>
          {/* Add more items as needed */}
        </div>
      )
    }
      <nav className="flex min-h-screen w-full">
        <header className="h-14 fixed  bg-[#2c3e50]  w-full flex justify-between items-center">
          <div className="logo flex w-[25%] md:w-[20%] items-center">
            <Image
              src="/logoshop.png"
              alt="ShopIt"
              width={150}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="Search flex md:w-[50%] w-[75%] items-center">
            <form className="w-full flex h-10" onSubmit={handleSearch}>
              <label htmlFor="Search"></label>
              <input type="text" name="Search" placeholder="Search Items" className="outline-none text-white border-slate-400 rounded-l-md border px-2 w-[70%]" onChange={handleChange} value={searchData.Search} />
              <button type="submit" className="border border-slate-400 h-full flex justify-center px-4 items-center bg-[#febd68] md:px-6 md:w-[5%] w-[10%] rounded-r-md"><p><FaSearch /></p></button>
            </form>
          </div>
          <div className="hidden text-slate-100 md:w-[20%] md:gap-10 whitespace-nowrap md:flex"><p className="flex gap-1"><span className="text-2xl"><CiShop/></span><span className="text-md">Become a Seller</span></p>
            <p className="flex gap-1"><span className="text-2xl"><CiDeliveryTruck/></span><span className="text-md">My Orders</span></p>
          </div>
          <div className="hamburger text-slate-400 md:hidden text-2xl mx-2" onClick={() => setIsHamBurgerOpen(!isHamBurgerOpen)}>{isHamBurgerOpen ? <GiHamburgerMenu /> : <RxCross1 />}</div>
          <div className="accounts text-[#ddd2d2] hidden md:w-[30%] md:flex md:justify-evenly">

            <p className=" flex gap-2"><span className="text-2xl"><FaShoppingCart /></span><span className="text-md">Cart</span></p>
            <p className="flex gap-2"><span className="text-2xl"><CgProfile /></span><span className="text-md">Profile</span></p>
          </div>


        </header>
        <section className="bg-[#34495e] overflow-y-auto fixed mt-14 w-full h-8 flex text-white">
          <ul className="mx-6 w-full flex gap-10 items-center whitespace-nowrap">
            <li>All</li>
            <li>Cosmetics</li>
            <li>Electronics</li>
            <li>Kitchen</li>
            <li>Today Deals</li>
            <li>BestSellers</li>
            <li>Fashion</li>
            <li>Become a Seller</li>
            <li>Become a Customer</li>
            <li>Customer Login</li>
            <li>Seller Login</li>

          </ul>
        </section>
      </nav>
}

    </>

  )
}

export default Navbar

import React from 'react'
import { useLocation, useNavigate } from 'react-router'
export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname)
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
    <header className='flex justify-between items-center px-3 max-w-6xl mx-auto '>
        <div>
            <img className='h-10 cursor-pointer' src="https://cdn.worldvectorlogo.com/logos/realtor-3.svg" alt="logo"
            onClick={() => navigate("/")} />
        </div>
        <div >
            <ul className='flex space-x-10'>
                <li className= {` cursor-pointer py-3 text-2xl font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMathRoute("/") && 
                "text-black border-b-red-500" }  `}
                onClick = {() => navigate("/")}>Home</li>
                <li className= {` cursor-pointer py-3 text-2xl font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMathRoute("/offers") && 
                "text-black border-b-red-500" }`}
                onClick = {() => navigate("/offers")}>Offers</li>
                <li className= {` cursor-pointer py-3 text-2xl font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMathRoute("/SignIn") && 
                "text-black border-b-red-500" }`}
                onClick = {() => navigate("/SignIn")}>Sign In</li>
            </ul>
        </div>
    </header>
    </div>
  )
}

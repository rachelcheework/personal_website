import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NavLayout = () => {
    return (
        <div className="flex h-dvh overflow-hidden">
            <div className="flex-1 overflow-y-auto">
                <div className="min-h-screen flex flex-col">

                    {/* top bar */}
                    <div className='flex justify-center px-6 py-5 z-50 gap-6 border-b align-center items-center relative min-h-8 
                    bg-blue-100 lg:h-16'>

                        {/* name/title + navbar */}
                        <div className="max-w-[1800px] w-full flex items-center gap-6 relative">
                            
                            {/* name/title */}
                            <div className="flex items-center w-full ">
                                <a href="" className="flex flex-col sm:flex-row sm:inline-flex sm:gap-4 gap-0 cursor-pointer">
                                    <h5 className='font-medium'>Rachel Chee</h5>
                                    <h5>Frontend/Tester</h5>
                                </a>
                            </div>

                            {/* navbar */}
                            <Navbar/>
                        </div>

                        {/* other pages */}
                        <div className="">
                            <Outlet />
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default NavLayout

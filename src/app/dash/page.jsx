import Aside from '@/components/Nav/Aside'
import Nav from '@/components/Nav/Nav'
import React from 'react'

const page = () => {
    return (
        <div>
            <Nav />
            <Aside />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200  rounded-lg  mt-14">
                    dashboard content
                </div>
            </div>
        </div>
    )
}

export default page
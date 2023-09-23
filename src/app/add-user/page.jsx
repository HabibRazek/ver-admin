import Aside from '@/components/Nav/Aside'
import Nav from '@/components/Nav/Nav'
import UserForm from '@/components/UserForm/UserForm'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <Nav />
        <Aside />
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200  rounded-lg  mt-14">
            <h2 className='text-center text-red-600 text-2xl md:text-xl font-bold '>Ajouter un visiteur</h2>

            <UserForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
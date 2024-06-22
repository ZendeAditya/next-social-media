import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {}

const BirthDay = (props: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthday</span>
      </div>
      {/* user */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            alt="user"
            width={16}
            height={16}
            className="object-cover w-10 h-10 rounded-full  "
          />
          <span>Aditya Zende</span>
        </div>
        <div className="flex items-end gap-4">
          <button className='bg-blue-500 text-white text-xs px-3 py-1 rounded-md'>Celebrate</button>
        </div>
      </div>
      {/* upcoming */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
      <Image
            src="/dift.png"
            alt="user"
            width={24}
            height={24}
          />
          <Link href="/" className ="flex flex-col gap-1 text-xs">
          <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
          <span className='text-gray-500'>see other 16 have upcoming birthday</span>
          </Link>
      </div>
    </div>
  )
}

export default BirthDay;
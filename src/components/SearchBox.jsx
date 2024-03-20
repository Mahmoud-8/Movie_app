import React from 'react'

export default function SearchBox() {
  return (
    <form>
        <input type="text" placeholder="Search for a movie" className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' />
        <button type="submit" className=' text-amber-500 '>Search</button>
        
    </form>
  )
}

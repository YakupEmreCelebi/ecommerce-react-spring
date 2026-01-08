import React from 'react'

function SearchBox({label, placeholder, value, handleSearch}) {

  return (
    <div className='flex items-center gap-3 pl-4 font-display w-full sm:w-auto'>
      <label className='text-lg font-semibold text-primary whitespace-nowrap'>{label}</label>
      <input
        type="text"
        className='px-4 py-2 text-base border rounded-md transition border-primary focus:ring focus:outline-none text-gray-800 w-full sm:w-[320px]'
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  )

}

export default SearchBox
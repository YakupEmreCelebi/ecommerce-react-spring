import React from 'react'

function Dropdown({label, options, selectedValue}) {
  return (
    <div className='flex items-center gap-2 justify-end pr-12 flex-1 font-display'>
        <label className='text-lg font-semibold text-primary'>{label}</label>
        <select className='px-3 py-2 border rounded-md transition border-primary focus:ring'
            value={selectedValue}
        >
            {options.map((option, index) => {
                <option value={option} key={index}>{option}</option>
            })}
        </select>
    </div>
  )
}

export default Dropdown
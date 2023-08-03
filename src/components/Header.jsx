import React from 'react'

const Header = ({ headerTitle }) => {
  return (
    <div className=' text-center ring-1 ring-slate-900 h-[2rem] text-xl font-extrabold'>
        <header>{ headerTitle }</header>
    </div>
  )
}

export default Header
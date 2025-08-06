import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header>
        <div className="bg-blue-500 flex items-center justify-center h-24">
            <h1 className="text-xl">Title</h1>
            <h2 className="absolute right-0 m-2 text-sm">22068917</h2>
        </div>
        <nav className="bg-red-500">
            <ul className="flex flex-row">
                <li className="bg-green-500 px-4 border-r"><Link href="/">Home</Link></li>
                <li className="bg-green-500 px-4 border-r"><Link href="/about">About</Link></li>
                <li className="bg-green-500 px-4 border-r"><Link href="/escaperoom">Escape Room</Link></li>
                <li className="bg-green-500 px-4 border-r"><Link href="/codingraces">Coding Races</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
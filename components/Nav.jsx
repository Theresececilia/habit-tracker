import Image from 'next/image'
import avatar from '@/public/avatar.png'

const Nav = () => {
  return (
    <nav className='p-4 flex justify-between items-center bg-darkColor'>
        <div>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="15" width="10" height="10" rx="3" stroke="#5E5E5E" strokeWidth="2"/>
                <rect x="1" y="1" width="10" height="10" rx="3" stroke="#5E5E5E" strokeWidth="2"/>
                <rect x="15" y="1" width="10" height="10" rx="3" stroke="#5E5E5E" strokeWidth="2"/>
                <rect x="15" y="15" width="10" height="10" rx="3" stroke="#5E5E5E" strokeWidth="2"/>
            </svg>
        </div>
        <h1 className='text-2xl text-lightGrey font-black'>rytm</h1>
        <Image src={avatar} alt="Profile Avatar"/>
    </nav>
  )
}

export default Nav

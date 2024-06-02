import React from 'react'

import hakkimizda from '@/pages/hakkimizda'
export default function Nav() {
    return (
        <div id='nav' className='container-center flex items-center  justify-between space-x-8 p-3 shadow-md' >
            <div className='flex basis-2/7 items-center'>
                <img style={{ width: "80px", height: "50px" }} src="/logo.jpg" alt='yok' />
                <a href='/'><p className='pl-3 text-yellow-500 hover:text-yellow-500 hover:underline'>UDU Finance </p></a>
            </div>

            <div id='navOption' className=' pl-36 hidden sm:flex basis-4/7 text-center items-end' >
                <a className='pr-4' href='/'>Ana Sayfa</a>

                <a className='pr-4' href='/hakkimizda'>Hakkımızda</a>
                <a className='pr-4' href='/iletisim'>İletişim</a>

            </div>

            {/* Giriş yap divi */}
            <div className='basis-1/7 text-right text-yellow-500' >
                <a className='pr-4' href='/portfolio'>Pörtföy</a>
                <i className="fa-solid fa-user p-2 mr-3"> </i>
            </div>

        </div>
    )
}



import React from 'react'
import { tentang } from './MenuTentangkami'
const TentangKami = () => {
    
  return (
    <div className='w-full h-screen bg-[#302b63]'>
        <div className='flex w-full h-full justify-center items-center'>
            <div className='grid grid-cols-2 gap-4 place-items-center'>
                <div className='flex item-start bg-white'>
                    <ul className='flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4'id="tabs-tabVertical" data-tabs-toggle='#myTabContent' role='tablist'>
                        {tentang.map(menus =>{
                            return (
                            <li key={menus.id} className='flex-grow text-center text-black' role='presentation'>
                                <a href={menus.idmenus} className={`text-start
                                    block
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    border-x-0 border-t-0 border-b-2 border-transparent
                                    px-6
                                    py-3
                                    my-2
                                    hover:border-transparent hover:bg-gray-100
                                    focus:border-transparent ${menus.id === 0 ? "active": ""}`} id={`tabs-${menus.idmenucontro}`} data-tabs-target={menus.idmenus} role='tab' >{menus.title}</a>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div id='myTabContent' className='bg-white'>
                    <div className='p-4 rounded-lg ' id='inforumum' role='tabpanel' aria-labelledby='tab-inforumum'>
                        <p className='text-black font-medium text-xs '>asd</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TentangKami
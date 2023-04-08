import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
        <footer className='bg-[#2A1A0F] py-5'>
            <div className='container mx-auto px-6'>
                <div className='flex items-center justify-between py-10'>
                    <div>
                        <img src='/images/ecomarket-logo-white.svg'/>
                    </div>
                    <div>
                        <p className='text-[#C9C4B5]'>&copy; {currentYear} EcoMarket. All rights reserved</p>
                    </div>

                </div>

            </div>
        </footer>
    </>
  )
}

export default Footer
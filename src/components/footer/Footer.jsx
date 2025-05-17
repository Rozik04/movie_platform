import React from 'react'
import logo_img from '../../assets/iconsFooter/LOGOTYPE.svg'
import google_img from '../../assets/iconsFooter/image8.svg'
import apple_img from '../../assets/iconsFooter/image7.svg'
import vector1_img from '../../assets/iconsFooter/Vector (1).svg'
import vector2_img from '../../assets/iconsFooter/shining-line.svg'
import vector3_img from '../../assets/iconsFooter/question-line.svg'
import vector4_img from '../../assets/iconsFooter/Vector (2).svg'
import vector5_img from '../../assets/iconsFooter/Vector (3).svg'
import vector6_img from '../../assets/iconsFooter/Vector (4).svg'
import vector7_img from '../../assets/iconsFooter/Vector (5).svg'
import vector8_img from '../../assets/iconsFooter/Vector (6).svg'
import vector9_img from '../../assets/iconsFooter/Vector (7).svg'
import vector10_img from '../../assets/iconsFooter/Vector (8).svg'
import vector11_img from '../../assets/iconsFooter/Vector (9).svg'

const Footer = () => {
  return (
    <footer className='container mx-auto bg-black bg-gray-900 flex flex-wrap justify-center items-start p-10 rounded-[20px] mb-[50px] mt-2.5'>
      <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col items-start justify-center gap-6 p-10'>
        <img src={logo_img} alt="Logo" />
      <div className='flex flex-col gap-4'>
        <img
            src={google_img}
            alt="Google"
            className="cursor-pointer"
            onClick={() => window.open('https://play.google.com/store', '_blank')}
        />
          <img
            src={apple_img}
            alt="Apple"
            className="cursor-pointer"
            onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
          />
     </div>
      </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col gap-6 p-10 items-start justify-center text-white'>
          <h1>About us</h1>

          <div className='flex gap-2 items-center cursor-pointer' 
              onClick={() => window.open('https://example.com/public-offer', '_blank')}>
            <img src={vector1_img} alt="Vector1" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Public offer</h1>
          </div>

          <div className='flex gap-2 items-center cursor-pointer' 
              onClick={() => window.open('https://example.com/advertisement', '_blank')}>
            <img src={vector2_img} alt="Vector2" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Advertisement</h1>
          </div>

          <div className='flex gap-2 items-center cursor-pointer' 
              onClick={() => window.open('https://example.com/faq', '_blank')}>
            <img src={vector3_img} alt="Vector3" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>F.A.Q</h1>
          </div>

          <div className='flex gap-2 items-center cursor-pointer' 
              onClick={() => window.open('https://example.com/contacts', '_blank')}>
            <img src={vector4_img} alt="Vector4" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Contacts</h1>
          </div>
        </div>
        
      <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col gap-6 p-10 items-start justify-center text-white'>
        <h1>Categories</h1>

        <div className='flex gap-2 items-center cursor-pointer'
            onClick={() => window.open('https://iticket.uz/uz/category/movie', '_blank')}>
          <img src={vector5_img} alt="Vector5" />
          <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Movie</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer'
            onClick={() => window.open('https://iticket.uz/uz/category/theatre', '_blank')}>
          <img src={vector6_img} alt="Vector6" />
          <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Theater</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer'
            onClick={() => window.open('https://iticket.uz/uz/category/concerts', '_blank')}>
          <img src={vector7_img} alt="Vector7" />
          <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Concerts</h1>
        </div>

        <div className='flex gap-2 items-center cursor-pointer'
            onClick={() => window.open('https://championat.asia/uz', '_blank')}>
          <img src={vector8_img} alt="Vector8" />
          <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Sport</h1>
        </div>
      </div>

      <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col gap-6 p-10 items-start justify-center text-white'>
            <h1>Contact us</h1>
            <a href='tel:+998958973338' className='text-red-500 hover:underline'>+998 (95) 897-33-38</a>

            <div className='flex flex-col gap-4 items-start justify-center mt-10'>
              <h1>Social media</h1>
              <div className='flex gap-6 items-center'>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                  <img src={vector9_img} alt='Instagram' />
                </a>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                  <img src={vector10_img} alt='Facebook' />
                </a>
                <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                  <img src={vector11_img} alt='YouTube' />
                </a>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;


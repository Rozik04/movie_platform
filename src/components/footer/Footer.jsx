// import React from 'react'
// import logo_img from '../../assets/iconsFooter/LOGOTYPE.svg'
// import google_img from '../../assets/iconsFooter/image8.svg'
// import apple_img from '../../assets/iconsFooter/image7.svg'
// import vector1_img from '../../assets/iconsFooter/Vector (1).svg'
// import vector2_img from '../../assets/iconsFooter/shining-line.svg'
// import vector3_img from '../../assets/iconsFooter/question-line.svg'
// import vector4_img from '../../assets/iconsFooter/Vector (2).svg'
// import vector5_img from '../../assets/iconsFooter/Vector (3).svg'
// import vector6_img from '../../assets/iconsFooter/Vector (4).svg'
// import vector7_img from '../../assets/iconsFooter/Vector (5).svg'
// import vector8_img from '../../assets/iconsFooter/Vector (6).svg'
// import vector9_img from '../../assets/iconsFooter/Vector (7).svg'
// import vector10_img from '../../assets/iconsFooter/Vector (8).svg'
// import vector11_img from '../../assets/iconsFooter/Vector (9).svg'

// const Footer = () => {
//   return (
//     <footer className='container rounded-[20px] mx-auto h-[300px] mb-[50px] bg-gray-900 flex flex-row items-center justify-center'>
//         <div className='h-[300px] w-1/4  flex flex-col items-start justify-center gap-[60px] p-10'>
//             <img src={logo_img} alt="" />
//             <div className='flex flex-col gap-4'>
//               <img src={google_img} alt="" />
//               <img src={apple_img} alt="" />
//             </div>

        
//         </div>

//         <div className='h-[300px] w-1/4 flex flex-col gap-4 p-10 items-start justify-center text-white'>
//           <h1>About us</h1>
//           <div className='flex flex-row gap-2 items-center justify-start'>
//             <img src={vector1_img} alt="" />
//             <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Public offer</h1>
//           </div>

//         <div className='flex flex-row gap-2 items-center justify-start'>
//           <img src={vector2_img} alt="" />
//           <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Advertisement</h1>
//         </div>

//         <div className='flex flex-row gap-2 items-center justify-start'>
//           <img src={vector3_img} alt="" />
//           <h1 className='text-gray-500 hover:text-red-500 hover:underline'>F.A.Q</h1>
//         </div>

//         <div className='flex flex-row gap-2 items-center justify-start'>
//           <img src={vector4_img} alt="" />
//           <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Contacts</h1>
//         </div>
//        </div>
        
//         <div className='h-[300px] w-1/4 flex flex-col gap-4 p-10 items-start justify-center text-white'>
//           <h1>Categories</h1>
//           <div className='flex flex-row gap-2 items-center justify-start'>
//             <img src={vector5_img} alt="" />
//             <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Movie</h1>
//           </div>

//         <div className='flex flex-row gap-2 items-center justify-start'>
//           <img src={vector6_img} alt="" />
//           <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Theater</h1>
//         </div>

//         <div className='flex flex-row gap-2 items-center justify-start'>
//           <img src={vector7_img} alt="" />
//           <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Concerts</h1>
//         </div>

//         <div className='flex flex-row gap-2 items-center justify-start'>
//           <img src={vector8_img} alt="" />
//           <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Sport</h1>
//         </div>
//        </div>

//         <div className='h-[300px] w-1/4 flex flex-col gap-4 p-10 items-start justify-center text-white'>
//           <h1>Contact us</h1>
//           <h2 className='text-red-500'>+998 (95) 897-33-38</h2>

//         <div className='flex flex-col gap-4 items-start justify-center mt-10'>
//           <h1>Social media</h1>
//           <div className='flex flex-row gap-6 items-center justify-start'>
//           <img src={vector9_img} alt="" />
//           <img src={vector10_img} alt="" />
//           <img src={vector11_img} alt="" />
//         </div>
//       </div>
//         </div>

//     </footer>
//   )
// }

// export default Footer



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
    <footer className='container mx-auto bg-gray-900 flex flex-wrap justify-center items-start p-10 rounded-[20px] mb-[50px]'>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col items-start justify-center gap-6 p-10'>
            <img src={logo_img} alt="Logo" />
            <div className='flex flex-col gap-4'>
              <img src={google_img} alt="Google" />
              <img src={apple_img} alt="Apple" />
            </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col gap-6 p-10 items-start justify-center text-white'>
          <h1>About us</h1>
          <div className='flex gap-2 items-center'>
            <img src={vector1_img} alt="Vector1" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Public offer</h1>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={vector2_img} alt="Vector2" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Advertisement</h1>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={vector3_img} alt="Vector3" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>F.A.Q</h1>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={vector4_img} alt="Vector4" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Contacts</h1>
          </div>
        </div>
        
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col gap-6 p-10 items-start justify-center text-white'>
          <h1>Categories</h1>
          <div className='flex gap-2 items-center'>
            <img src={vector5_img} alt="Vector5" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Movie</h1>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={vector6_img} alt="Vector6" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Theater</h1>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={vector7_img} alt="Vector7" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Concerts</h1>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={vector8_img} alt="Vector8" />
            <h1 className='text-gray-500 hover:text-red-500 hover:underline'>Sport</h1>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex flex-col gap-6 p-10 items-start justify-center text-white'>
          <h1>Contact us</h1>
          <h2 className='text-red-500'>+998 (95) 897-33-38</h2>

          <div className='flex flex-col gap-4 items-start justify-center mt-10'>
            <h1>Social media</h1>
            <div className='flex gap-6 items-center'>
              <img src={vector9_img} alt="Vector9" />
              <img src={vector10_img} alt="Vector10" />
              <img src={vector11_img} alt="Vector11" />
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;


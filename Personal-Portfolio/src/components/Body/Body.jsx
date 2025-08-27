import React from 'react'
import {Grid, Thumbs} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import { MdSwipeRight } from 'react-icons/md';
import { motion } from "framer-motion";


const Body = () => {
    return(
<>
{/*Hero Section*/}
        <motion.section 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.2,
        damping: 20
        }}
        className='w-full'>
         <div className="flex justify-between flex-row-reverse items-center pt-[42px] pb-[42px] pl-[24px] pr-[24x] max-md:!flex-col">
            <div className="flex w-full">
                <img src="/1.png" alt="" />
            </div>
         
         <div className="flex flex-col gap-7">
          <h2 className="text-xl font-semibold">Branding | Image Making</h2>
          <h1 className="text-6xl font-semibold">Visual Designer</h1>
          <p className="text-sm">A visual designer is a creative professional who focuses on the aesthetic and visual presentation of digital products and experiences. They are responsible for creating compelling visuals that enhance user experience and ensure brand consistency across various platforms. Visual designers also collaborate with other professionals like UX designers and product managers to deliver a cohesive and user-friendly product. </p>
          <button className='bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center'>Contact</button>
         </div>
         </div>
        </motion.section>
{/*Hero Section End*/}

{/*Second Section*/}
        <section className='w-full'>
         <div className="flex justify-between items-start gap-11 pt-[64px] pb-[64px] pl-[24px] pr-[24x] max-md:items-center max-md:justify-center max-md:!flex-col">
            <div className="flex w-full justify-start max-md:justify-center max-md:items-center">
                <motion.img 
                initial={{opacity:0, x: -100}}
                whileInView={{opacity:1, x:0}}
                transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
                damping: 20
                }}
                src="/2.png" alt="" className='w-[200px]'/>
            </div>
         
         <div className="flex flex-col gap-10 items-center justify-center">
          <motion.h2 
        initial={{opacity:0, x:-100}}
         whileInView={{opacity:1, x:0}}
         transition={{
         type: "spring",
        stiffness: 100,
         delay: 0.4,
         damping: 20
        }}
        className="text-xl font-semibold text-center">Branding | Image Making</motion.h2>
          <motion.h1 
          initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.5,
        damping: 20
        }}
          className="text-7xl font-semibold w-full text-center">Visual Designer</motion.h1>
          <motion.p 
          initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.6,
        damping: 20
        }}
          className="text-sm w-full text-center">A visual designer is a creative professional who focuses on the aesthetic and visual presentation of digital products and experiences. They are responsible for creating compelling visuals that enhance user experience and ensure brand consistency across various platforms. Visual designers also collaborate with other professionals like UX designers and product managers to deliver a cohesive and user-friendly product. </motion.p>
          <motion.button 
          initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.7,
        damping: 20 //For Smoothness
        }}
          className='bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center'>Contact</motion.button>
         </div>
          <div className="flex w-full justify-end max-md:justify-center max-md:items-center">
                <motion.img 
                initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.8,
        damping: 20
        }}
                src="/3.png" alt="" className='w-[200px]'/>
            </div>
         </div>
        </section>
{/*Second Section End*/}

{/*Third Section*/}
        <section className='w-full'>
         <div className="flex justify-between items-center pt-[42px] pb-[42px] pl-[24px] pr-[24x]">
         <div className="flex gap-7 max-md:flex-col max-md:justify-center">
         <motion.div 
         initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.5,
        damping: 20
        }}
         className="flex flex-col gap-2 items-center justify-center">
            <img src="/4.png" alt="" className='w-30 mb-2.5'/>
          <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 text-center">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
         </motion.div>

         <motion.div 
         initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.7,
        damping: 20
        }}
         className="flex flex-col gap-2 items-center justify-center">
            <img src="/5.png" alt="" className='w-30 mb-2.5'/>
          <h2 className="text-xl font-semibold text-black">Visual Design</h2>
          <p className="text-sm text-gray-500 text-center">Visual design, in the context of a "visual designer," is the practice of using visual elements like color, typography, and layout to create a compelling and user-friendly interface. It focuses on the aesthetics of a product and its usability, ensuring that the design is both visually appealing and easy to navigate.  </p>
         </motion.div>

         <motion.div 
         initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.8,
        damping: 20
        }}
         className="flex flex-col gap-2 items-center justify-center">
            <img src="/6.png" alt="" className='w-30 mb-2.5'/>
          <h2 className="text-xl font-semibold text-black">Art Direction</h2>
          <p className="text-sm text-gray-500 text-center">Art direction in visual design guides the creative vision, ensuring a project's visual elements work cohesively to tell a story and evoke an emotion. It's about managing the visual aspects, like color, typography, and layout, to create an engaging experience for the viewer. </p>
         </motion.div>
         </div>
         </div>
        </section>
{/*Third Section End*/}

{/*Fourth Section*/}
        <section className='w-full'>
         <div className=" w-full grid grid-cols-2 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pl-[24px] pr-[24x]">
         <motion.div 
         initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
         className="flex w-full gap-5 items-center justify-center">
            <img src="/4.png" alt="" className='w-30 mb-2.5'/>
            <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 ">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
            </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex w-full gap-5 items-center justify-center">
            <img src="/5.png" alt="" className='w-30 mb-2.5'/>
            <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 ">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
            </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex w-full gap-5 items-center justify-center">
            <img src="/8.png" alt="" className='w-30 mb-2.5'/>
            <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 ">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
            </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex w-full gap-5 items-center justify-center">
            <img src="/9.png" alt="" className='w-30 mb-2.5'/>
            <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 ">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
            </div>
            </motion.div>
         </div>
        </section>
{/*Fourth Section End*/}

{/*Fifth Section*/}
        <section className='w-full'>
         <motion.h1 
         initial={{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
         className="text-center text-4xl font-semibold pt-[42px] pb-[42px] pr-[24px] pl-[24px]"></motion.h1>

         <div className='w-full grid grid-cols-3 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pr-[24px] pl-[24px]'>
            <motion.div 
            initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/10.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Visual Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0, x: -100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/11.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Product Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/12.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Art Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </motion.div>

            <motion.div
            initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/13.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Product Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </motion.div>

            <motion.div
            initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/14.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Visual Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </motion.div>

            <motion.div 
            initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
            className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/10.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Art Direction</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </motion.div>
         </div>
        </section>
{/*Fifth Section End*/}

{/*Sixth Section*/}
<section className='flex gap-10 items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] justify-center max-sm:pr-0 max-sm:pl-0 max-sm:gap-0 max-sm:justify-between'>
    <motion.img
    initial={{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
    src="/google.svg" alt=""  className='max-sm:w-16' />
    <motion.img
    initial={{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.5,
        damping: 20
        }}
    src="/nike.svg" alt=""    className='max-sm:w-14' />
    <motion.img
    initial={{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.7,
        damping: 20
        }}
    src="/samsung.svg" alt="" className='max-sm:w-[70px]' />
    <motion.img
    initial={{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.9,
        damping: 20
        }}
    src="/apple.svg" alt=""   className='max-sm:w-7' />
    <motion.img
    initial={{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.11,
        damping: 20
        }}
    src="/adidas.svg" alt=""  className='max-sm:w-11' />
</section>
{/*Sixth Section End*/}

{/*Seventh Section*/}
<section
className='w-full'>
  <motion.h1 
  initial={{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
  className="text-center text-4xl font-semibold pt-[42px] pr-[24px] pl-[24px] ">Testimonial</motion.h1>
  <motion.div
  initial={{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
  className='w-full '>
    <Swiper
  modules={[Thumbs, Grid]}
  breakpoints={{
    320:{
        slidesPerview: 1,
    },
    640: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    1280: {
        slidesPerView: 4,
    },
  }}
  spaceBetween={50}
  loop={false}
  pagination={{
    clickable :true,
  }}
  scrollbar={{
    draggable: true,
  }}
  navigation={true}
  className=" pt-[42px] pb-[42px] pr-[24px] pl-[24px]"
  >
    <SwiperSlide className="!p-4">
     <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
        <h2 className="text-md font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum repudiandae inventore earum soluta delectus similique animi vel sint sunt.
        </h2>
        <div className="flex items-start justify-start gap-2">
          <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
          <div className="flex flex-col gap-2.5 ">
            <img src="/fiveStart.svg" alt="" />
          <div>
            <p className="text-md">Gemma Nolen</p>
          <p className="text-sm text-gray-500">Google</p>
          </div>
          </div>
        </div>
     </div>
    </SwiperSlide>

    
    <SwiperSlide className="!p-4">
     <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
        <h2 className="text-md font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum repudiandae inventore earum soluta delectus similique animi vel sint sunt.
        </h2>
        <div className="flex items-start justify-start gap-2">
          <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
          <div className="flex flex-col gap-2.5 ">
            <img src="/fiveStart.svg" alt="" />
          <div>
            <p className="text-md">Gemma Nolen</p>
          <p className="text-sm text-gray-500">Google</p>
          </div>
          </div>
        </div>
     </div>
    </SwiperSlide>

    
    <SwiperSlide className="!p-4">
     <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
        <h2 className="text-md font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum repudiandae inventore earum soluta delectus similique animi vel sint sunt.
        </h2>
        <div className="flex items-start justify-start gap-2">
          <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
          <div className="flex flex-col gap-2.5 ">
            <img src="/fiveStart.svg" alt="" />
          <div>
            <p className="text-md">Gemma Nolen</p>
          <p className="text-sm text-gray-500">Google</p>
          </div>
          </div>
        </div>
     </div>
    </SwiperSlide>

    
    <SwiperSlide className="!p-4">
     <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
        <h2 className="text-md font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum repudiandae inventore earum soluta delectus similique animi vel sint sunt.
        </h2>
        <div className="flex items-start justify-start gap-2">
          <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
          <div className="flex flex-col gap-2.5 ">
            <img src="/fiveStart.svg" alt="" />
          <div>
            <p className="text-md">Gemma Nolen</p>
          <p className="text-sm text-gray-500">Google</p>
          </div>
          </div>
        </div>
     </div>
    </SwiperSlide>

    
    <SwiperSlide className="!p-4">
     <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
        <h2 className="text-md font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum repudiandae inventore earum soluta delectus similique animi vel sint sunt.
        </h2>
        <div className="flex items-start justify-start gap-2">
          <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
          <div className="flex flex-col gap-2.5 ">
            <img src="/fiveStart.svg" alt="" />
          <div>
            <p className="text-md">Gemma Nolen</p>
          <p className="text-sm text-gray-500">Google</p>
          </div>
          </div>
        </div>
     </div>
    </SwiperSlide>

    
    <SwiperSlide className="!p-4">
     <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
        <h2 className="text-md font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum repudiandae inventore earum soluta delectus similique animi vel sint sunt.
        </h2>
        <div className="flex items-start justify-start gap-2">
          <img src="/16.png" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
          <div className="flex flex-col gap-2.5 ">
            <img src="/fiveStart.svg" alt="" />
          <div>
            <p className="text-md">Gemma Nolen</p>
          <p className="text-sm text-gray-500">Google</p>
          </div>
          </div>
        </div>
     </div>
    </SwiperSlide>
    </Swiper>
  </motion.div>
</section>
{/*Seventh Section End*/}

{/*Eighth Section*/}
<section className="w-full">
  <div className="flex justify-between w-full items-center  pt-[42px] pb-[42px] pl-[24px] pr-[24px] gap-5 max-md:flex-col">
    <motion.div 
    initial={{opacity:0, x: -100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
    className="flex flex-col w-[50%] max-md:w-full">
      <h1 className="text-start text-4xl font-semibold pb-[24px]">Let's Work Together</h1>
      <p className='mb-7 '>"Let’s work together to build smarter solutions. Whether you need reliable supply, streamlined operations, or custom manufacturing support, our team is ready to partner with you every step of the way."</p>
      <div className="flex items-center justify-start gap-5">
        <img src="/discord.svg" alt="" />
        <img src="/dribbble.svg" alt="" />
        <img src="/fb.svg" alt="" />
        <img src="/insta.svg" alt="" />
        <img src="/behance.svg" alt="" />
      </div>
      </motion.div> 
      <motion.div 
      initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x:0}}
        transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.3,
        damping: 20
        }}
      className="flex flex-col w-[50%] gap-3 items-start justify-start max-md:w-full">
        <input type="text" placeholder='Name' className='p-4 bg-[#f0f8ff] outline-0 w-full' />
        <input type="email" placeholder='Email' className='p-4 bg-[#f0f8ff] outline-0 w-full' />
        <button className='bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center'>Submit</button>
      </motion.div>
  </div>

</section>
{/*Eighth Section end*/}
{/*Eighth Section end*/}
</>
)}

export default Body; 
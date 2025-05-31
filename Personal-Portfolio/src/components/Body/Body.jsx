import React from 'react'
import {Grid, Thumbs} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import { MdSwipeRight } from 'react-icons/md';

const Body = () => {
    return(
<>
{/*Hero Section*/}
        <section className='w-full'>
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
        </section>
{/*Hero Section End*/}

{/*Second Section*/}
        <section className='w-full'>
         <div className="flex justify-between items-start gap-11 pt-[64px] pb-[64px] pl-[24px] pr-[24x] max-md:items-center max-md:justify-center max-md:!flex-col">
            <div className="flex w-full justify-start max-md:justify-center max-md:items-center">
                <img src="/2.png" alt="" className='w-[200px]'/>
            </div>
         
         <div className="flex flex-col gap-10 items-center justify-center">
          <h2 className="text-xl font-semibold text-center">Branding | Image Making</h2>
          <h1 className="text-7xl font-semibold w-full text-center">Visual Designer</h1>
          <p className="text-sm w-full text-center">A visual designer is a creative professional who focuses on the aesthetic and visual presentation of digital products and experiences. They are responsible for creating compelling visuals that enhance user experience and ensure brand consistency across various platforms. Visual designers also collaborate with other professionals like UX designers and product managers to deliver a cohesive and user-friendly product. </p>
          <button className='bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center'>Contact</button>
         </div>
          <div className="flex w-full justify-end max-md:justify-center max-md:items-center">
                <img src="/3.png" alt="" className='w-[200px]'/>
            </div>
         </div>
        </section>
{/*Second Section End*/}

{/*Third Section*/}
        <section className='w-full'>
         <div className="flex justify-between items-center pt-[42px] pb-[42px] pl-[24px] pr-[24x]">
         <div className="flex gap-7 max-md:flex-col max-md:justify-center">
         <div className="flex flex-col gap-2 items-center justify-center">
            <img src="/4.png" alt="" className='w-30 mb-2.5'/>
          <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 text-center">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
         </div>

         <div className="flex flex-col gap-2 items-center justify-center">
            <img src="/5.png" alt="" className='w-30 mb-2.5'/>
          <h2 className="text-xl font-semibold text-black">Visual Design</h2>
          <p className="text-sm text-gray-500 text-center">Visual design, in the context of a "visual designer," is the practice of using visual elements like color, typography, and layout to create a compelling and user-friendly interface. It focuses on the aesthetics of a product and its usability, ensuring that the design is both visually appealing and easy to navigate.  </p>
         </div>

         <div className="flex flex-col gap-2 items-center justify-center">
            <img src="/6.png" alt="" className='w-30 mb-2.5'/>
          <h2 className="text-xl font-semibold text-black">Art Direction</h2>
          <p className="text-sm text-gray-500 text-center">Art direction in visual design guides the creative vision, ensuring a project's visual elements work cohesively to tell a story and evoke an emotion. It's about managing the visual aspects, like color, typography, and layout, to create an engaging experience for the viewer. </p>
         </div>
         </div>
         </div>
        </section>
{/*Third Section End*/}

{/*Fourth Section*/}
        <section className='w-full'>
         <div className=" w-full grid grid-cols-2 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pl-[24px] pr-[24x]">
         <div className="flex w-full gap-5 items-center justify-center">
            <img src="/4.png" alt="" className='w-30 mb-2.5'/>
            <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 ">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
            </div>
            </div>

            <div className="flex w-full gap-5 items-center justify-center">
            <img src="/5.png" alt="" className='w-30 mb-2.5'/>
            <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 ">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
            </div>
            </div>

            <div className="flex w-full gap-5 items-center justify-center">
            <img src="/8.png" alt="" className='w-30 mb-2.5'/>
            <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 ">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
            </div>
            </div>

            <div className="flex w-full gap-5 items-center justify-center">
            <img src="/9.png" alt="" className='w-30 mb-2.5'/>
            <div className='flex flex-col items-start justify-center gap-4'>
            <h2 className="text-xl font-semibold text-black">Product Design</h2>
          <p className="text-sm text-gray-500 ">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals. Visual designers contribute by ensuring the product's aesthetics, typography, and layout create a positive and memorable experience.  </p>
            </div>
            </div>
         </div>
        </section>
{/*Fourth Section End*/}

{/*Fifth Section*/}
        <section className='w-full'>
         <h1 className="text-center text-4xl font-semibold pt-[42px] pb-[42px] pr-[24px] pl-[24px]"></h1>

         <div className='w-full grid grid-cols-3 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pr-[24px] pl-[24px]'>
            <div className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/10.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Visual Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/11.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Product Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/12.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Art Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/13.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Product Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/14.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Visual Design</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 w-full flex-col">
                <img src="/10.jpeg" alt="" className='w-full'/>
                <div className="flex items-start justify-center gap-2 flex-col">
                    <h2 className="text-xl text-black font-semibold">Art Direction</h2>
                    <p className="text-sm text-gray-500">Product design, especially when it incorporates a strong visual designer's perspective, focuses on crafting user-friendly and visually appealing products that also align with business goals.</p>
                </div>
            </div>
         </div>
        </section>
{/*Fifth Section End*/}

{/*Sixth Section*/}
<section className='flex gap-20 items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] justify-center max-sm:pr-0 max-sm:pl-0 max-sm:gap-0 max-sm:justify-between'>
    <img src="/google.svg" alt="" />
    <img src="/nike.svg" alt="" />
    <img src="/samsung.svg" alt="" />
    <img src="/apple.svg" alt="" />
    <img src="/adidas.svg" alt="" />
</section>
{/*Sixth Section End*/}

{/*Seventh Section*/}
<section className='w-full'>
  <h1 className="text-center text-4xl font-semibold pt-[42px] pr-[24px] pl-[24px] ">Testimonial</h1>
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
</section>
{/*Seventh Section End*/}
</>
)}

export default Body; 
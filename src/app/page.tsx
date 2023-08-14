import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

import mainSec from '../../images/hero-banner-1.jpg'
import card1 from '../../images/collection-1.jpg'

import card2 from '../../images/collection-2.jpg'

import card3 from '../../images/collection-3.jpg'
import Clock from 'react-live-clock';


import card4 from '../../images/product-01.jpg'
import card5 from '../../images/product-02.jpg'
import card6 from '../../images/product-03.jpg'
import card7 from '../../images/product-04.jpg'
import card8 from '../../images/product-05.jpg'
import card9 from '../../images/product-07.jpg'
import card10 from '../../images/product-08.jpg'
import card11 from '../../images/product-09.jpg'
import card12 from '../../images/product-10.jpg'
import card13 from '../../images/product-11.jpg'
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg'
import blog1 from '../../images/blog-1.jpg'
import blog2 from '../../images/blog-2.jpg'
import blog3 from '../../images/blog-3.jpg'


import offer1 from '../../images/offer-banner-1.jpg'

import offer2 from '../../images/offer-banner-2.jpg'


import logo from "../../images/images1.png"

import star from "../../images/star.png"

import ft1 from "../../images/feature-1.jpg"
import ft2 from "../../images/feature-2.jpg"
import ft3 from "../../images/feature-3.jpg"
import Footer from './Components/Footer';
// import Timer from './Components/Timer';



function page() {




     
    

  return (
    <>
      <div className='bg-lime-100 p-1'>
                      <p className='text-center'>FREE SHIPPING IN ALL OF US ORDER $50</p>
      </div>

    {/* header end   */}
    
    {/* Start navbar */}
      <div>
      <div className="mb-3 flex">
  
  <div className="relative mt-3 flex w-56  items-stretch border border-solid ml-5 ">
 <input
   type="search"
   className="relative m-0 block w-[1px] min-w-0 flex-auto rounded  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
   placeholder="Search"
   aria-label="Search"
   aria-describedby="button-addon2" />

 <span
   className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
   id="basic-addon2">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 20 20"
     fill="currentColor"
     className="h-5 w-5">
     <path
       fill-rule="evenodd"
       d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
       clip-rule="evenodd" />
   </svg>
 </span>
</div>


       <div className='m-auto mt-3'>
       <h1 className='text-3xl font-bold' >GLOWING</h1>  
       </div>


<div className='flex mt-3 items-center space-x-3'>
<i><svg viewBox="0 0 24 24" className="h-7 w-10" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m19 7h5v2h-5zm-2 5h7v2h-7zm3 5h4v2h-4zm-18 5a8 8 0 1 1 16 0h-2a6 6 0 1 0 -12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg></i>
<i><svg height="24" viewBox="0 0 24 24" className="h-7 w-12"  xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0l-1.89 4.46-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zm-7.65 6.36-3.76 2.27 1-4.28-3.32-2.88 4.38-.38 1.7-4.03 1.71 4.04 4.38.38-3.32 2.88 1 4.28z"/></svg></i>
<i>$0.00</i>
<i><svg viewBox="0 0 512 512" className="h-7 w-10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="m80 176a16 16 0 0 0 -16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75v-217.25a16 16 0 0 0 -16-16z"/><path d="m160 176v-32a96 96 0 0 1 96-96 96 96 0 0 1 96 96v32"/><path d="m160 224v16a96 96 0 0 0 96 96 96 96 0 0 0 96-96v-16"/></g></svg></i>


</div>
       </div>
       </div>


{/* menu bar start */}
       
       <div className='flex space-x-10 justify-center mt-5'>
 <p> <Link href="/posts/first-post">Home</Link></p>
 <p> <Link href="/posts/first-post">Collection</Link></p>
 <p> <Link href="/posts/first-post">Shop</Link></p>
<p> <Link href="/posts/first-post">Blog</Link></p>
 <p> <Link href="/posts/first-post">Offer</Link></p>

</div>

{/* menu bar end */}

{/* main section start */}


<div className="relative  mt-5 " style={{height:"550px"}}>
  
            <div className="absolute inset-0  ">
                <Image
                    src={mainSec}
                    alt="."
                    
                    
                />
            </div>
            <div className="absolute z-10 flex flex-col mt-36 ml-24		">
                <h1 className='text-4xl font-bold text-black'>Reveal The <br /> Beauty of Skin </h1>
                <p className='mt-4 text-sm text-gray-500  ' >Mode using clean non-toxic ingredients, our <br /> products are designed for everyone</p>
<h1 className='mt-10'>Starting at $7.99
<br />  <br /> 
<button  className='bg-black border border-solid-1 text-white p-2 rounded-md w-32'>Shop Now</button>
</h1>


            </div>
        </div>
{/* main section end */}

{/* card Start */}


<div className=' z-10 mt-10 flex justify-around'>

<div className="relative " style={{ width:"28%" }}>
      <p className="absolute top-0 left-0 p-6 text-3xl font-bold text-black">Summer Collection </p>
      <span className='absolute top-0 left-0 p-7  mt-10 text-1xl text-black'>Starting at $17.99</span>
<span  className='absolute top-0 left-0 p-8   mt-80 text-1xl text-black'>Shop Now <b>→</b></span>
      <Image
      src={card1}
      alt='.'
      className='h-100 w-200'
      // style={}
      />
    </div>

    <div className="relative " style={{ width:"28%" }}>
      <p className="absolute top-0 left-0 p-6 text-3xl text-black font-bold">What's New ?</p>
      <span className='absolute top-0 left-0 p-7  mt-10 text-1xl text-black'>Get the glow</span>
<span  className='absolute top-0 left-0 p-8   mt-80 text-1xl text-black'>Discover Now <b>→</b></span>
      <Image
      src={card2}
      alt='.'
      className='h-100 w-200'
      // style={}
      />
    </div>
<div className="relative " style={{ width:"28%" }}>
      <p className="absolute top-0 left-0 p-6 text-3xl text-black font-bold">Buy 1 Get 1 </p>
      <span className='absolute top-0 left-0 p-7  mt-10 text-1xl text-black'>Starting at $7.99</span>
<span  className='absolute top-0 left-0 p-8   mt-80 text-1xl text-black'>Discover Now <b>→</b></span>


      <Image
      src={card3}
      alt='.'
      className='h-100 w-200'
      // style={}
      />
    </div>
</div>


{/* Best seller line  */}

<div className='flex justify-between mx-10 mt-16 items-center'>
<h1 className='text-3xl font-bold'>Our Bestsellers</h1>
<h1 className='  text-1xl text-black'>Shop All Products <b>→</b></h1>
</div>

{/* Best seller line End */}

<div className=' z-10 mt-10 mx-5 flex justify-around'>
  
<div className="relative  " style={{ width:"18%" }}>
      <p className="absolute ml-5 mt-5  text-1xl text-white font-bold text-center  bg-green-700 w-16 " > -20% </p>
    


      <Image
      src={card4}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />


<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00</del> </span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Facial Cleanser  
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>


    </div>

    <div className="relative  " style={{ width:"18%" }}>
    


      <Image
      src={card5}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />

<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00</del> </span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Bio Sharoom Rejuventating Serum  
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>


    </div>


    <div className="relative  " style={{ width:"18%" }}>
    


      <Image
      src={card6}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />

<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00</del> </span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Coffee Bean Coffee Eye Cream 
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>



    </div>


    <div className="relative  " style={{ width:"18%" }}>
    


      <Image
      src={card7}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />

<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00</del> </span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Facial Cleanser  
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>


    </div>


    <div className="relative  " style={{ width:"18%" }}>
      <p className="absolute ml-5 mt-5  text-1xl text-white font-bold text-center  bg-green-700 w-16 " > -20% </p>
    


      <Image
      src={card8}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />
<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00</del> </span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Glowing Screen Serum and Cream. 
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>

    </div>






</div>

{/* under $25 start */}
<div className='flex justify-between mx-10 mt-16 items-center'>
<h1 className='text-3xl font-bold'>Under $25</h1>
<h1 className='  text-1xl text-black'>Shop All Products <b>→</b></h1>
</div>
{/* under $25 end */}


<div className=' z-10 mt-10 mx-5 flex justify-around'>
  
<div className="relative  " style={{ width:"18%" }}>
      <p className="absolute ml-5 mt-5  text-1xl text-white font-bold text-center  bg-green-700 w-16 " > -20% </p>
    


      <Image
      src={card9}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />


<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00 </del></span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Facial Cleanser  
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>


    </div>

    <div className="relative  " style={{ width:"18%" }}>
    


      <Image
      src={card10}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />

<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00 </del></span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Bio Sharoom Rejuventating Serum  
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>


    </div>


    <div className="relative  " style={{ width:"18%" }}>
    


      <Image
      src={card11}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />

<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00 </del> </span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Coffee Bean Coffee Eye Cream 
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>



    </div>


    <div className="relative  " style={{ width:"18%" }}>
    


      <Image
      src={card12}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />

<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00 </del> </span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Facial Cleanser  
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' > <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>


    </div>


    <div className="relative  " style={{ width:"18%" }}>
      <p className="absolute ml-5 mt-5  text-1xl text-white font-bold text-center  bg-green-700 w-16 " > -20% </p>
    


      <Image
      src={card13}
      alt='.'
      // className='h-100 w-200'
      // style={}
      />
<div className="z-10 mt-3 		">
<h1 className='text-1xl text-center  font-bold text-black'><span className='text-gray-400'><del>$39.00 </del> </span> $29.00 </h1>
                <p className='text-sm text-center  font-bold '>Glowing Screen Serum and Cream. 
                
               
               
                </p>
               <i className='text-sm text-gray-400 text-center  ' >
                 <Image
                className='w-20 h-5  ml-8 inline '
                src={star}
                alt='.'
                />
                     5170 reviews
                </i>
                

            </div>

    </div>






</div>

{/* gutter start */}

<div className=" mx-12 mt-24  flex justify-between ">




  <div className='relative '>
  <Image
      src={banner1}
      alt='.'
      className='relative h-96  inset-0 '
      style={{width:"800px" }}
      // style={}
      />
 <p className='absolute top-10 text-sm left-6  font-bold'>NEW COLLECTION</p>
 <p className='absolute top-20 text-3xl left-6 font-bold'>Discover Our <br /> Automn Skin Care</p>

 <button  className='bg-white absolute top-44 left-10 border border-solid-1 p-2  w-32'>Explore Now</button>



  </div>
  






  <div className='relative   ' >
  <Image
      src={banner2}
      alt='.'
      className='h-96  w-96'
      style={{width:"420px" }}

      // style={}
      />

<p className='absolute top-10 text-2xl left-6 font-bold'>25 % off Èverithing</p>
 <p className='absolute top-20  text-s left-6 '>Mackup With extended  range in color <br /> for every homain</p>

 <button  className='bg-white absolute top-44 left-10 border border-solid-1 p-2  w-32'>Shop sale</button>

  
  </div>
  
</div>

{/* gutter end */}

<h1 className='mt-12 text-3xl text-center'>Why shop with Glowing</h1>

{/* start features */}

<div className="grid grid-cols-3 gap-4 mt-5">
  <div className=' text-center	'>

<Image
src={ft1}
className='m-auto w-32'  
alt='.'
/>
<h1 className='text-2xl font-bold mt-3' >Gureatenne Pure</h1>
<p className='text-gray-400 mt-2'>All grace formulation adhare to strict purity <br /> standards and will never content harsh or toxic <br /> ingredients  </p>

  </div>






  <div className=' text-center	'>

<Image
src={ft2}
className='m-auto w-32'  
alt='.'
/>
<h1 className='text-2xl font-bold mt-3' >Compeletelty Crutly-Free</h1>
<p className='text-gray-400 mt-2'>All grace formulation adhare to strict purity <br /> standards and will never content harsh or toxic <br /> ingredients  </p>

  </div>




  <div className=' text-center	'>

<Image
src={ft3}
className='m-auto w-32'  
alt='.'
/>
<h1 className='text-2xl font-bold mt-3'> Ingredinet Sourcing</h1>
<p className='text-gray-400 mt-2'>All grace formulation adhare to strict purity <br /> standards and will never content harsh or toxic <br /> ingredients  </p>

  </div>
  </div>


{/* feature end */}




{/* timer section */}

<div className='grid grid-cols-3  gap-4 mt-24'>

<div className=" m-auto   mr-5">

<Image
src={offer1}
className='h-80 w-60'

alt='.'

/>


</div>


<div className='bg-red-300 m-auto mr-20' >

<Image
src={offer2}
className='h-1/2 w-96'
alt='.'

/>



</div>
<div className=' mt-24'>

 
<span className='flex m-2 '>SPECIAL OFFER <p className=" ml-5  text-1xl text-white font-bold text-center  bg-green-700 w-16 " >   -20% </p>
</span>

  


<h1 className='text-3xl font-bold mt-5'>Mountain Pine Bath Oil</h1>
<br /> 

<p className='text-gray-400'>Made Using Clean non toxic ingredients our product are <br /> designed for everyone</p>



<button  className='bg-black text-white absolute mt-24 p-3  '>Get Only $39.00</button>



</div>



</div>



{/* last section */}



<h1 className='mt-20 text-center text-3xl font-bold'>More to Discover</h1>



<div className='grid grid-cols-3 mt-5'>

<div className='text-center'>

<Image
src={blog1}
className='h-60 w-96 m-auto '
alt='.'
/>

<h1 className='text-2xl font-bold mt-5'>Find Store</h1>
<p className='mt-2'>Our Store <b>→</b></p>


</div>

<div className='text-center'>

<Image
src={blog2}
className='h-60 w-96 m-auto'
alt='.'
/>

<h1 className='text-2xl font-bold mt-5'>From Our Blog</h1>
<p className='mt-2'>Our Store <b>→</b></p>


</div>





<div className='text-center'>

<Image
src={blog3}
className='h-60 w-96 m-auto'
alt='.'
/>

<h1 className='text-2xl font-bold mt-5'>Our Story</h1>
<p className='mt-2'>Our Store <b>→</b></p>


</div>

</div>







<Footer/>



      </>
            
          
  )
}

export default page

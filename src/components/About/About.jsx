import React from 'react'

export default function About() {
  return (
    <>
        <div className='about bg-[#1ABC9C] py-5 h-screen flex flex-col items-center justify-center'>
          <h1 className='font-bold text-4xl mt-6 text-white uppercase'>about component</h1>
          <div className='parent flex items-center mt-6'>
            <div className='h-1 w-20 bg-white'></div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-white mx-3" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div className='h-1 w-20 bg-white'></div>
          </div>
          <div className='flex flex-wrap gap-x-3 gap-y-3 text-white mt-3'>
            <p className='w-120  mx-auto'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='w-120  mx-auto'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
    </>
  )
}

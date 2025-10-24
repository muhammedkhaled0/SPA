import React, { useState } from 'react'
import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className='portfolio py-5 min-h-screen flex flex-col items-center mt-20'>
        <h1 className='font-bold text-4xl mt-6 text-gray-800 uppercase'>portfolio component</h1>

        <div className='parent flex items-center mt-6'>
          <div className='h-1 w-20 bg-gray-800'></div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-star-fill text-gray-800 mx-3" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
          <div className='h-1 w-20 bg-gray-800'></div>
        </div>

        <div className="container mx-auto lg:w-7/10 mt-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {[port1, port2, port3,port1,port2,port3].map((img, i) => (
              <div key={i} className='relative cursor-pointer' onClick={() => setSelectedImage(img)}>
                <img src={img} alt="" className='w-full rounded-xl' />
                <div className="layer bg-[#1ABC9C]  absolute inset-0 opacity-0 hover:opacity-90 transition-all duration-500 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"
                    className="bi bi-plus text-white size-50 top-1/2 start-1/2 -translate-1/2 absolute" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
              {selectedImage && (
        <div
          className='fixed inset-0 bg-blue-300/30 z-50'
          onClick={() => setSelectedImage(null)}
        >
          <div className='relative top-1/2 start-1/2'>
            <img src={selectedImage} alt="Preview" className='rounded-xl lg:w-1/3 w-[80%] -translate-1/2' />
          </div>
        </div>
      )}
      </div>

    </>
  )
}

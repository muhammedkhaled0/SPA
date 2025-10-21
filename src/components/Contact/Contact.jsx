import React  from "react";
export default function Contact() {
  return (
  <>
        <div className='contact py-5 flex flex-col items-center mt-30 h-screen'>
        <h1 className='font-bold text-4xl mt-6 text-gray-800 uppercase'>contact component</h1>
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
        <form className="w-full max-w-md px-6 mt-6">
        <div className="mb-5">
          <label className="block text-gray-700 mb-1">userName</label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:border-teal-500 outline-none py-1"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-1">userAge</label>
          <input
            type="number"
            className="w-full border-b border-gray-300 focus:border-teal-500 outline-none py-1"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 mb-1">userEmail</label>
          <input
            type="email"
            className="w-full border-b border-gray-300 focus:border-teal-500 outline-none py-1"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">userPassword</label>
          <input
            type="password"
            className="w-full border-b border-gray-300 focus:border-teal-500 outline-none py-1"
          />
        </div>
      </form>
        <button
          type="submit"
          className="bg-[#1ABC9C] text-white font-medium px-4 py-2 rounded-md hover:bg-[#17a589] transition-all"
        >
          send Message
        </button>
        </div>
  </>
  )
}

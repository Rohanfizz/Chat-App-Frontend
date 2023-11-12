import React from 'react'

type Props = {}

const Typer = (props: Props) => {
  return (
    <>
      <div className="w-full border-blue-200 mb-2 sm:mb-0 h-full flex items-center justify-center">
        <div className="relative flex w-full h-3/5 gap-2 justify-center">
          <input type="text" placeholder="Write your message!" className="h-2xl text-xl w-4/5 focus:outline-none focus:placeholder-gray-400 text-gray-100 placeholder-gray-600 pl-4 bg-gray-200 rounded-md bg-gray-700 " />
          <button type="button" className="inline-flex items-center justify-center rounded-lg transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
            <span className="font-bold w-20">Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 mr-2 transform rotate-90">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Typer
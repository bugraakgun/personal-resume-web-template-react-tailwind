import './App.css';
import { BsFillEmojiHeartEyesFill,BsFillEmojiSmileFill, BsFillEmojiSmileUpsideDownFill ,BsEmojiLaughingFill } from "react-icons/bs";
function App() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 h-[90vh] "> 
          <div className=' w-full h-full  bg-profile bg-cover hover:shadow-main ease-in-out duration-75'>
            <a href='#' className='w-full h-full bg-black/25 grid  justify-center content-center  '>
              <span className=' text-6xl text-main_icons flex justify-center'><BsFillEmojiSmileFill /> </span>
              <div className='text-white  font-black font-Lato tracking-wide text-4xl'>
                PROFILE
              </div>
            </a>
          </div>
          <div className='w-full h-full bg-blog bg-cover hover:shadow-main ease-in-out duration-75'>
            <a href='#' className='w-full h-full bg-black/25 grid  justify-center content-center'>
              <span className=' text-6xl text-main_icons flex justify-center'><BsFillEmojiHeartEyesFill /> </span>
              <div className='text-white  font-black font-Lato tracking-wide text-4xl'>
                BLOG 
              </div>
            </a>
          </div>
          <div className='w-full h-full bg-portfolio bg-cover hover:shadow-main ease-in-out duration-75'>
            <a href='#' className='w-full h-full bg-black/25 grid  justify-center content-center'>
              <span className=' text-6xl text-main_icons flex justify-center'><BsFillEmojiSmileUpsideDownFill /> </span>
              <div className='text-white  font-black font-Lato tracking-wide text-4xl'>
                PORTFOLIO
              </div>
            </a>
          </div>
          <div className='w-full h-full bg-contact bg-cover hover:shadow-main ease-in-out duration-75'>
            <a href='#' className='w-full h-full bg-black/25 grid  justify-center content-center'>
              <span className=' text-6xl text-main_icons flex justify-center'><BsEmojiLaughingFill /> </span>
              <div className='text-white  font-black font-Lato tracking-wide text-4xl'>
                CONTACT
              </div>
            </a>
          </div>
      </div> 
      <div className='flex justify-center items-center h-[10vh] bg-footer'>
        <span className='text-gray-200'>
          2023 Buğra baba tüm hakları saklıdır.
        </span>
      </div>
    </>
    
  );
}

export default App;

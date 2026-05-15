import {Button} from '@mui/material'
import {IoSearchOutline} from "react-icons/io5"
const Search = () => {
  return (
    <div className='search bg-[#e6e6e6] w-[600px] h-[50px] rounded-md px-3 relative flex items-center border border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.3)]'>
        <input type="text" className='w-full h-full outline-none border-0 py-4' placeholder='Search for products...'/>
        <button className='h-10 w-10 cursor-pointer text-gray-500 absolute top-[5px] right-3 rounded-full hover:bg-gray-300 absolute  items-center flex justify-center'>
            <IoSearchOutline size={35}/>
        </button>
    </div>
  )
}

export default Search
import React from 'react'

const EditServiceForm = () => {
  return (
    <div>
        <div className=' gap-8 flex flex-col rounded-[30px] ml-10 mr-10 border-2 border-yellow-700 shadow-lg shadow-yellow-500 bg-black items-center justify-center mt-5 p-10'>
            <div className='flex flex-row'>
                <div className='flex flex-col mb-5 gap-6'>
                                <label className='text-2xl mr-5' htmlFor="">Name</label>
                                <label className='text-2xl mr-5' htmlFor="">Duration</label>
                                <label className='text-2xl mr-5' htmlFor="">limit</label>
                                <label className='text-2xl mr-5' htmlFor="">Cost</label>
                                <label className='text-2xl mr-5' htmlFor="">Description</label>
                            </div>
                            <div className='flex flex-col mb-5 gap-3'>
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="" />
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="" />
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="" />
                                <input className='bg-gray-700 rounded-[10px]' type="text" name="" id="" />
                                <textarea className='bg-gray-700 rounded-[10px]' name="" id="" cols="30" rows="2"></textarea>
                            </div>
            </div>
            <div>
                <button type="button" className='bg-yellow-500 p-2 rounded-lg'>Save Chagonges</button>
            </div>
            <div>
                <button type="button" className='bg-yellow-500 p-2 rounded-lg'>Save Changes</button>
            </div>
            
        </div>

    </div>
  )
}

export default EditServiceForm
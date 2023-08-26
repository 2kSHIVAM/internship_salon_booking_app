import React from 'react';

const DashboardRequestStatusComponent = () => {
  return (
    <div>
      <h1 className="text-5xl flex items-center text-yellow-500 justify-center font-semibold mt-8">
        Request's Status
      </h1>
      {/* bg-gradient-to-b from-gray-700 to-yellow-800 */}
      <div className="flex flex-row items-center justify-center">
        



        <div className="flex items-center justify-center rounded-[30px] shadow-lg shadow-gray-300 bg-gradient-to-b from-gray-700 to-black w-[700px] mt-20 pb-4 hover:border-2 border-yellow-500">
          <div className="flex flex-col gap-3 ">
            <p className="flex items-center p-4 mt-5  justify-center text-[30px] bg-gradient-to-b from-gray-700 to-black rounded-full mb-10">
              Request's Details
            </p>
            <div className="h-[600px] overflow-y-auto no-scrollbar">
              <div className="flex flex-row mb-7 items-center w-[600px] justify-center hover:shadow-lg hover:shadow-yellow-500 bg-black p-2 rounded-full gap-8">
                <div className="flex flex-col">
                  <p className="text-[22px] font-bold">Request 1</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-center gap-4">
                      <p className="text-[19px] mt-[20px] text-yellow-600">Start Date:</p>
                      <input type="date" className="mt-[20px] h-[25px] w-[140px] bg-transparent" />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                      <p className="text-[19px] text-yellow-600">End Date:</p>
                      <input type="date" className="h-[25px] ml-[6px] w-[140px] bg-transparent" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                <p className="text-[25px] -rotate-12 mt-1 text-orange-500 font-bold ml-auto">Pending</p>
                </div>
                <div className='top-0 flex justify-end cursor-pointer text-red-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>              </div>

              <div className="flex flex-row mb-7 items-center w-[600px] justify-center hover:shadow-lg hover:shadow-yellow-500 bg-black p-2 rounded-full gap-8">
                <div className="flex flex-col">
                <div className='flex flex-row gap-5 items-center'>
                    <p className="text-[22px] font-bold">Request 1</p>
                    </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-center gap-5">
                      <p className="text-[19px] mt-[20px] text-yellow-600">Start Date:</p>
                      <input type="date" className="mt-[20px] h-[25px] w-[140px] bg-transparent" />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                      <p className="text-[19px] text-yellow-600">End Date:</p>
                      <input type="date" className="h-[25px] ml-[6px] w-[140px] bg-transparent" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                <p className="text-[25px] -rotate-12 mt-1 text-green-500 font-bold ml-auto">Granted</p>
                </div>
                <div className='top-0 flex justify-end text-red-600 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>

              </div>

              <div className="flex flex-row mb-7 items-center w-[600px] justify-center hover:shadow-lg hover:shadow-yellow-500 bg-black p-2 rounded-full gap-8">
                <div className="flex flex-col">
                  <p className="text-[22px] font-bold">Request 1</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-center gap-4">
                      <p className="text-[19px] mt-[20px] text-yellow-600">Start Date:</p>
                      <input type="date" className="mt-[20px] h-[25px] w-[140px] bg-transparent" />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                      <p className="text-[19px] text-yellow-600">End Date:</p>
                      <input type="date" className="h-[25px] ml-[6px] w-[140px] bg-transparent" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                <p className="text-[25px] -rotate-12 mt-1 text-yellow-500 font-bold ml-auto">Modified</p>
                </div>
                <div className='top-0 flex justify-end text-red-600 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>              </div>

              <div className="flex flex-row mb-7 items-center w-[600px] justify-center hover:shadow-lg hover:shadow-yellow-500 bg-black p-2 rounded-full gap-8">
                <div className="flex flex-col">
                  <p className="text-[22px] font-bold">Request 1</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center justify-center gap-4">
                      <p className="text-[19px] mt-[20px] text-yellow-600">Start Date:</p>
                      <input type="date" className="mt-[20px] h-[25px] w-[140px] bg-transparent" />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                      <p className="text-[19px] text-yellow-600">End Date:</p>
                      <input type="date" className="h-[25px] ml-[6px] w-[140px] bg-transparent" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                <p className="text-[25px] -rotate-12 mt-1 text-red-600 font-bold ml-auto">Rejected</p>
                </div>
                <div className='top-0 flex justify-end text-red-600 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>              </div>
            </div>
          </div>
        </div>









      </div>
    </div>
  );
};

export default DashboardRequestStatusComponent;

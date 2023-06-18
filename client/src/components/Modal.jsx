import { useState } from "react";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>

            { showModal ? (
                <>
                    {/* <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-red-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Delete account ?
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}



            <div class="fixed  inset-0 z-999999 overflow-y-auto ">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}>
                                
                            </div>
            <div class=" flex items-center justify-center min-h-screen text-center">

                <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-transparent opacity-50"></div>
                </div>
            <div className="animate-model hover:shadow-lg hover:shadow-yellow-500/50">
            <div
                class="hover:shadow-lg hover:shadow-yellow-500/50 inline-block px-2 py-6 overflow-hidden text-left align-bottom transition-all transform bg-black rounded-[20px] lg:w-2xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="pb-2 bg-gray-600 rounded-[30px]">
                    <div class="flex-col items-center sm:flex">
                    <div
                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 p-4 mx-auto bg-yellow-300 rounded-full sm:mx-0 sm:h-16 sm:w-16">
                        <svg class="w-full h-full text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="5" x2="5" y2="19"></line>
                        <circle cx="6.5" cy="6.5" r="2.5"></circle>
                        <circle cx="17.5" cy="17.5" r="2.5"></circle>
                        </svg>
                    </div>
                    <div class="mt-3 mb-1 text-center sm:ml-4 sm:text-left">
                        <h3 class="pt-1 text-2xl font-black leading-6 text-yellow-500" id="modal-headline">
                        Discount
                        </h3>
                    </div>
                    </div>
                </div>
                <div class="w-full text-base text-center text-yellow-500 py-2">
                    use the coupon code below
                </div>
                <div class="px-4 pt-1 pt-3 text-xs bg-gray-600 sm:px-6 sm:flex sm:flex-row-reverse rounded-[30px]">
                    <div
                    class="w-full p-4 my-3 font-mono text-lg text-center text-yellow-500 border-4 border-yellow-400 border-dashed rounded select-all">
                    XXXX-XXXX-XXXXX</div>
                </div>
                <div class="justify-center w-full px-4 mt-2 font-sans text-xs leading-6 text-center text-gray-500">
                    <a href="#_">Terms and conditions apply</a>
                </div>
                <div className="flex justify-end relative mr-1">
                <button
                    className="mt-2 p-2.5 text-white bg-yellow-500 rounded-md outline-none border ring-offset-2 focus:ring-2"
                         onClick={() =>
                            setShowModal(false)
                        }
                        >
                            Cancel
                        </button>
                </div>
                </div>
            </div>


            </div>
            </div> 
                </>
            ) : null}
        </>
    );
}

import React from 'react'
import TestimonialsComponents from '../components/TestimonialsComponents'

const Testimonials = () => {
  return (
    <div>
        <div className=" mt-20 text-center md:hover:text-yellow-500">
            <p className="text-[30px] ">Valued Customers Feedback</p>
            <p className='text-[20px]'>Don't trust use? Read our Customers Feedback...</p>
        </div>

        <div className="mt-10 mr-10 flex flex-row flex-wrap justify-center justify-items-stretch">
            
            <TestimonialsComponents
            imageLink="https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000"
            name="Shivam Singh"
            heading="Amazing experience"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
            star="4"
            />

            <TestimonialsComponents
            imageLink="https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000"
            name="John Smith"
            heading="Beyond Satisfaction..."
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
            star="5"
            />


            <TestimonialsComponents
            imageLink="https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000"
            name="Deepak Maheshwari"
            heading="Satisfied"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
            star="3"
            />

        </div>
        <div>
            <div className="flex justify-center relative mr-20">
                <button type="button" className ="ml-10  focus:outline-none text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Load More Comments</button>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonials
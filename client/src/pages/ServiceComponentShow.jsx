import React from 'react'
import ServicesComponents from '../components/ServicesComponents'
const ServiceComponentShow = () => {
    
  return (
    <div>
        
        <div className="flex flex-row flex-wrap justify-center justify-items-stretch mr-10 mt-10 mb-[5px]">
                <ServicesComponents
            imageLink="https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg"
            header="Noteworthy technology acquisitions 2021"
            />
            <ServicesComponents
            imageLink="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg"
            header="Noteworthy technology acquisitions 2021"
            />
            <ServicesComponents
            imageLink="https://c0.wallpaperflare.com/preview/112/112/29/woman-hair-clipping-man-s-hair.jpg"
            header="Noteworthy technology acquisitions 2021"
            />
            <ServicesComponents
            imageLink="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg"
            header="Noteworthy technology acquisitions 2021"
            />
    </div>
    </div>
  )
}

export default ServiceComponentShow
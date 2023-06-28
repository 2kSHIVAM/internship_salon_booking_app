import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ServicesComponents from '../components/ServicesComponents';

const Services = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/v1/service/getAllServices')
      .then(res => {
        const data = res.data.data;
        setServiceList(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="mb-20 mt-20 text-center md:hover:text-yellow-500">
        <p className="text-[30px]">Popular Services</p>
        <p className="text-[20px]">Trusted by hundreds of daily Customers</p>
      </div>

      <div className="flex flex-row flex-wrap justify-center justify-items-stretch mr-10">
        {/* {serviceList.map((service, index) => (
          <ServicesComponents
            key={index}
            imageLink="https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg"
            header={service.name}
            content={service.description}
          />
        ))} */}
                    <ServicesComponents
            imageLink="https://c1.wallpaperflare.com/preview/510/773/86/barber-barbershop-hair-stylist-haircut.jpg"
            header="Noteworthy technology acquisitions 2021"
            content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            />
            <ServicesComponents
            imageLink="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg"
            header="Noteworthy technology acquisitions 2021"
            content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            />
            <ServicesComponents
            imageLink="https://c0.wallpaperflare.com/preview/112/112/29/woman-hair-clipping-man-s-hair.jpg"
            header="Noteworthy technology acquisitions 2021"
            content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            />
            <ServicesComponents
            imageLink="https://c1.wallpaperflare.com/preview/405/255/732/expocosmetica-presentation-model-hairdresser-cut-hair.jpg"
            header="Noteworthy technology acquisitions 2021"
            content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            />

      </div>

      <div className="flex justify-center relative mr-20">
        <button
          type="button"
          className="mt-5 ml-10  focus:outline-none text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Services;

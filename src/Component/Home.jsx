import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';
// import Footer from './Footer';
import AboutUs from './AboutUs';
import product01 from '../assets/Product01.jpg'
import product02 from '../assets/Product02.jpg';
import product03 from '../assets/Product03.jpg';
import product04 from '../assets/Product04.jpg';
import product05 from '../assets/Product05.jpg';
import Contactus from './Contactus';
import Customer from './Customer';

const ThreeColumns = () => {
  const items = [
    {
      id: 1,
      image: product01,
      title: ' Italian Marble Resin',
      description: 'See Prodcut',
       link: "https://dsdh.com"
    },
    {
      id: 2,
      image: product02,
      title: 'Granite Resin',
      description: 'See product',
       link: "https://dsdh.com"
    },
    {
      id: 3,
      image: product03,
      title: 'Floor Coating Resin',
      description: 'See product',
       link: "https://dsdh.com"
    },
    {
      id: 4,
      image: product04,
      title: 'WaterProofing Resin',
      description: 'See product',
       link: "https://dsdh.com"
    },
    {
      id: 5,
      image: product04,
      title: 'Grouting Resin',
      description: 'See product',
      link: "https://dsdh.com"
    },
    {
      id: 6,
      image: product01,
      title: ' Lamination Resin',
      description: 'See product',
       link: "https://dsdh.com"
    },
    {
      id: 7,
      image: product05,
      title: 'Art Resin',
      description: 'See product',
       link: "https://dsdh.com"
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl text-center uppercase py-5 font-bold">Altrachem Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-64 h-48 object-cover" />
            <div className="p-4 text-center">
              <Link to='/seeproduct' className="text-xl font-bold">{item.title}</Link>
              <p className="mt-2 text-gray-600">{item.description}</p> {/* MBEPOXY® Description */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          src="https://cdn.pixabay.com/video/2024/01/20/197489-905015030_tiny.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center ">
          {/* Content over the video */}
          <div className="text-center text-white px-4">
            <h1 className="text-7xl font-bold text-red-500  mb-4">Welcome to Altrachem</h1>
            <p className="text-3xl mb-6 ">Experience the beauty of stunning visuals with immersive content.</p>
            {/* <button className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-800 transition duration-300">
              Learn More
            </button> */}
          </div>
        </div>
      </div>

      {/* Three Columns Section */}
      <ThreeColumns />
      
      <div>
        <h1 className="font-bold text-3xl text-center"> Advanced Materials Categories</h1>
        <br />
        <br />
      </div>

      <div className="flex w-full justify-center items-center gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://www.mbenterprises.co/image/cache/catalog/Advance-Material/by-product/Composite%20Material-300x300.png"
            alt="Card image"
          />
          <div className="px-6 py-4">
            <h1 className="text-xl font-bold mb-2">Composite Material</h1>
            <Link to='/electricmaterial' className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              See Product
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://cdn.pixabay.com/photo/2016/11/15/04/01/jar-1825274_1280.jpg"
            alt="Card image"
          />
          <div className="px-6 py-4">
            <h1 className="text-xl font-bold mb-2">Coating And Adhesive Material</h1>
            <Link to='/coatingmaterial' className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              See Product
            </Link>
          </div>
        </div>
      </div>

      <Features />
      <AboutUs />
      <Customer />
      <Contactus />
      {/* <Footer /> */}
    </>
  );
};

export default Home;

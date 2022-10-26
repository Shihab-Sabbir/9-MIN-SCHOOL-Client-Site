import React, { Component, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useOutletContext } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import replacement from '../../asset/replacement.png'
function Popular() {
  const [currentData, setCurrentData] = useState({});
  const [data, setdata] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch(`https://9-min-school.vercel.app/courses`).then(res => res.json()).then(data => { setdata(data); setSpinner(false) }).catch(err => console.log(err));
  }, []);

  const { isMenuOpen } = useOutletContext();
  const errImg = useRef();
  const replaceImage = () => {
    errImg.current.src = replacement;
  }
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const slider = useRef();

  function previous(event) {
    event.preventDefault()
    slider.current.slickPrev();
  }
  function next(event) {
    event.preventDefault()
    slider.current.slickNext();
  }

  return (
    <div className={isMenuOpen ? 'pt-[400px]  min-h-screen' : ' min-h-screen pt-5'}>
      <p className="uppercase text-center font-bold text-xl text-black dark:text-white">Top Courses</p>
      {spinner && <div className="mx-auto mt-[150px] w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-400 dark:border-red-400"></div>}
      {spinner || <div className="flex flex-col-reverse justify-end  items-center p-3 max-w-full lg:pt-[2%] pt-[10%]">
        <div className="flex flex-col justify-center items-center p-4 lg:min-w-[20%] min-h-fit">
          <p className="uppercase font-bold text-xs py-1 h-[50px]">{currentData?.name}</p>
          <p className="uppercase font-bold text-xs py-1">${currentData?.cost}</p>
          <Link to={`../courses/${currentData?.id}`} className="p-2 mt-3 dark:hover:bg-blue-200 dark:hover:text-white bg-slate-800 rounded-md hover:bg-slate-200 hover:text-black text-xs uppercase shadow-lg font-bold text-white dark:bg-slate-200 dark:text-black">
            Details
          </Link>
        </div>
        <div className="max-w-[85%] lg:max-w-[75%] max-h-fit ">
          <Slider ref={slider} {...settings} beforeChange={(currentSlide, nextSlide) => {
            setCurrentData(data[nextSlide])
          }} onInit={() => {
            setCurrentData(data[1])
          }}
            className='border-2 dark:bg-white rounded-lg p-1'>
            {
              data?.map(item =>
                <img key={item.id} ref={errImg} src={item.image} onError={() => { replaceImage() }} onLoad={replaceImage} />
              )
            }
          </Slider>
          <div style={{ textAlign: "center" }}>
            <button className="p-4 m-4" onClick={previous}>
              {<BsFillArrowLeftCircleFill className="text-xl lg:text-2xl" />}
            </button>
            <button className="p-4 m-4" onClick={next}>
              {<BsFillArrowRightCircleFill className="text-xl lg:text-2xl " />}
            </button>
          </div>
        </div>
      </div>}
    </div>
  );

}

export default Popular;
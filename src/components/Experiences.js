import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import one from "./media/1.jpeg";
import two from "./media/22.jpeg";
import three from "./media/3.jpeg";
import four from "./media/4.jpeg";
import five from "./media/5.jpeg";
import { Link } from "react-router-dom";
const exps = [
  {
    name: "Dua Lipa",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, reprehenderit placeat. Explicabo doloribus molestias odio! ",
    image: one,
  },
  {
    name: "Ava Max",
    text: "lorem1500, dolor sit amet consectetur adipisicing elit",
    image: two,
  },
  {
    name: "Fulanito",
    text: "Lour adipisicing elit. Illum nisi laboriosam eligendi cum officia, iste corrupti modi recusandae ad, inventore rem qui, sequi ex soluta. ",
    image: three,
  },
];
const Experiences = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="pt-[50px]">
      <div className="text-white text-center font-bold text-4xl py-4 ">
        Experiencias
      </div>
      <Swiper
        slidesPerView={windowWidth < 1070 ? 1 : 3}
        spaceBetween={1}
        // pagination={{
        //   type: "bullets",
        // }}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mil500:w-4/6 "
      >
        {exps &&
          exps.map((exp, key) => {
            return (
              <SwiperSlide className="mx-auto" key={key}>
                <div className="mx-auto ">
                  <div className="bg-white  mx-auto border-gradient-to-r from-blue-500 shadow-xl rounded-lg py-3 min-w-[265px] max-w-[265px]  min-h-[350px] max-h-[350px]">
                    <div className="photo-wrapper p-2">
                      <img
                        className="w-32 h-32 rounded-full mx-auto"
                        src={exp.image}
                        alt="John Doe"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                        {exp.name}
                      </h3>
                      {/* <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
              </div> */}
                      <div className="w-full">
                        <p className="text-center text-gray-600">{exp.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Link to="contacto">
        <div className="text-center m-10">
          <button className="btn btn-success">Contacta me</button>
        </div>
      </Link>
      {/* <div className="flex  w-full justify-center">
       
      </div> */}
    </section>
  );
};

export default Experiences;

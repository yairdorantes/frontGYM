// import "../index.css";
import food from "./media/food.png";
import pesa from "./media/pesa.png";
import agenda from "./media/agenda.png";
import "./styles/home.css";
const Home = () => {
  return (
    <section className="relative bg-gray-200">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-800">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://media.gettyimages.com/id/1183038884/es/foto/vista-de-una-fila-de-cintas-de-correr-en-un-gimnasio-con-gente.jpg?s=612x612&w=gi&k=20&c=QMfm4ySdwtdA_gBeFA16PjQLBdsen_NDTuYxZgJ6riI=')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  OBSSESION GYM
                </h1>
                <p className="mt-4 text-lg text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  velit obcaecati odio neque rem tempore dolorum, accusamus
                  maiores? Nulla, officia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4  ">
          <div className="flex flex-wrap justify-center">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 lmd:w-1/4   px-4 text-center">
              <div className="card-container">
                <div className="px-4 py-5 flex-auto ">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <img src={food} alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Dieta</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 lmd:w-1/4 px-4 text-center">
              <div className="card-container">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-600">
                    <img src={pesa} alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Entrenamiento</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 lmd:w-1/4 px-4 text-center">
              <div className="card-container">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-600">
                    <img src={agenda} alt="" />
                  </div>
                  <h6 className="text-xl font-semibold">Asesoria</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative  pt-8 pb-6 mt-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                {/* <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                  >
                    
                  </a>
                  .
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </section>
  );
};

export default Home;

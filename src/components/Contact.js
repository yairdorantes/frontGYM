import axios from "axios";
import { useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import TimePicker from "./TimePicker";
const proteins = [
  "Res",
  "Huevo",
  "Pez",
  "Muslo de pollo",
  "Pechucha de pollo",
  "Lomo de cerdo",
];
const carbohidratos = ["Arroz", "Papa", "Pastas", "Tortilla", "Camote", "Pan"];
const initialForm = {
  nombre: "",
  apellido_p: "",
  apellido_m: "",
  genero: "Femenino",
  fecha_nacimiento: "",
  direccion: "",
  telefono: 0,
  correo: "",
  estatura: 0,
  peso: 0,
  enfermedades: "",
  alergias: "",
  dulces: false,
  hr_entrenamiento: "",
  hr_dormir: "",
  hr_despertar: "",
  proteinas: "",
  carbohidratos: "",
  comidas: "",
  objetivo: "",
  foto_actual: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [seletectedProteins, setSeletectedProteins] = useState([]);
  const [selectedCarbs, setSelectedCarbs] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [wakeUp, setWakeUp] = useState();
  const [sleep, setSleep] = useState();

  const [training, setTraining] = useState();
  const [testing, setTesting] = useState();

  const addProtein = (protein) => {
    const index = seletectedProteins.indexOf(protein);
    if (index === -1) {
      setSeletectedProteins([...seletectedProteins, protein]);
    } else {
      const final = seletectedProteins.filter((item) => item !== protein);
      setSeletectedProteins(final);
    }
  };
  const addCarb = (carbohidrato) => {
    const index = selectedCarbs.indexOf(carbohidrato);
    if (index === -1) {
      setSelectedCarbs([...selectedCarbs, carbohidrato]);
    } else {
      const final = selectedCarbs.filter((item) => item !== carbohidrato);
      setSelectedCarbs(final);
    }
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (event) => {
    setForm({ ...form, ["foto_actual"]: event.base64 });
    // console.log(event.base64);
  };
  const sendData = async () => {
    axios.post("http://127.0.0.1:8000/api/form", form).then((res) => {
      console.log(res.data);
    });
    console.log(form.hr_despertar);
  };
  useEffect(() => {
    setForm({
      ...form,
      ["proteinas"]: seletectedProteins.join(","),
      ["carbohidratos"]: selectedCarbs.join(","),
      ["hr_entrenamiento"]: training,
      ["hr_dormir"]: sleep,
      ["hr_despertar"]: wakeUp,
    });
  }, [seletectedProteins, selectedCarbs, training, sleep, wakeUp]);

  return (
    <div>
      <div>{form.proteinas} </div>
      <button className="btn" onClick={sendData}>
        btn send data
      </button>

      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Account settings
        </h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* //**Nombre */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="name">
                Nombre(s)
              </label>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**ap paterno */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Apellido paterno
              </label>
              <input
                name="apellido_p"
                value={form.apellido_p}
                onChange={handleChange}
                id="emailAddress"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**ap materno */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Apellido materno
              </label>
              <input
                name="apellido_m"
                value={form.apellido_m}
                onChange={handleChange}
                id="password"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**Género */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Género
              </label>
              <select
                name="genero"
                value={form.genero}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Masculino</option>
                <option>Femenino</option>
                <option>No binarie</option>
              </select>
            </div>
            {/*  //**nacimiento */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Fecha de nacimiento
              </label>
              <input
                id="date"
                name="fecha_nacimiento"
                value={form.fecha_nacimiento}
                onChange={handleChange}
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**direccion */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Dirección
              </label>
              <input
                id=""
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**Celular */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Número celular
              </label>
              <input
                id="telefono"
                type="number"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**Correo */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Correo electrónico
              </label>
              <input
                id="password"
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**estatura y peso */}
            <div className="flex gap-5">
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="password"
                >
                  Estatura (cm)
                </label>
                <input
                  id="password"
                  type="number"
                  name="estatura"
                  value={form.estatura}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="password"
                >
                  Peso (kg)
                </label>
                <input
                  id="password"
                  type="number"
                  name="peso"
                  value={form.peso}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            {/* //**enfermedades */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Enfermedades
              </label>
              <input
                placeholder="Dejar en blanco si no tienen ninguna"
                name="enfermedades"
                value={form.enfermedades}
                onChange={handleChange}
                id="password"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**alergias */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Alergias
              </label>
              <input
                placeholder="Dejar en blanco si no tienen ninguna"
                id="password"
                type="text"
                name="alergias"
                value={form.alergias}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* //**dulce */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Quieres dulce saladito, mmmm?
              </label>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    checked={true}
                    className="checkbox checkbox-success mx-auto"
                  />
                </label>
              </div>
            </div>
            {/* hrs entrenamiento */}
            <div className="flex  gap-5 flex-wrap">
              <div className="">
                <div>Hora de entrenamiento:</div>
                <TimePicker handleTime={setTraining} />
              </div>

              <div className="">
                <div>Hora en que levantas:</div>
                <TimePicker handleTime={setWakeUp} />
              </div>
              <div className="">
                <div>Hora de dormir:</div>

                <TimePicker handleTime={setSleep} />
              </div>
            </div>
            <div className="mx-auto flex gap-8 justify-evenly">
              <div>
                <div className="font-bold mb-2">Proteinas</div>
                {/* <div className="text-white font-bold">{seletectedProteins}</div> */}
                {proteins.map((protein, index) => {
                  return (
                    <div key={index} onClick={() => addProtein(protein)}>
                      <div htmlFor={protein} className="cursor-pointer label">
                        <span className="label-text mr-2">{protein}</span>
                        <input
                          id={protein}
                          type="checkbox"
                          checked={seletectedProteins.includes(protein)}
                          readOnly
                          className="checkbox checkbox-warning"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="font-bold mb-2">Carbohidratos</div>
                {carbohidratos.map((carbohidrato, index) => {
                  return (
                    <div key={index} onClick={() => addCarb(carbohidrato)}>
                      <div className="cursor-pointer label">
                        <span className="label-text mr-2">{carbohidrato}</span>
                        <input
                          type="checkbox"
                          readOnly
                          checked={selectedCarbs.includes(carbohidrato)}
                          className="checkbox checkbox-warning"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Comidas favoritas
              </label>
              <input
                // placeholder="Dejar en blanco si no tienen ninguna"
                id="password"
                name="comidas"
                value={form.comidas}
                onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Objetivo(s)
              </label>
              <textarea
                id="textarea"
                type="textarea"
                value={form.objetivo}
                name="objetivo"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Foto corporal actual
              </label>
              <ReactFileReader handleFiles={handleImageUpload} base64={true}>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 ">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a file</span>
                      </label>
                      <p className="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p className="text-xs text-white">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </ReactFileReader>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;

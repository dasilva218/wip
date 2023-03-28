import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext, useState } from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import axios from 'axios';
import { Contexte } from '../../pages/wipauto/admin/user';
import {
  addCarrs,
  addCarrSale,
  deleteCar,
  getCar,
  get_carrent,
  get_car_sale,
  updateCar,
} from '../../hooks/helpers';
import Image from 'next/image';

/**
 * * composant qui affiche les véhicules
 */
export function Car({ carsales }) {
  return (
    <div className=' w-full  h-full'>
      <table className='table h-full w-full'>
        <thead>
          <tr>
            <th>
              {/* <label>
                <input type='checkbox' className='checkbox' />
              </label> */}
            </th>
            <th>marque / model</th>
            <th>caractéristique</th>
            <th>prix</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carsales.map((carsale, i) => (
            <Tr {...carsale} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * * composant formulaire ajout des véhicules a vendre
 */
// export function FormVv() {
//   return (
//     <div>
//       <label
//         htmlFor='my-modal-6'
//         className='btn hover:text-fuchsia-600'>
//         Ajoutez un véhicule
//       </label>
//       {/* Put this part before </body> tag */}
//       <input
//         type='checkbox'
//         id='my-modal-6'
//         className='modal-toggle'
//       />
//       <div className='modal text-black modal-bottom sm:modal-middle'>
//         <div className='modal-box'>
//           <FormAddCarSale />
//           <div className='modal-action'>
//             <label htmlFor='my-modal-6' className='btn'>
//               Fermez
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/**
 * * corps du formulaire véhicule a vendre
 * @returns
 */
// function FormAddCarSale() {
//   const { partner, setCarSales } = useContext(Contexte);
//   const [selectedImage, setSelectedImage] = useState([]);
//   const [selectedFile, setSelectedFile] = useState();
//   const [Image2, setImage2] = useState();
//   const champs = {
//     marque: '',
//     model: '',
//     fuel: '',
//     transmission: '',
//     type: '',
//     annee: '',
//     prix: '',
//     constructor: '',
//     portiere: '',
//     foreign_key_partners: partner._id,
//   };

//   const option = {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   };

//   /**
//    * * soumission du formulaire
//    * @param {*} param0
//    */
//   const onSubmit = async (values, { setSubmitting }) => {
//     const images = [];
//     const formData = new FormData();
//     formData.append('theFiles', selectedFile);
//     formData.append('files', Image2);

//     const { data } = await axios.post('/api/image', formData, option);

//     for (let key in data.done) {
//       images.push(data.done[key].newFilename);
//     }

//     values.img = images;
//     const postCar = await addCarrSale(values);
//     const car_sale = await get_car_sale(partner._id);
//     setCarSales(car_sale);
//     setSubmitting(false);
//   };

//   const selectFiles = ({ target }) => {
//     if (target.files) {
//       const files = target.files;
//       let images = [];
//       let fileSend = [];
//       for (let i = 0; i < target.files.length; i++) {
//         images.push(URL.createObjectURL(target.files[i]));
//         fileSend.push(target.files[i]);
//       }
//       setSelectedImage(images);
//       setSelectedFile(files[0]);
//       setImage2(files[1]);
//     }
//   };
//   // console.log(selectedFile);

//   return (
//     <div>
//       <h1>Ajoutez véhicule</h1>
//       <Formik initialValues={champs} onSubmit={onSubmit}>
//         {({ isSubmitting }) => (
//           <Form>
//             <div className='flex'>
//               {selectedImage.map((image, i) => {
//                 return (
//                   <div
//                     key={i}
//                     className='w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
//                     <img className='' src={image} alt='' />
//                   </div>
//                 );
//               })}
//             </div>
//             <div className='flex flex-col input-group-md'>
//               <label>
//                 <input
//                   type='file'
//                   multiple
//                   accept='image/*'
//                   onChange={selectFiles}
//                 />
//               </label>
//             </div>
//             <div className='flex justify-between'>
//               <div className='flex flex-col input-group-md'>
//                 <label className='label label-text' htmlFor='marque'>
//                   Marque
//                 </label>
//                 <Field
//                   className='input input-xs input-accent'
//                   id='marque'
//                   type='text'
//                   name='marque'
//                 />
//               </div>
//               <div className='flex flex-col input-group-md'>
//                 <label className='label label-text' htmlFor='model'>
//                   Model
//                 </label>
//                 <Field
//                   className='input input-xs input-primary'
//                   id='model'
//                   type='text'
//                   name='model'
//                 />
//               </div>
//             </div>

//             <div className='flex justify-between'>
//               <div className='flex flex-col input-group-md'>
//                 <label className='label label-text' htmlFor='fuel'>
//                   Carburant
//                 </label>
//                 <Field
//                   className='input input-xs input-accent'
//                   name='fuel'
//                   type='select'></Field>
//               </div>
//               <div className='flex flex-col input-group-md'>
//                 <label
//                   className='label label-text'
//                   htmlFor='transmission'>
//                   Transmission
//                 </label>
//                 <Field
//                   className='input input-xs input-primary'
//                   id='transmission'
//                   type='text'
//                   name='transmission'
//                 />
//               </div>
//             </div>

//             <div className='flex justify-between'>
//               <div className='flex flex-col input-group-md'>
//                 <label className='label label-text' htmlFor='types'>
//                   Types
//                 </label>
//                 <Field
//                   className='input input-xs input-accent'
//                   id='types'
//                   type='text'
//                   name='types'
//                 />
//               </div>
//               <div className='flex flex-col input-group-md'>
//                 <label className='label label-text' htmlFor='annee'>
//                   Année
//                 </label>
//                 <Field
//                   className='input input-xs input-primary'
//                   id='annee'
//                   type='text'
//                   name='annee'
//                 />
//               </div>
//             </div>

//             <div className='flex justify-between'>
//               <div className='flex flex-col input-group-md'>
//                 <label className='label label-text' htmlFor='prix'>
//                   Prix
//                 </label>
//                 <Field
//                   className='input input-xs input-accent'
//                   id='prix'
//                   type='text'
//                   name='prix'
//                 />
//               </div>
//               <div className='flex flex-col input-group-md'>
//                 <label
//                   className='label label-text'
//                   htmlFor='constructor'>
//                   Constructeur
//                 </label>
//                 <Field
//                   className='input input-xs input-primary'
//                   id='constructor'
//                   type='text'
//                   name='constructor'
//                 />
//                 <label
//                   className='label label-text'
//                   htmlFor='portieres'>
//                   Portières
//                 </label>
//                 <Field
//                   className='input input-xs input-primary'
//                   id='portieres'
//                   type='number'
//                   name='portiere'
//                 />
//               </div>
//               <Field
//                 value={champs.foreign_key_partners}
//                 className='input input-xs input-primary'
//                 type='hidden'
//                 name='foreign_key_partners'
//               />
//             </div>
//             <button type='submit' disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

function Tr({
  _id,
  marque,
  model,
  img,
  fuel,
  transmission,
  prix,
  service,
}) {
  const {
    setCarSales,
    setCarRents,
    partner,
    setopenModalEdit,
    setcarEdit,
  } = useContext(Contexte);

  /**
   * * éfface un véhicule
   * @param {*} id
   */
  const Handledelete = async (id, service) => {
    let confirm = window.confirm('Le voulez vous vraiment ?');

    if (confirm) {
      const Response = await deleteCar(id);
      if (service === 'vente') {
        const car = await get_car_sale(partner._id);
        setCarSales(car);
      } else if (service === 'location') {
        const car = await get_carrent(partner._id);
        setCarRents(car);
      }
    }
  };

  const handleEdit = async (id, service) => {
    const response = await getCar(id);
    setcarEdit(response);
    setopenModalEdit(true);
  };

  return (
    <tr>
      <td>
        <button
          onClick={() => Handledelete(_id, service)}
          className='cursor'>
          <BiTrashAlt size={25} color={'rgb(244,63,94)'}></BiTrashAlt>
        </button>
      </td>
      <td>
        <button
          onClick={() => handleEdit(_id, service)}
          className='cursor'>
          <BiEdit size={25} color={'rgb(34,197,94)'}></BiEdit>
        </button>
      </td>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            {/* <div className='mask  mask-squircle w-12 h-12'>
              <img
                className='object-contain'
                src={img}
                alt='Avatar Tailwind CSS Component'
              />
            </div> */}
          </div>
          <div>
            <div className='font-bold'>{marque}</div>
            <div className='text-sm opacity-50'>{model}</div>
          </div>
        </div>
      </td>
      <td>
        {transmission}
        <br />
        <span className='badge badge-ghost badge-sm'>{fuel}</span>
      </td>
      <td>{prix}</td>
      <th>
        <button className='btn btn-ghost btn-xs'>details</button>
      </th>
    </tr>
  );
}

/**
 * * composant qui affiche les states
 * @returns
 */
export function Card_state() {
  const { carSales, carSRents } = useContext(Contexte);

  return (
    <div className='flex m-auto '>
      <div className='stats flex-grow shadow'>
        <div className='stat flex flex-col items-center'>
          <div className='stat-title'>Total véhicule location</div>
          <div className='stat-value'>{carSRents.length}</div>
          <div className='stat-desc text-red-700 '>
            reste {10 - carSRents.length} à ajouter
          </div>
        </div>
      </div>
      <div className='divider divider-horizontal'>OR</div>
      <div className='stats flex-grow flex border shadow'>
        <div className='stat flex flex-col items-center '>
          <div className='stat-title'>Total véhicule vente</div>
          <div className='stat-value'>{carSales.length}</div>
          <div className='stat-desc text-red-700'>
            reste {10 - carSales.length} à ajouter
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * * modale d'affichage du formulaire ajout de véhicule à louer
 * @returns
 */
export function ModalAddCar() {
  return (
    <div className=' absolute w-full bg-opacity-60  flex items-center justify-center  h-full bg-black left-0 top-0 z-50  '>
      <FormAddCar />
    </div>
  );
}

/**
 * * formulaire d'ajout de véhicule
 * @returns
 */
export function FormAddCar() {
  const { partner, setCarRents, setCarSales, setOpenModal } =
    useContext(Contexte);
  const [selectedImage, setSelectedImage] = useState([]);
  const [Image1, setImage1] = useState();
  const [Image2, setImage2] = useState();

  const option = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const Images = [];
    const Form = e.target;
    const Element = Form.elements;
    let formData = new FormData();

    formData.append('file1', Image1);
    formData.append('file2', Image2);

    const { data } = await axios.post('/api/image', formData, option);

    for (let key in data.done) {
      Images.push(data.done[key].newFilename);
    }

    const Data = {
      marque: Element.marque.value,
      model: Element.model.value,
      fuel: Element.fuel.value,
      transmission: Element.transmission.value,
      service: Element.service.value,
      types: Element.types.value,
      annee: Element.annee.value,
      prix: Element.prix.value,
      constructor: Element.marque.value,
      img: Images,
      portiere: Element.portieres.value,
      foreign_key_partners: partner._id,
    };

    const PostCar = await addCarrs(Data);
    if (Element.service.value === 'location') {
      const Car = await get_carrent(partner._id);
      setCarRents(Car);
    } else {
      const Car = await get_car_sale(partner._id);
      setCarSales(Car);
    }
    setSelectedImage([]);
    Form.reset();
    setTimeout(() => setOpenModal(false), 3000);
  };

  const handleClose = () => setOpenModal(false);

  /**
   * * fonction qui récupère les fichiers choisis
   * @param {*} param0
   */
  const selectFiles = ({ target }) => {
    const files = target.files;
    if (files) {
      let images = [];
      //   let fileSend = [];
      try {
        for (const key in files) {
          images.push(URL.createObjectURL(files[key]));
        }
      } catch (error) {
        console.log(error.message);
      }
      console.log(files);
      setSelectedImage(images);
      setImage1(files[0]);
      setImage2(files[1]);
    }
  };

  return (
    <div className=' w-1/2 box-border  p-9 bg-white '>
      <div className='flex justify-around'>
        {selectedImage.map((image, i) => (
          <div
            key={i}
            className='w-40 relative box-border aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
            <Image src={image} fill alt='' />
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            <input
              type='file'
              multiple
              accept='image/*'
              name='fichiers'
              onChange={selectFiles}
            />
          </label>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='marque'>
              Marque
            </label>
            <input
              className='input input-xs input-accent'
              id='marque'
              type='text'
              name='marque'
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='model'>
              Model
            </label>
            <input
              className='input input-xs input-accent'
              id='model'
              type='text'
              name='model'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='types'>
              Types
            </label>
            <input
              className='input input-xs input-accent'
              id='types'
              type='text'
              name='types'
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='annee'>
              Année
            </label>
            <input
              className='input input-xs input-accent'
              id='annee'
              type='text'
              name='annee'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='prix'>
              Prix
            </label>
            <input
              className='input input-xs input-accent'
              id='prix'
              type='number'
              name='prix'
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='portieres'>
              Portières
            </label>
            <input
              className='input input-xs input-accent'
              id='portieres'
              type='text'
              name='portieres'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='carbur'>
              Carburant
            </label>
            <select className='select-sm ' name='fuel' id='carbur'>
              <optgroup>
                <option value='gasoil'>gasoil</option>
                <option value='essence'>essence</option>
                <option value='élèctrique'>élèctrique</option>
              </optgroup>
            </select>
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='trans'>
              Transmission
            </label>
            <select
              className='select-sm '
              name='transmission'
              id='trans'>
              <optgroup className=''>
                <option value='manuelle'>manuelle</option>
                <option value='automatique'>automatique</option>
              </optgroup>
            </select>
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='trans'>
              Service
            </label>
            <select
              name='service'
              className='select-sm '
              id='service'>
              <optgroup>
                <option value='location'>location</option>
                <option value='vente'>vente</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className='pt-7 flex justify-center gap-x-80 '>
          <input
            className=' btn btn-outline'
            type='submit'
            value='enregistrer'
          />
          <button onClick={handleClose} className='btn btn-outline'>
            Fermer
          </button>
        </div>
      </form>
    </div>
  );
}

/**
 *
 * @returns
 */
export function ModalFormEdit() {
  return (
    <div className=' absolute w-full bg-opacity-60  flex items-center justify-center  h-full bg-black left-0 top-0 z-50  '>
      <FormEdit />
    </div>
  );
}

export function FormEdit() {
  const {
    partner,
    setCarRents,
    setCarSales,
    setopenModalEdit,
    carEdit,
  } = useContext(Contexte);
  const [selectedImage, setSelectedImage] = useState([]);
  const [imgEdit, setImgEdit] = useState(carEdit.img);
  const [Image1, setImage1] = useState();
  const [Image2, setImage2] = useState();
  const [model, setModel] = useState(carEdit.model);
  const [marque, setMarque] = useState(carEdit.marque);
  const [types, setTypes] = useState(carEdit.types);
  const [annee, setAnnee] = useState(carEdit.annee);
  const [prix, setPrix] = useState(carEdit.prix);
  const [portieres, setPortieres] = useState(carEdit.portiere);

  console.log(carEdit);
  const option = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    const Images = [];
    const Form = e.target;
    const Element = Form.elements;
    let formData = new FormData();

    formData.append('file1', Image1);
    formData.append('file2', Image2);

    const { data } = await axios.post('/api/image', formData, option);

    for (let key in data.done) {
      Images.push(data.done[key].newFilename);
    }
    setImgEdit(Element.marque.img);
    const Data = {
      // foreign_key_partners: partner._id,
      marque: Element.marque.value,
      model: Element.model.value,
      fuel: Element.fuel.value,
      transmission: Element.transmission.value,
      service: Element.service.value,
      types: Element.types.value,
      annee: Element.annee.value,
      prix: Element.prix.value,
      img: imgEdit,
      constructor: Element.marque.value,
      portiere: Element.portieres.value,
    };

    const UpdateCar = await updateCar(carEdit._id, Data);
    if (Element.service.value === 'location') {
      const Car = await get_carrent(partner._id);
      setCarRents(Car);
    } else {
      const Car = await get_car_sale(partner._id);
      setCarSales(Car);
    }
    setSelectedImage([]);
    Form.reset();
    setTimeout(() => setopenModalEdit(false), 3000);
  };

  /**
   * * fonction qui récupère les fichiers choisis
   * @param {*} param0
   */
  const selectFiles = ({ target }) => {
    const files = target.files;
    if (files) {
      let images = [];
      //   let fileSend = [];
      try {
        for (const key in files) {
          images.push(URL.createObjectURL(files[key]));
        }
      } catch (error) {
        console.log(error.message);
      }
      setSelectedImage(images);
      setImage1(files[0]);
      setImage2(files[1]);
      setImgEdit([]);
    }
  };

  return (
    <div className=' w-1/2 box-border  p-9 bg-white '>
      <div className='flex justify-around'>
        {imgEdit?.map((image, i) => (
          <div
            key={i}
            className='w-40 relative box-border aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
            <Image src={`/images/${image}`} fill alt='' />
          </div>
        ))}
      </div>
      <div className='flex justify-around'>
        {selectedImage.map((image, i) => (
          <div
            key={i}
            className='w-40 relative box-border aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
            <Image src={image} fill alt='' />
          </div>
        ))}
      </div>
      <form onSubmit={onUpdate}>
        <div>
          <label>
            <input
              type='file'
              multiple
              accept='image/*'
              name='fichiers'
              onChange={selectFiles}
            />
          </label>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='marque'>
              Marque
            </label>
            <input
              className='input input-xs input-accent'
              id='marque'
              type='text'
              name='marque'
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='model'>
              Model
            </label>
            <input
              className='input input-xs input-accent'
              id='model'
              type='text'
              name='model'
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='types'>
              Types
            </label>
            <input
              className='input input-xs input-accent'
              id='types'
              type='text'
              name='types'
              value={types}
              onChange={(e) => setTypes(e.target.value)}
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='annee'>
              Année
            </label>
            <input
              className='input input-xs input-accent'
              id='annee'
              type='text'
              name='annee'
              value={annee}
              onChange={(e) => setAnnee(e.target.value)}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='prix'>
              Prix
            </label>
            <input
              className='input input-xs input-accent'
              id='prix'
              type='number'
              name='prix'
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='portieres'>
              Portières
            </label>
            <input
              className='input input-xs input-accent'
              id='portieres'
              type='text'
              name='portiere'
              value={portieres}
              onChange={(e) => setPortieres(e.target.value)}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='carbur'>
              Carburant
            </label>
            <select className='select-sm ' name='fuel' id='carbur'>
              <optgroup>
                <option value={carEdit.fuel}>{carEdit.fuel}</option>
                <option value='gasoil'>gasoil</option>
                <option value='essence'>essence</option>
                <option value='élèctrique'>élèctrique</option>
              </optgroup>
            </select>
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='trans'>
              Transmission
            </label>
            <select
              className='select-sm '
              name='transmission'
              id='trans'>
              <optgroup className=''>
                <option value={carEdit.transmission}>
                  {carEdit.transmission}
                </option>
                <option value='manuelle'>manuelle</option>
                <option value='automatique'>automatique</option>
              </optgroup>
            </select>
          </div>
          <div className='flex flex-col input-group-md'>
            <label className='label label-text' htmlFor='trans'>
              Service
            </label>
            <select
              name='service'
              className='select-sm '
              id='service'>
              <optgroup>
                <option value={carEdit.service}>
                  {carEdit.service}
                </option>
                <option value='location'>location</option>
                <option value='vente'>vente</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className='pt-7 flex justify-center gap-x-80 '>
          <input
            className=' btn btn-outline'
            type='submit'
            value='modifier'
          />
          <button
            onClick={() => setopenModalEdit(false)}
            className='btn btn-outline'>
            Fermer
          </button>
        </div>
      </form>
    </div>
  );
}

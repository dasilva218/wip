import { BiEdit, BiTrashAlt } from 'react-icons/bi';

function Table({ partenaires }) {
  
  return (
    <div className='overflow-x-auto pt-3.5 '>
      <table className='table table-compact w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Commune</th>
            <th>Quartier</th>
            <th>email</th>
            <th>Status</th>
            <th>Location</th>
            <th>Vente</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {partenaires.map((partenaire, i) => (
            <Tr {...partenaire} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

function Tr({
  logo,
  name,
  commune,
  quartier,
  email,
  status,
  location,
  vente,
}) {
  return (
    <tr className='bg-gray-50 text-center'>
      <td>
        <div className='avatar'>
          <div className='mask mask-squircle w-12 h-12'>
            <img src={logo} alt='Avatar Tailwind CSS Component' />
          </div>
        </div>
      </td>
      <td>
        <div className='font-bold'>
          <span>{name || 'Unknown'}</span>
        </div>
      </td>
      <td className='px-5 py-2'>
        <span>{commune || 'Unknown'}</span>
      </td>
      <td className='px-5 py-2'>
        <span>{quartier || 'Unknown'}</span>
      </td>
      <td className='px-5 py-2'>
        <span>{email || 'Unknown'}</span>
      </td>
      <td className='px-5 py-2'>
        <span>{status || 'Unknown'}</span>
      </td>
      <td className='px-5 py-2'>
        <span
          className={`${
            location ? 'bg-green-500' : 'bg-rose-500'
          } text-white px-5 py-1 rounded-full`}>
          {location ? 'location' : ''}
        </span>
      </td>
      <td className='px-5 py-2'>
        <span
          className={`${
            vente ? 'bg-green-500' : 'bg-rose-500'
          } text-white px-5 py-1 rounded-full`}>
          {vente ? 'vente' : ''}
        </span>
      </td>
      <td className='px-5 py-2 space-x-2'>
        <button className='cursor'>
          <BiEdit size={25} color={'rgb(34,197,94)'}></BiEdit>
        </button>
        <button className='cursor'>
          <BiTrashAlt size={25} color={'rgb(244,63,94)'}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}

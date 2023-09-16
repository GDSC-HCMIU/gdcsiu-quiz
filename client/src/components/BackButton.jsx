import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/home' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-slate-800 text-white px-4 py-1 rounded-lg w-fit hover:bg-slate-200 hover:text-black'
      >
        <BsArrowLeft className='text-4xl' />
      </Link>
    </div>
  );
};

export default BackButton;
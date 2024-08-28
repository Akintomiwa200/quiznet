import { Link } from 'react-router-dom';
import img2 from '../../../assets/quizz.png';

const Header = () => {
  return (
    <div className='flex justify-start w-[100vw]'>
      <Link to='/'>
        <img src={img2} alt="" className=' mr-[50px] w-[150px] mt-0' />
      </Link>
    </div>
  );
};

export default Header;

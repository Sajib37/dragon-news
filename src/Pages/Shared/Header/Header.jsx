import logo from '../../../assets/logo.png'
import moment from 'moment';
import BreakingNews from '../../Home/BreakingNews';
const Header = () => {
    return (
        <div className=' text-center py-4 space-y-2 md:space-y-3'>
            <img className='mx-auto max-w-xs md:max-w-md' src={logo}></img>
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-[#706F6F]'><span className='text-black font-medium'>{moment().format('dddd,')}</span>{moment().format(' MMMM D, YYYY')}</p>
            <BreakingNews></BreakingNews>
        </div>
    );
};

export default Header;
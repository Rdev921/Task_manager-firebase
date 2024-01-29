import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const Logout = ()=>{
        localStorage.clear('user');
        navigate('/login')
    }
    return (
        <div className="main lg:flex md:flex flex-wrap justify-between items-center
    px-4 bg-[#2a056f] py-4 shadow-md">
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center">Task Manager</div>
            </div>
            <div className="right">
                <ul className="flex space-x-4 justify-center items-center text-white">
                    <Link to={'/'}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    {user && <li onClick={Logout} className='cursor-pointer'>Logout</li>}
                </ul>
            </div>
        </div>
    )
}
export default Navbar
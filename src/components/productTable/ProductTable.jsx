import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../../context/data/myContext';
function ProductTable() {
    const context = useContext(MyContext);
    const { allProducts, deleteProduct, ediProductHandle, loading } = context;

    // const allProductsFilter = allProducts.filter((obj) => obj.title.toLowerCase().includes(search))

   if(loading){
    return <h1 className="font-bold text-black relative left-[260%]">Loading please wait for a while...</h1>
   }
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=" container mx-auto max-w-7xl">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                        <div className=" bg-[#2f3640] w-[50.1em] lg:w-full flex items-center justify-between p-2">
                            {/* <input type="text" className='w-80 py-1.5 rounded-md px-2 outline-none shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] text-white bg-gray-600 placeholder-gray-300' placeholder='Search here' /> */}
                            <div className="flex items-center space-x-2">
                                <img className='w-9' src="/img/react.png" alt="" />
                                <h1 className='text-white text-2xl font-semibold'>React Firebase CRUD </h1>
                            </div>
                            <Link to={'/addproduct'}>
                                <button className=' bg-gray-600 shadow-md px-6 py-1.5 rounded-md font-bold text-white'>Add Task</button>
                            </Link>
                        </div>

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs text-gray-100 uppercase bg-[#353b48] ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        S.No.
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Due Date
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            
                            {
                                
                                allProducts.length > 0 ? allProducts?.map((item, index) => {
                                    const { title, description, date } = item;
                                    return (
                                        <tbody>
                                            <tr className="bg-gray-700 border-b border-gray-500 text-white ">
                                                <td className="px-6 py-4">{index + 1}.</td>
                                               
                                                <td className="px-6 py-4">{title}</td>
                                            
                                                <td className="px-6 py-4">{description}</td>
                                                <td className="px-6 py-4">{date}</td>
                                                <td className="px-6 py-4">
                                                    <a
                                                        onClick={() => deleteProduct(item)}
                                                        className="font-medium bg-red-300 px-4 rounded-lg py-1 text-black cursor-pointer  "
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link to={'/updateproduct'}
                                                        onClick={() => ediProductHandle(item)}
                                                        className="font-medium bg-green-300 px-4 rounded-lg py-1 text-black
                                                    cursor-pointer"
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                }):<h1 className=" font-bold text-black relative left-[260%]" > 📝 Task Not Found </h1>}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTable
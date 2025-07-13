function Navbar(){
    return(
        <>
            <nav className="flex justify-between h-12 bg-gray-50">
                <h3 className=" px-10 text-2xl italic font-bold items-center flex justify-center">Medical Institution</h3>
                <ul className="flex gap-5 px-5 items-center font-bold text-gray-500 ">
                    <li className="hover:text-black"><a href="">HOME</a></li>
                    <li className="text-blue-800"><a href="">APPOINTMENTS</a></li>
                    <li className="hover:text-black"><a href="">SERVICES</a></li>
                    <li className="hover:text-black"><a href="">LOGOUT</a></li>
                </ul>
                
            </nav>
            <hr className=" border-1 text-blue-800"/>
        </>
    )
}

export default Navbar
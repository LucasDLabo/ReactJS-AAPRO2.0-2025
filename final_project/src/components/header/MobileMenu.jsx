function MobileMenu({ isOpen, onClose, children }){
    if (!isOpen) return null;
    return(
        <>
            <section>
                <div className="fixed z-10 h-screen w-full bg-black/60" onClick={onClose}/>
            
                <div className="fixed top-0 right-0 z-10 flex h-screen w-8/12 flex-col items-center justify-center bg-gray-50 text-3xl dark:bg-gray-900 dark:text-gray-200">
                    <ul className="flex flex-col gap-2 px-5 text-2xl font-bold text-gray-500 dark:text-gray-200">
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li className="text-blue-700"><button>Appointments</button></li>
                        <hr />
                        {/* Switch Theme */}
                        <li>
                            {children}
                        </li>
                        <li>
                            <button className="flex items-center gap-1 rounded text-start text-xl font-medium text-gray-400 dark:font-medium dark:text-gray-600" title='Exit'>
                                Logout
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MobileMenu
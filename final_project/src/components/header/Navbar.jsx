import { useState, useEffect } from 'react'

function Navbar(){
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleSettingsWindow = () => {
        setIsSettingsOpen(!isSettingsOpen);
    }

    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
    const storedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        setTheme('dark');
    } else {
        document.documentElement.classList.remove('dark');
        setTheme('light');
    }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('color-theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            console.warn('Dark theme selected');
        } else {
            document.documentElement.classList.remove('dark');
            console.warn('Light theme selected');
        }
    };

    return(
        <>
            <nav className="flex justify-between h-12 bg-gray-50">
                <h3 className=" px-10 text-2xl italic font-bold items-center flex justify-center">Medical Institution</h3>
                <ul className="flex gap-5 px-5 items-center font-bold text-gray-500 ">
                    <li className="hover:text-black"><a href="">HOME</a></li>
                    <li className="text-blue-800"><a href="">APPOINTMENTS</a></li>
                    <li className="hover:text-black"><a href="">SERVICES</a></li>
                    <li className="hover:text-black"><button onClick={toggleSettingsWindow} className='cursor-pointer'>Settings</button></li>
                </ul>
                {isSettingsOpen && (
                    <div className='absolute bg-white shadow-black shadow-2xl p-3 border-2 border-gray-300 top-12 right-0 z-50'>
                        <ul>
                            <li><button className='btn-settings' title={`Switch to ${theme === "dark" ? "light theme" : "dark theme"} `} onClick={toggleTheme}>Change Theme</button></li>
                            <hr className='text-gray-200' />
                            <li><button className='btn-settings'>Logout</button></li>
                        </ul>
                    </div>
                )}
                
            </nav>
            <hr id='top' className=" border-1 text-blue-800"/>
        </>
    )
}

export default Navbar
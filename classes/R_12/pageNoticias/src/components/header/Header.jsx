function Header(){
    return(
        <header className="w-full flex bg-[#6f75e2] justify-between px-3 items-center min-h-14">
            <p className="text-3xl font-bold text-white cursor-pointer">Portal<b>NOTICIAS</b></p>
            <ul className="flex gap-8 justify-between">
                <li><a href="" className="p-1.5 rounded text-white hover:bg-[#5b5fae]">Noticias</a></li>
                <li><a href="" className="p-1.5 rounded text-white hover:bg-[#5b5fae]">Contacto</a></li>
                <li><a href="" className="p-1.5 rounded text-white hover:bg-[#5b5fae]">Sobre nosotros</a></li>
            </ul>
        </header>
    )
}

export default Header;
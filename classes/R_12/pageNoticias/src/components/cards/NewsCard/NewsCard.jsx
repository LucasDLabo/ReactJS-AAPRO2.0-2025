function NewsCard( { title, description, source, imgURL, imgALT, date} ){

    //let { title, description, source, imgURL} = props;
    
    {
        if (imgURL == "") {
            imgURL = "https://imgs.search.brave.com/LhkMCDZM_xXAlzZYt22XIs04m3MhW8aRKZl3bZ3eLWI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzg2LzE5LzM0/LzM2MF9GXzY4NjE5/MzQwN19ESFp3amV5/ZEJPUjF0RURrTEF6/d00zdzVrWXN0Unp6/Qi5qcGc"
        }
    }

    return (
        <section className="mb-5 flex min-h-[400px] max-w-sm flex-col items-center rounded-lg border border-gray-400 bg-gray-200 shadow-lg">
            <img src={imgURL} alt={imgALT} className="aspect-video w-full rounded-t-lg object-contain" />
            <div className="p-3 h-full flex flex-col text-gray-700">
                <h2 className="font-bold mb-1.5 text-xl">{title}</h2>
                <p className="text-justify mb-1.5">{description}</p>
                <div className="flex h-full items-end justify-between">
                    <p className="text-xs font-medium text-gray-400">{date}</p>
                    <i className="text-sm"><a href={source} target="_blank">ℹ Ver noticia completa...</a></i>
                </div>
                
            </div>
            
        </section>
    )
    
}

export default NewsCard;
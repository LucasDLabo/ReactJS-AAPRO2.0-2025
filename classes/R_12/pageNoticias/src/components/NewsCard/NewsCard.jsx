import "./NewsCard.css";

function NewsCard( { title, description, source, imgURL} ){

    //let { title, description, source, imgURL} = props;
    
    {
        if (imgURL == "") {
            imgURL = "https://imgs.search.brave.com/LhkMCDZM_xXAlzZYt22XIs04m3MhW8aRKZl3bZ3eLWI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzg2LzE5LzM0/LzM2MF9GXzY4NjE5/MzQwN19ESFp3amV5/ZEJPUjF0RURrTEF6/d00zdzVrWXN0Unp6/Qi5qcGc"
        }
    }

    return (
    <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={imgURL} alt="" />
        <i>Fuente:  <a href={source} target="_blank">{source}</a></i>
    </section>
    )
    
}

export default NewsCard;
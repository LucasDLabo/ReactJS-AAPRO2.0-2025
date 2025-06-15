function CardContainer( {children} ){

    return (
        <div className="flex flex-wrap justify-around gap-1">
            {children}
        </div>
    )
}

export default CardContainer;
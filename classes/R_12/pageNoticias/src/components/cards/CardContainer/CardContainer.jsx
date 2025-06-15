function CardContainer( {children} ){

    return (
        <div className="flex flex-wrap w-full justify-around gap-1 items-start mt-3">
            {children}
        </div>
    )
}

export default CardContainer;
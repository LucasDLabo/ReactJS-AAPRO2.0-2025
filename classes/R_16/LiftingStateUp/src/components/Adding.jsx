function Adding( { count, onChangeAdd }){
    return(
        <>
            <i>Contador desde hijo 'Adding': {count}</i>
            <button onClick={() => {onChangeAdd(count + 1)}}> + 1 </button>
        </>
    )
}

export default Adding;
function Subtract( { count, onChangeSub }){
    return(
        <>
            <br />
            <i>Contador desde hijo 'Subtract': {count}</i>
            <button onClick={() => {onChangeSub(count - 1)}}> - 1 </button>
        </>
    )
}

export default Subtract;
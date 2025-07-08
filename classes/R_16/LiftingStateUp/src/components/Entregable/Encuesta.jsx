import { useState } from "react";
function Encuesta() {
    return (
        <div>
            <h1>Encuesta</h1>
            <Pregunta1 />
            <Pregunta2 />
            <BotonEnviar />
        </div>
    );
}
function Pregunta1() {
    const [respuesta, setRespuesta] = useState("");
    return (
        <div>
            <h2>¿Cuál es tu color favorito?</h2>
            <select value={respuesta} onChange={(e) => setRespuesta(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Rojo">Rojo</option>
                <option value="Azul">Azul</option>
                <option value="Verde">Verde</option>
            </select>
        </div>
    );
}
function Pregunta2() {
    const [respuesta, setRespuesta] = useState("");
    return (
        <div>
            <h2>¿Cuál es tu animal favorito?</h2>
            <select value={respuesta} onChange={(e) => setRespuesta(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Ave">Ave</option>
            </select>
        </div>
    );
}
function BotonEnviar() {
    const enviarEncuesta = () => {
        alert("Encuesta enviada.");
    };
    return (
        <div>
            <button onClick={enviarEncuesta}>Enviar Encuesta</button>
        </div>
    );
}
export default Encuesta;
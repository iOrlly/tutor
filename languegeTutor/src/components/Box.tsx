import { useState } from 'react'
import './box.css'

function Box() {
    const [text, setText] = useState("")
    const [verification, setVerification] = useState("")

    function verifyUserAnswer() {
        if(!text.trim()) {
            setVerification("Por favor, insira uma resposta antes de validar!")
            return;
        }
        setVerification(`Resposta recebida: "${text}".`);
    }

    return(
        <div id="result">
            <p id="status" className="result-status" role="status" aria-live="polite"></p>

            <div className="box correction">
                <h3>✔ Correção</h3>
                <p id="correction"></p>
            </div>

            <div className="box explication">
                <h3>💡 Explicação</h3>
                <p id="explication"></p>
            </div>

            <div className="box exercise">
                <h3>💡 Exercício</h3>
                <p id="exercise"></p>
                <input id="userAnswer" value={ text } onChange={(e) => setText(e.target.value)} placeholder="Digite a sua resposta" />
                <button onClick={verifyUserAnswer} id="validateButton">Validar</button>
                <p id="showVerification">{verification}</p>
            </div>

            <div className="box example">
                <h3>📌 Exemplo</h3>
                <p id="example"></p>
            </div>

            <div className="box answer">
                <h3>🎯 Resposta</h3>
                <p id="answer" className="spoiler" onClick={(e) => e.currentTarget.classList.toggle('revelado')} ></p>
            </div>
        </div>
    )
}

export default Box;
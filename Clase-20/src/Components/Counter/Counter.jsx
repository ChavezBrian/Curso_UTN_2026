/* 
Contador parte 2:
Si el contador vale 10 poner un mensaje en rojo indicando 'Has al canzado el limite' y deshabilitar el boton de sumar
Si el contador vale 0:
    -Debe haber un boton de comprar unicamente (este al dar click incrementara el contador)
    -No estaran el boton de +, - o el contador
*/

import { useState } from "react"
import "./Counter.css"

function Counter() {
    const [valorContador, setValorContador] = useState(0)

    function decrementarValor() {
        setValorContador((valorPrevio) => valorPrevio - 1)
    }

    function aumentarValor() {
        setValorContador((valorPrevio) => valorPrevio + 1)
    }

    const esLimite = (valorContador >= 10)
    const esCero = (valorContador === 0)

    return (
        <div className="counter-wrapper">
            {esCero ? (
                /* Si vale 0: se muestra ÚNICAMENTE el botón de comprar */
                <button className="btn-comprar" onClick={aumentarValor}>
                    Comprar
                </button>
            ) : (
                /* Si es mayor a 0: se muestran los controles y el mensaje de límite si aplica */
                <>
                    <div className="counter-container">
                        <button onClick={decrementarValor}>-</button>
                        <span>{valorContador}</span>
                        <button onClick={aumentarValor} disabled={esLimite}>+</button>
                    </div>

                    {esLimite && (
                        <p className="limite-msg">Has alcanzado el límite</p>
                    )}
                </>
            )}
        </div>
    )
}

export default Counter
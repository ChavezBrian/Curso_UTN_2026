import "./Counter.css"
import useCounter from "../../hooks/useCounter"

function Counter() {
    const useCounterResult = useCounter()

    return (
        <div className="counter-wrapper">
            {useCounterResult.esCero ? (
                <button className="btn-comprar" onClick={useCounterResult.aumentarValor}>
                    Comprar
                </button>
            ) : (
                <>
                    <div className="counter-container">
                        <button onClick={useCounterResult.decrementarValor}>-</button>
                        <span>{useCounterResult.valorContador}</span>
                        <button onClick={useCounterResult.aumentarValor} disabled={useCounterResult.esLimite}>+</button>
                    </div>

                    {useCounterResult.esLimite && (
                        <p className="limite-msg">Has alcanzado el límite</p>
                    )}
                </>
            )}
        </div>
    )
}

export default Counter
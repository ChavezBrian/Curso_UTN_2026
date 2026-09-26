import { useState } from 'react'

export default function useCounter() {

    const [valorContador, setValorContador] = useState(0)

    const esLimite = (valorContador >= 10)
    const esCero = (valorContador === 0)

    function decrementarValor() {
        setValorContador((valorPrevio) => valorPrevio - 1)
    }

    function aumentarValor() {
        setValorContador((valorPrevio) => valorPrevio + 1)
    }

    return {
        esLimite: esLimite,
        esCero: esCero,
        valorContador: valorContador,
        decrementarValor: decrementarValor,
        aumentarValor: aumentarValor
    }
}

import '../../styles/BotaoSemana.css'

function BotaoSemana({ evento, disabled, texto }) {
    return (
        <button className='botaoSemana' onClick={evento} disabled={disabled}>{texto}</button>
    )
}

export default BotaoSemana
import { useState } from 'react';
import listaHorarios from '../../horarios';
import '../../styles/ListaHorarios.css'

function ListaHorarios({ dia }) {

    let manha = listaHorarios.filter(horario => horario.horario < '12:00' && horario.horario > '00:00');
    let tarde = listaHorarios.filter(horario => horario.horario < '18:00' && horario.horario >= '12:00');
    let noite = listaHorarios.filter(horario => horario.horario >= '18:00' && horario.horario <= '23:30');

    const [activeButton, setActiveButton] = useState("")

    return (
        <>
            <ul className='agenda'>
                <li><button className='periodos'>Manhã, <br></br>{dia}</button>
                    <ul className='linhaHorarios'>
                        {
                            manha.map((horario, index) => (
                                <button className={activeButton === horario ? 'horariosActive' : 'horarios'} key={index} onClick={() => { setActiveButton(horario) }}>{horario.horario}</button>
                            ))
                        }
                    </ul>
                </li>
                <li><button className='periodos'>Tarde, <br></br>{dia}</button>
                    <ul className='linhaHorarios'>
                        {
                            tarde.map((horario, index) => (
                                <button className={activeButton === horario ? 'horariosActive' : 'horarios'} key={index} onClick={() => { setActiveButton(horario) }}>{horario.horario}</button>
                            ))
                        }
                    </ul>
                </li>
                <li><button className='periodos'>Noite, <br></br>{dia}</button>
                    <ul className='linhaHorarios'>
                        {
                            noite.map((horario, index) => (
                                <button className={activeButton === horario ? 'horariosActive' : 'horarios'} key={index} onClick={() => { setActiveButton(horario) }} >{horario.horario}</button>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default ListaHorarios

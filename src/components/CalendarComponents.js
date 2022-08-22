import React, { useState } from 'react';

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const semanas = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const horariosManhã = ['06:00 - 06:30', '06:30 - 07:00', '07:00 - 07:30', '07:30 - 08:00', '08:00 - 08:30', '08:30 - 09:00', '09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00'];
const horariosTarde = ['12:00 - 12:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'];
const horariosNoite = ['18:00 - 18:30', '18:30 - 19:00', '19:00 - 19:30', '19:30 - 20:00', '20:00 - 20:30', '20:30 - 21:00', '21:00 - 21:30', '21:30 - 22:00', '22:00 - 22:30', '22:30 - 23:00', '23:00 - 23:30', '23:30 - 00:00']

export function CalendarComponets() {

    const date = new Date();

    const dayWeek = date.getDay();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const nameMonth = meses[month];
    const week = semanas[dayWeek];



    function getWeeks() {
        const arrayWeeks = [];

        for (let i = 0; i < 7; i++) {
            let next = new Date();

            next.setDate(day + i);

            const nameWeek = semanas[next.getDay()];
            arrayWeeks.push(nameWeek);
        }

        return arrayWeeks
    }

    function getNumber() {
        const numbersWeek = [];

        for (let i = 0; i < 7; i++) {
            let next = new Date();

            next.setDate(day + i);

            const numberWeek = next.getDate();
            numbersWeek.push(numberWeek);
        }

        return numbersWeek
    }

    const weekDays = getWeeks();
    const numberDays = getNumber();

    const [showElement, setShowElement] = useState(false);

    function showOrHide() {
        if (showElement == false) {
            return setShowElement(true)
        } else {
            return setShowElement(false)
        }
    }

    return (
        <>
            <h1 className="title">{nameMonth}</h1>
            <h2 className="subtitle">{year}</h2>

            <ul className="menu" >
                {
                    weekDays.map((date) => (
                        <li className="listItem">
                            <span>{date}</span>
                        </li>
                    ))
                }
            </ul>
            <ul className="menu">
                {
                    numberDays.map((number) => (
                        <li className="listItem">
                            <button className="button" onClick={showOrHide}>{number}</button>
                        </li>
                    ))
                }
            </ul>
            {showElement ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã</span>
                        <ul className='linhaHorarios'>
                            {horariosManhã.map((horarios) => (
                                <button className='horarios'>{horarios}</button>
                            ))}
                        </ul>
                    </li>
                    <hr></hr>
                    <li><span className='periodos'>Tarde</span>
                        <ul className='linhaHorarios'>
                            {horariosTarde.map((horarios) => (
                                <button className='horarios'>{horarios}</button>
                            ))}
                        </ul>
                    </li>
                    <hr></hr>
                    <li><span className='periodos'>Noite</span>
                        <ul className='linhaHorarios'>
                            {horariosNoite.map((horarios) => (
                                <button className='horarios'>{horarios}</button>
                            ))}
                        </ul>
                    </li>
                </ul> : null}
        </>
    )
}
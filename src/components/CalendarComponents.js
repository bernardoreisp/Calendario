import React, { useState } from 'react';
import moment from 'moment';

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const semanas = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
const horariosManhã = ['06:00 - 06:30', '06:30 - 07:00', '07:00 - 07:30', '07:30 - 08:00', '08:00 - 08:30', '08:30 - 09:00', '09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00'];
const horariosTarde = ['12:00 - 12:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'];
const horariosNoite = ['18:00 - 18:30', '18:30 - 19:00', '19:00 - 19:30', '19:30 - 20:00', '20:00 - 20:30', '20:30 - 21:00', '21:00 - 21:30', '21:30 - 22:00', '22:00 - 22:30', '22:30 - 23:00', '23:00 - 23:30', '23:30 - 00:00'];

export function CalendarComponets() {

    const data = moment();

    function soma1Dia(){
        const data = moment();
        const newData = data.add(1,'d');
        const newDia = newData.date()
        return newDia
    }

    function soma2Dias(){
        const data = moment();
        const newData = data.add(2,'d');
        const newDia = newData.date()
        return newDia
    }

    function soma3Dias(){
        const data = moment();
        const newData = data.add(3,'d');
        const newDia = newData.date()
        return newDia
    }

    function soma4Dias(){
        const data = moment();
        const newData = data.add(4,'d');
        const newDia = newData.date()
        return newDia
    }

    function soma5Dias(){
        const data = moment();
        const newData = data.add(5,'d');
        const newDia = newData.date()
        return newDia
    }

    function tiraDia(){
        const data = moment();
        const newData = data.subtract(1,'d');
        const newDia = newData.date()
        return newDia
    }

    
    const dia = data.date();
    const year = data.year();
    const month = data.month();
    const nameMonth = meses[month];

    const [showElementSeg, setShowElementSeg] = useState(false);
    const [styleSeg, setStyleSeg] = useState('button')

    function showOrHideSeg() {
        if(styleSeg == 'button'){
            setStyleSeg('button active')
        } else {
            setStyleSeg('button')
        }
        if (showElementSeg == false) {
            return setShowElementSeg(true);
        } else {
            return setShowElementSeg(false);
        }
    }

    const terça = data.add()
    const [showElementTer, setShowElementTer] = useState(false);
    const [styleTer, setStyleTer] = useState('button')
    
    function showOrHideTer() {
        if(styleTer == 'button'){
            setStyleTer('button active')
        } else {
            setStyleTer('button')
        }
        if (showElementTer == false) {
            return setShowElementTer(true);
        } else {
            return setShowElementTer(false);
        }
    }

    const [showElementQua, setShowElementQua] = useState(false);
    const [styleQua, setStyleQua] = useState('button')
    
    function showOrHideQua() {
        if(styleQua == 'button'){
            setStyleQua('button active')
        } else {
            setStyleQua('button')
        }
        if (showElementQua == false) {
            return setShowElementQua(true);
        } else {
            return setShowElementQua(false);
        }
    }

    const [showElementQui, setShowElementQui] = useState(false);
    const [styleQui, setStyleQui] = useState('button')
    
    function showOrHideQui() {
        if(styleQui == 'button'){
            setStyleQui('button active')
        } else {
            setStyleQui('button')
        }
        if (showElementQui == false) {
            return setShowElementQui(true);
        } else {
            return setShowElementQui(false);
        }
    }

    const [showElementSex, setShowElementSex] = useState(false);
    const [styleSex, setStyleSex] = useState('button')
    
    function showOrHideSex() {
        if(styleSex == 'button'){
            setStyleSex('button active')
        } else {
            setStyleSex('button')
        }
        if (showElementSex == false) {
            return setShowElementSex(true);
        } else {
            return setShowElementSex(false);
        }
    }

    const [showElementSab, setShowElementSab] = useState(false);
    const [styleSab, setStyleSab] = useState('button')
    
    function showOrHideSab() {
        if(styleSab == 'button'){
            setStyleSab('button active')
        } else {
            setStyleSab('button')
        }
        if (showElementSab == false) {
            return setShowElementSab(true);
        } else {
            return setShowElementSab(false);
        }
    }

    const [showElementDom, setShowElementDom] = useState(false);
    const [styleDom, setStyleDom] = useState('button')
    
    function showOrHideDom() {
        if(styleDom == 'button'){
            setStyleDom('button active')
        } else {
            setStyleDom('button')
        }
        if (showElementDom == false) {
            return setShowElementDom(true);
        } else {
            return setShowElementDom(false);
        }
    }

    return (
        <>
            <h1 className="title">{nameMonth}</h1>
            <h2 className="subtitle">{year}</h2>
            
            <ul className="menu" >
                {
                    semanas.map((diasSemana) => (
                        <li className="listItem">
                            <span>{diasSemana}</span>
                        </li>
                    ))
                }
            </ul>
            <ul className="menu">
                <li className="listItem">
                    <button className={styleSeg} onClick={showOrHideSeg}>{tiraDia()}</button>
                </li>
                <li className="listItem">
                    <button className={styleTer} onClick={showOrHideTer}>{dia}</button>
                </li>
                <li className="listItem">
                    <button className={styleQua} onClick={showOrHideQua}>{soma1Dia()}</button>
                </li>
                <li className="listItem">
                    <button className={styleQui} onClick={showOrHideQui}>{soma2Dias()}</button>
                </li>
                <li className="listItem">
                    <button className={styleSex} onClick={showOrHideSex}>{soma3Dias()}</button>
                </li>
                <li className="listItem">
                    <button className={styleSab} onClick={showOrHideSab}>{soma4Dias()}</button>
                </li>
                <li className="listItem">
                    <button className={styleDom} onClick={showOrHideDom}>{soma5Dias()}</button>
                </li>
            </ul>

                {showElementSeg ?
                    <ul className='agenda'>
                        <li><span className='periodos'>Manhã, segunda {tiraDia()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosManhã.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Tarde, segunda {tiraDia()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosTarde.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Noite, Segunda {tiraDia()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosNoite.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul> : null}

                    {showElementTer ?
                    <ul className='agenda'>
                        <li><span className='periodos'>Manhã, Terça {dia}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosManhã.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Tarde, Terça {dia}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosTarde.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Noite, Terça {dia}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosNoite.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul> : null}

                    {showElementQua ?
                    <ul className='agenda'>
                        <li><span className='periodos'>Manhã, Quarta {soma1Dia()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosManhã.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Tarde, Quarta {soma1Dia()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosTarde.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Noite, Quarta {soma1Dia()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosNoite.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul> : null}

                    {showElementQui ?
                    <ul className='agenda'>
                        <li><span className='periodos'>Manhã, Quinta {soma2Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosManhã.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Tarde, Quinta {soma2Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosTarde.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Noite, Quinta {soma2Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosNoite.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul> : null}

                    {showElementSex ?
                    <ul className='agenda'>
                        <li><span className='periodos'>Manhã, Sexta {soma3Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosManhã.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Tarde, Sexta {soma3Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosTarde.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Noite, Sexta {soma3Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosNoite.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul> : null}

                    {showElementSab ?
                    <ul className='agenda'>
                        <li><span className='periodos'>Manhã, Sábado {soma4Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosManhã.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Tarde, Sábado {soma4Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosTarde.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Noite, Sábado {soma4Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosNoite.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul> : null}

                    {showElementDom ?
                    <ul className='agenda'>
                        <li><span className='periodos'>Manhã, Domingo {soma5Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosManhã.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Tarde, Domingo {soma5Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosTarde.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><span className='periodos'>Noite, Domingo {soma5Dias()}</span>
                            <ul className='linhaHorarios'>
                                {
                                    horariosNoite.map((horarios) => (
                                        <button className='horarios'>{horarios}</button>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul> : null}
                
        </>
    )
}
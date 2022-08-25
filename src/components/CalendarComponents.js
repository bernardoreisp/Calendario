import React, { useState } from 'react';
import moment from 'moment';

const semanas = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const horariosManha = ['06:00 - 06:30', '06:30 - 07:00', '07:00 - 07:30', '07:30 - 08:00', '08:00 - 08:30', '08:30 - 09:00', '09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00'];
const horariosTarde = ['12:00 - 12:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'];
const horariosNoite = ['18:00 - 18:30', '18:30 - 19:00', '19:00 - 19:30', '19:30 - 20:00', '20:00 - 20:30', '20:30 - 21:00', '21:00 - 21:30', '21:30 - 22:00', '22:00 - 22:30', '22:30 - 23:00', '23:00 - 23:30', '23:30 - 00:00'];
let data = moment();

function checkHora() {
    let manha = moment().isBetween('12:00', '18:00')
    let tarde = moment().isBetween('06:00', '12:00')
    let noite = moment().isBetween('18:00', '00:00')
    if (manha === true && tarde === false && noite === false){
        return horariosManha
    } else if (manha === false && tarde === true && noite === false){
        return horariosTarde
    } else if (manha === false && tarde === false && noite === true){
        return horariosNoite
    }
}

function soma1Dia() {
    const data = moment();
    const newData = data.add(1, 'd');
    return newData
}
let quarta = soma1Dia()

function soma2Dias() {
    const data = moment();
    const newData = data.add(2, 'd');
    return newData
}
let quinta = soma2Dias()

function soma3Dias() {
    const data = moment();
    const newData = data.add(3, 'd');
    return newData
}
let sexta = soma3Dias()

function soma4Dias() {
    const data = moment();
    const newData = data.add(4, 'd');
    return newData
}
let sabado = soma4Dias()

function soma5Dias() {
    const data = moment();
    const newData = data.add(5, 'd');
    return newData
}
let domingo = soma5Dias()

function soma6dias() {
    const data = moment();
    const newData = data.add(6, 'd');
    return newData
}
let segunda = soma6dias()

export function CalendarComponets() {

    const [showElementSeg, setShowElementSeg] = useState(false);
    const [styleSeg, setStyleSeg] = useState('button');

    function showOrHideSeg() {
        if (styleSeg === 'button') {
            setStyleSeg('button active')
        } else {
            setStyleSeg('button')
        }
        if (showElementSeg === false) {
            return setShowElementSeg(true);
        } else {
            return setShowElementSeg(false);
        }
    }

    const [showElementTer, setShowElementTer] = useState(false);
    const [styleTer, setStyleTer] = useState('button')

    function showOrHideTer() {
        if (styleTer === 'button') {
            setStyleTer('button active')
        } else {
            setStyleTer('button')
        }
        if (showElementTer === false) {
            return setShowElementTer(true);
        } else {
            return setShowElementTer(false);
        }
    }

    const [showElementQua, setShowElementQua] = useState(false);
    const [styleQua, setStyleQua] = useState('button')

    function showOrHideQua() {
        if (styleQua === 'button') {
            setStyleQua('button active')
        } else {
            setStyleQua('button')
        }
        if (showElementQua === false) {
            return setShowElementQua(true);
        } else {
            return setShowElementQua(false);
        }
    }

    const [showElementQui, setShowElementQui] = useState(false);
    const [styleQui, setStyleQui] = useState('button')

    function showOrHideQui() {
        if (styleQui === 'button') {
            setStyleQui('button active')
        } else {
            setStyleQui('button')
        }
        if (showElementQui === false) {
            return setShowElementQui(true);
        } else {
            return setShowElementQui(false);
        }
    }

    const [showElementSex, setShowElementSex] = useState(false);
    const [styleSex, setStyleSex] = useState('button')

    function showOrHideSex() {
        if (styleSex === 'button') {
            setStyleSex('button active')
        } else {
            setStyleSex('button')
        }
        if (showElementSex === false) {
            return setShowElementSex(true);
        } else {
            return setShowElementSex(false);
        }
    }

    const [showElementSab, setShowElementSab] = useState(false);
    const [styleSab, setStyleSab] = useState('button')

    function showOrHideSab() {
        if (styleSab === 'button') {
            setStyleSab('button active')
        } else {
            setStyleSab('button')
        }
        if (showElementSab === false) {
            return setShowElementSab(true);
        } else {
            return setShowElementSab(false);
        }
    }

    const [showElementDom, setShowElementDom] = useState(false);
    const [styleDom, setStyleDom] = useState('button')

    function showOrHideDom() {
        if (styleDom === 'button') {
            setStyleDom('button active')
        } else {
            setStyleDom('button')
        }
        if (showElementDom === false) {
            return setShowElementDom(true);
        } else {
            return setShowElementDom(false);
        }
    }

    const [hoje, setHoje] = useState(data.format('DD/MM'))
    const [hoje2, setHoje2] = useState(quarta.format('DD/MM'))
    const [hoje3, setHoje3] = useState(quinta.format('DD/MM'))
    const [hoje4, setHoje4] = useState(sexta.format('DD/MM'))
    const [hoje5, setHoje5] = useState(sabado.format('DD/MM'))
    const [hoje6, setHoje6] = useState(domingo.format('DD/MM'))
    const [hoje7, setHoje7] = useState(segunda.format('DD/MM'))
    function proxSem() {
        data.add(7, 'd')
        quarta.add(7, 'd')
        quinta.add(7, 'd')
        sexta.add(7, 'd')
        sabado.add(7, 'd')
        domingo.add(7, 'd')
        segunda.add(7, 'd')
        const hoje = setHoje(data.format('DD/MM'))
        const hoje2 = setHoje2(quarta.format('DD/MM'))
        const hoje3 = setHoje3(quinta.format('DD/MM'))
        const hoje4 = setHoje4(sexta.format('DD/MM'))
        const hoje5 = setHoje5(sabado.format('DD/MM'))
        const hoje6 = setHoje6(domingo.format('DD/MM'))
        const hoje7 = setHoje7(segunda.format('DD/MM'))
        return [hoje, hoje2, hoje3, hoje4, hoje5, hoje6, hoje7]
    }

    function semAnt() {
        data.subtract(7, 'd')
        quarta.subtract(7, 'd')
        quinta.subtract(7, 'd')
        sexta.subtract(7, 'd')
        sabado.subtract(7, 'd')
        domingo.subtract(7, 'd')
        segunda.subtract(7, 'd')
        const hoje = setHoje(data.format('DD/MM'))
        const hoje2 = setHoje2(quarta.format('DD/MM'))
        const hoje3 = setHoje3(quinta.format('DD/MM'))
        const hoje4 = setHoje4(sexta.format('DD/MM'))
        const hoje5 = setHoje5(sabado.format('DD/MM'))
        const hoje6 = setHoje6(domingo.format('DD/MM'))
        const hoje7 = setHoje7(segunda.format('DD/MM'))
        return [hoje, hoje2, hoje3, hoje4, hoje5, hoje6, hoje7]
    }

    return (
        <>
            <button id='floatRight' onClick={proxSem}>Próxima Semana {">>>"}</button>
            <button id='floatLeft' onClick={semAnt}>{"<<<"} Semana Anterior</button>

            <div>
                <ul className="menu">
                    <li className="listItem">
                        <span>{semanas[data.day()]}</span>
                        <button className={styleSeg} onClick={showOrHideSeg}>{hoje}</button>
                    </li>
                    <li className="listItem">
                        <span>{semanas[quarta.day()]}</span>
                        <button className={styleTer} onClick={showOrHideTer}>{hoje2}</button>
                    </li>
                    <li className="listItem">
                        <span>{semanas[quinta.day()]}</span>
                        <button className={styleQua} onClick={showOrHideQua}>{hoje3}</button>
                    </li>
                    <li className="listItem">
                        <span>{semanas[sexta.day()]}</span>
                        <button className={styleQui} onClick={showOrHideQui}>{hoje4}</button>
                    </li>
                    <li className="listItem">
                        <span>{semanas[sabado.day()]}</span>
                        <button className={styleSex} onClick={showOrHideSex}>{hoje5}</button>
                    </li>
                    <li className="listItem">
                        <span>{semanas[domingo.day()]}</span>
                        <button className={styleSab} onClick={showOrHideSab}>{hoje6}</button>
                    </li>
                    <li className="listItem">
                        <span>{semanas[segunda.day()]}</span>
                        <button className={styleDom} onClick={showOrHideDom}>{hoje7}</button>
                    </li>
                </ul>
            </div>

            {showElementSeg ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {data.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosManha.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {data.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosTarde.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {data.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosNoite.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementTer ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {quarta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosManha.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {quarta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosTarde.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {quarta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosNoite.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementQua ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {quinta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosManha.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {quinta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosTarde.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {quinta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosNoite.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementQui ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {sexta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosManha.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {sexta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosTarde.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {sexta.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosNoite.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementSex ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {sabado.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosManha.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {sabado.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosTarde.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {sabado.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosNoite.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementSab ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {domingo.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosManha.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {domingo.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosTarde.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {domingo.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosNoite.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementDom ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {segunda.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosManha.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {segunda.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosTarde.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {segunda.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                horariosNoite.map((horarios, index) => (
                                    <button className='horarios' key={index}>{horarios}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

        </>
    )
}
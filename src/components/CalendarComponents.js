import React, { useState } from 'react';
import moment from 'moment';
import listaHorarios from '../horarios2';

let data = moment();
const semanas = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

let manha = listaHorarios.filter(horario => horario.horario < '12:00' && horario.horario > '00:00');
let tarde = listaHorarios.filter(horario => horario.horario < '18:00' && horario.horario >= '12:00');
let noite = listaHorarios.filter(horario => horario.horario >= '18:00' && horario.horario <= '23:30');

function diasSemana() {
    const data1 = moment();
    const newData1 = data1.add(1, 'd');
    const data2 = moment();
    const newData2 = data2.add(2, 'd');
    const data3 = moment();
    const newData3 = data3.add(3, 'd');
    const data4 = moment();
    const newData4 = data4.add(4, 'd');
    const data5 = moment();
    const newData5 = data5.add(5, 'd');
    const data6 = moment();
    const newData6 = data6.add(6, 'd');
    return [newData1, newData2, newData3, newData4, newData5, newData6]
}
let dias = diasSemana()

export function CalendarComponents() {

    const [showElementSeg, setShowElementSeg] = useState(false);
    const [styleSeg, setStyleSeg] = useState('button');

    function showOrHideSeg() {
        if (showElementTer === true || showElementQua === true || showElementQui === true || showElementSex === true || showElementSab === true || showElementDom === true) {
            setShowElementDom(false)
            setShowElementTer(false)
            setShowElementQua(false)
            setShowElementQui(false)
            setShowElementSex(false)
            setShowElementSab(false)
        }
        if (styleTer === 'button active' || styleQua === 'button active' || styleQui === 'button active' || styleSex === 'button active' || styleSab === 'button active' || styleDom === 'button active') {
            setStyleTer('button')
            setStyleQua('button')
            setStyleQui('button')
            setStyleSex('button')
            setStyleSab('button')
            setStyleDom('button')
        }
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
        if (showElementDom === true || showElementQua === true || showElementQui === true || showElementSex === true || showElementSab === true || showElementSeg === true) {
            setShowElementSeg(false)
            setShowElementDom(false)
            setShowElementQua(false)
            setShowElementQui(false)
            setShowElementSex(false)
            setShowElementSab(false)
        }
        if (styleSeg === 'button active' || styleQua === 'button active' || styleQui === 'button active' || styleSex === 'button active' || styleSab === 'button active' || styleDom === 'button active') {
            setStyleSeg('button')
            setStyleQua('button')
            setStyleQui('button')
            setStyleSex('button')
            setStyleSab('button')
            setStyleDom('button')
        }
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
        if (showElementTer === true || showElementDom === true || showElementQui === true || showElementSex === true || showElementSab === true || showElementSeg === true) {
            setShowElementSeg(false)
            setShowElementTer(false)
            setShowElementDom(false)
            setShowElementQui(false)
            setShowElementSex(false)
            setShowElementSab(false)
        }
        if (styleTer === 'button active' || styleSeg === 'button active' || styleQui === 'button active' || styleSex === 'button active' || styleSab === 'button active' || styleDom === 'button active') {
            setStyleTer('button')
            setStyleSeg('button')
            setStyleQui('button')
            setStyleSex('button')
            setStyleSab('button')
            setStyleDom('button')
        }
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
        if (showElementTer === true || showElementQua === true || showElementDom === true || showElementSex === true || showElementSab === true || showElementSeg === true) {
            setShowElementSeg(false)
            setShowElementTer(false)
            setShowElementQua(false)
            setShowElementDom(false)
            setShowElementSex(false)
            setShowElementSab(false)
        }
        if (styleTer === 'button active' || styleQua === 'button active' || styleSeg === 'button active' || styleSex === 'button active' || styleSab === 'button active' || styleDom === 'button active') {
            setStyleTer('button')
            setStyleQua('button')
            setStyleSeg('button')
            setStyleSex('button')
            setStyleSab('button')
            setStyleDom('button')
        }
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
        if (showElementTer === true || showElementQua === true || showElementQui === true || showElementDom === true || showElementSab === true || showElementSeg === true) {
            setShowElementSeg(false)
            setShowElementTer(false)
            setShowElementQua(false)
            setShowElementQui(false)
            setShowElementDom(false)
            setShowElementSab(false)
        }
        if (styleTer === 'button active' || styleQua === 'button active' || styleQui === 'button active' || styleSeg === 'button active' || styleSab === 'button active' || styleDom === 'button active') {
            setStyleTer('button')
            setStyleQua('button')
            setStyleQui('button')
            setStyleSeg('button')
            setStyleSab('button')
            setStyleDom('button')
        }
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
        if (showElementTer === true || showElementQua === true || showElementQui === true || showElementSex === true || showElementDom === true || showElementSeg === true) {
            setShowElementSeg(false)
            setShowElementTer(false)
            setShowElementQua(false)
            setShowElementQui(false)
            setShowElementSex(false)
            setShowElementDom(false)
        }
        if (styleTer === 'button active' || styleQua === 'button active' || styleQui === 'button active' || styleSex === 'button active' || styleSeg === 'button active' || styleDom === 'button active') {
            setStyleTer('button')
            setStyleQua('button')
            setStyleQui('button')
            setStyleSex('button')
            setStyleSeg('button')
            setStyleDom('button')
        }
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
        if (showElementTer === true || showElementQua === true || showElementQui === true || showElementSex === true || showElementSab === true || showElementSeg === true) {
            setShowElementSeg(false)
            setShowElementTer(false)
            setShowElementQua(false)
            setShowElementQui(false)
            setShowElementSex(false)
            setShowElementSab(false)
        }
        if (styleTer === 'button active' || styleQua === 'button active' || styleQui === 'button active' || styleSex === 'button active' || styleSab === 'button active' || styleSeg === 'button active') {
            setStyleTer('button')
            setStyleQua('button')
            setStyleQui('button')
            setStyleSex('button')
            setStyleSab('button')
            setStyleSeg('button')
        }
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
    const [hoje2, setHoje2] = useState(dias[0].format('DD/MM'))
    const [hoje3, setHoje3] = useState(dias[1].format('DD/MM'))
    const [hoje4, setHoje4] = useState(dias[2].format('DD/MM'))
    const [hoje5, setHoje5] = useState(dias[3].format('DD/MM'))
    const [hoje6, setHoje6] = useState(dias[4].format('DD/MM'))
    const [hoje7, setHoje7] = useState(dias[5].format('DD/MM'))
    function proxSem() {
        data.add(7, 'd')
        dias[0].add(7, 'd')
        dias[1].add(7, 'd')
        dias[2].add(7, 'd')
        dias[3].add(7, 'd')
        dias[4].add(7, 'd')
        dias[5].add(7, 'd')
        const hoje = setHoje(data.format('DD/MM'))
        const hoje2 = setHoje2(dias[0].format('DD/MM'))
        const hoje3 = setHoje3(dias[1].format('DD/MM'))
        const hoje4 = setHoje4(dias[2].format('DD/MM'))
        const hoje5 = setHoje5(dias[3].format('DD/MM'))
        const hoje6 = setHoje6(dias[4].format('DD/MM'))
        const hoje7 = setHoje7(dias[5].format('DD/MM'))
        return [hoje, hoje2, hoje3, hoje4, hoje5, hoje6, hoje7]
    }

    function semAnt() {
        data.subtract(7, 'd')
        dias[0].subtract(7, 'd')
        dias[1].subtract(7, 'd')
        dias[2].subtract(7, 'd')
        dias[3].subtract(7, 'd')
        dias[4].subtract(7, 'd')
        dias[5].subtract(7, 'd')
        const hoje = setHoje(data.format('DD/MM'))
        const hoje2 = setHoje2(dias[0].format('DD/MM'))
        const hoje3 = setHoje3(dias[1].format('DD/MM'))
        const hoje4 = setHoje4(dias[2].format('DD/MM'))
        const hoje5 = setHoje5(dias[3].format('DD/MM'))
        const hoje6 = setHoje6(dias[4].format('DD/MM'))
        const hoje7 = setHoje7(dias[5].format('DD/MM'))
        return [hoje, hoje2, hoje3, hoje4, hoje5, hoje6, hoje7]
    }

    let disabled
    let dataCheck = moment().format('DD/MM')
    if (hoje === dataCheck) {
        disabled = true
    } else {
        disabled = false
    }

    const [activeButtonSeg, setActiveButtonSeg] = useState("")
    const [activeButtonTer, setActiveButtonTer] = useState("")
    const [activeButtonQua, setActiveButtonQua] = useState("")
    const [activeButtonQui, setActiveButtonQui] = useState("")
    const [activeButtonSex, setActiveButtonSex] = useState("")
    const [activeButtonSab, setActiveButtonSab] = useState("")
    const [activeButtonDom, setActiveButtonDom] = useState("")

    return (
        <>
            <div id='layout'>
                <button className='botaoSemana' onClick={semAnt} disabled={disabled}>{"<<<"} Semana Anterior</button>
                <button className='botaoSemana' onClick={proxSem}>Próxima Semana {">>>"}</button>
            </div>

            <div>
                <ul className="menu">
                    <li className="listItem">
                        <button className={styleSeg} onClick={showOrHideSeg}>{semanas[data.day()]}<br></br>{hoje}</button>
                    </li>
                    <li className="listItem">
                        <button className={styleTer} onClick={showOrHideTer}>{semanas[dias[0].day()]}<br></br>{hoje2}</button>
                    </li>
                    <li className="listItem">
                        <button className={styleQua} onClick={showOrHideQua}>{semanas[dias[1].day()]}<br></br>{hoje3}</button>
                    </li>
                    <li className="listItem">
                        <button className={styleQui} onClick={showOrHideQui}>{semanas[dias[2].day()]}<br></br>{hoje4}</button>
                    </li>
                    <li className="listItem">
                        <button className={styleSex} onClick={showOrHideSex}>{semanas[dias[3].day()]}<br></br>{hoje5}</button>
                    </li>
                    <li className="listItem">
                        <button className={styleSab} onClick={showOrHideSab}>{semanas[dias[4].day()]}<br></br>{hoje6}</button>
                    </li>
                    <li className="listItem">
                        <button className={styleDom} onClick={showOrHideDom}>{semanas[dias[5].day()]}<br></br>{hoje7}</button>
                    </li>
                </ul>
            </div>

            {showElementSeg ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {data.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                manha.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSeg(horario) }} style={{ backgroundImage: activeButtonSeg === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {data.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                tarde.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSeg(horario) }} style={{ backgroundImage: activeButtonSeg === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {data.format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                noite.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSeg(horario) }} style={{ backgroundImage: activeButtonSeg === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementTer ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {dias[0].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                manha.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonTer(horario) }} style={{ backgroundImage: activeButtonTer === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {dias[0].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                tarde.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonTer(horario) }} style={{ backgroundImage: activeButtonTer === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {dias[0].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                noite.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonTer(horario) }} style={{ backgroundImage: activeButtonTer === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementQua ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {dias[1].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                manha.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonQua(horario) }} style={{ backgroundImage: activeButtonQua === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {dias[1].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                tarde.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonQua(horario) }} style={{ backgroundImage: activeButtonQua === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {dias[1].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                noite.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonQua(horario) }} style={{ backgroundImage: activeButtonQua === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementQui ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {dias[2].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                manha.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonQui(horario) }} style={{ backgroundImage: activeButtonQui === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {dias[2].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                tarde.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonQui(horario) }} style={{ backgroundImage: activeButtonQui === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {dias[2].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                noite.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonQui(horario) }} style={{ backgroundImage: activeButtonQui === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementSex ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {dias[3].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                manha.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSex(horario) }} style={{ backgroundImage: activeButtonSex === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {dias[3].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                tarde.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSex(horario) }} style={{ backgroundImage: activeButtonSex === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {dias[3].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                noite.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSex(horario) }} style={{ backgroundImage: activeButtonSex === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementSab ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {dias[4].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                manha.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSab(horario) }} style={{ backgroundImage: activeButtonSab === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {dias[4].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                tarde.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSab(horario) }} style={{ backgroundImage: activeButtonSab === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {dias[4].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                noite.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonSab(horario) }} style={{ backgroundImage: activeButtonSab === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}

            {showElementDom ?
                <ul className='agenda'>
                    <li><span className='periodos'>Manhã, {dias[5].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                manha.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonDom(horario) }} style={{ backgroundImage: activeButtonDom === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Tarde, {dias[5].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                tarde.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonDom(horario) }} style={{ backgroundImage: activeButtonDom === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                    <li><span className='periodos'>Noite, {dias[5].format('DD/MM')}</span>
                        <ul className='linhaHorarios'>
                            {
                                noite.map((horario, index) => (
                                    <button className='horarios' key={index} onClick={() => { setActiveButtonDom(horario) }} style={{ backgroundColor: activeButtonDom === horario ? "linear-gradient(to bottom right, rgb(1, 134, 211), rgb(229, 244, 253)" : "" }} >{horario.horario}</button>
                                ))
                            }
                        </ul>
                    </li>
                </ul> : null}
        </>
    )
}
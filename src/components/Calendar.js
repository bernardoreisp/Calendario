import React, { useState } from 'react';
import moment from 'moment';
import ListaHorarios from "./ListaHorarios";
import BotaoDias from './BotaoDias';
import BotaoSemana from './BotaoSemana';

let data = moment();
const semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

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

    return (
        <>
            <header id='layout'>
                <BotaoSemana evento={semAnt} disabled={disabled} texto='<<< Semana Anterior'/>
                <BotaoSemana evento={proxSem} disabled={false} texto='Próxima Semana >>>'/>
            </header>

            <ul className="menu">
                <BotaoDias style={styleSeg} dia={hoje} show={showOrHideSeg} semana={semana[data.day()]} />
                <BotaoDias style={styleTer} dia={hoje2} show={showOrHideTer} semana={semana[dias[0].day()]} />
                <BotaoDias style={styleQua} dia={hoje3} show={showOrHideQua} semana={semana[dias[1].day()]} />
                <BotaoDias style={styleQui} dia={hoje4} show={showOrHideQui} semana={semana[dias[2].day()]} />
                <BotaoDias style={styleSex} dia={hoje5} show={showOrHideSex} semana={semana[dias[3].day()]} />
                <BotaoDias style={styleSab} dia={hoje6} show={showOrHideSab} semana={semana[dias[4].day()]} />
                <BotaoDias style={styleDom} dia={hoje7} show={showOrHideDom} semana={semana[dias[5].day()]} />
            </ul>

            {showElementSeg ? <ListaHorarios dia={hoje} /> : null}
            {showElementTer ? <ListaHorarios dia={hoje2} /> : null}
            {showElementQua ? <ListaHorarios dia={hoje3} /> : null}
            {showElementQui ? <ListaHorarios dia={hoje4} /> : null}
            {showElementSex ? <ListaHorarios dia={hoje5} /> : null}
            {showElementSab ? <ListaHorarios dia={hoje6} /> : null}
            {showElementDom ? <ListaHorarios dia={hoje7} /> : null}
        </>
    )
}
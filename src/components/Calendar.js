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

export function Calendar() {

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

    const diasBotao = [
        {
            "id": 1,
            "dia": hoje,
            "semana": semana[data.day()]
        },
        {
            "id": 2,
            "dia": hoje2,
            "semana": semana[dias[0].day()]
        },
        {
            "id": 3,
            "dia": hoje3,
            "semana": semana[dias[1].day()]
        },
        {
            "id": 4,
            "dia": hoje4,
            "semana": semana[dias[2].day()]
        },
        {
            "id": 5,
            "dia": hoje5,
            "semana": semana[dias[3].day()]
        },
        {
            "id": 6,
            "dia": hoje6,
            "semana": semana[dias[4].day()]
        },
        {
            "id": 7,
            "dia": hoje7,
            "semana": semana[dias[5].day()]
        }
    ]

    const [showElement, setShowElement] = useState(false);
    const [style, setStyle] = useState('');

    return (
        <>
            <div className='calendarContainer'>
                <header id='layout'>
                    <BotaoSemana evento= {semAnt} disabled= {disabled} texto= '<<< Semana Anterior' />
                    <BotaoSemana evento= {proxSem} disabled= {false} texto= 'Próxima Semana >>>' />
                </header>

                <ul className="menu">
                    {
                        diasBotao.map((propriedades) => (
                            <BotaoDias
                                style= {style === propriedades.id ? 'button active' : 'button'}
                                key= {propriedades.id}
                                dia= {propriedades.dia}
                                show= {() => {
                                    setShowElement(propriedades.id)
                                    setStyle(propriedades.id)
                                }}
                                semana= {propriedades.semana} />
                        ))
                    }
                </ul>
                {
                    diasBotao.map((propriedades) => (
                        showElement === propriedades.id ? <ListaHorarios key= {propriedades.id} dia= {propriedades.dia} /> : null
                    ))
                }
            </div>
        </>
    )
}
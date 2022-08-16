const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const semanas = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];

export function CalendarComponets(){

    const date = new Date();

    const dayWeek = date.getDay();
    const day = date.getDate();
    const year  = date.getFullYear();
    const month = date.getMonth();
    const nameMonth = meses[month];
    const week = semanas[dayWeek];

    const first = date.getDate() - date.getDay();

    function getWeeks() {
        const arrayWeeks = [];

        for(let i = 0; i < 7; i++){
            let next = new Date(date.getTime());
            
            next.setDate(first + i);

            const nameWeek = semanas[next.getDay()];
            arrayWeeks.push(nameWeek);
        }

        return arrayWeeks
    }

    function getNumber(){
        const numbersWeek = [];

        for(let i = 0; i < 7; i++){
            let next = new Date(date.getTime());

            next.setDate(first + i);

            const numberWeek = next.getDate();
            numbersWeek.push(numberWeek);
        }

        return numbersWeek
    }

    const weekDays = getWeeks();
    const numberDays = getNumber();

    return (
        <>
            <h1 className="title">{nameMonth}</h1>
            <h2 className="subtitle">{year}</h2>

            <ul className="list">
                {
                    weekDays.map((date) => (
                        <li className="listItem">
                            <span>{date}</span>
                        </li>
                    ))
                }
            </ul>
            <ul className="list">
                {
                    numberDays.map((number) => (
                        <li className={`listItem ${day === number ? 'active' : ''}`}>
                            <span>{number}</span>
                        </li>
                    ))
                }
            </ul>
            <ul className="list" id="margin">
                <li className="listItem">
                    <span className="Hour">9:00<br></br>--<br></br>9:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:00<br></br>--<br></br>9:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:00<br></br>--<br></br>9:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:00<br></br>--<br></br>9:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:00<br></br>--<br></br>9:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:00<br></br>--<br></br>9:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:00<br></br>--<br></br>9:30</span>
                </li>
            </ul>
            <ul className="list">
                <li className="listItem">
                    <span className="Hour">9:30<br></br>--<br></br>10:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:30<br></br>--<br></br>10:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:30<br></br>--<br></br>10:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:30<br></br>--<br></br>10:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:30<br></br>--<br></br>10:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:30<br></br>--<br></br>10:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">9:30<br></br>--<br></br>10:00</span>
                </li>
            </ul>
            <ul className="list">
                <li className="listItem">
                    <span className="Hour">10:00<br></br>--<br></br>10:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:00<br></br>--<br></br>10:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:00<br></br>--<br></br>10:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:00<br></br>--<br></br>10:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:00<br></br>--<br></br>10:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:00<br></br>--<br></br>10:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:00<br></br>--<br></br>10:30</span>
                </li>
            </ul>
            <ul className="list">
                <li className="listItem">
                    <span className="Hour">10:30<br></br>--<br></br>11:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:30<br></br>--<br></br>11:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:30<br></br>--<br></br>11:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:30<br></br>--<br></br>11:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:30<br></br>--<br></br>11:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:30<br></br>--<br></br>11:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">10:30<br></br>--<br></br>11:00</span>
                </li>
            </ul>
            <ul className="list">
                <li className="listItem">
                    <span className="Hour">11:00<br></br>--<br></br>11:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:00<br></br>--<br></br>11:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:00<br></br>--<br></br>11:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:00<br></br>--<br></br>11:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:00<br></br>--<br></br>11:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:00<br></br>--<br></br>11:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:00<br></br>--<br></br>11:30</span>
                </li>
            </ul>
            <ul className="list">
                <li className="listItem">
                    <span className="Hour">11:30<br></br>--<br></br>12:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:30<br></br>--<br></br>12:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:30<br></br>--<br></br>12:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:30<br></br>--<br></br>12:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:30<br></br>--<br></br>12:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:30<br></br>--<br></br>12:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">11:30<br></br>--<br></br>12:00</span>
                </li>
            </ul>
            <ul className="list">
                <li className="listItem">
                    <span className="Hour">12:00<br></br>--<br></br>12:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:00<br></br>--<br></br>12:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:00<br></br>--<br></br>12:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:00<br></br>--<br></br>12:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:00<br></br>--<br></br>12:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:00<br></br>--<br></br>12:30</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:00<br></br>--<br></br>12:30</span>
                </li>
            </ul>
            <ul className="list">
                <li className="listItem">
                    <span className="Hour">12:30<br></br>--<br></br>13:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:30<br></br>--<br></br>13:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:30<br></br>--<br></br>13:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:30<br></br>--<br></br>13:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:30<br></br>--<br></br>13:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:30<br></br>--<br></br>13:00</span>
                </li>
                <li className="listItem">
                    <span className="Hour">12:30<br></br>--<br></br>13:00</span>
                </li>
            </ul>

        </>
    )
}
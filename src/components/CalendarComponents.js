const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
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

            <div id="layout">
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
                            <li className="listItem active"><span>{number}</span>
                                <ul className="submenu-1">
                                    <li><span>Manhã</span>
                                        <ul className="submenu-2">
                                            <li><span>06:00 06:30</span></li>
                                            <li><span>06:30 07:00</span></li>
                                            <li><span>07:00 07:30</span></li>
                                            <li><span>07:30 08:00</span></li>
                                            <li><span>08:00 08:30</span></li>
                                            <li><span>08:30 09:00</span></li>
                                            <li><span>09:00 09:30</span></li>
                                            <li><span>09:30 10:00</span></li>
                                            <li><span>10:00 10:30</span></li>
                                            <li><span>10:30 11:00</span></li>
                                            <li><span>11:00 11:30</span></li>
                                            <li><span>11:30 12:00</span></li>
                                        </ul>
                                    </li>
                                    <li><span>Tarde</span>
                                        <ul className="submenu-2">
                                            <li><span>12:00 12:30</span></li>
                                            <li><span>12:30 13:00</span></li>
                                            <li><span>13:00 13:30</span></li>
                                            <li><span>13:30 14:00</span></li>
                                            <li><span>14:00 14:30</span></li>
                                            <li><span>14:30 15:00</span></li>
                                            <li><span>15:00 15:30</span></li>
                                            <li><span>15:30 16:00</span></li>
                                            <li><span>16:00 16:30</span></li>
                                            <li><span>16:30 17:00</span></li>
                                            <li><span>17:00 17:30</span></li>
                                            <li><span>17:30 18:00</span></li>
                                        </ul>
                                    </li>
                                    <li><span>Noite</span>
                                        <ul className="submenu-2">
                                            <li><span>18:00 18:30</span></li>
                                            <li><span>18:30 19:00</span></li>
                                            <li><span>19:00 19:30</span></li>
                                            <li><span>19:30 20:00</span></li>
                                            <li><span>20:00 20:30</span></li>
                                            <li><span>20:30 21:00</span></li>
                                            <li><span>21:00 21:30</span></li>
                                            <li><span>21:30 22:00</span></li>
                                            <li><span>22:00 22:30</span></li>
                                            <li><span>22:30 23:00</span></li>
                                            <li><span>23:00 23:30</span></li>
                                            <li><span>23:30 00:00</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>   
        </>
    )
}
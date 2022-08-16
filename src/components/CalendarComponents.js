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
            <nav className="list" id="margin">
                <ul className="menu">
                    <li className="listItem"><a className="periodo">Manhã</a>
                        <ul>
                            <li>
                                <span className="hour">06:00 06:30</span>
                            </li>
                            <li>
                                <span className="hour">06:30 07:00</span>
                            </li>
                            <li>
                                <span className="hour">07:00 07:30</span>
                            </li>
                            <li>
                                <span className="hour">07:30 08:00</span>
                            </li>
                            <li>
                                <span className="hour">08:00 08:30</span>
                            </li>
                            <li>
                                <span className="hour">08:30 09:00</span>
                            </li>
                            <li>
                                <span className="hour">09:00 09:30</span>
                            </li>
                            <li>
                                <span className="hour">09:30 10:00</span>
                            </li>
                            <li>
                                <span className="hour">10:00 10:30</span>
                            </li>
                            <li>
                                <span className="hour">10:30 11:00</span>
                            </li>
                            <li>
                                <span className="hour">11:00 11:30</span>
                            </li>
                            <li>
                                <span className="hour">11:30 12:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Manhã</a>
                        <ul>
                            <li>
                                <span className="hour">06:00 06:30</span>
                            </li>
                            <li>
                                <span className="hour">06:30 07:00</span>
                            </li>
                            <li>
                                <span className="hour">07:00 07:30</span>
                            </li>
                            <li>
                                <span className="hour">07:30 08:00</span>
                            </li>
                            <li>
                                <span className="hour">08:00 08:30</span>
                            </li>
                            <li>
                                <span className="hour">08:30 09:00</span>
                            </li>
                            <li>
                                <span className="hour">09:00 09:30</span>
                            </li>
                            <li>
                                <span className="hour">09:30 10:00</span>
                            </li>
                            <li>
                                <span className="hour">10:00 10:30</span>
                            </li>
                            <li>
                                <span className="hour">10:30 11:00</span>
                            </li>
                            <li>
                                <span className="hour">11:00 11:30</span>
                            </li>
                            <li>
                                <span className="hour">11:30 12:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Manhã</a>
                        <ul>
                            <li>
                                <span className="hour">06:00 06:30</span>
                            </li>
                            <li>
                                <span className="hour">06:30 07:00</span>
                            </li>
                            <li>
                                <span className="hour">07:00 07:30</span>
                            </li>
                            <li>
                                <span className="hour">07:30 08:00</span>
                            </li>
                            <li>
                                <span className="hour">08:00 08:30</span>
                            </li>
                            <li>
                                <span className="hour">08:30 09:00</span>
                            </li>
                            <li>
                                <span className="hour">09:00 09:30</span>
                            </li>
                            <li>
                                <span className="hour">09:30 10:00</span>
                            </li>
                            <li>
                                <span className="hour">10:00 10:30</span>
                            </li>
                            <li>
                                <span className="hour">10:30 11:00</span>
                            </li>
                            <li>
                                <span className="hour">11:00 11:30</span>
                            </li>
                            <li>
                                <span className="hour">11:30 12:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Manhã</a>
                        <ul>
                            <li>
                                <span className="hour">06:00 06:30</span>
                            </li>
                            <li>
                                <span className="hour">06:30 07:00</span>
                            </li>
                            <li>
                                <span className="hour">07:00 07:30</span>
                            </li>
                            <li>
                                <span className="hour">07:30 08:00</span>
                            </li>
                            <li>
                                <span className="hour">08:00 08:30</span>
                            </li>
                            <li>
                                <span className="hour">08:30 09:00</span>
                            </li>
                            <li>
                                <span className="hour">09:00 09:30</span>
                            </li>
                            <li>
                                <span className="hour">09:30 10:00</span>
                            </li>
                            <li>
                                <span className="hour">10:00 10:30</span>
                            </li>
                            <li>
                                <span className="hour">10:30 11:00</span>
                            </li>
                            <li>
                                <span className="hour">11:00 11:30</span>
                            </li>
                            <li>
                                <span className="hour">11:30 12:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Manhã</a>
                        <ul>
                            <li>
                                <span className="hour">06:00 06:30</span>
                            </li>
                            <li>
                                <span className="hour">06:30 07:00</span>
                            </li>
                            <li>
                                <span className="hour">07:00 07:30</span>
                            </li>
                            <li>
                                <span className="hour">07:30 08:00</span>
                            </li>
                            <li>
                                <span className="hour">08:00 08:30</span>
                            </li>
                            <li>
                                <span className="hour">08:30 09:00</span>
                            </li>
                            <li>
                                <span className="hour">09:00 09:30</span>
                            </li>
                            <li>
                                <span className="hour">09:30 10:00</span>
                            </li>
                            <li>
                                <span className="hour">10:00 10:30</span>
                            </li>
                            <li>
                                <span className="hour">10:30 11:00</span>
                            </li>
                            <li>
                                <span className="hour">11:00 11:30</span>
                            </li>
                            <li>
                                <span className="hour">11:30 12:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Manhã</a>
                        <ul>
                            <li>
                                <span className="hour">06:00 06:30</span>
                            </li>
                            <li>
                                <span className="hour">06:30 07:00</span>
                            </li>
                            <li>
                                <span className="hour">07:00 07:30</span>
                            </li>
                            <li>
                                <span className="hour">07:30 08:00</span>
                            </li>
                            <li>
                                <span className="hour">08:00 08:30</span>
                            </li>
                            <li>
                                <span className="hour">08:30 09:00</span>
                            </li>
                            <li>
                                <span className="hour">09:00 09:30</span>
                            </li>
                            <li>
                                <span className="hour">09:30 10:00</span>
                            </li>
                            <li>
                                <span className="hour">10:00 10:30</span>
                            </li>
                            <li>
                                <span className="hour">10:30 11:00</span>
                            </li>
                            <li>
                                <span className="hour">11:00 11:30</span>
                            </li>
                            <li>
                                <span className="hour">11:30 12:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Manhã</a>
                        <ul>
                            <li>
                                <span className="hour">06:00 06:30</span>
                            </li>
                            <li>
                                <span className="hour">06:30 07:00</span>
                            </li>
                            <li>
                                <span className="hour">07:00 07:30</span>
                            </li>
                            <li>
                                <span className="hour">07:30 08:00</span>
                            </li>
                            <li>
                                <span className="hour">08:00 08:30</span>
                            </li>
                            <li>
                                <span className="hour">08:30 09:00</span>
                            </li>
                            <li>
                                <span className="hour">09:00 09:30</span>
                            </li>
                            <li>
                                <span className="hour">09:30 10:00</span>
                            </li>
                            <li>
                                <span className="hour">10:00 10:30</span>
                            </li>
                            <li>
                                <span className="hour">10:30 11:00</span>
                            </li>
                            <li>
                                <span className="hour">11:00 11:30</span>
                            </li>
                            <li>
                                <span className="hour">11:30 12:00</span>
                            </li>
                        </ul> 
                    </li>   
                </ul>
            </nav>
            <nav className="list">
                <ul className="menu">
                    <li className="listItem"><a className="periodo">Tarde</a>
                        <ul>
                            <li>
                                <span className="hour">12:00 12:30</span>
                            </li>
                            <li>
                                <span className="hour">12:30 13:00</span>
                            </li>
                            <li>
                                <span className="hour">13:00 13:30</span>
                            </li>
                            <li>
                                <span className="hour">13:30 14:00</span>
                            </li>
                            <li>
                                <span className="hour">14:00 14:30</span>
                            </li>
                            <li>
                                <span className="hour">14:30 15:00</span>
                            </li>
                            <li>
                                <span className="hour">15:00 15:30</span>
                            </li>
                            <li>
                                <span className="hour">15:30 16:00</span>
                            </li>
                            <li>
                                <span className="hour">16:00 16:30</span>
                            </li>
                            <li>
                                <span className="hour">16:30 17:00</span>
                            </li>
                            <li>
                                <span className="hour">17:00 17:30</span>
                            </li>
                            <li>
                                <span className="hour">17:30 18:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Tarde</a>
                        <ul>
                            <li>
                                <span className="hour">12:00 12:30</span>
                            </li>
                            <li>
                                <span className="hour">12:30 13:00</span>
                            </li>
                            <li>
                                <span className="hour">13:00 13:30</span>
                            </li>
                            <li>
                                <span className="hour">13:30 14:00</span>
                            </li>
                            <li>
                                <span className="hour">14:00 14:30</span>
                            </li>
                            <li>
                                <span className="hour">14:30 15:00</span>
                            </li>
                            <li>
                                <span className="hour">15:00 15:30</span>
                            </li>
                            <li>
                                <span className="hour">15:30 16:00</span>
                            </li>
                            <li>
                                <span className="hour">16:00 16:30</span>
                            </li>
                            <li>
                                <span className="hour">16:30 17:00</span>
                            </li>
                            <li>
                                <span className="hour">17:00 17:30</span>
                            </li>
                            <li>
                                <span className="hour">17:30 18:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Tarde</a>
                        <ul>
                            <li>
                                <span className="hour">12:00 12:30</span>
                            </li>
                            <li>
                                <span className="hour">12:30 13:00</span>
                            </li>
                            <li>
                                <span className="hour">13:00 13:30</span>
                            </li>
                            <li>
                                <span className="hour">13:30 14:00</span>
                            </li>
                            <li>
                                <span className="hour">14:00 14:30</span>
                            </li>
                            <li>
                                <span className="hour">14:30 15:00</span>
                            </li>
                            <li>
                                <span className="hour">15:00 15:30</span>
                            </li>
                            <li>
                                <span className="hour">15:30 16:00</span>
                            </li>
                            <li>
                                <span className="hour">16:00 16:30</span>
                            </li>
                            <li>
                                <span className="hour">16:30 17:00</span>
                            </li>
                            <li>
                                <span className="hour">17:00 17:30</span>
                            </li>
                            <li>
                                <span className="hour">17:30 18:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Tarde</a>
                        <ul>
                            <li>
                                <span className="hour">12:00 12:30</span>
                            </li>
                            <li>
                                <span className="hour">12:30 13:00</span>
                            </li>
                            <li>
                                <span className="hour">13:00 13:30</span>
                            </li>
                            <li>
                                <span className="hour">13:30 14:00</span>
                            </li>
                            <li>
                                <span className="hour">14:00 14:30</span>
                            </li>
                            <li>
                                <span className="hour">14:30 15:00</span>
                            </li>
                            <li>
                                <span className="hour">15:00 15:30</span>
                            </li>
                            <li>
                                <span className="hour">15:30 16:00</span>
                            </li>
                            <li>
                                <span className="hour">16:00 16:30</span>
                            </li>
                            <li>
                                <span className="hour">16:30 17:00</span>
                            </li>
                            <li>
                                <span className="hour">17:00 17:30</span>
                            </li>
                            <li>
                                <span className="hour">17:30 18:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Tarde</a>
                        <ul>
                            <li>
                                <span className="hour">12:00 12:30</span>
                            </li>
                            <li>
                                <span className="hour">12:30 13:00</span>
                            </li>
                            <li>
                                <span className="hour">13:00 13:30</span>
                            </li>
                            <li>
                                <span className="hour">13:30 14:00</span>
                            </li>
                            <li>
                                <span className="hour">14:00 14:30</span>
                            </li>
                            <li>
                                <span className="hour">14:30 15:00</span>
                            </li>
                            <li>
                                <span className="hour">15:00 15:30</span>
                            </li>
                            <li>
                                <span className="hour">15:30 16:00</span>
                            </li>
                            <li>
                                <span className="hour">16:00 16:30</span>
                            </li>
                            <li>
                                <span className="hour">16:30 17:00</span>
                            </li>
                            <li>
                                <span className="hour">17:00 17:30</span>
                            </li>
                            <li>
                                <span className="hour">17:30 18:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Tarde</a>
                        <ul>
                            <li>
                                <span className="hour">12:00 12:30</span>
                            </li>
                            <li>
                                <span className="hour">12:30 13:00</span>
                            </li>
                            <li>
                                <span className="hour">13:00 13:30</span>
                            </li>
                            <li>
                                <span className="hour">13:30 14:00</span>
                            </li>
                            <li>
                                <span className="hour">14:00 14:30</span>
                            </li>
                            <li>
                                <span className="hour">14:30 15:00</span>
                            </li>
                            <li>
                                <span className="hour">15:00 15:30</span>
                            </li>
                            <li>
                                <span className="hour">15:30 16:00</span>
                            </li>
                            <li>
                                <span className="hour">16:00 16:30</span>
                            </li>
                            <li>
                                <span className="hour">16:30 17:00</span>
                            </li>
                            <li>
                                <span className="hour">17:00 17:30</span>
                            </li>
                            <li>
                                <span className="hour">17:30 18:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Tarde</a>
                        <ul>
                            <li>
                                <span className="hour">12:00 12:30</span>
                            </li>
                            <li>
                                <span className="hour">12:30 13:00</span>
                            </li>
                            <li>
                                <span className="hour">13:00 13:30</span>
                            </li>
                            <li>
                                <span className="hour">13:30 14:00</span>
                            </li>
                            <li>
                                <span className="hour">14:00 14:30</span>
                            </li>
                            <li>
                                <span className="hour">14:30 15:00</span>
                            </li>
                            <li>
                                <span className="hour">15:00 15:30</span>
                            </li>
                            <li>
                                <span className="hour">15:30 16:00</span>
                            </li>
                            <li>
                                <span className="hour">16:00 16:30</span>
                            </li>
                            <li>
                                <span className="hour">16:30 17:00</span>
                            </li>
                            <li>
                                <span className="hour">17:00 17:30</span>
                            </li>
                            <li>
                                <span className="hour">17:30 18:00</span>
                            </li>
                        </ul> 
                    </li>   
                </ul>
            </nav>
            <nav className="list">
                <ul className="menu">
                    <li className="listItem"><a className="periodo">Noite</a>
                        <ul>
                            <li>
                                <span className="hour">18:00 18:30</span>
                            </li>
                            <li>
                                <span className="hour">18:30 19:00</span>
                            </li>
                            <li>
                                <span className="hour">19:00 19:30</span>
                            </li>
                            <li>
                                <span className="hour">19:30 20:00</span>
                            </li>
                            <li>
                                <span className="hour">20:00 20:30</span>
                            </li>
                            <li>
                                <span className="hour">20:30 21:00</span>
                            </li>
                            <li>
                                <span className="hour">21:00 21:30</span>
                            </li>
                            <li>
                                <span className="hour">21:30 22:00</span>
                            </li>
                            <li>
                                <span className="hour">22:00 22:30</span>
                            </li>
                            <li>
                                <span className="hour">22:30 23:00</span>
                            </li>
                            <li>
                                <span className="hour">23:00 23:30</span>
                            </li>
                            <li>
                                <span className="hour">23:30 00:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Noite</a>
                        <ul>
                            <li>
                                <span className="hour">18:00 18:30</span>
                            </li>
                            <li>
                                <span className="hour">18:30 19:00</span>
                            </li>
                            <li>
                                <span className="hour">19:00 19:30</span>
                            </li>
                            <li>
                                <span className="hour">19:30 20:00</span>
                            </li>
                            <li>
                                <span className="hour">20:00 20:30</span>
                            </li>
                            <li>
                                <span className="hour">20:30 21:00</span>
                            </li>
                            <li>
                                <span className="hour">21:00 21:30</span>
                            </li>
                            <li>
                                <span className="hour">21:30 22:00</span>
                            </li>
                            <li>
                                <span className="hour">22:00 22:30</span>
                            </li>
                            <li>
                                <span className="hour">22:30 23:00</span>
                            </li>
                            <li>
                                <span className="hour">23:00 23:30</span>
                            </li>
                            <li>
                                <span className="hour">23:30 00:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Noite</a>
                        <ul>
                            <li>
                                <span className="hour">18:00 18:30</span>
                            </li>
                            <li>
                                <span className="hour">18:30 19:00</span>
                            </li>
                            <li>
                                <span className="hour">19:00 19:30</span>
                            </li>
                            <li>
                                <span className="hour">19:30 20:00</span>
                            </li>
                            <li>
                                <span className="hour">20:00 20:30</span>
                            </li>
                            <li>
                                <span className="hour">20:30 21:00</span>
                            </li>
                            <li>
                                <span className="hour">21:00 21:30</span>
                            </li>
                            <li>
                                <span className="hour">21:30 22:00</span>
                            </li>
                            <li>
                                <span className="hour">22:00 22:30</span>
                            </li>
                            <li>
                                <span className="hour">22:30 23:00</span>
                            </li>
                            <li>
                                <span className="hour">23:00 23:30</span>
                            </li>
                            <li>
                                <span className="hour">23:30 00:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Noite</a>
                        <ul>
                            <li>
                                <span className="hour">18:00 18:30</span>
                            </li>
                            <li>
                                <span className="hour">18:30 19:00</span>
                            </li>
                            <li>
                                <span className="hour">19:00 19:30</span>
                            </li>
                            <li>
                                <span className="hour">19:30 20:00</span>
                            </li>
                            <li>
                                <span className="hour">20:00 20:30</span>
                            </li>
                            <li>
                                <span className="hour">20:30 21:00</span>
                            </li>
                            <li>
                                <span className="hour">21:00 21:30</span>
                            </li>
                            <li>
                                <span className="hour">21:30 22:00</span>
                            </li>
                            <li>
                                <span className="hour">22:00 22:30</span>
                            </li>
                            <li>
                                <span className="hour">22:30 23:00</span>
                            </li>
                            <li>
                                <span className="hour">23:00 23:30</span>
                            </li>
                            <li>
                                <span className="hour">23:30 00:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Noite</a>
                        <ul>
                            <li>
                                <span className="hour">18:00 18:30</span>
                            </li>
                            <li>
                                <span className="hour">18:30 19:00</span>
                            </li>
                            <li>
                                <span className="hour">19:00 19:30</span>
                            </li>
                            <li>
                                <span className="hour">19:30 20:00</span>
                            </li>
                            <li>
                                <span className="hour">20:00 20:30</span>
                            </li>
                            <li>
                                <span className="hour">20:30 21:00</span>
                            </li>
                            <li>
                                <span className="hour">21:00 21:30</span>
                            </li>
                            <li>
                                <span className="hour">21:30 22:00</span>
                            </li>
                            <li>
                                <span className="hour">22:00 22:30</span>
                            </li>
                            <li>
                                <span className="hour">22:30 23:00</span>
                            </li>
                            <li>
                                <span className="hour">23:00 23:30</span>
                            </li>
                            <li>
                                <span className="hour">23:30 00:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Noite</a>
                        <ul>
                            <li>
                                <span className="hour">18:00 18:30</span>
                            </li>
                            <li>
                                <span className="hour">18:30 19:00</span>
                            </li>
                            <li>
                                <span className="hour">19:00 19:30</span>
                            </li>
                            <li>
                                <span className="hour">19:30 20:00</span>
                            </li>
                            <li>
                                <span className="hour">20:00 20:30</span>
                            </li>
                            <li>
                                <span className="hour">20:30 21:00</span>
                            </li>
                            <li>
                                <span className="hour">21:00 21:30</span>
                            </li>
                            <li>
                                <span className="hour">21:30 22:00</span>
                            </li>
                            <li>
                                <span className="hour">22:00 22:30</span>
                            </li>
                            <li>
                                <span className="hour">22:30 23:00</span>
                            </li>
                            <li>
                                <span className="hour">23:00 23:30</span>
                            </li>
                            <li>
                                <span className="hour">23:30 00:00</span>
                            </li>
                        </ul> 
                    </li>
                    <li className="listItem"><a className="periodo">Noite</a>
                        <ul>
                            <li>
                                <span className="hour">18:00 18:30</span>
                            </li>
                            <li>
                                <span className="hour">18:30 19:00</span>
                            </li>
                            <li>
                                <span className="hour">19:00 19:30</span>
                            </li>
                            <li>
                                <span className="hour">19:30 20:00</span>
                            </li>
                            <li>
                                <span className="hour">20:00 20:30</span>
                            </li>
                            <li>
                                <span className="hour">20:30 21:00</span>
                            </li>
                            <li>
                                <span className="hour">21:00 21:30</span>
                            </li>
                            <li>
                                <span className="hour">21:30 22:00</span>
                            </li>
                            <li>
                                <span className="hour">22:00 22:30</span>
                            </li>
                            <li>
                                <span className="hour">22:30 23:00</span>
                            </li>
                            <li>
                                <span className="hour">23:00 23:30</span>
                            </li>
                            <li>
                                <span className="hour">23:30 00:00</span>
                            </li>
                        </ul> 
                    </li>   
                </ul>
            </nav>
        </>
    )
}
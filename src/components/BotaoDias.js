function BotaoDias({style, dia, show, semana}) {
    return (
        <li className="listItem">
            <button className={style} onClick={show}>{semana}<br></br>{dia}</button>
        </li>
    )
}

export default BotaoDias
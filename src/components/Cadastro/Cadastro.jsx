import '../../styles/Cadastro.css'

function Cadastro() {
    return (

        <div className= "cadastroContainer">
            <h1>Cadastros</h1>
            <form>
                <div>
                    <label for='nome'>Nome: </label>
                    <br></br>
                    <input type='text' id='nome' name='nome'></input>
                </div>
                <div className='inputs'>
                    <label className='inputs' for='sobrenome'>Sobrenome: </label>
                    <br></br>                
                    <input type='text' id='sobrenome' name='sobrenome'></input>
                </div>
                <input className='inputs' type='submit' value='submit'></input>
            </form>
        </div>
    )
}

export default Cadastro
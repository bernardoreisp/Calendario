import {useState} from 'react'
import '../../styles/Cadastro.css'

function Cadastro() {

    const cadastros = []
    const [cadastro, setCadastro] = useState({})
    const [image, setImage] = useState('')

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setCadastro({ ...cadastro, [name]: value })
        setImage(e.target.files[0])
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        Object.fromEntries(formData)
        cadastros.push(cadastro)
        console.log(cadastros)
    }

    return (

        <div className= "cadastroContainer">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    {image ? <img className='imagemCadastro' src={URL.createObjectURL(image)} alt='imagem' /> : <img className='imagemCadastro' src={'./iconeUsuario.jpg'} alt='Imagem' />}
                    <br></br>
                    <input className='inputFoto' type='file' name='foto' onChange={handleInputChange} value={cadastro.foto || ''} />
                </div>
                <div className='inputCadastros'>
                    <span>Nome: </span>
                    <br></br>
                    <input type='text' name='nome' onChange={handleInputChange} value={cadastro.nome || ''}/>
                </div>
                <br></br>
                <div>
                    <span>Sobrenome: </span>
                    <br></br>
                    <input type='text' name='sobrenome' onChange={handleInputChange} value={cadastro.sobrenome || ''}/>
                </div>
                <br></br>
                <button type='submit' className='botaoSubmit' >Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro
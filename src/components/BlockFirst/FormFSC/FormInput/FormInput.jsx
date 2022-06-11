import './FormInput.css'

export default function FormInput(){
    return(
        <div className="forminput">
            <form action="form" className='inputRequest'>
                <h1>Вход</h1>
                <input type="text" placeholder="Электронная почта" required/>
                <input type="text" name="" id="" placeholder="Пароль"/>
                <button>ВХОД</button>
            </form>
        </div>
    )
}
import './FormInput.css'

export default function FormInput(){
    return(
        <div className="forminput">
            <form action="form" className='inputRequest'>
                <div className='namebutton'>
                    <button>Войти</button>
                    <button>Регистрация</button>
                </div>
                <input type="text" placeholder="Электронная почта" required/>
                <input type="text" name="" id="" placeholder="Пароль"/>
                <button className='buttonform'>ВОЙТИ</button>
            </form>
        </div>
    )
}
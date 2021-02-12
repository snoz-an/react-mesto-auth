import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';

function Register({onRegister}) {
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  
    const [message, setMessage] = React.useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  

  /*function handleSubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password) {
      return;
    }
    onRegister(data.email, data.password)
  }*/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email, data.password) {
      onRegister(data)
        .then(()=>{})
        .catch((error)=>setMessage(error.message) || 'ошибка при регистрации')
    }
    
  }
 
    return (
        <form onSubmit={handleSubmit} className="register">
          <h2 className="register__header">Регистрация</h2>
          
          <input className="register__input" id="email" placeholder="Email" name="email" type="email" value={data.email} onChange={handleChange} />
          
          <input className="register__input" id="password" placeholder="Пароль" name="password" type="password" value={data.password} onChange={handleChange} />
          
         
            <button type="submit" onSubmit={handleSubmit} className="register__button">Зарегистрироваться</button>
          
          <Link to="/sign-in" className="register__login-link">Уже зарегистрированы? Войти</Link>
        </form>
         
  );
  

}

export default withRouter(Register);
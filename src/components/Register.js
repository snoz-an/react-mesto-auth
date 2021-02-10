import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';

function Register({onRegister}) {
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  /*const handleChangeCals = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  /*const handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword){
        let (password, email) = data;
        
      /*auth.register(this.state.username, this.state.password, this.state.email, this.state.calGoal).then((res) => {
        if(res){
          this.props.history.push('/login');
        } else {
          console.log('Произошла ошибка.');
        }
      });*/
   // }
  //}

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password) {
      return;
    }
    onRegister(data.email, data.password)
  }
 
    return (
        <form onSubmit={handleSubmit} className="register">
          <h2 className="register__header">Регистрация</h2>
          
          <input id="email" placeholder="Email" name="email" type="email" value={data.email} onChange={handleChange} />
          
          <input id="password" placeholder="Пароль" name="password" type="password" value={data.password} onChange={handleChange} />
          
         
            <button type="submit" onSubmit={handleSubmit} className="register__button">Зарегистрироваться</button>
          
          <Link to="/sign-in" className="register__login-link">Уже зарегистрированы? Войти</Link>
        </form>
         
  );
  

}

export default withRouter(Register);
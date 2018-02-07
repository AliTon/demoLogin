import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "",
            email: "",
            password: "",
            errors: {
                username: 'poxac4',
                email: 'kjskj',
                password: 'sssss'
            }

        }

    }

    onAddLogin(e){

        const rename =  new RegExp('/w{4,}d{2}[!,@,#,$,%,&]{1}/');

        const emailRegex = new RegExp('/w{4,}d{2}[!,@,#,$,%,&]{1}/');

        const  repass =  new RegExp('/\w{4,}\d{2}[!,@,#,$,%,&]{1}/');

        const {username,email,password} = this.state;

        if(name.match(rename) && this.email.match(emailRegex) && password.match(repass)){alert("tochni e")
            } else alert("ERROR!!!!!!")
    }


    onUserNameChange(e){
        var name = e.target.value;
        this.setState({username:name})
        console.log(name)
        if(name == ""){ this.setState({errors:{username:'lracnel'}})}
    }


    onEmailChange(e){
        var email = e.target.value;
        this.setState({email:email})
        console.log(email)
        if(email == ""){ this.setState({errors:{email:'lracnel'}})}

        }

    onPasswordChange(e){
        var password = e.target.value;
        this.setState({password:password})
        console.log(password)
            if(password == ""){ this.setState({errors:{password:'lracnel'}})}

            }

    render(){
        return (
            <form className = 'loginform'>
                <input type="text"
                       placeholder="username"
                       onBlur = {(e) => this.onUserNameChange(e)}/>
            <span>{this.state.errors.username} </span>

        <br/>
                <input type="text"
                       placeholder="email"
                       onBlur = {(e) => this.onEmailChange(e)}/>
        <span>{this.state.errors.email} </span>

        <br/>
                <input type="password"
                       placeholder="password"
                       maxLength="12"
                       onBlur = {(e) => this.onPasswordChange(e)}/>
        <span>{this.state.errors.password} </span>

                <button onClick = {this.onAddLogin.bind(this)}>Submit </button>

        </form>
              );
    }
}

export default Login;

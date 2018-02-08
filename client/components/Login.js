import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "",
            email: "",
            password: "",
            errors: {
                        username: '',
                        email: '',
                        password: ''
            }

        }

    }



    onUserNameChange(e){
        const rename =  /^[a-z0-9_-]{8}$/;
        var name = e.target.value;
        this.setState({username:name})
        if(!name.match(rename)){
            this.setState({errors:{username:"Please Enter Valid username"}});
        }else {
            this.setState({errors:{email:""}});
        }    }


    onEmailChange(e){
        const emailRegExp =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var email = e.target.value;
        this.setState({email:email})
        if(!email.match(emailRegExp)){
            this.setState({errors:{email:"Please Enter Valid Email"}});
        }else {
            this.setState({errors:{username:""}});
              }

        }

    onPasswordChange(e){
        const  repass = /\w{5}\d{2}[!@#$%&]{1}/;
        var password = e.target.value;
        this.setState({password:password})
        if(!password.match(repass)){
            this.setState({errors:{password:"Please Enter Valid password"}});
        }else {
            this.setState({errors:{password:""}});
        }
            }


    onAddLogin(e){

        const {username,email,password} = this.state;

        if(name.match(rename) && this.email.match(emailRegex) && password.match(repass)){alert("it/'s ok")
        } else alert("ERROR!!!!!!Please Enter Valid Data")
    }

    render(){
        return (
            <form className = 'loginform'>
                <input type="text"
                       placeholder="username"
                       onChange = {(e) => this.onUserNameChange(e)}/> <br/>
            <span>{this.state.errors.username} </span>

        <br/>
                <input type="text"
                       placeholder="email"
                       onChange = {(e) => this.onEmailChange(e)}/> <br/>
        <span>{this.state.errors.email} </span>

        <br/>
                <input type="password"
                       placeholder="password"
                       maxLength="12"
                       onChange = {(e) => this.onPasswordChange(e)}/><br/>
            <span>{this.state.errors.password} </span><br/>

                <button onClick = {this.onAddLogin.bind(this)}>Submit </button>

        </form>
              );
    }
}

export default Login;

import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super();
            this.state = {
                username:'',
                password:'',
            }
    }

    handleChange = ({target}) => {
        this.setState({
            [target.id]: target.value
        })
    }
      
    handleSubmit = () => {
        let {username, password} = this.state;
          alert(`username:${username} password:${password}`)
    }


    render() {

        let {username, password} = this.state;

        return (
            <div>
                <input id='username' value={username} type="text" className="textBox" onChange={this.handleChange}/>
                <input id='password' value={password} type="text" className="textBox" onChange={this.handleChange}/>
                <button onClick={ this.handleSubmit }>Login </button>
            </div>
        
        )
    }
}

export default Login;
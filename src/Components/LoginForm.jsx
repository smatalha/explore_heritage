// import React from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

// class LoginForm extends React.Component {
//     state = {
//         isNewUser: false,
//         username: '',
//         password: '',
//         confirmation: '',
//         name: '',

//     }

//     toggleNewUser = () => this.setState(prevState => ({ isNewUser: !prevState.isNewUser, username: '', password: '', name: '', confirmation: '' }))

//     handleChange = e => this.setState({ [e.target.name]: e.target.value })

//     handleSubmit = e => {
//          { isNewUser, password, confirmation, /*username*/ } = this.state;
//         isNewUser
//             ? password === confirmation ? this.props.history.push('/user') : alert('try again!')
//             : this.props.history.push('/sites')
//         /** TODO: when the user logs in, move them to our /pets page  */
//     }

//     renderLogin = () => {
//          { username, password } = this.state;
//         return (
//             <>
//                 <input name="username" placeholder="Username" value={username} onChange={this.handleChange} />
//                 <input name="password" placeholder="Password" type="password" value={password} onChange={this.handleChange} />
//             </>
//         )
//     }

//     renderSignup = () => {
//          { username, password, name, confirmation } = this.state;
//         return (
//             <>
//                 <input name="name" placeholder="Name" value={name} onChange={this.handleChange} />
//                 <input name="username" placeholder="Username" value={username} onChange={this.handleChange} />
//                 <input name="password" placeholder="Password" type="password" value={password} onChange={this.handleChange} />
//                 <input name="confirmation" placeholder="Confirm Password" type="password" value={confirmation} onChange={this.handleChange} />
//             </>
//         )
//     }

//     render() {
//         let { isNewUser } = this.state;
//         // console.log('IN AUTH', this.props.history) // routerProps are POWERFUL!!!
//         return (
//             <>
//             <div className="simple-flex-col">
//                 <h3>{isNewUser ? 'Sign Up' : 'Login'}</h3>
//                 {isNewUser ? this.renderSignup() : this.renderLogin()}
//                 <button type="submit" onClick={this.handleSubmit}>Submit</button>
//                 <div onClick={this.toggleNewUser}>{isNewUser ? "Login Instead" : "Sign Up Instead"}</div>
//             </div>


import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {
    state = {
        name: '',
        password: ''
    }
    render () {
        // console.log(props.history.push);
        const handleSingUp = () => {
            return (
                this.props.history.push('/SignUp')
            )
        }
        // const handleLogin = () => {
        //     return (
        //         this.props.history.push('/profile')
        //     )
        // }
        const handleChange = e => {
            this.setState({ [e.target.name]: e.target.value})
        }
        const handleSubmit = e => {
            e.preventDefault()
            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(this.state)
            })
            .then(res=> res.json())
            .then(res => {
                if (res.errors) {
                    alert(res.errors)
                } else {
                    this.props.setUser(res);
                }
            })
        }
        // console.log(this.state);
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/images/logo.jpeg' /> Log-in to your account
            </Header>
                    <Form size='large' onSubmit={handleSubmit}>
                        <Segment stacked>
                            <Form.Input
                                fluid icon='user'
                                name='name'
                                iconPosition='left'
                                placeholder='Name'
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name='password'
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={handleChange}
                            />
                            {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
                            <Button color='teal' fluid size='large' /*onClick={handleLogin}*/>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Button onClick={handleSingUp} >Sign Up</Button>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }

}
export default LoginForm

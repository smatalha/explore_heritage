import React, { Component } from 'react'
// import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { Button, Form, Grid, Header,  Segment } from 'semantic-ui-react'



class SignUp extends Component {

    state = {
        name: "",
        password: "",
        passwordConfirmation: '',
        bio: '',
        email: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        if (this.state.password === this.state.passwordConfirmation) {
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify({
                    name: this.state.name,
                    password: this.state.password,
                    bio: this.state.bio,
                    email: this.state.email
                })
            })
            .then(res => res.json())
            .then(res => {
                if (res.errors) {
                    alert(res.errors)
                } else {
                    this.props.setUser(res)
                }
            })
        } else {
            alert("password's don't match")
        }
    }
    handleLogin = () => {
        return (
            this.props.history.push('/users/:id')
        )
    }
    handleOldUser = () => {
        return (
            this.props.history.push('/login')
        )
    }
    render() {
        // console.log(this.props);
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' backgroun>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        {/* <Image src='/images/logo.jpeg' /> */}
                        <div className='title'>Sign Up</div>
                        <div className='already_user'>
                            <span>Already have an account? </span>
                            <a  href='/login'>Log In</a>
                        </div>
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input
                                fluid="true"
                                icon='user'
                                iconPosition='left'
                                placeholder='Name'
                                type='name'
                                name='name'
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid="true"
                                icon='mail'
                                name='email'
                                iconPosition='left'
                                onChange={this.handleChange}
                                placeholder='E-mail address'
                            />
                            <Form.Input
                                fluid="true"
                                icon='image'
                                name='img_url'
                                iconPosition='left'
                                onChange={this.handleChange}
                                placeholder='Image URL'
                                />
                            <Form.TextArea
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Bio'
                                type='bio'
                                name='bio'
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid="true"
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.handleChange}
                                name='password'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Confirm Password'
                                type='passwordConfirmation'
                                name='passwordConfirmation'
                                onChange={this.handleChange}
                            />
                            <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button color='teal' fluid size='large' >
                                SignUp
                        </Button>
                        </Segment>
                    </Form>
                    {/* <Message>
                        New to us? <Button onClick={handleSingUp} >Sign Up</Button>
                    </Message> */}
                </Grid.Column>
            </Grid>
            // <Segment placeholder>
            //     <div className="signup_form">
            //         <Grid columns={2} relaxed='very' stackable>
            //             <Grid.Column>
            //                 {/* <Divider vertical><h2>Ready to join the EventsInc community?</h2></Divider> */}
            //                 <Form>
            //                     <Form.Input
            //                         icon='user'
            //                         iconPosition='left'
            //                         label='Username'
            //                         placeholder='Pick a name, any name...'
            //                     /><br></br>
            //                     <Form.Input
            //                         icon='lock'
            //                         iconPosition='left'
            //                         label='Password'
            //                         type='password'
            //                         placeholder='Password123...NOT!'

            //                     /><br></br>

            //                     <Button content='Sign up' icon='signup' size='big' />


            //                 </Form>
            //             </Grid.Column>
            //             <Grid.Column verticalAlign='middle'>
            //             </Grid.Column>
            //         </Grid>
            //     </div>
            //     <br></br><br></br>



            // </Segment>

        )
    };
};




export default SignUp

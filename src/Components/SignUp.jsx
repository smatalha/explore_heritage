import React, { Component } from 'react'
// import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { Button, Form, Grid, Header,  Segment, Image } from 'semantic-ui-react'



class SignUp extends Component {

    state = {
        name: "",
        password: "",
        passwordConfirmation: '',
        img_url: '',
        bio: '',
        email: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        // console.log(this.state);
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' /*background*/>
                <Grid.Column style={{ maxWidth: 850 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/images/logo.jpeg'/>
                        <div className='title'> Sign Up </div>
                        <div className='already_user'>
                            <span>Already have an account? </span>
                            <a  href='/login'>Log In</a>
                        </div>
                    </Header>
                    <Form size='large' onSubmit={(e)=>this.props.handleSignupSubmit(e , this.state)}>
                        <Segment stacked>
                            <Form.Input
                                // fluid="true"
                                icon='user'
                                iconPosition='left'
                                placeholder='Name'
                                type='name'
                                name='name'
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                // fluid="true"
                                icon='mail'
                                name='email'
                                iconPosition='left'
                                onChange={this.handleChange}
                                placeholder='E-mail address'
                            />
                            <Form.Input
                                // fluid="true"
                                icon='image'
                                name='img_url'
                                iconPosition='left'
                                onChange={this.handleChange}
                                placeholder='Image URL'
                                />
                            <Form.TextArea
                                // fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Bio'
                                type='bio'
                                name='bio'
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                // fluid="true"
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.handleChange}
                                name='password'
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
        )
    };
};

export default SignUp
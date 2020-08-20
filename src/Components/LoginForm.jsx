import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {
    state = {
        name: '',
        password: ''
    }
    render () {
        const handleSingUp = () => {
            return (
                this.props.history.push('/SignUp')
            )
        }
        const handleChange = e => {
            this.setState({ [e.target.name]: e.target.value})
        }

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/images/logo.jpeg' /> Log-in to your account
            </Header>
                    <Form size='large' onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
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

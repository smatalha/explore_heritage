import React from 'react'
import { Grid, Image, Tab, Button } from 'semantic-ui-react'
import WishList from './WishList'

const Profile = (props) => {
    const { img_url, name, bio, sites, email } = props.user
    // console.log(props)
    const handleSubmitAction = () => {
        // return (
            localStorage.clear()
            props.history.push('/login')
        // )
    }
    return (
    <>
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={4}>
                        <Image src={img_url} size='large' style={{ height: 230 }} />
                    <h4>{email}</h4>
                </Grid.Column>
                <Grid.Column width={12}>
                    <h2>{name}</h2>
                    <p>{bio}</p>
                    <Button icon='edit'></Button>
                    <Button icon='log out' onClick={handleSubmitAction} ></Button>

                </Grid.Column>
            </Grid.Row>
        </Grid>
            <Tab.Pane> <h2>Wish List</h2></Tab.Pane>/
        <Grid columns={5} >
            <Grid.Row>
                {sites.map(site=>
                    <Grid.Column key={site.id}>
                            <Image src={site.image_url} />
                            <h2>{site.name}</h2>
                    </Grid.Column>
                )}
            </Grid.Row>
                <WishList {...props}/>
        </Grid>
    </>
    )
}

export default Profile

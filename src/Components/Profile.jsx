import React from 'react'
import { Grid, Image, Tab } from 'semantic-ui-react'

const Profile = (props) => {
    const { img_url, name, email, bio, sites } = props
    console.log(props)
    return (
    <>
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={3}>
                        <Image src={img_url} size='large' circular />
                </Grid.Column>
                <Grid.Column width={13}>
                    <h2>{name}</h2>
                    <h4>{email}</h4>
                    <p>{bio}</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
            {/* {/* <Tab.Pane>Tab 1 Content</Tab.Pane> */}
            <Tab.Pane> <h2>Wish List</h2></Tab.Pane> 

        <Grid columns={3} divided>
            <Grid.Row>
                {sites.map(site=>
                    <Grid.Column key={site.id}>
                            <Image src={site.image_url} />
                            <h2>{site.name}</h2>
                    </Grid.Column>
                )}
            </Grid.Row>
        </Grid>
    </>
    )
}

export default Profile
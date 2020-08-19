import React from 'react'
import { Grid, Image, Tab, Button } from 'semantic-ui-react'

const Profile = (props) => {
    const { img_url, name, bio, email } = props //sites,
    // console.log(sites)
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
                </Grid.Column>
            </Grid.Row>
        </Grid>
            {/* {/* <Tab.Pane>Tab 1 Content</Tab.Pane> */}
            <Tab.Pane> <h2>Wish List</h2></Tab.Pane>

        <Grid columns={5} >
            <Grid.Row>
                {/* {sites.map(site=>
                    <Grid.Column key={site.id}>
                            <Image src={site.image_url} />
                            <h2>{site.name}</h2>
                    </Grid.Column>
                )} */}
            </Grid.Row>
        </Grid>
    </>
    )
}

export default Profile

// import React from 'react'
// import { Item } from 'semantic-ui-react'

// const description = [
//   'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
//   'tiny stature, and even others for their massive size.',
// ].join(' ')

// const ItemExampleDescriptions = () => (
//   <Item.Group>
//     <Item>
//       <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

//       <Item.Content>
//         <Item.Header as='a'>Cute Dog</Item.Header>
//         <Item.Description>
//           <p>{description}</p>
//           <p>
//             Many people also have their own barometers for what makes a cute
//             dog.
//           </p>
//         </Item.Description>
//       </Item.Content>
//     </Item>

//     <Item>
//       <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

//       <Item.Content>
//         <Item.Header as='a'>Cute Dog</Item.Header>
//         <Item.Description content={description} />
//       </Item.Content>
//     </Item>

//     <Item>
//       <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
//       <Item.Content header='Cute Dog' description={description} />
//     </Item>
//   </Item.Group>
// )

// export default ItemExampleDescriptions

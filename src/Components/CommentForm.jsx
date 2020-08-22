import React from "react";
import { Button, Comment, Form } from "semantic-ui-react";

class CommentForm extends React.Component {
    state = {
        user: [],
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:3000/comments', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                content: this.state.content,
                user_id: localStorage.user_id,
                site_id: this.props.siteId,
            }),
        })
            .then((r) => r.json())
            .then((newComment) => {
                console.log(newComment);
                this.props.addComment(newComment);
                this.setState({
                    content: "",
                })
            });
    };
    handleRemoveComment = ( id ) => {
        // console.log('submit delete');
        fetch(`http://localhost:3000/comments/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        })
    }
    render () {
        console.log(this.props.comments);
        return (
            <Comment.Group>
                <Comment>
                <Comment.Avatar
                    as="a"
                    src="/images/pic.jpeg"
                />
                <Comment.Content>
                    {/* <Comment.Author> {this.props.user.name} </Comment.Author> */}
                    <Comment.Metadata>
                        <div>1 day ago</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        <ul>
                            {this.props.comments.map((comment) => (
                                <ol key={comment.id} id={comment.id}>
                                    {comment.content}
                                    <span role='img' aria-label="" onClick={() => this.handleRemoveComment(comment.id)}>❌</span>
                                </ol>
                            ))}
                        </ul>
                    </Comment.Text>
                </Comment.Content>
                </Comment>
                <Form reply onSubmit={this.handleSubmit} >
                <Form.TextArea onChange={this.handleChange}/>
                <Button content="Add Comment" labelPosition="left" icon="edit" primary />
                </Form>
            </Comment.Group>
        )
    }
}

export default CommentForm;

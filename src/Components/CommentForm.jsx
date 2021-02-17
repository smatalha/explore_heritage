import React from "react";
import { Button, Comment, Form } from "semantic-ui-react";

class CommentForm extends React.Component {
    state = {
        user: [],
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/sites', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                content: this.state.content,
            }),
        })
            .then((r) => r.json())
            .then((newComment) => {
                this.props.addComment(newComment);
                this.setState({
                    content: "",
                })
            });
    };
    render () {
        console.log(this.state);
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
                                <ol key={comment.id} >
                                    {comment.content}
                                    <Button >
                                        <span role='img' aria-label="" onClick={() => this.props.removeComment(comment.id)}> ❌ </span>
                                    </Button>
                                </ol>
                            ))}
                        </ul>
                    </Comment.Text>
                </Comment.Content>
                </Comment>
                <Form reply onSubmit={this.handleSubmit}>
                <Form.TextArea onChange={this.handleChange}/>
                <Button content="Add Comment" labelPosition="left" icon="edit" primary />
                </Form>
            </Comment.Group>
        )
    }
}

export default CommentForm;

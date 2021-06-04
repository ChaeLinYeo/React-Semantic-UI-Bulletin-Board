import React from 'react';
import Comm from './Comm';
import { Container, Header, Segment, Divider, Button, Form, Input } from 'semantic-ui-react'

class Detail extends React.Component {
    componentDidMount(){
        const{location, history}=this.props;
        if (location.state === undefined){   //location.state가 없는 경우(카드를 누르지 않고 주소창에서 디테일로 이동할경우)
            history.push('/');  //Home으로 이동시킴

        }
    }
    
    constructor() {
        super();
        this.inputCommentRef = React.createRef();
        this.state = {
           comments: []
     }
    }

    // inputComment = (e) => {
    //     e.preventDefault()
    //     const commentBox = [...this.state.comments]
    //     commentBox.push({id: Date.now(), user: "익명", content: this.inputCommentRef.current.value})
    //     this.setState({comments : commentBox})
    //     this.inputCommentRef.current.value = ""
    // }

    handleDelete = (event) => {
        const commentBox = [...this.state.comments]
        const filterBox = commentBox.filter((comm) => comm.id !== Number(event.target.className))
        this.setState({comments : filterBox})
    }

    // addComment(){
    //     let value = document.querySelector('#new-comment-content').value;
    //     this.setState({comments: [...this.state.comments, {
    //         uuid: this.state.comments.length + 1,
    //         writer: '여채린',
    //         date: new Date().toISOString().slice(0, 10),
    //         content: value
    //     }]})
    // }

    

    inputComment = (e) =>{
        e.preventDefault()
        // let value = document.querySelector('#new-comment-content').value;
        // this.setState({comments: [...this.state.comments, {
        //     id: this.state.comments.length + 1,
        //     user: '여채린',
        //     date: new Date().toISOString().slice(0, 10),
        //     content: value
        // }]})

        const commentBox = [...this.state.comments, {
            id: Date.now(),
            user: "익명",
            date: new Date().toISOString().slice(0, 10),
            content: this.inputCommentRef.current.value
        }]
        // commentBox.push({id: Date.now(), user: "익명", date: new Date().toISOString().slice(0, 10), content: this.inputCommentRef.current.value})
        this.setState({comments : commentBox})
        this.inputCommentRef.current.value = "" //댓글 작성후 입력창 초기화
    }





    


    render(){
        const {location}=this.props;
        if (location.state){
            return(
                <Container text>
                    <Segment>
                        <Header as='h1' floated='middle'>{location.state.title}</Header>
                        <Divider clearing/>
                        <p>작성자: {location.state.writer}</p>
                        <p>{location.state.content}</p>

                    <br />
                    <br />
                    <Header as='h4' dividing>댓글</Header>
                    <Comm commentList = {this.state.comments} onDelete={this.handleDelete}/>
                    
                    <div className="sta status_comment_input">
                    <Form onSubmit={this.inputComment}>
                        {/* <form class="ui reply form"> */}
                            {/* <div class="field"> */}
                                <input
                                    type="text"
                                    className="comment_input"
                                    placeholder="댓글 달기..."
                                    ref={this.inputCommentRef}
                                />
                                {/* <Input type="text" className="comment_input" placeholder="댓글 달기..." ref={this.inputCommentRef}></Input> */}
                            {/* </div> */}

                        {/* </form> */}
                        
                        <br />
                        <br />
                        <Button color='blue'><i aria-hidden="true" class="edit icon"></i>등록</Button>

                    </Form>  
                    </div>

                    </Segment>
                </Container>
            )
        }
    }
}

export default Detail;
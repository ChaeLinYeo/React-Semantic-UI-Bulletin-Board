import React from 'react';
import Comment from './Comment';
import { Component } from 'react';

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

    inputComment = (e) => {
        e.preventDefault()
        const commentBox = [...this.state.comments]
        commentBox.push({id: Date.now(), user: "익명", content: this.inputCommentRef.current.value})
        this.setState({comments : commentBox})
        this.inputCommentRef.current.value = ""
    }

    handleDelete = (event) => {
        const commentBox = [...this.state.comments]
        const filterBox = commentBox.filter((comment) => comment.id !== Number(event.target.className))
        this.setState({comments : filterBox})
    }

    addComment(){
        let value = document.querySelector('#new-comment-content').value;
        this.setState({comments: [...this.state.comments, {
            uuid: this.state.comments.length + 1,
            writer: '여채린',
            date: new Date().toISOString().slice(0, 10),
            content: value
        }]})
    }


    render(){
        const {location}=this.props;
        if (location.state){
            return(
                <div>
                    <h1>{location.state.title}</h1>
                    <div class="ui container">
                        <p>{location.state.content}</p>
                    </div>
                    
                    
                    {/* <Button></Button> */}

                    {/* <div class="ui comments">
                        <div class="comment">
                            <a class="avatar">
                                <img src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"/></a>
                                <div class="content">
                                    <a class="author">Steve Jobes</a>
                                    <div class="metadata">
                                        <div>2 days ago</div>
                                        </div>
                                        <div class="text">Revolutionary!</div>
                                        <div class="actions">
                                            <a class="active">Reply</a>
                                        </div>
                                        <form class="ui reply form">
                                            <div class="field">
                                                <textarea rows="3"></textarea>
                                            </div>
                                            <button class="ui icon primary left labeled button">
                                                <i aria-hidden="true" class="edit icon"></i>
                                                Add Reply
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div> */}
                    


                    <ul className="comments_container">
                        <Comment commentList = {this.state.comments} onDelete={this.handleDelete}/>
                    </ul>
                    <div className="sta status_comment_input">
                    <form onSubmit={this.inputComment}>
                        <form class="ui reply form">
                            <div class="field">
                                <input
                                    type="text"
                                    className="comment_input"
                                    placeholder="댓글 달기..."
                                    ref={this.inputCommentRef}
                                />
                            </div>
                        </form>


                        <button class="ui icon primary left labeled button">
                            <i aria-hidden="true" class="edit icon"></i>
                            등록
                        </button>
                    </form>  
                    </div>
                    
                </div>
            )
        }
    }
}

export default Detail;
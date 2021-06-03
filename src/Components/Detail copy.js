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
    
    constructor(props){
        super(props);
        this.state = {
            comments: [
                {
                    uuid: 1,
                    writer: "여채린",
                    date: "2021-06-03",
                    content: "만나서 반가워요."
                }
            ]
        }
        this.addComment = this.addComment.bind(this);
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
                    <p>{location.state.content}</p>
                    {/* <Button></Button> */}

                    <div>
                        <div id="writing-area">
                            <textarea id="new-comment-content"></textarea>
                            <button id="submit-new-comment" onClick={this.addComment}>새 글 쓰기</button>
                        </div>
                        <ul id="comments">
                            {
                                this.state.comments.map(comment => {
                                    return <Comment key = {comment.uuid} comment={comment}/>
                                })
                            }
                        </ul>
                    </div>
                    
                </div>
            )
        }
    }
}

export default Detail;
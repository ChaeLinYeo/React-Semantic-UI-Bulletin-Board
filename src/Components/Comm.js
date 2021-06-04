import React, { Component } from 'react';
import { Button, Comment, Header } from 'semantic-ui-react'
class Comm extends Component {

    handleDelete = (event) => {
      this.props.onDelete(event)
    }

    // handleModify = (event) => {
    //     this.props.onModify(event)
    // }

    render() {
        console.log(this.props.commentList)
        return (
           <> 
            {this.props.commentList.map((comm) => {
                return (
                <Comment.Group>
                    {/* <li key={comm.id}> */}
                    <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>{comm.user}</Comment.Author>
                            <Comment.Metadata>{comm.date}</Comment.Metadata>
                                {/* <a class="author">{comment.user}</a> */}
                                <div class="text">{comm.content}</div>
                                <div>
                                {/* <Button color='green' onClick={() => props.editPost(props.id)}><i aria-hidden="true" class="edit icon"></i>수정</Button> */}


                                {/* <button className={comm.id} onClick={this.handleModify}>수정</button> */}
                                <button className={comm.id} onClick={this.handleDelete}>삭제</button>
                                {/* <Button className={comm.id} onClick={this.handleDelete}>삭제</Button> */}
                                </div>
                            </Comment.Content>
                    </Comment>
                    {/* </li> */}
                </Comment.Group>
                )
            }
        )
        }
        </> 
        );
    }
}

export default Comm;
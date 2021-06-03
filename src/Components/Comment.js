import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
class Comment extends Component {

    handleDelete = (event) => {
      this.props.onDelete(event)
    }

    render() {
        console.log(this.props.commentList)
        return (
           <> 
            {this.props.commentList.map((comment) => {return (
                <li key={comment.id}>
                <a class="author">{comment.user}</a>
                <div class="text">{comment.content}</div>
                <div>
                   <button className={comment.id} onClick={this.handleDelete}>삭제</button>
                </div>

                {/* <Button className={comment.id} onClick={this.handleDelete}>삭제</Button> */}
                
                </li>)
                }
               )
            }
           </> 
        );
    }
}

export default Comment;
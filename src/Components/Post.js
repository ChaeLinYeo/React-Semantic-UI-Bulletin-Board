import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom' //페이지 이동
import { Button } from 'semantic-ui-react'

function Post(props) {
  const title = props.title
  const content = props.content
  const id = props.id
 return (
        <>
         <section className="post-container">
           <h3>{props.title}</h3>
            <p className="post-content">{props.content}</p>
              <div className="post-button">
                  <Button onClick={() => props.editPost(props.id)}>수정</Button>
                  <Button onClick={()=> {if(window.confirm("정말로 삭제하시겠습니까?"))props.deletePost(props.id)}}>삭제</Button>
                  {/* <Link to='/detail'>
                    <Button>내용보기</Button>
                  </Link> */}

                  <Link to = {{
                    pathname:`/detail/${id}`, 
                    state:{title, content}}}>
                    <Button>내용보기</Button>
                  </Link>
                  
            </div>
           </section>
        </>
    )
}

export default Post

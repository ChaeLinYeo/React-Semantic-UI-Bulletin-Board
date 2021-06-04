import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom' //페이지 이동
import { Segment, Header, Grid, Image, Card, Button } from 'semantic-ui-react'

function Post(props) {
  const title = props.title
  const writer = props.writer
  const content = props.content
  const id = props.id
  return (
        // <>
        //  <section className="post-container">
        //    <h3>{props.title}</h3>
        //     <p className="post-content">{props.content}</p>
        //       <div className="post-button">
        //           <Button onClick={() => props.editPost(props.id)}>수정</Button>
        //           <Button onClick={()=> {if(window.confirm("정말로 삭제하시겠습니까?"))props.deletePost(props.id)}}>삭제</Button>

        //           <Link to = {{
        //             pathname:`/detail/${id}`, 
        //             state:{title, content}}}>
        //             <Button>내용보기</Button>
        //           </Link>
                  
        //     </div>
        //    </section>
        // </>
        <div>
          <Grid padded>
              <Grid.Column >
                  <Segment>
                      <Link to = {{
                        pathname:`/detail/${id}`, 
                        state:{title, writer, content}}}>
                        <Header as="h1">{props.title}</Header>
                      </Link>
                      
                      <p>작성자: {props.writer}</p>
                      {/* <p>{props.excerpt}</p> */}
                      
                      <Button color='green' onClick={() => props.editPost(props.id)}><i aria-hidden="true" class="edit icon"></i>수정</Button>
                      <Button color='red' onClick={()=> {if(window.confirm("정말로 삭제하시겠습니까?"))props.deletePost(props.id)}}>삭제</Button>
                      
                  </Segment>
              </Grid.Column>
            </Grid>
        </div>
    )
}

export default Post

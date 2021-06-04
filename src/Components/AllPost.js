import React, { useState } from 'react'
// import '../App.css'
import CreatePost from './CreatePost'
import ModifyPost from './ModifyPost'
import Nopost from './Nopost'
import Post from './Post'
import { Button, Grid, Header, Divider, Pagination, Segment } from 'semantic-ui-react'

function AllPost() {
    // 함수형 컴포넌트에서는 useState 함수로 state를 사용한다.
    // useState 함수를 호출하면 배열이 반환되는데 첫 번째 원소는 현재 상태
    // 두 번째 원소는 상태를 바꾸어 주는 함수
    const[title, setTitle] =useState("")
    const[writer, setWriter] =useState("")
    const [content, setContent] = useState("")
    const[allPost, setAllPost] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const [isModified, setIsModified] = useState(false)
    const [edit, setEdit] = useState('')
    
    
    // save our title
    const savePostTitle = event =>{
        setTitle(event.target.value)
    }

    // save writer
    const saveWriter = event => {
        setWriter(event.target.value)
    }
     
    // save our content
    const saveContent = event =>{
        setContent(event.target.value)
    }

    // save our full post 
    const savePost = event =>{
        event.preventDefault()
        const id =Date.now()
        setAllPost([...allPost,{title, writer, content, id}])
        setTitle('')
        setContent('')
        toggleButton()
    }

    // toogle button
    const toggleButton = () =>{
        setIsCreated(!isCreated)
    }

    // modifypost
    const toogleModifyPost = () =>{
        setIsModified(!isModified)
    }

    // edit post function
    const editPost = id =>{
        setEdit(id)
        toogleModifyPost()
    }

    // updatepost function
    const updatePost = (event)=>{
        event.preventDefault() //it stop auto reload

        const updatePost = allPost.map(post =>{
            if(post.id===edit){
                return{
                    ...post,
                    title:title || post.title,
                    writer:writer || post.writer,
                    content:content || post.content
                }
            }
            return post
        })
        setAllPost(updatePost)
        toogleModifyPost()
    }

    // delete post function
    const deletePost = (id) =>{
        const modifypost = allPost.filter(post =>{
            return post.id !== id;
        })
        setAllPost(modifypost)
    }

    if(isCreated){
        return (
            <div>
                <CreatePost 
                savePostTitle={savePostTitle}
                saveWriter={saveWriter}
                saveContent={saveContent}
                savePost={savePost}
                />
            </div>
        )
    } 
    else if(isModified){
        const post = allPost.find(post =>{
            return post.id===edit;
        })
        return(
            <ModifyPost
            title={post.title}
            writer={post.writer}
            content={post.content}
            updatePost={updatePost}
            savePostTitle={savePostTitle}
            saveWriter={saveWriter}
            saveContent={saveContent}
            
            />
        )
    }
    console.log("setAllPost!!!!!!!!!!!!!!!!!!!!!!", allPost.content)
    
    return(
       <>
       {!allPost.length ? 
        <Nopost toggleButton={toggleButton}  />:
       ( <div>
           <Header as='h1' floated='middle'>모든 게시글</Header>
           <Divider clearing />
            <Button onClick={toggleButton}>게시글 작성</Button>
                {allPost.map(post => {
                    return(
                        <Post 
                        id={post.id}
                        key={post.id}
                        title={post.title}
                        writer={post.writer}
                        content={post.content}
                        savePostTitle={savePostTitle}
                        saveWriter={saveWriter}
                        saveContent={saveContent}
                        editPost={editPost}
                        deletePost={deletePost}
                        />
                    );
                })}    
        </div> 
        )} 
        </>
    );   
}
export default AllPost
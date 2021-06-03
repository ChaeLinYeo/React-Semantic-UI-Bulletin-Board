import React, { useState } from 'react'
import '../App.css'
import CreatePost from './CreatePost'
import ModifyPost from './ModifyPost'
import Nopost from './Nopost'
import Post from './Post'
import { Button, Grid } from 'semantic-ui-react'


function AllPost() {
    const[title, setTitle] =useState("")
    const [content, setContent] = useState("")
    const[allPost, setAllPost] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const [isModified, setIsModified] = useState(false)
    const [edit, setEdit] = useState('')
   
   
    // save our title
const savePostTitle =event =>{
    setTitle(event.target.value)
       
    }
     
// save our content
const saveContent = event =>{
 setContent(event.target.value)
   
}

// save our full post 
const savePost = event =>{
    event.preventDefault()
    const id =Date.now()
    setAllPost([...allPost,{title,content, id}])
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
            saveContent={saveContent}
            savePost={savePost}
             />
        </div>
    )
} else if(isModified){
    const post = allPost.find(post =>{
        return post.id===edit;
    })
    return(
        <ModifyPost
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        savePostTitle={savePostTitle}
        saveContent={saveContent}
        
        />
    )
}


return(
    
       <>
       {!allPost.length ? 
      <Nopost toggleButton={toggleButton}  /> :
          ( <div><h1>모든 게시글</h1>
            <Button onClick={toggleButton}>게시글 작성</Button>
              {/* all post section */}
            <section className="all-post">
             {allPost.map(post => {
                return(
                    <Post 
                    id={post.id}
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    savePostTitle={savePostTitle}
                    saveContent={saveContent}
                    editPost={editPost}
                    deletePost={deletePost}
                    />
                    );
                })}          
                </section>       
                </div> 
              )} 
            </>
          ); 
          
        };
export default AllPost
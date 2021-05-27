import React from 'react'
import '../App.css'

function Post(props) {
 return (
        <>
         <section className="post-container">
           <h3>{props.title}</h3>
            <p className="post-content">{props.content}</p>
              <div className="post-button">
                  <button className="button_orange" onClick={() =>props.editPost(props.id)}> Edit</button>
                   <button className="button_red" onClick={()=> {if(window.confirm("Are you sure you want to delete this post?"))props.deletePost(props.id)}} > delete</button>
            </div>
           </section>
        </>
    )
}

export default Post

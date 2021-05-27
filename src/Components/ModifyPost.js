import React from 'react'

function ModifyPost({title,content,updatePost, savePostTitle, saveContent}) {
    return (
        <div className="create-post">
           <form onSubmit={updatePost}>
                <h1>my post here</h1>
               <input type="text"onChange={savePostTitle}
               defaultValue={title}
               size="39" placeholder="title" required></input>
               <br />
               <br />
               <textarea type="text"onChange={saveContent}
               defaultValue={content} 
               placeholder="content" rows="8"           cols="41"required></textarea>
               <br />
               <br />
               <section className="button-wrapper">
                    <button className="button">ModifyPost</button>
               </section>
           </form>
        </div>
    )
}

export default ModifyPost

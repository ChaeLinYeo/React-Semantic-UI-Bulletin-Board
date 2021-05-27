
const CreatePost =({savePostTitle, saveContent, savePost})=> {
    return (
        <div className="create-post">
           <form onSubmit={savePost}>
                <h1>my post here</h1>
               <input type="text"onChange={savePostTitle} size="39" placeholder="title" required></input>
               <br />
               <br />
               <textarea type="text"onChange={saveContent} placeholder="content" rows="8"           cols="41"required></textarea>
               <br />
               <br />
               <section className="button-wrapper">
                    <button className="button">save post</button>
               </section>
           </form>
        </div>
    )
}

export default CreatePost

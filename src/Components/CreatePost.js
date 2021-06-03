import { Button } from 'semantic-ui-react'

const CreatePost =({savePostTitle, saveContent, savePost})=> {
    return (
        <div className="create-post">
           <form onSubmit={savePost}>
                <h1>게시글 작성하기</h1>
               <input type="text"onChange={savePostTitle} size="39" placeholder="제목" required></input>
               <br />
               <br />
               <textarea type="text"onChange={saveContent} placeholder="내용" rows="8" cols="41"required></textarea>
               <br />
               <br />
               <Button>저장</Button>
           </form>
        </div>
    )
}

export default CreatePost

import { Button } from 'semantic-ui-react'

function Nopost({toggleButton}) {
    return (
        <div>
     <section className="no-post">
         <div className="no_post_details">
         <h3>작성된 게시물이 없습니다.</h3>
          <br />
          <section className="buttin-wrapper">
          <Button onClick={toggleButton}>게시글 작성</Button>
          </section>
         </div>
     </section>
        </div>
    )
}

export default Nopost

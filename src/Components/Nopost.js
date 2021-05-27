

function Nopost({toggleButton}) {
    return (
        <div>
     <section className="no-post">
         <div className="no_post_details">
         <h3>I have Found Nothing here</h3>
          <br />
          <section className="buttin-wrapper">
          <button className="button"  onClick={toggleButton}>Make a post</button>
          </section>
         </div>
     </section>
        </div>
    )
}

export default Nopost

import { Button, Container, Segment, Input, Form, TextArea, Header, Divider } from 'semantic-ui-react'

const CreatePost =({savePostTitle, saveWriter, saveContent, savePost})=> {
    return (
        <>
        <Container text>
            <Segment>
           <form onSubmit={savePost}>
                <Header as='h1' floated='middle'>게시글 작성하기</Header>
                <Divider clearing/>
                <Input type="text" onChange={savePostTitle} size="39" placeholder='제목' required></Input>
                <Input type="text" onChange={saveWriter} size="39" placeholder='작성자' required></Input>
                <Form>
                   <TextArea type="text" onChange={saveContent} placeholder='내용' rows='8' cols='41' required></TextArea>
                </Form>
               <Button color='green'><i aria-hidden="true" class="edit icon"></i>저장</Button>
           </form>
           </Segment>
        </Container>

        </>
    )
}

export default CreatePost

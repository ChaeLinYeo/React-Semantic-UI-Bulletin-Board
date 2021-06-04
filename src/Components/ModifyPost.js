import React from 'react'
import { Button } from 'semantic-ui-react'
import { Container, Header, Segment, Input, Divider, Form, TextArea } from 'semantic-ui-react'

function ModifyPost({title, writer, content,updatePost, savePostTitle, saveWriter, saveContent}) {
    return (
        <Container text>
            <Segment>
           <form onSubmit={updatePost}>
                <Header as='h1' floated='center'>게시글 수정하기</Header>
                <Divider clearing/>
                <Input type="text" onChange={savePostTitle} defaultValue={title} size="39" placeholder="title" required></Input>
                <Input type="text" onChange={saveWriter} defaultValue={writer} size="39" placeholder="writer" required></Input>
                <Form>
                   <TextArea type="text" onChange={saveContent} defaultValue={content} placeholder="content" rows="8" cols="41" required></TextArea>
               </Form>
               <Button color='blue'><i aria-hidden="true" class="edit icon"></i>수정</Button>
           </form>
           </Segment>
           </Container>
    )
}

export default ModifyPost

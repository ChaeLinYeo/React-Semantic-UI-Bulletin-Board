import React from 'react';
import { Container, Header } from 'semantic-ui-react';
// import { Button, Form, Segment, Header } from 'semantic-ui-react';
import Post from './Post';


class Detail extends React.Component {
    componentDidMount(){
        const{location, history}=this.props;
        if (location.state === undefined){   //location.state가 없는 경우(카드를 누르지 않고 주소창에서 디테일로 이동할경우)
            history.push('/');  //Home으로 이동시킴

        }
    }

    render(){
        const {location}=this.props;
        if (location.state){
            return(
                <div>
                    <h1>{location.state.title}</h1>
                    <p>{location.state.content}</p>
                </div>
            )
        }
    }

    // return (     
    //     <Container text>
    //         <h1>{this.props.state.title}</h1>
    //         <Header as='h2'>게시물</Header>
    //         <p>
    //         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    //         ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
    //         magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
    //         ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
    //         quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
    //         arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
    //         Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
    //         dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
    //         Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
    //         Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
    //         viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
    //         Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    //         </p>
    //     </Container>
        
    // )
}

export default Detail;
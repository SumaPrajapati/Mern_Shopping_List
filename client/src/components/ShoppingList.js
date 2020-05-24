import React, {Component} from 'react'
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem} from '../actions/itemAction';
import PropTypes from 'prop-types';


class ShoppingList extends Component{
 /*   state = {
            items: [
                {id: uuid(), name: 'Sweet'},
                {id: uuid(), name: 'Biscuit'},
                {id: uuid(), name: 'Wefer'},
                {id: uuid(), name: 'Cookies'},
                {id: uuid(), name: 'Pizza'},
            ]
        }  */

    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick = id => {
        this.props.deleteItem(id)
    }

  /*    onDeleteClick = (item) => {
        this.setState((currentState)=>({
            items: currentState.items.filter(i => i.id !== item.id)
        }))
    }  */

    render(){
        const {items} = this.props.item
       // const {items} = this.state
        return(
            <Container>
                {/* <Button color='dark' style={{marginBottom: '2rem'}} 
                 onClick={()=>{
                    const name = prompt('Enter Item')
                    if(name){
                        this.setState(prevState => ({
                            items: [...prevState.items, {id: uuid(), name}]
                        }))
                    }
                 }}>Add Item</Button> */}
                <ListGroup>
                    <TransitionGroup className='shopping-list'>{items.map(({_id,name})=>(
                        <CSSTransition key={_id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                             <Button className='remove-btn' color='danger' size='sm'
                                    onClick ={this.onDeleteClick.bind(this, _id)}
                                    >&times; </Button>
                            {name}</ListGroupItem>
                        </CSSTransition>
                    ))}</TransitionGroup>
                </ListGroup>

                {/*  <div>
                 <ol>{items.map((item)=>(
                     <li key={item.id}><p>{item.name}</p></li>
                 ))} </ol>
                 </div> */}
            </Container>
        )
    }
}

ShoppingList.propTypes ={
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList)
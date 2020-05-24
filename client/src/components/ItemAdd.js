import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup , Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import {addItem} from '../actions/itemAction'

class ItemAdd extends Component{
    state= {
       name: '',
       model: false 
    }

    onAddClick = () =>{
        this.setState({
            model: !this.state.model
        })
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value  })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newItem ={
            name: this.state.name
        }
        this.props.addItem(newItem)
        this.onAddClick()
    }

    render(){
        return(
            <div>
                <Button color='dark' /* style={{marginBotton: '2rem'}} */
                        onClick={this.onAddClick}>Add Item</Button>

                <Modal  isOpen={this.state.model}
                       /*onAddClick={this.onAddClick}  */>
                    <ModalHeader /* onAddClick={this.onAddClick} */ >Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Item</Label>
                                <Input type='text' name='name' id='item' placeholder='Add Shopping Item' 
                                       onChange={this.onChange} />
                                       <Button color='dark' style={{marginTop: '5rem'}} block>AddItem</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemAdd)
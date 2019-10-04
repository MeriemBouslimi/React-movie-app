import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      figure:'',
      title:'',
      rating:'',
    };
  }

  toggle=() =>{
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

   
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
        
  }

        render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className='Add-btn' >+{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Add Movie</ModalHeader>
          <ModalBody>
            <input placeholder='figure' name='figure' className="modal-put" onChange={this.handleChange}></input>
            <input placeholder='Title' name='title' className="modal-put"onChange={this.handleChange}></input>
            <input placeholder='Rating' name='rating' className="modal-put"onChange={this.handleChange}></input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.props.addMovie(this.state.figure,this.state.title,this.state.rating);this.toggle()}}>Add Movie</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
  );
}
    }


export default ModalExample;
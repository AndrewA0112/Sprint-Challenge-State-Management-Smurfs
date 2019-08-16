import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteSmurf, updateSmurf } from '../actions'
import './Smurf.scss'
import { Button, Header, Modal, Card, Icon, Image } from 'semantic-ui-react'
import picture from './smurf.png'

const Smurf = ({ smurf, deleteSmurf, updateSmurf }) => {

    const [currentSmurf, setCurrentSmurf] = useState(smurf)
    const handleChanges = e => {
        setCurrentSmurf({ ...currentSmurf, [e.target.name]: e.target.value })
    }

    return (
        <div className='smurf'>
            {/* <h1>{smurf.name}</h1> */}
            {/* <Modal size='mini' trigger={<Button>More Info!</Button>}>
                <Modal.Content>
                    <div className='smurfModal'>
                        <Modal.Description>
                            <Header>NAME: <br /> <input name='name' value={currentSmurf.name} onChange={handleChanges} /></Header>
                            <p>AGE: <br /> <input name='age' value={currentSmurf.age} onChange={handleChanges} /></p>
                            <p>HEIGHT: <br /> <input name='height' value={currentSmurf.height} onChange={handleChanges} /></p>
                        </Modal.Description>
                        <div className='smurfModalButtons'>
                            <Button className='smurfModalButton' color='red' onClick={_ => deleteSmurf(smurf.id)}>Delete</Button>
                            <Button className='smurfModalButton' color='green' onClick={_ => updateSmurf(currentSmurf)}>Update</Button>
                        </div>
                    </div>
                </Modal.Content>
            </Modal> */}
            <Card className='smurfCard'>
                <Image src={picture} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{smurf.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Age: {smurf.age}</span>
                    </Card.Meta>
                    <Card.Description>
                    <Modal size='mini' trigger={<Button>More Info!</Button>}>
                        <Modal.Content>
                            <div className='smurfModal'>
                                <Modal.Description>
                                    <Header>NAME: <br /> <input name='name' value={currentSmurf.name} onChange={handleChanges} /></Header>
                                    <p>AGE: <br /> <input name='age' value={currentSmurf.age} onChange={handleChanges} /></p>
                                    <p>HEIGHT: <br /> <input name='height' value={currentSmurf.height} onChange={handleChanges} /></p>
                                </Modal.Description>
                                <div className='smurfModalButtons'>
                                    <Button className='smurfModalButton' color='red' onClick={_ => deleteSmurf(smurf.id)}>Delete</Button>
                                    <Button className='smurfModalButton' color='green' onClick={_ => updateSmurf(currentSmurf)}>Update</Button>
                                </div>
                            </div>
                        </Modal.Content>
                    </Modal>
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(
    mapStateToProps,
    { deleteSmurf, updateSmurf }
)(Smurf);
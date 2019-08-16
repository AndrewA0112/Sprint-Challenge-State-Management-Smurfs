import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteSmurf, updateSmurf } from '../actions'
import './Smurf.scss'
import { Button, Header, Modal } from 'semantic-ui-react'

const Smurf = ({ smurf, deleteSmurf, updateSmurf }) => {

    const [ currentSmurf, setCurrentSmurf ] = useState(smurf)
    const handleChanges = e => {
        setCurrentSmurf({...currentSmurf, [e.target.name]: e.target.value} )
    }

    return (
        <div className='smurf'>
            <h1>{smurf.name}</h1>
            {/* <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3> */}
            {/* <button onClick={_ => deleteSmurf(smurf.id)}>Delete</button> */}
            <Modal size='mini' trigger={<Button>More Info!</Button>}>
                <Modal.Content className='smurfModal'>
                    <Modal.Description>
                        <Header><input name='name' value={currentSmurf.name} onChange={handleChanges}/></Header>
                        <p><input name='age' value={currentSmurf.age} onChange={handleChanges}/></p>
                        <p><input name='height' value={currentSmurf.height} onChange={handleChanges}/></p>
                    </Modal.Description>
                    <Button onClick={_ => deleteSmurf(smurf.id)}>Delete</Button>
                    <Button onClick={_ => updateSmurf(currentSmurf)}>Update</Button>
                </Modal.Content>
            </Modal>
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
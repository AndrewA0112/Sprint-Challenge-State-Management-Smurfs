import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfList } from '../actions'
import Smurf from './Smurf'

import './SmurfList.scss'

const SmurfList = (props) => {

    console.log(props)

    useEffect(() => {
        props.getSmurfList();
    }, [])

    return (
        <div>
            <h1>Smurf List</h1>
            <div className='smurfList'>
            {
                props.smurfs && props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)
            }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { getSmurfList }
)(SmurfList);
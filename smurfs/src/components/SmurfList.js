import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfList } from '../actions'

const SmurfList = (props) => {

    console.log(props)

    useEffect(() => {
        props.getSmurfList();
    }, [])

    return (
        <div>
            <h1>Smurf List</h1>
            {
                props.smurfs && props.smurfs.map(smurf => <h1 key={smurf.id}>{smurf.name}</h1>)
            }
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
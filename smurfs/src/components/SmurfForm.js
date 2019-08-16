import React from 'react';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { addSmurf } from '../actions'

const SmurfForm = ({errors, touched, addSmurf}) => {
    
    return (
        <div>
            <h1>Add Smurf</h1>
            <Form>
                <Field type='text' name='name' placeholder='Name' />
                {touched.name && errors.name && (
                    <p className='errorMessage'>{errors.name}</p>
                )}
                <Field type='number' name='age' placeholder='Age' />
                {touched.age && errors.age && (
                    <p className='errorMessage'>{errors.age}</p>
                )}
                <Field type='number' name='height' placeholder='Height' />
                {touched.height && errors.height && (
                    <p className='errorMessage'>{errors.height}</p>
                )}
                <button type='submit'>Add Smurf</button>
            </Form>
        </div>
    )
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({name, age, height}) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Username is a required field'),
        age: Yup.string().required('Username is a required field'),
        height: Yup.string().required('Username is a required field')
    }),

    handleSubmit(values, { props }) {
        props.addSmurf(
            {
                name: values.name,
                age: values.age,
                height: `${values.height}cm`
            }
        )
    }
})(SmurfForm)

const mapStateToProps = () => {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    { addSmurf }
)(FormikSmurfForm);
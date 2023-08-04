import React, { Component } from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const YoutubeForm = () => {

    const initialValues = {
        name:"",
            email:"",
            channel:""
    }

    const onSubmit= (values) => {
        console.log('form data',values)
    }

    const validationSchema = Yup.object(
        {
            name: Yup.string().required('Required'),
            email:Yup.string().email('Invalid email format').required('Required'),
            channel:Yup.string().required('Required')
        }
    )

     console.log('form values',Formik.values)
    // console.log('form errors',formik.errors)
    // console.log('form touched',formik.touched) // Blur Property

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' 
                    name='name' 
                    />
                    <ErrorMessage name='name'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' 
                   
                    />
                    <ErrorMessage name='email'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' 
                    name='channel' 
                    />
                   <ErrorMessage name='channel'/>
                </div>
                <button type='submit'>Submit</button>
            </Form>

        </Formik>
    )
}
export default YoutubeForm
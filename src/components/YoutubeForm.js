import React, { Component } from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError';

const YoutubeForm = () => {

    const initialValues = {
        name:"",
            email:"",
            channel:"",
            comments:"",
            
    }

    const onSubmit= (values) => {
        console.log('form data',values)
    }

    const validationSchema = Yup.object(
        {
            name: Yup.string().required('Required'),
            email:Yup.string().email('Invalid email format').required('Required'),
            channel:Yup.string().required('Required'),
            comments:Yup.string().required('required'),
            address:Yup.string().required()
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
                    <ErrorMessage name='name' component={TextError}/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field type='text' id='email' name='email' 
                   
                    />
                    <ErrorMessage name='email'>
                        {
                            (errorMsg) => <div className='error'>{errorMsg}</div>
                            
                        }
                    </ErrorMessage>
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' 
                    name='channel' 
                    />
                   <ErrorMessage name='channel'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' type='text' id='comments' 
                    name='comments' 
                    />
                    {/* <Field component='textarea' type='text' id='comments' 
                    name='comments' 
                    /> */}
                   <ErrorMessage name='comments'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field  name='address'>
                    {
                        (props) => {
                            const {field,form,meta} = props
                            console.log(props)
                            return <div>
                                <input type='text' name='address' id='address' {...field}/>
                                {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                                </div>
                        }
                    }
                    </Field>
                   
                </div>



                <button type='submit'>Submit</button>
            </Form>

        </Formik>
    )
}
export default YoutubeForm
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Input from '../form/Input'
import Submit from '../form/Submit'

function ServiceForm ({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className='w-full mr-2 ml-2'>
            <Input handleOnChange={handleChange} type='text' text='name' name='name' placeholder='Enter the name of the service' />
            <Input handleOnChange={handleChange} type='number' text='Service Cost' name='cost' placeholder='Enter the cost' />
            <Input handleOnChange={handleChange} type='text' text='Service Description' name='description' placeholder='Write a description' />
            <Submit text={btnText} />
        </form>
    )
}

export default ServiceForm
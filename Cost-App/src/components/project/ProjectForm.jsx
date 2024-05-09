/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import Input from "../form/Input"
import Select from "../form/Select"
import Submit from "../form/Submit"
import { useNavigate } from 'react-router-dom'
function ProjectForm ({ btnText, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response)=> response.json())
            .then((data)=>{setCategories(data)})
                .catch((err)=> console.log(err))
        }
    )

    const submit = (e) =>{
        e.preventDefault()
        if(project.category && project.budget > 0){
            handleSubmit(project)
            console.log(project)
        }else{
            alert('Set a budget greater than zero and select a category')
        }
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }
    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit={submit} className="w-full mr-2 ml-2">
            <Input handleOnChange={handleChange}  type="text" text="Project name" name="name" placeholder="Insert project's name" value={project.name ? project.name : ''}/>
            <Input handleOnChange={handleChange}  type="number" text="Project budget " name="budget" placeholder="Insert project's budget" value={project.budget ? project.budget : ''}/>
            <Select required handleOnChange={handleCategory}  name="category_id" text="Set project's category" options={categories} value={project.category ? project.category.id : ''} />
            <Submit text={btnText} />
        </form>
    )
}
export default ProjectForm
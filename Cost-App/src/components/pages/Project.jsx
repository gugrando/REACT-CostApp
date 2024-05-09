/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../layouts/Load"
import Container from "../layouts/Container"
import ProjectForm from "../project/ProjectForm"
import Message from "../layouts/Message"
function Project(){
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => { //ficticious Loading
            fetch (`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp)=> resp.json()).then((data)=>{setProject(data)}).catch(err => console.log(err))
        },2000)
    },[id])

    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }
    function editPost (project){
        if (project.budget < project.cost){
            setMessage('The budget cannot be less than the cost!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((resp)=> resp.json()).then((data)=>{
            setProject(data) 
            setShowProjectForm(false)
            setMessage('Sucess on Editing Project')
            setType('sucess')
        }).catch(err => console.log(err))
        setMessage('')
    }

    return (
        <>
            {project.name ? (
                <div className="p-8 w-full">
                    <Container customlClass='column'>
                        {message && <Message type={type} message={message}/>}
                        <div className="w-full border-b-2 border-zinc-500 mb-5 pb-5 flex justify-between flex-wrap">
                            <h1 className="mb-2 p-2 text-2xl font-bold bg-zinc-900 text-yellow-500">Project: {project.name}</h1>
                            <button className="mb-2 p-4 bg-zinc-900 text-white py-2 px-4 hover:text-yellow-500 transition cursor-pointer max-h-10" onClick={toggleProjectForm}>{!showProjectForm ? 'Edit Project' : 'Close'}</button>
                            {!showProjectForm ? (
                                <div className="w-full">
                                    <p className="mb-2 mt-2"><span className="font-bold">Category: </span>{project.category.name}</p>
                                    <p className="mb-2"><span className="font-bold">Total Budget: </span>R${project.budget}</p>
                                    <p className="mb-2"><span className="font-bold">Out Amount: </span>R${project.cost}</p>
                                </div>
                            ) : (
                                <div className="w-full">
                                    <ProjectForm className="w-full" handleSubmit={editPost} btnText="Done Edit" projectData={project}/>
                                </div>
                            )}
                        </div>
                        <div className="w-full border-b border-zinc-500 mb-5 pb-5 flex justify-between flex-wrap">
                            <h2 className="mb-2 p-2 text-xl font-bold">Add Service</h2>
                            <button onClick={toggleServiceForm} className="mb-2 p-4 bg-zinc-900 text-white py-2 px-4 hover:text-yellow-500 transition cursor-pointer max-h-10">
                                {!showServiceForm ? 'Add Service' : 'Close'}
                            </button>
                            <div className="w-full">
                                {showServiceForm && (
                                    <div>Service Form</div>
                                ) 
                                }
                            </div>
                        </div>
                        <h2 className="mb-2 p-2 text-xl font-bold">Services</h2>
                        <Container customlClass='start'>
                                <p className="p-2">Service Items</p>
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project
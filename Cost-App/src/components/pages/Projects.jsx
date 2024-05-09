/* eslint-disable no-unused-vars */
import Message from '../../components/layouts/Message'
import { useLocation } from 'react-router-dom'
import Container from '../layouts/Container'
import LinkButton from '../layouts/LinkButton'
import ProjectCard from '../project/ProjectCard'
import { useEffect, useState } from 'react'
import Loading from '../layouts/Load'

function Projects(){
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            // setTimeout is Fictitious loading to see Load component
            fetch('http://localhost:5000/projects',{
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                }
            }).then((resp) => resp.json())
                .then((data) =>{
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch(err => console.log(err))
        }, 2000)
    },[])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE', //remove project on backend
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
            .then((data) => {
                setProjects(projects.filter((project) => project.id !== id)) //remove project on frontend
                setProjectMessage('Project removed with success')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='w-full p-8'>
            <div className='flex justify-between mb-8'>
                <h1 className='text-3xl font-extrabold'>My Projects</h1>
                <LinkButton text={'Create Project'} to={'/newproject'}/>
            </div>
            {message && <Message type="sucess" message={message} />}
            {projectMessage && <Message type="sucess" message={projectMessage} />}
            <Container customClass='start'>
                {
                    projects.length > 0 &&
                        projects.map((project) => 
                        <ProjectCard 
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    )
                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length == 0 && (
                    <p>No projects found</p>
                )}
            </Container>
       </div>
    )
}
export default Projects
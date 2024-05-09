import { useNavigate } from "react-router-dom"
import ProjectForm from "../project/ProjectForm"
function NewProject (){
    const navigate = useNavigate()
    function createPost(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((response) => response.json()).then((data)=>{
            console.log(data)
            navigate('/projects', { state: { message: 'Projeto criado com sucesso' }, });
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="w-96 m-auto p-12">
            <h1 className="text-3xl text-center">Create Project</h1>
            <p className="text-zinc-400 mb-8 text-xs text-center">Create your new project to add services later</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project" />
        </div>
    )
}
export default NewProject
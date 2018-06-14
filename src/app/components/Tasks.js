import React, { Component } from 'react';

class Tasks extends Component {

    constructor(){
        super();

        this.state = {
            title: '',
            description:'',
            tasks: [],
            _id: ''
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(e){
        if(this.state._id){
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({html: 'Task Updated'})
                this.setState({title: '', description: ''});
                this.fecthTask();
            })

        } else {
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({html: 'Task Saved'})
                this.setState({title: '', description: ''});
                this.fecthTask();
            })
            .catch( err => console.log(err))
        }
        e.preventDefault();
    }

    fecthTask(){
        fetch('/api/tasks') //peticion GET por defecto
            .then(res => res.json())
            .then(data => {
                this.setState({tasks: data});
                console.log(this.state.tasks);
            });
    }

    deleteTask(id){
        if (confirm('Are you sure you want to delete it?')){
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json()) // convertir a formato json
            .then(data => {
                M.toast({html: 'Task Deleted'});
                this.fecthTask();
            })
        }
    }

    editTask(id){
        fetch(`/api/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                })
            }
            );
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
        this.fecthTask();
    }

    render(){
        const { store } = this.props
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a href="/" className="brand-logo">MERN STACK</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                <form action="" onSubmit={this.addTask}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                name="title"
                                                onChange={this.handleChange}
                                                type="text"
                                                placeholder="Task Title"
                                                value={this.state.title}
                                                />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea
                                                name="description"
                                                onChange={this.handleChange}
                                                placeholder="Task Description"
                                                className="materialize-textarea"
                                                value={this.state.description}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn light-blue darken-4">
                                        Enviar
                                    </button>
                                </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return (
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={() => this.deleteTask(task._id)}>
                                                           <i className="material-icons">delete</i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" style={{margin: '4px'}} onClick={() => this.editTask(task._id)}>
                                                           <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tasks;
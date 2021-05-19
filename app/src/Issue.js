import React, { Component } from 'react'
import './todo.css';



class Issue extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            organisationName: "",
            gender: "",
            certifiedFor: "",
            assignedDate: "",
            duration:"",
            email:"",

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    organisationhandler = (event) => {
        this.setState({
            organisationName: event.target.value
        })
    }

    certifiedForhandler = (event) => {
        this.setState({
            certifiedFor: event.target.value
        })
    }

    assignedDatehandler = (event) => {
        this.setState({
            assignedDate: event.target.value
        })
    }

    durationhandler = (event) => {
        this.setState({
            duration: event.target.value
        })
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Issued Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            organisationName: "",
            gender: "",
            certifiedFor: "",
            assignedDate: "",
            duration:"",
            email:"",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Issue Certificate</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Organisation Name :</label> <input type="text" value={this.state.organisationName} onChange={this.organisationhandler} placeholder="OrganisationName..." /><br />
                    <label>certified For :</label> <input type="text" value={this.state.certifiedFor} onChange={this.certifiedForhandler} placeholder="Certified for (skill/course)..." /><br />
                    <label>Duration(in Years) :</label> <input type="text" value={this.state.duration} onChange={this.durationhandler} placeholder="valid up to..." /><br />
                    <label>Email Address :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="email address..." /><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <br/>
                    <label>Assigned Date :</label> <input type="date" value={this.state.assignedDate} onChange={this.assignedDatehandler} placeholder="Date of issuing..." /><br />
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />

                </form>

            </div>
            
        )
    }
}

export default Issue

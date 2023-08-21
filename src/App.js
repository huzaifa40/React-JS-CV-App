import './App.css';
import React, { Component } from 'react'
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';
import Education from './Components/Education/Education';
import PracticalExperience from './Components/PracticalExperience/PracticalExperience';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      education: [],
      practicalExperience: [],
    }; 
  }

  handleGeneralInfoSubmit = (generalInfo) => {
    this.setState({generalInfo});
  }; 

  handleEducationSubmit = (education) => {
    this.setState((prevState) => ({
      education: [...prevState.education, education]
    }));
  };
  
  handlePracticalExperienceSubmit = (experience) => {
    this.setState((prevState) => ({
      practicalExperience: [...prevState.practicalExperience, experience]
    }));
  }; 

  handleReset = () => {
    this.setState({
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      education: [],
      practicalExperience: [],
    }); 
  };

  render() {
    const {generalInfo, education, practicalExperience} = this.state;

    return (
      <div className="container">
        <div className="header">
          <h1>CV APP</h1>
        </div>

        <div className="app-container">
          <div className="form-cv-container">
          <div className="form-section">
            <GeneralInfo
            generalInfo={generalInfo}
            onSubmit={this.handleGeneralInfoSubmit}
            />

            <Education 
            onSubmit={this.handleEducationSubmit}
            />

            <PracticalExperience 
            onSubmit={this.handlePracticalExperienceSubmit}/>        

            <button type='button' id='reset' onClick={this.handleReset}>
              Reset
            </button>            
          </div>

          <div className='cv-preview'>
            <h1>CV Preview</h1>

            <h2>General Information</h2>
            <p>
              <strong>- Full name :</strong><br/>
              {generalInfo.firstName} {generalInfo.lastName}
            </p>
            <p>
              <strong>- Email :</strong><br/>
              {generalInfo.email}
            </p>
            <p>
              <strong>- Phone :</strong><br/>
              {generalInfo.phone}
            </p>

            <h2>Education</h2>
            {education.map((edu, index) => {
              <div key={index}>
                <p>
                  <strong>- School Name :</strong><br/>
                  {edu.schoolName}
                </p>
                <p>
                  <strong>- Study Title :</strong><br/>
                  {edu.studyTitle}
                </p>
                <p>
                  <strong>- Date :</strong><br/>
                  {edu.date}
                </p>
                </div>
            })}

            <h2>Practical Experience</h2>
            {practicalExperience.map((exp, index) => {
              <div key={index}>
                <p>
                  <strong>- Company :</strong><br/>
                  {exp.company}
                </p>
                <p>
                  <strong>- Position :</strong><br/>
                  {exp.position}
                </p>
                <p>
                  <strong>- From :</strong><br/>
                  {exp.from}
                </p>
                <p>
                  <strong>- To :</strong><br/>
                  {exp.to}
                </p>
              </div>
            })}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App








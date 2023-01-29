import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext"
import { firestore } from "../../Firebase"





export default function NewProjectModal( { closeNewProjectModal}) {

  const { currentUser } = useAuth()


  // Clear the previous value of the input box
  setTimeout(() => {document.querySelector('.add-new-name').value = ""},0)

  // Function to create a new project
  const createNewProject = () => {
    document.getElementsByClassName('popup-btn')[0].innerHTML = "Creating..."
    // Get the value of the input box
    const projectName = document.querySelector('.add-new-name').value
    // Generate a unique ID for the project
    const projectID = Math.random().toString(36).substr(2, 9)
    // Get the value from the input box, and add it to the datbase
    firestore.collection('users').doc(currentUser.uid).collection('projects').doc(projectID).set({
      "ProjectName": projectName,
      "ProjectID": projectID
    })
    .finally(() => {
      document.getElementsByClassName('popup-btn')[0].innerHTML = "Finished!"
      // closeNewProjectModal()
      window.location.href = '/builder?id=' + projectID
    
    })


  }




  return (

    <>


      <div className="popup-bg" onClick={closeNewProjectModal}></div>
      <div className="popup-inner-container">
        <img src="https://hpanel-main.hostinger.com/img/Illstration-opening.svg" alt="" />
        <div className="popup-title">Create a new project</div>
        <div className="popup-descrp">Give your awesome project a name, bitch.</div>
        <input className="add-new-name" type="text" placeholder="My awesome project..." />
        <button class="popup-btn" onClick={createNewProject}>Create Project</button>
        {/* Add in function so when button is clicked, it will show loading animation/effect */}
      </div>  
    
    
    </>
  
  
  
    )
   
}

import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext"
import { firestore } from "../../Firebase"





export default function NewProjectModal( { closeNewProjectModal}) {

  const { currentUser } = useAuth()


  // Clear the previous value of the input box
  setTimeout(() => {document.querySelector('.add-new-name').value = ""},0)

  // Function to create a new project
  const createNewProject = () => {
    // Get the value of the input box
    const projectName = document.querySelector('.add-new-name').value
    // Generate a unique ID for the project
    const projectID = Math.random().toString(36).substr(2, 9)
    // Get the value from the input box, and add it to the datbase
    firestore.collection('users').doc(currentUser.uid).collection('projects').doc(projectID).set({
      "ProjectName": projectName
    })
  }





  return (

    <>


      <div className="popup-bg" onClick={closeNewProjectModal}></div>
      <div className="popup-inner-container">


        <h1>Create New</h1>

          <input className="add-new-name" type="text" placeholder="My awesome project..." />
          <button type="submit">Create Project</button>

          <button onClick={createNewProject}>Hi</button>
        
        
      </div>  
    
    
    </>
  
  
  
    )
   
}

import React, { useState, useEffect } from "react"
import Loader from "../loader.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import { firestore } from "../../Firebase"

import NewProjectModal from "../Modals/NewProjectModal";

import Builder from "./Builder";



export default function MyProjects(props) {

  

    const { currentUser } = useAuth()
    const [newProjectModal, setNewProjectModal] = useState(false);
    const closeNewProjectModal = () => {
        setNewProjectModal(false)
      }
  
    document.title = "My Projects"

    // Code to hide the loader on page load
    const [loading, setLoading] = useState(true)
    useEffect(() => {
    setTimeout(() => {
        setLoading(false)
        setTimeout(() => {getProjects() },0)
    },500)
    }, []);

    const [showSideBar, setShowSideBar] = useState(true);
    setTimeout(() => {
        props.sidebar()
    },0)




    // TEST TO ADD IN THE SAVED PROJECTS TO THE POPUP CONTAINER

    // Go to firebase under the projects collection and get the data
    // firestore.collection('users').doc(currentUser.uid).collection('projects').get().then(() => {
        
    // })



    
    function getProjects() {

        console.log('whaddup')
    
            firestore.collection('users').doc(currentUser.uid).collection('projects').get().then((docs) => {

                docs.forEach(doc => {
                   
                    // Create a new div and add the project name to it
                    const newDiv = document.createElement('div')
                    newDiv.className = "project-tile"
                    newDiv.innerHTML = doc.data().ProjectName

                    // Create a button
                    const newButton = document.createElement('a')

                    newButton.href = '/builder?id=' + doc.id
                    

                    // Give the button ID the ID of the project
                    newButton.className = "access-project-btn"
                    newButton.id = doc.id
                    newButton.innerHTML = "Open Builder"

                    newDiv.appendChild(newButton)

                    // Add an event listener to the button
                    newButton.addEventListener('click', (e) => {
                        var projectID = e.target.id
                        // window.history.pushState('page2', projectID, '/builder?projectId=' + projectID);

                        window.location.href = '/builder?id=' + projectID
                    })

                    // Append the new div to the saved-projects div
                    document.querySelector('.saved-projects').appendChild(newDiv)

                 
                    
                    })
                }).finally(() => {

                    // const fuckTest = () => {<Link to="/builder?projectId=1234">Hi</Link>}
                    // document.querySelector('.project-tile').appendChild(fuckTest)

                })
               
            }




  return (
    <>
      {newProjectModal && (
            <div className="popup-container">

              <NewProjectModal closeNewProjectModal={closeNewProjectModal} />
             
            </div>
              )
          }

        {loading && (
            <div id="loader-container">
            <div className="loader-bg"></div>
            <img className="loader" src={Loader} />
            </div>
        )}
        <div className="projects-container">


                <button onClick={() => {
                    setNewProjectModal(true)
                }}>Add New</button>




            <div className="saved-projects"></div>
        
        </div>
    </>
  )
}

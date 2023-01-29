import React, { useState, useEffect } from "react"
import Loader from "../loader.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import { firestore } from "../../Firebase"

import NewProjectModal from "../Modals/NewProjectModal";


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
        
    },500)
    }, []);

    const [showSideBar, setShowSideBar] = useState(true);
    // setTimeout(() => {
        props.sidebar()
    // },0)




    // TEST TO ADD IN THE SAVED PROJECTS TO THE POPUP CONTAINER

    // Go to firebase under the projects collection and get the data
    // firestore.collection('users').doc(currentUser.uid).collection('projects').get().then(() => {
        
    // })

    
    function getProjects() {

        console.log('whaddup')
    
            firestore.collection('users').doc(currentUser.uid).collection('projects').get().then((docs) => {

                docs.forEach(doc => {

                    console.log(doc.data())

                    // Create a new div and add the project name to it
                    const newDiv = document.createElement('div')
                    newDiv.className = "saved-project"
                    newDiv.innerHTML = doc.data().ProjectName

                    // Append the new div to the saved-projects div
                    document.querySelector('.saved-projects').appendChild(newDiv)
                    
                    })
                });
            
            }

            getProjects()

   




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

            <h1>My Projects</h1>
            <h4>This is where I will manage all of the projects, be able to add tags, filter, delete, and add new projects too.</h4>

                <button onClick={() => {
                    setNewProjectModal(true)
                }}>Add New</button>

            <Link to="/builder">
                <button onClick={() => {
                    props.sidebar()

                }}>Click</button>
            </Link>



            <div className="saved-projects"></div>
        
        </div>
    </>
  )
}

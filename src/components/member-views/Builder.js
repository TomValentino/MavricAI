import React, { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Heart from "../../images/heart.svg";
import FBSvg from "../../images/fb.svg";
import { useAuth } from "../../contexts/AuthContext"

import { firestore } from "../../Firebase";


import Loader from "../loader.svg";






export default function Builder(props) {

    document.title = "Builder"

    const { currentUser } = useAuth()


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectID = urlParams.get('id')


    // TEST -- Setting the title of the project -- Need to tie in with the loading functions
    firestore.collection('users').doc(currentUser.uid).collection('projects').doc(projectID).get().then((doc) => {
        
        document.querySelector('.project-title-area').innerHTML = doc.data().ProjectName
    
    })

  




// Change the state of the sidebar to not visible. Within the app rendering of the component
setTimeout(() => {
    props.sidebar()
},0)

// // Create a blocker div, add it to the body, then delete it to hide the menu's
const div = document.createElement("div");
div.id = "temp-load-block"
document.body.appendChild(div);
setTimeout(() => {
    document.querySelectorAll('#temp-load-block').forEach(e => e.remove())
},200)


setTimeout(() => {
    document.querySelector('.loader-blocker').classList.add('opacity-0')
    setTimeout(() => {
        document.querySelector('.loader-blocker').classList.add('hidden')
    },0)
},3000)


const [middleLoading, setMiddleLoading] = useState(false)




// Test Function For Saving
function saveResult() {

    var result = document.getElementsByClassName('actual-response')[0].innerHTML
    var id = Math.random().toString(36).substring(7);
    firestore.collection('users').doc(currentUser.uid).collection('projects').doc(projectID).collection('saved').doc(id).set({
      "Result": result
    })
    console.log('saved')
 
}



// Test Function For Showing The Saved Results
function showSaved() {

    var savedArea = document.querySelector('.saved-container')
    savedArea.innerHTML = ""
    savedArea.classList.remove('hidden')
    document.querySelector('.results-container').classList.add('hidden')

    // Access firestorage >> get the saved results >> display them
    firestore.collection('users').doc(currentUser.uid).collection('projects').doc(projectID).collection('saved').get().then((doc) => {

        if (doc.empty) {
            var div = document.createElement('div')
            div.innerHTML = "No Saved Results! Save some results to see them here..."
            div.classList.add('saved-result')
            savedArea.append(div)
        }
    
        doc.forEach((doc) => {
            var result = doc.data().Result
            var div = document.createElement('div')
            div.innerHTML = result
            div.classList.add('saved-result')
            savedArea.append(div)
        })
    })
    // Show the active border
    document.getElementById('results').classList.remove('actf')
    document.getElementById('saved').classList.add('actf')
        
}


    // Test Function For Going Back To Resuts
    function showResults() {
        document.getElementById('results').classList.add('actf')
        document.getElementById('saved').classList.remove('actf')

        document.querySelector('.results-container').classList.remove('hidden')
        document.querySelector('.saved-container').classList.add('hidden')

    }




    // Test Function To Save The Notes To The Database
    function saveNotes() {



    }

















    async function CallOpenAI(input) {

        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            organization: "org-F9f1ePyq3LoFpsLJTOgbGNY0",
            apiKey: "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"
        });

    
        const openai = new OpenAIApi(configuration)

        const response = await openai.createCompletion(
            {
                model: "text-davinci-003",
                prompt: input,
                temperature: 1,
                max_tokens: 100,
            });
    console.log(response.data.choices[0].text);


        // Test append to middle section
        var middle = document.querySelector('.results-container')
        // Create a new div
        var newDiv = document.createElement("div");
        newDiv.className= "response-container"


        // Add the text
        var newDiv2 = document.createElement("div");
        newDiv2.innerHTML = response.data.choices[0].text
        newDiv2.className= "actual-response"
        newDiv.appendChild(newDiv2)
        // Append it to the middle section

        // Create bottom area
        var bottomArea = document.createElement("div");
        bottomArea.className = "results-tile-bottom-area"

        // Create inner left container
        var bottomLftContainer = document.createElement("div");
        bottomLftContainer.className = "results-tile-inner-container"

        // Create icons

        // Create save icon on far right
        var saveIcon = document.createElement("img");
        saveIcon.src = '/static/media/heart.08759aa68e464295d5592e0793f68120.svg'
        saveIcon.className = "save-icon"
        // Add event listener to save icon
        saveIcon.addEventListener('click', saveResult)





        bottomArea.appendChild(bottomLftContainer)
        bottomArea.appendChild(saveIcon)
        newDiv.appendChild(bottomArea)
        middle.appendChild(newDiv)

        await document.getElementById('middle-loader').classList.add('hidden')

    }


    function demoSearch() {
        var input = document.querySelector('.search-input').value
        CallOpenAI(input)

        document.getElementById('middle-loader').classList.remove('hidden')
            
    }



    return (
        
        <>
        {/* The blocker for full-screen loading. */}
        <div className="loader-blocker">
            <img className="loader" src={Loader} />
        </div>

        <div className="stage">
            <div className="project-grid"> 

                <div className="top-nav">
                    <div className="nav-left-area">
                        <Link to="/projects" onClick={() => {

                            // // Create a blocker div, add it to the body, then delete it to hide the menu's
                            const div = document.createElement("div");
                            div.id = "temp-load-block"
                            document.body.appendChild(div);
                            setTimeout(() => {
                                document.querySelectorAll('#temp-load-block').forEach(e => e.remove())
                            },0)



                        }}><div className="p10 return">Return</div></Link>
                        <div className="project-title-area"></div>
                    </div>

                    <img className="logo" src={Logo} alt="" />

                    <div className="nav-right-area">
                        <button className="save-btn">Save & Exit</button>
                    </div>

                </div>


                <div className="search-area">
                    <div className="bottom-button-area" onClick={demoSearch}>Generate AI</div>
                    <div className="search-inner">
                        <div className="template-area">
                            <div className="sub-title">Select a template</div>
                            <div className="template-selector">
                                <div className="template-inner">
                                    <img src={FBSvg} alt="" />
                                    <div className="template-title">Create a Facebook ad</div>
                            </div>
                        </div>
                    </div>

                    {/* Area where you type in  -- ADD IN A "GENERATE RANDOM ONE FOR ME? REPURPOSE? FOR EACH TYPE OF TEMPLATE...?" */}
                    <div className="input-area">
                        <div className="sub-title">Ad specification</div>
                        <textarea className="search-input" type="text" placeholder="Create me a facebook ad for a AI creative assistant." ></textarea>
                    </div>

                    {/* ADD HERE A SLIDER TO ADJUST HOW MANY RESULTS THEY GET ? */}
                  
                    {/* Area to add specific rules to your request */}
                    <div className="specifics-area">
                        <div className="sub-title">Add some specifics</div> 
                    </div>

                    {/* Area to select your tone/audience/persona */}
                    <div className="persona-area">
                        <div className="sub-title">Select a persona</div>
                        <div className="persona-container">

                            <div className="persona-card">
                                <div>Broad audience</div>
                            </div>

                            <div className="persona-card">
                                <div>My saved</div>
                            </div>

                            <div className="persona-card">
                                <div>Add new</div>
                            </div>


                        </div>
                    </div>
                    
                    {/* Area for extra settings - language, etc. */}
                    <div className="settings-area">
                        <div className="sub-title">More settings</div>
                        <div>+</div>
                    </div>

                </div>
                
            </div>


            <div className="middle-area">

                <div className="middle-container">

                    <div className="middle-tabs">
                        <div className="sub-title p20 actf" id="results" onClick={showResults}>Results</div>
                        <div className="sub-title p20" onClick={showSaved} id="saved">Saved</div>
                    </div>

                    <div className="results-container"></div>

                    <div className="saved-container"></div>




                </div>


            
                    <img className="loader hidden" id="middle-loader"src={Loader} />
                




            </div>

            <div className="notes-area">

                <div>Notes Area</div>

                <div onKeyUp={() => {console.log('hi hi hi')}} id="notes-stage" className="h100" contentEditable="true" data-placeholder="Start typing, copy, or paste to get started..."></div>
            </div>






            </div>
        </div>


    
        
        </>
      )


}

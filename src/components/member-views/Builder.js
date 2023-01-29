import React, { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Heart from "../../images/heart.svg";
import FBSvg from "../../images/fb.svg";


import Loader from "../loader.svg";

import Quill from "quill";
import 'quill/dist/quill.snow.css'






export default function Builder(props) {

// Stuff for quill (so it doesn't load 2 menu bar's, which it does anyways!!)
    const notesBarRef = useCallback((wrapper) => {
        if (wrapper === null) return
        wrapper.innerHTML = ""
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill("#notes-stage", { theme: "snow"})
    },[])

    document.title = "Builder"
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
    },1000)
},1000)


const [middleLoading, setMiddleLoading] = useState(false)






    async function CallOpenAI(input) {

        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            organization: "org-F9f1ePyq3LoFpsLJTOgbGNY0",
            apiKey: "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",
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
        // Add the class
        newDiv.classList.add('response-container')
        // Add the text
        newDiv.innerHTML = response.data.choices[0].text
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
                        <div className="project-title-area">My Awesome Project</div>
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
                        <div className="sub-title p20 actf">Results</div>
                        <div className="sub-title p20">Saved</div>
                    </div>

                    <div className="results-container"></div>

                    <div className="saved-container"></div>




                </div>


            
                    <img className="loader hidden" id="middle-loader"src={Loader} />
                




            </div>

            <div className="notes-area">

                <div id="notes-stage" ref={notesBarRef}></div>
            </div>






            </div>
        </div>


    
        
        </>
      )


}

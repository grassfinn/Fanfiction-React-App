import React, { useState } from "react";
import storyOutline from "../modules/storyData.js";
import StoryClass from "../modules/story.jsx";


// TODO
// Grab textarea value and put it the snippets array
// If the current story array is equal to ten, generate a new story


// creating the new story obj with the storydata(storyOutline)
const {characters, plot} = storyOutline
const storyPlot = new StoryClass(storyOutline)



export default function Header() {
    // Generate Random Title from data
    const storyTitle = storyPlot.getRandomTitle(characters, plot)
    
    // Create an object of the current story
    const [story, setStory] = useState({
        title: `${storyTitle}`,
        snippets: []
    })
    // Create a state that the textarea can go into
    const [snippet, setSnippet] = useState('')
    const {title, snippets} = story

    function handleSubmit(e){
        e.preventDefault();
        console.log('snippet',snippet)
        // snippets.push(snippet)
        setStory(prevStory => {
            return {
                // placing the old data back into the object and adding the new snippet
                ...prevStory,
                'snippets' : [...prevStory.snippets, snippet]
            }
        })
        setSnippet('')
    }

    function handleChange(e){
        setSnippet(e.target.value)
    }

    // map through the snippets array and return html to be rendered
    const displayStory = snippets.map(snippet => {
        return (
            <p key={snippets.indexOf(snippet)+1}>{snippets.indexOf(snippet)+1}. {snippet}</p>
        )
    })


    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <textarea required name="plot" id="" cols="30" rows="10" value={snippet} onChange={handleChange}/>
                <br />
                <button>Submit</button>
            </form>
            <section>
                {displayStory}
            </section>
        </div>
    )
}
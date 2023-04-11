import React, { useState } from 'react';
import storyOutline from '../modules/storyData.js';
import StoryClass from '../modules/story.jsx';

// creating the new story obj with the storydata(storyOutline)
const { characters, plot } = storyOutline;
const storyPlot = new StoryClass(storyOutline);

export default function Header() {
  // Generate Random Title from data
  const storyTitle = storyPlot.getRandomTitle(characters, plot);

  // Create an object of the current story
  const [oldStories, setOldStories] = useState([]);
  const [currentStory, setCurrentStory] = useState({
    title: `${storyTitle}`,
    snippets: [],
  });
  // Create a state that the textarea can go into
  const [snippet, setSnippet] = useState('');
  const { title, snippets } = currentStory;

  function handleSubmit(e) {
    e.preventDefault();
    if (currentStory.snippets.length >= 10) {
      setOldStories((prevStory) => {
        return [...prevStory, currentStory];
      });
      console.log('end of Current Story', oldStories);
      setCurrentStory({ title: `${storyTitle}`, snippets: [] });
      setSnippet('');
      return;
    }
    setCurrentStory((prevSnippet) => {
      console.log(currentStory);
      return {
        // placing the old data back into the object and adding the new snippet
        ...prevSnippet,
        snippets: [...prevSnippet.snippets, snippet],
      };
    });
    setSnippet('');
  }

  function handleChange(e) {
    setSnippet(e.target.value);
  }

  // map through the snippets array and return html to be rendered
  const displayStory = snippets.map((snippet, index) => {
    return (
      <p key={index + 1}>
        {index + 1}: {snippet}
      </p>
    );
  });

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          name="plot"
          id=""
          cols="30"
          rows="10"
          value={snippet}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
      <section>{displayStory}</section>
    </div>
  );
}

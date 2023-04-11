
import React from 'react'
import './App.css'
import Story from './components/Story'
import storyOutline from './modules/storyData'
import StoryData from './modules/story'

const storyPlot = new StoryData(storyOutline)

function App() {
  return (
    <div className='app'>
      <Story />
    </div>
  )
}


export default App

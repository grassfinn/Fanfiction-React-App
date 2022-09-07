
import React from 'react'
import './App.css'
import Header from './components/Header'
import Story from './components/Story'
import storyOutline from './modules/storyData'
import StoryData from './modules/story'

const storyPlot = new StoryData(storyOutline)

function App() {
  return (
    <div className='app'>
      <Header />
      {/* <Story /> */}
    </div>
  )
}


export default App

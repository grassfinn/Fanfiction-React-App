import React from "react";
class Story {
  constructor(data) {
    // Properties
    Object.assign(this, data);
  }
  // Methods
  getStoryHtml() {
    return (
    <div class='user-story' id='user-story'>
        <h2 class='story-title' id='story-title'>{this.getRandomTitle(
          this.characters,
          this.plot
        )}</h2>
        <p class='story-body'></p>
    </div>
    )
  }

  getRandomTitle(characters, plot) {
    const randomCharacter = Math.floor(Math.random() * characters.length);
    const randomPlot = Math.floor(Math.random() * plot.length);
    return characters[randomCharacter] + ' ' + plot[randomPlot];
  }
}

export default Story;

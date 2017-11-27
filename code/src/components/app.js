import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="headerHeading">Home</div>
          <div className="headerHeading">Technology</div>
          <div className="headerHeading">Creativity</div>
          <div className="headerHeading">Entrepreneurship</div>
          <div className="headerHeading">Self</div>
          <div className="headerHeading">Culture</div>
          <div className="headerHeading">Digital design</div>
          <div className="headerHeading">Politics</div>
          <div className="headerHeading">Popular on Medium</div>
          <div className="headerHeading">More</div>
          <div className="headerHeading">
            <button id="headerButton">
            Get Started
            </button>
          </div>
        </div>

        <div className="hero">

          <div className="heroTextBox">
            <h1>Interesting ideas that set your mind in motion</h1>
            <p className="heroText">
              Hear directly from the people who knows it best. From tech to politics to creativity and more - whatever your interest, we've got you covered.
            </p>
            <button className="heroButton" id="heroButton1">
              Get Started
            </button>
            <button className="heroButton" id="heroButton2">
              Learn More
            </button>
          </div>

          <div id="heroPic">
          </div>
        </div>

        <section className="articles">

          <article className="article withPic">

            <div className="articlePic" id="puff1">
            </div>
            <div className="articleTextBox">
              <div className="articleText">
                <h2>The Boy Who Tamed the Sea</h2>
                <p>
                  At 5:30 am, on any morning I can handle it. I'll slip out of the dark mouth of my covers and creep through the silver lig...
                </p>
              </div>

              <div className="writer">
                <div className="writerPic" id="writer1">
                </div>
                <div className="writerText">
                  <h3>Carl Moore</h3>
                  <p>Oct 27 8 min read</p>
                </div>
                <div className="bookmark">
                </div>
              </div>
            </div>

          </article>

          <article className="article withPic">
            <div className="articlePic" id="puff2">
            </div>
            <div className="articleTextBox">
              <div className="articleText">
                <h2>The Role of Human Emotions in the Future of Transport</h2>
                <p>
                  At 5:30 am, on any morning I can handle it. I'll slip out of the dark mouth of my covers and creep through the silver lig...
                </p>
              </div>
              <div className="writer">
                <div className="writerPic" id="writer2">
                </div>
                <div className="writerText">
                  <h3>Ben Bland</h3>
                  <p>Nov 1 7 min read</p>
                </div>
                <div className="bookmark">
                </div>
              </div>
            </div>
          </article>

          <article className="article withPic">
            <div className="articlePic" id="puff3">
            </div>
            <div className="articleTextBox">
              <div className="articleText">
                <h2>The March of the Losers</h2>
                <p>
                Around the world, the victims are becoming the abusers, and Donald Trump is their king
                </p>
              </div>
              <div className="writer">
                <div className="writerPic" id="writer3">
                </div>
                <div className="writerText">
                  <h3>Henry Wismayer</h3>
                  <p>Nov 10 8 min read</p>
                </div>
                <div className="bookmark">
                </div>
              </div>
            </div>
          </article>

          <article className="article withPic">
            <div className="articlePic" id="puff4">
            </div>
            <div className="articleTextBox">
              <div className="articleText">
                <h2>The Burning Season</h2>
                <p>
                  You cannot save everything when the fires come to Northern California
                </p>
              </div>
              <div className="writer">
                <div className="writerPic" id="writer4">
                </div>
                <div className="writerText">
                  <h3>Lindsay Smith</h3>
                  <p>Nov 9 31 min read</p>
                </div>
                <div className="bookmark">
                </div>
              </div>
            </div>
          </article>

        </section>





      </div>
    )
  }

}

export default App

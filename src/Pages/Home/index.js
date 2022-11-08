function Home() {

  return (
    <div>
      <div className="bg fixed"></div>
        <div id="intro">
          <h1>Hie, I'm Beauty</h1>
          <p>I write software, for money and for fun.</p>
          <ul className="actions">
            <li>
              <a
                href="#header"
                className="button icon solid solo fa-arrow-down scrolly"
              >
                Continue
              </a>
            </li>
          </ul>
        </div>
        <header id="header">
          <a href="projects.html" className="logo">
            Portfolio
          </a>
        </header>

        
        <div id="main">
          <article className="post featured">
            <header className="major">
              <h2>About me</h2>
              <p>
                I am a software developer currently located in Zimbabwe, I
                develop software for all purposes. I studied Computer Science at Binus University International.  am looking for full-time software engineering position.
                I am familiar with various programming languages like C#, Python, Java, JavaScript, C++ but I have more experience in C# and JavaScript. I also have special interest in the ReactJS framework and I have built several 
                projects based on it. If you have any questions about me, feel free to leave a message below.
              </p>
            </header>
            <div href="" className="image main">
              <img src="images/resized.jpg" alt="" />
            </div>

            <ul className="actions special">
              <li>
                <a
                  href="https://drive.google.com/file/d/131yFMiPRzU1j66OeHDDwcb4eJAnkyr_R/view?usp=sharing"
                  className="button large"
                >
                  My CV
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
  );
}

export default Home;

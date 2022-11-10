function Home() {
  return (
    <div>
      <div className="bg fixed"></div>
      <div id="intro">
        <h1>Hie, I'm Beauty</h1>
        <p>I write software, for money and for fun.</p>
        <ul className="actions">
          <li>
            <div
              onClick={() => {
                window.scroll({
                  top: 800,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="button icon solid solo fa-arrow-down scrolly"
            >
              Continue
            </div>
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
              I am a software developer currently located in Zimbabwe, I develop
              software for all purposes. I studied Computer Science at Binus
              University International. I am looking for a full-time software
              engineering position. I am familiar with various programming
              languages like C#, Python, Java, JavaScript, C++ but I have more
              experience in C# and JavaScript. I also have special interest in
              the ReactJS framework and I have built several projects based on
              it. If you have any questions about me, feel free to email me at beautytasara27@gmail.com.
            </p>
          </header>
          <div href="" className="image main">
            <img src="images/resized.jpg" alt="" />
          </div>

          <ul className="actions special">
            <li>
              <a
                href="https://drive.google.com/file/d/1MpZTI0thcJSCpSMkwqGF74ZOkb6TJ1rn/view?usp=share_link"
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

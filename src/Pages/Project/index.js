import { useParams } from "react-router-dom";
import { initialState } from "../../Data/presets";
import { useState, useEffect, Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Project() {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    FindProject();
  }, [id]);
  function FindProject() {
    const result = initialState.find(
      (currentProject) => currentProject.projectId === id
    );
    console.log(result);
    setCurrentProject(result);
  }
  if (!currentProject) {
    return <div>Loading...</div>;
  }
  const indicatorStyles = {
    background: "#696969",
    width: 42,
    height: 3,
    display: "inline-block",
    margin: "0 2px",
  };
  return (
    <div id="main">
      <section className="">
        <article>
          <header>
            <span className="date">{currentProject.Date}</span>
            <h2>
              <a href="#">{currentProject.projectName}</a>
            </h2>
            <h6>
              {" "}
              Languages :{" "}
              {currentProject.Languages.map((language) => (
                <em key={language}>{language}</em>
              ))}
            </h6>
            <h6>
              {" "}
              Frameworks :{" "}
              {currentProject.Languages.map((framework) => (
                <em key={framework}>{framework}</em>
              ))}
            </h6>
          </header>
          {currentProject.paragraphs.map((paragraph) => (
            <div className="sm:p-8 sm:shadow-2xl">
              <h5 className="text-start">{paragraph.Title}</h5>
              <p>{paragraph.Description}</p>
            </div>
          ))}
          <div className="sm:p-8 sm:shadow-2xl mt-10">
            <h5 className="text-start">Demo</h5>
            <div className="video-responsive">
              <iframe
                width="853"
                height="480"
                src={currentProject.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
          <div className="sm:p-8 sm:shadow-2xl mt-10">
            <h5 className="text-start">Screenshots</h5>
            <Carousel
              autoPlay
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ ...indicatorStyles, background: "#ffffff" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              {currentProject.images.length > 0 &&
                currentProject.images.map((image) => (
                  <Fragment key={image}>
                    <div className="">
                      <img
                        width="200"
                        height="200"
                        className=" imgMe"
                        src={require(`../../Assets/Images/Altonium/${image}`)}
                      />
                    </div>
                  </Fragment>
                ))}
            </Carousel>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Project;

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
  }, [id, FindProject]);
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
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };
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
             {currentProject.projectName}
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
            <div key={paragraph.Title} className="sm:p-8 sm:shadow-2xl">
              <h5 className="text-start">{paragraph.Title}</h5>
              <p>{paragraph.Description}</p>
            </div>
          ))}
          {currentProject.video !== "" && (
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
          )}
          <div className="sm:p-8 sm:shadow-2xl mt-10">
            <h5 className="text-start">Screenshots</h5>
            <Carousel
              autoPlay
              showThumbs={false}
              showStatus={false}
              showArrows={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <svg
                      className="rotate-180"
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81185 5L1.81185 10L0.916016 9.10417L5.04101 5L0.936848 0.895834L1.83268 -4.00688e-08L6.81185 5Z"
                        fill="#000"
                      />
                    </svg>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <svg
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81185 5L1.81185 10L0.916016 9.10417L5.04101 5L0.936848 0.895834L1.83268 -4.00688e-08L6.81185 5Z"
                        fill="#000"
                      />
                    </svg>
                  </button>
                )
              }
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
                        className="max-w-[500px] max-h-[500px]"
                        src={require(`../../Assets/${image}`)}
                      />
                    </div>
                  </Fragment>
                ))}
            </Carousel>
          </div>
          {currentProject.links.length > 1 && (
            <div className="sm:p-8 sm:shadow-2xl mt-10">
              <h5>External Links</h5>
              {currentProject.links.map((link) => (
                <div className="flex space-x-4">
                  <p>{link.name}</p>
                  <a href={link.url}>{"Click here"}</a>
                </div>
              ))}
            </div>
          )}
        </article>
      </section>
    </div>
  );
}

export default Project;

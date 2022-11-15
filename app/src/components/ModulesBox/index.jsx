import React, { useState } from "react";
import { ReactTinyLink } from "react-tiny-link";
import { ModuleBoxContainer } from "./styles";

const ModulesBox = ({ title, summary, videoFile, textFile }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModuleBoxContainer>
      <div>
        <div className="title-content" onClick={() => setIsOpen(!isOpen)}>
          <button id="textButton">
            {title}{" "}
            <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
          </button>
        </div>
        {isOpen && (
          <div className="trail-content" id="div">
            {summary.map((summary, index) => (
              <div className="content-wrapper" key={index}>
                <div className="container-list">
                  <div className="left-content">
                    <input type="checkbox"></input>
                    <div className="containerText">{summary}</div>
                  </div>
                  <div>
                    <div className="wrapperIcons">
                      <button class="btn">
                        <i className="fa-solid fa-headphones fa-2x"></i>
                      </button>
                      <button class="btn">
                        <i className="fa-brands fa-youtube fa-2x"></i>
                      </button>
                      <button class="btn">
                        <i className="fa-solid fa-book-open fa-2x"></i>
                      </button>
                      <button class="btn">
                        <i className="fa-solid fa-pencil fa-2x"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <ReactTinyLink
                  cardSize="small"
                  showGraphic={true}
                  maxLine={2}
                  minLine={1}
                  onClick={(e, response) => alert(JSON.stringify(response))}
                  url="https://medium.com/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4"
                  requestHeaders={{}}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </ModuleBoxContainer>
  );
};

export default ModulesBox;

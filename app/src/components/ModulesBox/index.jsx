import React, { useState } from "react";
import { ModuleBoxContainer } from "./styles";

const ModulesBox = ({ title, summary, videoFile, textFile }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModuleBoxContainer>
      <div>
        <div className="title-content" onClick={() => setIsOpen(!isOpen)}>
          <button id="textButton">
            {title} <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
          </button>
        </div>
        {isOpen && (
          <div className="trail-content" id="div">
            {summary.map((summary) => (
              <div className="content-wrapper">
                <div className="container-list">
                  <div className="left-content">
                    <input type="checkbox"></input>
                    <div className="containerText">{summary}</div>
                  </div>
                  <div className="wrapperIcons">
                    <button><i className="fa-solid fa-headphones fa-2x"></i></button>
                    <button><i className="fa-brands fa-youtube fa-2x"></i></button>
                    <a href="https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4"><button><i className="fa-solid fa-book-open fa-2x"></i></button></a>
                    <button><i className="fa-solid fa-pencil fa-2x"></i></button>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </ModuleBoxContainer>
  );
};

export default ModulesBox;

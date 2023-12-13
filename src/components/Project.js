import React from 'react';
import '../styles/Project.css';

const Project = (props) => {
  const { name, description, sourceCode, liveApp, subDescription = "" } = props;

  return (
    <div className="project">
      <article className="details mobile">
        <h3 className="subheadings-font">{name}</h3>
        <p className="description">{description}</p>
      </article>
      <a className="preview" href={liveApp} target="_blank" rel="noreferrer">
        <div className={`media ${name.toLowerCase().replace(' ', '-')}`}></div>
      </a>
      <article className="details mobile">
        <div className="links">
          
        </div>
      </article>
      <article className="details regular">
        <h3 className="subheadings-font">{name}</h3>
        <p className="description">
          {description}
          {subDescription && <span className="sub-description">{subDescription}</span>}
        </p>
        
      </article>
    </div>
  );
};

export default Project;

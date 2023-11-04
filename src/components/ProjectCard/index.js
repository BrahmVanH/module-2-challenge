import React from "react";
import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <div className="project-display ">
      <Link to={'https://recipeme-recipe-logger.heroku.app'}>
        <img src={projectScreenshot} />
        <div className="card-img-overlay text-center d-flex flex"
      </Link>
    </div>
  )
}

export default ProjectCard;
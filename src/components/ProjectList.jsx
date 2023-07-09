import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="columns">
          {projects.map((value) => {
            return (
              <div
                className="my-3"
                key={value.id}
              >
                <div className="card-img-top text-center">
                  <img src={value.img} alt="Проект" className="photo w-100" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
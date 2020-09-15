import React from "react";

const Card = (props) => {
  const { data } = props;
  console.log(data);
  const func = async () => {};
  const Data = data.map((d, index) => {
    return (
      <div key={index}>
        <div className="row">
          <div className="card-medium">
            <div className="col s12 m6 offset-l3 l6">
              <div className="card-panel">
                <div className="card-content purple-text">
                  <h4 className="card-title">{d.Title}</h4>
                  <h6 className="black-text">{d.description}</h6>
                </div>
                <div className="card-action">
                  <i class="material-icons prefix purple-text">attach_file</i>
                  <a href={d.File} target="_blank">
                    Document Reference
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{Data}</div>;
};
export default Card;

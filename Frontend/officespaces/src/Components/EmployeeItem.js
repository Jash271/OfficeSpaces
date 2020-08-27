import React from 'react'

const EmployeeItem = ({ employee }) => {

    const { name, position, image } = employee
    console.log(name, position, image)

    return (
        <div className="column" float="left" width="50%">
            <div className="col s6 m4">
                <div className="card">
                    <div className="">
                        <img className="round-img" width="200" height='200' src={image} />
                    </div>
                    <div class="card-content">
                        <span>
                            <h4>
                                <span>{name}</span>&nbsp;&nbsp;
                                <a class="btn-floating waves-effect waves-light deep-purple accent-4" > <i class="material-icons">keyboard_arrow_right</i></a>
                            </h4>
                        </span>
                        <p>{position}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EmployeeItem

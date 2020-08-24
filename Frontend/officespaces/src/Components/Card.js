

import React from 'react'

const Card = (props)=>{
    const {data} = props
    console.log(data)
    const func = async () =>{
        
    }
    const Data =data.map((d,index)=>{
        return(
            <div key = {index}>
                <div className="row">
                    <div className="col s3 m3 l3">

                    </div>
                    <div className="card-medium">
                    <div className="col s12 m6 l6">
                    <div className="card-panel teal lighten-2">
                        <div className="card-content white-text">
                        <span classnName="card-title">{d.Title}</span>
                        <p>{d.description}</p>
                        </div>
                        <div className="card-action">
                        <a href={d.File}>Document Reference</a>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>


        )
    })


    return(
        <div>
            {Data}
        </div>
    )

}
export default Card

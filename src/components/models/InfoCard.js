import React from 'react'
import {Link} from 'react-router-dom';

const InfoCard = (props) => {

  return(
    <>
          <div className="card horizontal white">
              <div className="card-stacked">
                <div className="card-content">
                  <p>{props.description}</p>
                </div>
                <div className="card-action">
                  <Link to={`/${props.page}`}>Go to {props.page}</Link>
                </div>
              </div>
            </div>
    </>
  )

}

export default InfoCard
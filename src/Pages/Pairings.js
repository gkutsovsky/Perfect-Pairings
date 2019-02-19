import React from 'react'
import { getRandomDescription } from './Descriptions'
import './Pairings.css';
import { getRandomBeautyShots } from './Beautyshots'

const display = {
  display: 'flex',
  flexDirection: 'row',
  align: 'center',
  padding: '100px',
}

function chooseImage(currentItem) {
  if (currentItem.image === "https://www.cannabisreports.com/images/strains/no_image.png" || currentItem.image === undefined ) {
    return "https://magazine.grasscity.com/wp-content/uploads/2016/02/How-To-Harvest-Outdoor-Marijuana-Plants-720x480@2x.jpg";
  }
  else {
    return currentItem.image;
  }
}

const rightImg = {
                    backgroundImage: `url(${getRandomBeautyShots()})`,
                    backgroundSize: "cover"
                  }

const Pairings = ({ currentItem }) => {
  return(
    <div style={display}>
      <div className="pairing-image"
           style={
                  { backgroundImage: `url(${chooseImage(currentItem)})`,
                    backgroundSize: "cover" }
                 }></div>
      <div id = "stuff">
        <h3 className = "name">{currentItem.name}</h3>
        <div>
          <h4 className = "parentalLineage">Parental Lineage</h4>
          {currentItem.lineage && Object.keys(currentItem.lineage).map(key => <div key={key}>{key}</div>)}
          <h4 className = 'why'>Why we like it</h4>
          <h4 className= "description"> {getRandomDescription()}</h4>

          </div>
      </div>
      <div className="pairing-image" style={ rightImg }></div>
    </div>
  )
}



export default Pairings

    // <img src={chooseImage(currentItem)}/>
    // <img
    //   src={getRandomBeautyShots()}
    //   alt="beauty shots"
    //   />

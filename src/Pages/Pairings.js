import React from 'react'
import { getRandomDescription } from './Descriptions'
import './Pairings.css';
import { getRandomBeautyShots } from './Beautyshots'

const display = {
  display: 'flex',
  flexDirection: 'row',
  align: 'center',



}


function chooseImage(currentItem) {
  if (currentItem.image === "https://www.cannabisreports.com/images/strains/no_image.png") {
    return "https://magazine.grasscity.com/wp-content/uploads/2016/02/How-To-Harvest-Outdoor-Marijuana-Plants-720x480@2x.jpg";
  }
  else {
    return currentItem.image;
  }
}

const Pairings = ({ currentItem }) => {
  return(
    <div style={display}>
      <img src={chooseImage(currentItem)} />
        <div className = "placement">
      <h3 className = "name">{currentItem.name}</h3>
      <div className = "lineage">
      <h3 className = "parentalLineage">Parental Lineage</h3>
      {currentItem.lineage && Object.keys(currentItem.lineage).map(key => <div>{key}</div>)}
      <h3 className = 'subtitle"'>Why we like it</h3>  <h3 class= "description">{getRandomDescription()}</h3>

      </div>
      </div>
      <img src={getRandomBeautyShots()} alt="beauty shots"></img>
    </div>
  )
}



export default Pairings

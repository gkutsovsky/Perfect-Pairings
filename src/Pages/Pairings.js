import React from 'react'
import './Pairings.css';

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
    <div>
      <img src={chooseImage(currentItem)} />
        <div class = "placement">
      <h3 class = "name">{currentItem.name}</h3>
      <div class = "lineage">
      <h3 class = "subtitle">Parental Lineage</h3>
      {currentItem.lineage && Object.keys(currentItem.lineage).map(key => <div>{key}</div>)}
      <h3 class = 'subtitle"'>Why we like it</h3>  <h3 class= "description">Earthy flavors soured by skunky, fruity notes arrive on the inhale, making their exit with the taste of hashy spice.  </h3>
      </div>
      </div>


    </div>
  )
}

export default Pairings

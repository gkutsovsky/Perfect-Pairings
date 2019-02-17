import React from 'react'

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
      <h3>{currentItem.name}</h3>
      <div class = "lineage">
      <h3>Parental Lineage</h3>
      {currentItem.lineage && Object.keys(currentItem.lineage).map(key => <div>{key}</div>)}
      </div>


    </div>
  )
}

export default Pairings

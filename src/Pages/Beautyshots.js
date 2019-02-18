const description = ["https://www.southernladymagazine.com/wp-content/uploads/2015/05/Picnic1.jpg", "https://i2.wp.com/www.accredited-times.com/wp-content/uploads/2018/01/Dinner-Party-1.png?fit=2048%2C1112&ssl=1","http://assets.kraftfoods.com/recipe_images/opendeploy/56142-aff0a8f08bdcbdab6def9cebe5dda14ff7237760_642x428.jpg", "https://www.sahm.in/cache/860x380-0/wp-content/uploads/2018/06/Weddin_32572resized.jpg","https://dynamix-cdn.s3.amazonaws.com/atlantahurtcom/Tailgating_10-17.jpg" ]



export const getRandomBeautyShots = () => {
  const randomIndex = Math.floor(Math.random() * description.length)
  return description[randomIndex]
}

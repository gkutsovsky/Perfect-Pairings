const description = ["https://www.southernladymagazine.com/wp-content/uploads/2015/05/Picnic1.jpg", "https://i2.wp.com/www.accredited-times.com/wp-content/uploads/2018/01/Dinner-Party-1.png?fit=2048%2C1112&ssl=1", "Hybrid effects fuel a stimulated mental state that bursts through the body, leaving relaxation in the limbs", "The dense, sticky buds have an intense smell of sweet fruits mixed with pine and eucalyptus trees. The cerebral high comes on quick and leaves consumers feeling uplifted and euphoric while reducing stress and relaxing the mind.","The hefty sativa buds give earthy, sweet coffee flavors that provide a dreamy, cerebral effect." ]

export const getRandomDescription = () => {
  const randomIndex = Math.floor(Math.random() * description.length)
  return description[randomIndex]

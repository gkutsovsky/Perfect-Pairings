const description = [" A pleasant aroma and taste of tropical berries. It is known for its unique sweet taste and because it is an equal hybrid, the effects are both mind and body. Flowering time for this plant is approximately 8-9 weeks.", "Earthy flavors soured by skunky, fruity notes arrive on the inhale, making their exit with the taste of hashy spice.", "Hybrid effects fuel a stimulated mental state that bursts through the body, leaving relaxation in the limbs", "The dense, sticky buds have an intense smell of sweet fruits mixed with pine and eucalyptus trees. The cerebral high comes on quick and leaves consumers feeling uplifted and euphoric while reducing stress and relaxing the mind.","DNA Genetics developed Chocolope by crossing Chocolate Thai with Cannalope Haze to create their homage to the Chocolate strains of the 1980s. The hefty sativa buds give earthy, sweet coffee flavors that provide a dreamy, cerebral effect." ]

export const getRandomDescription = () => {
  const randomIndex = Math.floor(Math.random() * description.length)
  return description[randomIndex]
}

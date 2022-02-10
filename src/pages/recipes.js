import React from "react"
import Layout from "../components/Layout/Layout"
import Recipe from "../components/Recipes/Recipe"
import * as recipeStyle from "../styles/recipe.module.css"
import recipe1 from "../images/recipies/recipie1.png"
import recipe2 from "../images/recipies/recipie2.png"
import recipe3 from "../images/recipies/recipie3.png"
import recipe4 from "../images/recipies/recipe4.png"
import recipe5 from "../images/recipies/recipe5.png"
import InstaFeed from "../components/InstaFeed"
import Seo from "../components/seo"

const recipesData = [
  {
    title: "All Irish For Christmas Is You | Espresso Martini",
    img: recipe1,
    subtitleOne: "Ingredients",
    pointsOne: [
      "2 oz. cooled espresso or cold brew concentrate",
      "1 oz. vodka",
      "1⁄2 oz. coffee liqueur",
      "1⁄2 oz. Black Irish Original",
      "Pinch of cinnamon",
    ],
    subtitleTwo: "Directions",
    pointsTwo: [
      "Add espresso, vodka, coffee liqueur and Black Irish Original to shaker with ice,",
      "and shake vigorously ",
      "Strain into coupe glass or martini glass of choice",
      "Top with pinch of cinnamon",
    ],
  },
  {
    title: "We Belong Together Brew | Irish Coffee ",
    img: recipe2,
    subtitleOne: "Ingredients",
    pointsOne: [
      "6 oz. prepared hot coffee",
      "1 oz. Irish whiskey ",
      "1⁄2 oz. coffee liqueur",
      "1 1⁄2 oz. Black Irish Original",
      "Whipped cream to top",
      "Optional: cocoa powder for dusting ",
    ],
    subtitleTwo: "Directions",
    pointsTwo: [
      "Fill glass mug or footed glass mug with hot water and let stand 1-2 minutes to ",
      "heat up glass; pour out. ",
      "Fill glass with coffee, Irish Whiskey and Black Irish Original, and stir ",
      "Dust cocoa powder over whipped cream, and serve ",
    ],
  },
  {
    title: "Salted Caramel Hot Chocolate",
    img: recipe3,
    subtitleOne: "Ingredients",
    pointsOne: [
      "1 cup prepared hot chocolate ",
      "2 oz. Black Irish Salted Caramel",
      "Whipped cream to top",
    ],
    subtitleTwo: "Directions",
    pointsTwo: [
      "Caramel syrup to drizzle",
      "Fill mug with hot chocolate and Black Irish Salted Caramel, and stir",
      "Top with whipped cream",
      "Drizzle caramel syrup ",
    ],
  },
  {
    title: "Unknown",
    img: recipe4,
    subtitleOne: "Ingredients",
    pointsOne: [
      "2 oz. cooled espresso or cold brew concentrate",
      "1 oz. vodka",
      "1⁄2 oz. coffee liqueur",
      "1⁄2 oz. Black Irish Original",
      "Pinch of cinnamon",
    ],
    subtitleTwo: "Directions",
    pointsTwo: [
      "Add espresso, vodka, coffee liqueur and Black Irish Original to shaker with ice,",
      "and shake vigorously ",
      "Strain into coupe glass or martini glass of choice",
      "Top with pinch of cinnamon",
    ],
  },
  {
    title: "The Fantasy | Spiked Milkshake ",
    img: recipe5,
    subtitleOne: "Ingredients",
    pointsOne: [
      "1 cup vanilla ice cream",
      "3⁄4 to 1 cup milk, depending on desired consistency",
      "3 oz. of favorite Black Irish flavor ",
      "Whipped cream to top",
      "Optional garnishes: sprinkles, chocolate shavings, mini chocolate chips, ",
      "crumbled cookies, chopped nuts",
    ],
    subtitleTwo: "Directions",
    pointsTwo: [
      "Blend together ice cream, 3⁄4 cup milk and Black Irish until smooth; add additional ",
      "milk as needed to reach desired consistency",
      "Rim glass with chocolate syrup and dip into favorite garnish, such as sprinkles",
      "Drizzle chocolate syrup onto inner sides of glass ",
      "Carefully pour milkshake into glass ",
      "Top with whipped cream and additional favorite garnishes",
      "Serve with straw",
    ],
  },
]

function recipes() {
  return (
    <>
      <Seo title="Recipes" description="Black Irish" />

      <Layout>
        <div className={recipeStyle.recipe}>
          <div className={recipeStyle.title}>
            <h1>COCKTAIL RECIPES</h1>
          </div>
          <div className={recipeStyle.border}></div>
        </div>
        <div className="container my-5">
          <Recipe data={recipesData} />
        </div>
        <div className="my-5">
          <InstaFeed />
        </div>
      </Layout>
    </>
  )
}

export default recipes

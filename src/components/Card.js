import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './_card.scss'
import { PrismicRichText } from '@prismicio/react'

export const Card = ({ title, description, linkText, image }) => {
  const cardImage = getImage(image.gatsbyImageData)

  return (
    <div className="cardContainer">
      <div className="imgWrap">
        {cardImage && <GatsbyImage image={cardImage} alt={image.alt} />}
      </div>
      <div className="cardText">
        <PrismicRichText field={title.richText} />
        <PrismicRichText field={description.richText} />
        <PrismicRichText field={linkText.richText} />
      </div>
    </div>
  )
}

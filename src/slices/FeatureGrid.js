import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const FeatureGrid = ({ slice }) => {
  return (
    <section className="FeatureGrid">
      <div className="Container">
        <div className="center-wrap">
          <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
        </div>
        <div className="grid">
          {slice.items.map((item,index) => (
            <div className="card" key={`card:${index}`}>
              <div className="image">
                <GatsbyImage
                  image={item.card_image?.gatsbyImageData}
                  alt={item.card_image?.alt || ""}
                />
              </div>
              <div className="card-copy">
                <h3>{item.card_title}</h3>
                <p>{item.card_description}</p>
                <PrismicLink href={item.card_link?.url}>
                  {item.card_link_label}
                </PrismicLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyFeatureGrid on PrismicPageDataBodyFeatureGrid {
    id
    primary {
      copy_richtext {
        richText 
      }
      featured_label
      view_all_label
      view_all_link {
        url
      }
    }
    items {
      card_image {
        gatsbyImageData
        alt 
      }
      card_title
      card_description
      card_link_label
      card_link {
        url 
      }
    }
  }
`

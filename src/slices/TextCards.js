import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const TextCards = ({ slice }) => {
  return (
    <section className="TextCards">
      <div className="Container">
        <div className="copy-wrap">
          <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
        </div>
        <div className="card-row">
          {slice.items.map((item,index) => (
            <div className="card" key={`card:${index}`}>
              <h4>{item.card_title}</h4>
              <PrismicLink href={item.card_link?.url}>
                {item.card_link_label}
              </PrismicLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyTextCards on PrismicPageDataBodyTextCards {
    id
    primary {
      copy_richtext {
        richText
      }
    }
    items {
      card_title
      card_link_label
      card_link {
        url 
      }
    }
  }
`

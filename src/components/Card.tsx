import Link from 'gatsby-link'
import React from 'react'
import { Image } from 'rebass'

interface Props {
  to: string
  image: string
  title: string
}

const Card: React.SFC<Props> = ({ to, image, title }) => (
  <Link style={{ boxShadow: 'none' }} to={to}>
    <Image src={image} alt={title} />
  </Link>
)

export default Card

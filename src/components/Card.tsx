import { Link } from 'gatsby'
import React from 'react'
import { Image, Text } from 'rebass'
import { Relative, Absolute } from './Position'
import styled from 'styled-components'

const Overlay = styled(Absolute).attrs<any>({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})`
  transition: background-color 0.1s ease-out;

  display: flex;
  justify-content: center;
  align-items: center;
`

interface TitleProps {
  preview: boolean
  [index: string]: any
}

const Title = styled(({ preview, ...props }: TitleProps) => (
  <Text {...props} />
))`
  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;
  // for a11y
  visibility: ${({ preview }) => (preview ? 'visible' : 'hidden')};
  opacity: ${({ preview }) => (preview ? 1 : 0)};
`

interface Props {
  to: string
  image: string
  title: string
}

interface State {
  preview: boolean
}

export default class Card extends React.Component<Props> {
  state: State = { preview: false }
  timer: any

  onEnter: React.PointerEventHandler<HTMLImageElement> = e => {
    if (e.pointerType === 'mouse') {
      this.setState({ preview: true })
    } else {
      if (this.timer) clearTimeout(this.timer)

      this.timer = setTimeout(() => {
        this.setState({ preview: true })
      }, 300)
    }
  }

  onLeave: React.PointerEventHandler<HTMLImageElement> = e => {
    if (this.timer) e.preventDefault()

    this.setState({ preview: false })
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    const { to, image, title } = this.props

    return (
      <Link style={{ boxShadow: 'none' }} to={to}>
        <Relative>
          <Image src={image} alt={title} title={title} />
          <Overlay
            bg={this.state.preview ? 'overlay' : undefined}
            onPointerEnter={this.onEnter}
            onPointerLeave={this.onLeave}
          >
            <Title color="white" fontSize={5} preview={this.state.preview}>
              {title}
            </Title>
          </Overlay>
        </Relative>
      </Link>
    )
  }
}

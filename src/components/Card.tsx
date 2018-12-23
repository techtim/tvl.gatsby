import { Link } from 'gatsby'
import React from 'react'
import { Image, Text, Box, Flex } from 'rebass'

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
    const { preview } = this.state

    return (
      <Link style={{ boxShadow: 'none' }} to={to}>
        <Box css={{ position: 'relative' }}>
          <Image src={image} alt={title} />
          <Flex
            bg={this.state.preview ? 'overlay' : undefined}
            onPointerEnter={this.onEnter}
            onPointerLeave={this.onLeave}
            justifyContent="center"
            alignItems="center"
            css={`
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transition: background-color 0.1s ease-out;
            `}
          >
            <Text
              color="white"
              fontSize={5}
              textAlign="center"
              css={`
                transition: visibility 0.1s ease-out, opacity 0.1s ease-out;
                visibility: ${preview ? 'visible' : 'hidden'};
                opacity: ${preview ? 1 : 0};
              `}
            >
              {title}
            </Text>
          </Flex>
        </Box>
      </Link>
    )
  }
}

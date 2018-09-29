import {
  position,
  top,
  TopProps,
  right,
  RightProps,
  bottom,
  BottomProps,
  left,
  LeftProps,
} from 'styled-system'
import { Box } from 'rebass'
import styled from 'styled-components'

export const Relative = styled(Box).attrs<
  React.HTMLProps<HTMLDivElement> & { [index: string]: any }
>({
  position: 'relative',
})`
  ${position};
`

export type AbsoluteProps = TopProps &
  RightProps &
  BottomProps &
  LeftProps & { [index: string]: any }

export const Absolute = styled(Box).attrs<AbsoluteProps>({
  position: 'absolute',
})`
  ${position};
  ${top};
  ${right};
  ${bottom};
  ${left};
`

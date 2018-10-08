import React from 'react'

interface Props {
  src: string
}

const Video: React.SFC<Props> = ({ src }) => (
  <div style={{ paddingTop: '56.25%', width: '100%', position: 'relative' }}>
    <iframe
      src={src}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      frameBorder="0"
      allowFullScreen
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    />
  </div>
)

export default Video

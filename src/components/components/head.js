import React from 'react'
import ZefirHead from 'zefir/head'

const Head = ({children}) => (
  <ZefirHead>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    {/* <link
      href='https://fonts.googleapis.com/css?family=Nunito:400,600,700'
      rel='stylesheet'
    /> */}
    {children}
  </ZefirHead>
)

export default Head

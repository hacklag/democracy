import React from 'react'

const Wrapper = ({children}) => (
  <div className={`Wrapper`}>
    {children}

    <style jsx>{`
      .Wrapper {
        padding-left: 16px;
        padding-right: 16px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 960px;
      }

      @media screen and (min-width: 769px) {
        .Wrapper {
          padding-left: 32px;
          padding-right: 32px;
        }
      }
    `}</style>
  </div>
)

export default Wrapper

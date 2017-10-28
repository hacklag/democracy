import React from 'react'

const List = ({children, horizontal, spacing}) => (
  <ul
    className={`
    List
    ${horizontal ? 'List--horizontal' : ''}
    ${spacing ? `List--${spacing}` : ''}
  `}
  >
    {children}
    <style jsx>{`
      .List {
        width: 100%;
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      .List--horizontal {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .List--xs:not(.List--horizontal) > :global(*) + :global(*) { margin-top: 8px }
      .List--sm:not(.List--horizontal) > :global(*) + :global(*) { margin-top: 16px }
      .List--md:not(.List--horizontal) > :global(*) + :global(*) { margin-top: 32px }
      .List--lg:not(.List--horizontal) > :global(*) + :global(*) { margin-top: 48px }

      .List--xs.List--horizontal > :global(*) + :global(*) { margin-left: 8px }
      .List--sm.List--horizontal > :global(*) + :global(*) { margin-left: 16px }
      .List--md.List--horizontal > :global(*) + :global(*) { margin-left: 32px }
      .List--lg.List--horizontal > :global(*) + :global(*) { margin-left: 48px }
    `}</style>
  </ul>
)

export default List

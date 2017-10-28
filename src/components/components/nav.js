import React, {Children} from 'react'

const Nav = ({children, stack, center}) => (
  <div>
    <ul
      className={`
        Nav
        ${center ? 'Nav--center' : ''}
      `}
    >
      {Children.map(children, Item => (
        <li>
          {Item}
        </li>
      ))}
    </ul>

    <style jsx>{`
      .Nav {
        display: flex;
        list-style: none;
      }

      .Nav > :global(*) + :global(*) {
        margin-left: 15px;
      }

      .Nav :global(.active) {
        font-weight: 700;
      }

      .Nav--center {
        justify-content: center;
      }
    `}</style>
  </div>
)

export default Nav

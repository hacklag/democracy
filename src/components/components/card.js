const Card = ({children}) => (
  <div className='Card'>
    {children}

    <style jsx>{`
      .Card {
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 2px 4px hsla(225,2%,43%, .18);
      }
    `}</style>
  </div>
)

Card.header = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        padding: 16px;
      }
    `}</style>
  </div>
)

Card.content = ({children}) => (
  <div>
    {children}

    <style jsx>{`
      div {
        border-top: 1px solid #e6eced;
        {/* background-color: #fafafa; */}
        padding: 24px;
        border-radius: 0 0 3px 3px;
      }
    `}</style>
  </div>
)

export default Card

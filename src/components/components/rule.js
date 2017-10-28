const Rule = ({spacing = 8}) => (
  <div>
    <hr style={{margin: `${spacing}px 0`}} />

    <style jsx>{`
      hr {
        display: block;
        width: 100%;
        border: 0;
        border-top: 1px solid #e7e9ee;
      }
    `}</style>
  </div>
)

export default Rule

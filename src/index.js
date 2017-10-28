export default ({
  services: {app: {login}}
}) => (
  <div className='page'>
    <button onClick={login}>Login via Facebook</button>

    <style jsx>{`
      .page {
        padding: 80px;
        font-family: Arial;
      }

      button {
        padding: 7px 14px;
        background: #0366d6;
        border-radius: 3px;
        border: none;
        color: #fff;
      }
    `}</style>
  </div>
)

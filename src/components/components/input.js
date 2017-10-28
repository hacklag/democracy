const Input = ({full, type = 'text', lg, label, ...props}) => (
  <div
    className={`
      Input
      ${type ? `Input--${type}` : ''}
      ${full ? 'Input--full' : ''}
      ${lg ? 'Input--lg' : ''}
    `}
  >
    <label>
      {label && <div className='Label'>{label}</div>}
      <input {...props} type={type} />
    </label>
    <style jsx>{`
      div {
        display: inline-block;
      }

      input {
        border: none;
        padding: 11px 10px;
        border: 1px solid #d3d7e0;
        border-radius: 5px;
        font-size: 14px;
        transition: border-color .25s;
        font-family: inherit;
      }

      input.is-invalid {
        border-color: #BF616A;
      }

      input:focus {
        outline: 0;
        box-shadow: 0 1px 4px rgba(0,0,0, .07);
        border-color: #5b55f7;
      }

      input::placeholder {
        color: #bbb;
      }

      .Label {
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 600;
        color: #333;
        cursor: pointer;
      }

      .Input--full,
      .Input--full input {
        width: 100%;
      }

      .Input--lg input {
        font-size: 25px;
        padding: 17px 16px;
      }
    `}</style>
  </div>
)

export default Input

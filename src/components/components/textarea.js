const Textarea = ({full, type = 'text', label, ...props}) => (
  <div
    className={`
      Textarea
      ${type ? `Textarea--${type}` : ''}
      ${full ? 'Textarea--full' : ''}
    `}
  >
    <label>
      {label && <div className='Label'>{label}</div>}
      <textarea {...props} type={type} />
    </label>
    <style jsx>{`
      div {
        display: inline-block;
      }

      textarea {
        border: none;
        padding: 11px 10px;
        border: 1px solid #d3d7e0;
        border-radius: 5px;
        font-size: 14px;
        transition: border-color .25s;
        font-family: inherit;
        resize: none;
        vertical-align: top;
      }

      textarea.is-invalid {
        border-color: #BF616A;
      }

      textarea:focus {
        outline: 0;
        box-shadow: 0 1px 4px rgba(0,0,0, .07);
        border-color: #5b55f7;
      }

      textarea::placeholder {
        color: #bbb;
      }

      .Label {
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 600;
        color: #333;
        cursor: pointer;
      }

      .Textarea--full,
      .Textarea--full Textarea {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Textarea

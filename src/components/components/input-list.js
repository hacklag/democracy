import React from 'react'

const InputList = ({children, errors = {}}) => {
  const errorKeys = Object.keys(errors)
  const matchedErrors = React.Children.map(children, input => input.props.name)
  const unmatchedErors = errorKeys.filter(err => matchedErrors.indexOf(err) < 0)

  return (
    <div>
      {React.Children.map(children, input => {
        return input.props.noWrap
          ? input
          : <div className='Input' key={input.props.name}>
            {input}

            {errors[input.props.name] &&
            <div className='Input__error'>{errors[input.props.name]}</div>}
          </div>
      })}

      {typeof errors === 'string'
        ? <div className='Input__error'>{errors}</div>
        : unmatchedErors.map(err => (
          <div className='Input__error' key={err}>{errors[err]}</div>
        ))}

      <style jsx>{`
        .Input + .Input {
          margin-top: 8px;
        }

        .Input__error {
          text-align: left;
          font-size: 14px;
          color: red;
          margin-top: 7px;
        }
      `}</style>
    </div>
  )
}

export default InputList

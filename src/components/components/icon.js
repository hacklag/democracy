const Icon = ({size, name, className, ...props}) => {
  const type = getType(props)

  delete props.light
  delete props.regular
  delete props.solid
  delete props.brands

  return (
    <svg className={`Icon ${className}`} width={size} height={size} {...props}>
      <use href={`/static/icons/${type}.svg#${name}`} />

      <style jsx>{`
        .Icon {
          display: inline-block;
          vertical-align: top;
          fill: currentColor;
        }
      `}</style>
    </svg>
  )
}

export default Icon

function getType (props) {
  return 'light' in props
    ? 'light'
    : 'solid' in props ? 'solid' : 'brands' in props ? 'brands' : 'regular'
}

const ProgressBar = ({total, value}) => (
  <div className="ProgressBar">
    <span className="ProgressBar__line" style={{
      width: `${100 * value / total}%`
    }} />
    <style jsx>{`
      .ProgressBar {
        width: 100%;
        background: #e5e5e5;
        border-radius: 5px;
        overflow: hidden;
        display: inline-block;
      }

      .ProgressBar__line {
        display: block;
        height: 10px;
        background: #00cc82 linear-gradient(to right, #00ccc5 0%, #00cc82 100%)
      }
    `}</style>
  </div>
)

export default ProgressBar

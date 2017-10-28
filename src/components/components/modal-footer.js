const ModalFooter = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        background-color: #f3f5f6;
        margin-bottom: -16px;
        margin-left: -16px;
        margin-right: -16px;
        margin-top: 16px;
        padding: 16px;
        display: flex;
        justify-content: flex-end;
      }
    `}</style>
  </div>
)

export default ModalFooter

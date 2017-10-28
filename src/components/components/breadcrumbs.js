const Breadcrumbs = ({children}) => (
  <div className='Breadcrumbs'>
    {children}

    <style jsx>{`
      .Breadcrumbs {
        display: flex;
      }

      .Breadcrumbs :global(a) {
        color: #999;
        font-size: 24px;
        line-height: 1.7;
        font-weight: 300;
      }

      .Breadcrumbs :global(.active) {
        color: #111;
      }

      .Breadcrumbs > :global(*) + :global(*) {
        margin-left: 15px;
      }

      .Breadcrumbs > :global(*) + :global(*)::before {
        content: '\\f054';
        font-family: FontAwesome;
        font-size: 14px;
        margin-right: 15px;
        position: relative;
        top: -2px;
      }
    `}</style>
  </div>
)

export default Breadcrumbs

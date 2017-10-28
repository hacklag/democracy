const Button = ({
  children,
  primary,
  secondary,
  outline,
  github,
  google,
  facebook,
  full,
  square,
  lg,
  ...props
}) => (
  <button
    className={`
      Button
      ${primary ? 'Button--primary' : ''}
      ${secondary ? 'Button--secondary' : ''}
      ${outline ? 'Button--outline' : ''}
      ${github ? 'Button--github' : ''}
      ${google ? 'Button--google' : ''}
      ${facebook ? 'Button--facebook' : ''}
      ${full ? 'Button--full' : ''}
      ${square ? 'Button--square' : ''}
      ${lg ? 'Button--lg' : ''}
    `}
    {...props}
  >
    {children}
    <style jsx>{`
      .Button {
        font-family: Nunito, 'Helvetica Neue', Helvetica, Arial, sans-serif;
        display: inline-block;
        border-radius: 6px;
        border: 0;
        color: #fff;
        padding: 11px 20px;
        cursor: pointer;
        font-size: 14px;
        letter-spacing: .02em;
        font-weight: 600;
        transition-property: transform, box-shadow;
        transition-duration: .25s;
      }

      .Button :global(.Icon) {
        margin-top: -1px;
      }

      .Button:hover {
        /*box-shadow: ;*/
      }

      .Button:focus {
        outline: 0;
      }

      .Button--full {
        width: 100%;
      }

      .Button :global(a) {
        color: inherit;
      }

      .Button :global(a):hover,
      .Button :global(a):focus,
      .Button :global(a):active {
        text-decoration: none;
      }

      .Button--primary {
        background-color: #5b55f7;
        box-shadow: inset 0 0 100px 0 rgba(255, 255, 255, 0), 0 2px 4px 0 rgba(0, 0, 0, .15);
      }

      .Button--primary:hover,
      .Button--primary:focus {
        box-shadow: inset 0 0 100px 0 rgba(255, 255, 255, 0.2), 0 3px 6px 0 rgba(0, 0, 0, .2);
        transform: translateY(-1px)
      }

      .Button--primary:active {
        box-shadow: inset 0 0 100px 0 rgba(0, 0, 0, 0.07);
        transform: translateY(1px);
      }

      .Button--github {
        background-color: rgba(64, 120, 192, 0.15);
        color: #4078c0;
      }

      .Button--google {
        background-color: rgba(221, 75, 56, 0.15);
        color: #dd4b39;
      }

      .Button--facebook {
        background-color: rgba(59, 88, 152, 0.15);
        color: #3b5998;
      }

      .Button--github:hover,
      .Button--github:focus,
      .Button--google:hover,
      .Button--google:focus,
      .Button--facebook:hover,
      .Button--facebook:focus {
        box-shadow: inset 0 0 100px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--github:active,
      .Button--google:active,
      .Button--facebook:active {
        transform: scale(.99);
        box-shadow: inset 0 0 100px 0 rgba(0, 0, 0, 0.07);
      }

      .Button--outline {
        background: none;
        border-radius: 8px;
        padding: 12px 28px;
        border: solid 2px rgba(141, 146, 153, 0.5);
        color: rgba(141, 146, 153, 0.5);
      }

      .Button--outline:hover {
        color: rgba(141, 146, 153, 1);
      }

      .Button[disabled],
      .Button[disabled]:focus,
      .Button[disabled]:hover,
      .Button[disabled]:active {
        background-color: #f5f5f5;
        color: #bbb;
        transform: none;
        box-shadow: none;
      }

      .Button--lg {
        padding: 18px 32px;
        font-size: 25px;
        font-weight: 300;
      }
    `}</style>
  </button>
)

export default Button

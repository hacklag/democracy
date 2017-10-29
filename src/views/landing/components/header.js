import {connect} from 'zefir/utils'

const Header = ({
  services: {app},
  stores: {auth, ui}
}) => (
  <div className="Header is-not-logged-in">
    <h2 className="Header__title">Democracy 3.0</h2>
    <div className="UserNav">
      {ui.pending.has('auth:social-login') ? (
        <div>Logging in&hellip;</div>
      ) : auth.isLoggedIn ? (
        <div>
          {auth.user.full_name} <span className="UserNav__spacer">&bull;</span> <a onClick={app.auth.logout}>Logout</a>
        </div>
      ) : (
        <div>
          <a onClick={app.auth.login}>Login via Facebook</a>
        </div>
      )}
    </div>

    <style jsx>{`
      .Header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 32px;
      }

      .is-not-logged-in .Main__title {
        text-align: center;
        font-size: 48px;
      }

      .Main__title {
        font-weight: bold;
      }

      .UserNav {
        font-weight: bold;
      }

      .UserNav a {
        font-weight: bold;
      }

      .UserNav__spacer {
        color: #ccc;
        margin: 0 10px;
        font-size: 10px;
        vertical-align: middle;
      }
    `}</style>
  </div>
)

export default connect(Header)

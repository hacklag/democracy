import {connect} from 'zefir/utils'
import UserNav from './user-nav'
import MatchAsMember from '../match-as-member'
import Nav from '../nav'
import NavLink from '../nav-link'
import Wrapper from '../wrapper'

const PageHead = () => (
  <div className='PageHead'>
    <Wrapper>
      <div className='PageHead__inner'>
        <Nav>
          <NavLink to='/'>
            <span className='PageHead__title'>hackyeah</span>
          </NavLink>
          <MatchAsMember>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </MatchAsMember>
        </Nav>

        <MatchAsMember>
          <UserNav />
        </MatchAsMember>
      </div>
    </Wrapper>

    <style jsx>{`
      .PageHead {
        line-height: 32px;
        border-bottom: 1px solid #e6eced;
        background: #fff;
      }

      .PageHead__inner {
        padding: 16px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .PageHead__title {
        margin-right: 16px;
        font-size: 18px;
        font-weight: 600;
        color: #111;
      }
    `}</style>
  </div>
)

export default connect(PageHead)

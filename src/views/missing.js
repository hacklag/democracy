import {Head, Page, Link} from '../components'

const Missing = () => (
  <Page>
    <Head>
      <title>Not Found - hackyeah</title>
    </Head>

    <div className='page'>
      <h1 className='u-mb-'>Page was not found</h1>
      <Link to='/'>Back to home</Link>
    </div>

    <style jsx>{`
      .page {
        text-align: center;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      h1 {
        color: #333;
        font-weight: 300;
      }
    `}</style>
  </Page>
)

export default Missing

import {connect} from 'zefir/utils'
import {Button, ProgressBar, ModalFooter} from '../../components'

const VoteResults = ({services, stores: {app}}) => (
  <div>
    <h4 className="u-epsilon">{app.question.content}</h4>
    <div className="Results u-mt---">
      {app.question.total_votes === 0 ? (
        <div className="u-ta-c u-mv">No one voted.</div>
      ) : app.question.votes.map(v => (
        <div key={v.key} className="Results__item">
          <div className="Results__item-head">
            <span>{v.key}</span>
            <span>
              {Math.round(100 * v.count / app.question.total_votes)}% ({v.count})
            </span>
          </div>
          <ProgressBar total={app.question.total_votes} value={v.count} />
        </div>
      ))}
    </div>
    <ModalFooter>
      <Button primary onClick={services.ui.modals.voteResults.close}>Close</Button>
    </ModalFooter>

    <style jsx>{`
      .Results > * + * {
        margin-top: 8px;
      }

      .Results__item {
        font-size: 12px;
        font-weight: bold;
      }

      .Results__item-head {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
)

export default connect(VoteResults)

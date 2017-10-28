import {connect} from 'zefir/utils'
import Icon from './icon'

const Modal = ({
  toggle,
  title,
  icon,
  subtitle,
  children,
  component: Component
}) => (
  <div className={`Modal is-visible`}>
    <div className='Modal__bg' onClick={toggle} />
    <div className='Modal__inner'>
      <div className='Modal__content'>
        <div className='Modal__header'>
          <span className='Modal__close' onClick={toggle}>
            <Icon size={16} name='times' />
          </span>
        </div>
        {title &&
          <h3 className='Modal__title'>
            {icon &&
              <span className='Modal__title-icon'>
                <Icon size={17} name={icon} />
              </span>}
            {title}
          </h3>}
        {subtitle && <p className='Modal__subtitle'>{subtitle}</p>}
        {children || <Component />}
      </div>
    </div>

    <style jsx>{`
      .Modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        will-change: visibility, opacity;
        transition-duration: .25s;
        transition-property: visibility, opacity;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        perspective: 2000px;
      }

      .Modal__header {
        position: absolute;
        right: 16px;
      }

      .Modal.is-visible {
        opacity: 1;
        visibility: visible;
      }

      .Modal__bg {
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        position: fixed;
        z-index: -1;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.35);
      }

      .Modal__inner {
        display: flex;
        max-height: 100%;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .15);
      }

      .Modal__content {
        background-color: #ffffff;
        color: #868686;
        padding: 50px 16px 16px;
        position: relative;
        overflow-y: auto;
        will-change: transform, opacity;
        transform: rotate3d(1,1,0,-15deg);
        transform-origin: 100% 0;
        flex-grow: 1;
        transition-duration: .25s;
        transition-property: transform;
      }

      .is-visible .Modal__content {
        transform: none;
      }

      .Modal__close {
        cursor: pointer;
        margin-left: auto;
      }

      .Modal__close {
        fill: #444;
        opacity: 0.6;
        height: 24px;
        transition: opacity .25s;
        display: flex;
        align-items: center;
      }

      .Modal__close:hover {
        opacity: 1;
      }

      .Modal__title {
        font-size: 18px;
        font-weight: 700;
        color: #444444;
        margin-bottom: 16px;
        line-height: 32px;
      }

      .Modal__title-icon {
        margin-right: 16px;
        border-radius: 50%;
        color: #5b55f7;
        background: rgba(91, 85, 247, .15);
        width: 32px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .Modal__subtitle {
        font-size: 16px;
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }

      @media screen and (min-width: 490px) {
        .Modal {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 16px;
          padding-bottom: 16px;
        }

        .Modal__inner {
          border-radius: 4px;
          overflow: hidden;
          flex: 1;
          max-width: 400px;
          margin-left: 16px;
          margin-right: 16px;
        }

        .Modal__content {
          padding: 16px;
        }
      }
    `}</style>
  </div>
)

export default connect(ModalContainer)

function ModalContainer ({
  services,
  stores: {ui},
  name,
  component,
  title,
  subtitle,
  icon
}) {
  return ui.modal === name
    ? <Modal
      toggle={services.ui.modals[ui.modal].close}
      component={component}
      title={title}
      icon={icon}
      subtitle={subtitle}
      />
    : null
}

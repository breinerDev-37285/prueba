import { IDescription } from '@interfaces/card'

const DescriptionCard = ({
  items,
  totalPlan,
  enlace,
  enlaceText,
  customStyle,
}: IDescription) => (
  <div className={`wrapper_desc_container ${customStyle}`}>
    <div className="wrapper_items">
      {items.map(({ title, items }, i) => (
        <div className="wrapper_item" key={i}>
          <span className="title_item">{title}</span>
          <div className="wrapper_desc">
            <div className="wrapper_icons">
              {items.icon.map((icon, j) => (
                <i key={j} className={`${icon} icon`} />
              ))}
            </div>
            <span className="wrapper_text">{items.text}</span>
          </div>
        </div>
      ))}

      <hr className="hr" />

      <div className="wrapper_total_plan">
        <span className="text_total">{totalPlan?.total}</span>
        <span>{totalPlan?.text}</span>
      </div>
    </div>
    <span className="enlace">
      <a href={enlace}>{enlaceText}</a>
    </span>
  </div>
)

export default DescriptionCard

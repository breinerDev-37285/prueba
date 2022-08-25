import { IDescription } from '@interfaces/card'

const DescriptionCard = ({
  listDescription,
  enlace,
  title,
  description,
}: IDescription) => {
  console.log(listDescription)
  return (
    <div className="wrapper_desc_container">
      {listDescription && (
        <div className="wrapper_list_desc">
          {listDescription.map(({ icon, desc }, i) => (
            <div key={i} className="wrapper_desc">
              {icon && <i className={`${icon} icon`} />}
              <span className="desc">{desc}</span>
            </div>
          ))}
        </div>
      )}
      {enlace && (
        <div className="wrapper_enlace">
          <a className="enlace" href={enlace.enlace}>
            {enlace.text}
          </a>
          <i className="fa-solid fa-chevron-right icon_chevrom" />
        </div>
      )}

      {title && description && (
        <div className="wrapper_desc_title_desc">
          <span className="title">{title}</span>
          <span className="desc">{description}</span>
        </div>
      )}
    </div>
  )
}

export default DescriptionCard

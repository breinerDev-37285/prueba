import { ITitleBanner } from 'app/interfaces/card'

const TitleBanner = ({ title, subtitle, description, img }: ITitleBanner) => {
  return (
    <div>
      {img ? (
        <div className="wrapper_img">
          <img src={img} className="img" />
        </div>
      ) : (
        <>
          <div className="wrapper_title">
            <span className="title">{title}</span>
            <span className="subtitle">{subtitle}</span>
          </div>
          <span className="description">{description && description}</span>
        </>
      )}
    </div>
  )
}

export default TitleBanner

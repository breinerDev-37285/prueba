import { ITitleBanner } from 'app/interfaces/card'

const HeaderCard = ({
  customClassStyleHeader,
  customClassStyleBanner,
  titleBanner,
  title,
  desc,
  children,
}: ITitleBanner) => {
  return (
    <div>
      <div className={`wrapper_header ${customClassStyleHeader}`}>
        <div className={`wrapper_titleBanner ${customClassStyleBanner}`}>
          <span className="titleBanner">{titleBanner}</span>
        </div>
        <span className="title">{title}</span>

        {children && <div>{children}</div>}
      </div>
      {desc && <span className="description">{desc}</span>}
    </div>
  )
}

export default HeaderCard

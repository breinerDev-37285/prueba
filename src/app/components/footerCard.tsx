import { IFooterCard } from '@interfaces/card'

const FooterCard = ({ text }: IFooterCard) => {
  return (
    <div className="footer_card">
      <span className="text">{text}</span>
    </div>
  )
}

export default FooterCard

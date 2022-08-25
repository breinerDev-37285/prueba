import { ICard } from 'app/interfaces/card'

const Card = ({ BannerTitle, Description, Button, Footer }: ICard) => (
  <div className="card">
    {BannerTitle && BannerTitle}
    {Description && Description}
    {Button && Button}
    {Footer && Footer}
  </div>
)

export default Card

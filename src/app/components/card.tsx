interface IProps {
  children: React.ReactNode
}

const Card = ({ children }: IProps) => <div className="card">{children}</div>

export default Card

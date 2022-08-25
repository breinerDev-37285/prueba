import { IButton } from '@interfaces/card'

export const ButtonCard = ({
  text,
  classStyle,
  classStyleWrapper,
}: IButton) => {
  return (
    <div className={`wrapper_button ${classStyleWrapper}`}>
      <button type="button" className={`btn ${classStyle}`}>
        {text}
      </button>
    </div>
  )
}

export default ButtonCard

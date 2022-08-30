export interface Item {
  icon: string[]
  text: string
}
export interface IItems {
  title?: string
  items: Item
}

export interface ITotalPlan {
  total: string
  text: string
}
export interface IDescription {
  items: IItems[]
  enlace: string
  enlaceText: string
  totalPlan?: ITotalPlan
  customStyle?: string
}

export interface ITitleBanner {
  titleBanner: string
  title?: string
  desc?: string
  customClassStyleHeader?: string
  customClassStyleBanner?: string
  children?: React.ReactNode
}

export interface IPlanCard {
  plan: string
  planDesc?: string
  precioFinal?: number
  precioSinIva?: number
}

export interface IButton {
  text: string
  classStyle?: string
  classStyleWrapper?: string
}

export interface IFooterCard {
  text?: string
}

import { ReactNode } from 'react'

export interface listDesc {
  icon: string
  desc: string
}

export interface IEnlace {
  enlace: string
  text: string
}

export interface IDescription {
  title?: string
  description?: string
  listDescription?: listDesc[]
  enlace?: IEnlace
}

export interface ITitleBanner {
  title?: string
  subtitle?: string
  description?: string
  img?: string
}

export interface IButton {
  text: string
  classStyle?: string
  classStyleWrapper?: string
}

export interface IFooterCard {
  text?: string
}

export interface ICard {
  Description?: ReactNode
  Button?: ReactNode
  BannerTitle?: ReactNode
  Footer?: ReactNode
}

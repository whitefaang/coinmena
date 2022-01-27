export interface CryptoAsset {
  Name: string
  Price: number
  ID: string
  Symbol: string
  Logo: string
}

export interface UserInfo {
  email: string
  password: string
}

export interface FiatCurrency {
  code: string
  description: string
}

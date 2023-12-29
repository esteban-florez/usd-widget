import { prices } from "./templates/prices"

const API_URL = 'https://exchange.vcoud.com/coins' as const
const MONITOR_SLUG = 'dolar-monitor' as const
const BCV_SLUG = 'dolar-bcv' as const

type Slug = typeof MONITOR_SLUG | typeof BCV_SLUG

interface CoinData {
  price: number
  updatedAt: string
}

async function coinData(slug: Slug) {
  const response = await fetch(`${API_URL}/${slug}`)
  const json = await response.json() as CoinData
  
  return {
    ...json,
    updatedAt: new Date(json.updatedAt),
  }
}

async function update() {
  const [monitor, bcv] = await Promise.all(
    [coinData(MONITOR_SLUG), coinData(BCV_SLUG)]
  )

  document.querySelector('main').innerHTML = prices({
    monitor: format(monitor.price),
    bcv: format(bcv.price),
  })
}

function format(number: number) {
  return number.toPrecision(4).replace('.', ',')
}

update()

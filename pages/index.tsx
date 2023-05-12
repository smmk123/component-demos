import { Inter } from 'next/font/google'
import BitcoinPrices from './components/bitcoinPrices';
import BitcoinPriceHistory from './components/bitcoinPricehistory';
import FinancialNews from './components/financialNews';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row flex-wrap items-center justify-between p-24 ${inter.className}`}
    >
<BitcoinPrices />
<BitcoinPriceHistory />
<FinancialNews />
    </main>
  )
}

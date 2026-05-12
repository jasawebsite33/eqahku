import { playfair, jakarta } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Eqahku — Aqiqah Premium yang Amanah & Personal',
  description:
    'Eqahku menghadirkan layanan aqiqah premium dengan kualitas terbaik, proses yang syar\'i dan transparan, serta pengalaman yang personal untuk momen berharga keluarga Anda.',
  keywords: 'aqiqah, aqiqah premium, aqiqah amanah, jasa aqiqah, eqahku',
  openGraph: {
    title: 'Eqahku — Aqiqah Premium yang Amanah & Personal',
    description: 'Merayakan amanah dengan penuh ketulusan.',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Ui/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='text-green-700 font-bold text-4xl'>
    <Button/>
   </div>
  )
}

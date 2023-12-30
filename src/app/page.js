import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
        <Image src="/logo/sina-logo.png" width={500} height={375}/>
        <h1>Under Construction Website</h1>
    </main>
  )
}

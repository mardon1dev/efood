import Category from "@/components/Category"
import Hero from "@/components/Hero"
import Link from "next/link"
import styles from "./page.module.css"
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Category />
    </main>
  )
}

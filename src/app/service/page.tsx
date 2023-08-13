import React from 'react'
import styles from "./page.module.css";
import Link from "next/link";

export default function Dashboard() {
    
  return (
    <div className={styles.dashboard}>
      <div>
        <p>Dashboard</p>
      </div>
      <h1><Link href="/">Home</Link></h1>
    </div>
  )
}

"use client"
import { useRouter } from "next/router";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /landing-page as soon as the component is mounted
    router.push("/landing-page");
  }, [router]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        home
      </main>
    </div>
  );
}

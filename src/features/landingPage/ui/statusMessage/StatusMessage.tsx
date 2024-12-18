import React from 'react'
import styles from "./status-messgae.module.css"

interface StatusMessageProps {
    message: string;
  }

const StatusMessage = ({message}: StatusMessageProps) => {
  return (
    <aside className={styles.container}>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={"24"} height={"24"} viewBox="0 0 512 512" fill='#419423'>
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
      </svg>
        <p>{message}</p>
      </div>
    </aside>
  )
}

export default StatusMessage

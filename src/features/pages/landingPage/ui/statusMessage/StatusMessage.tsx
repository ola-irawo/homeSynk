import React from 'react'
import styles from "./status-messgae.module.css"

interface StatusMessageProps {
    message: string | any;
  }

const StatusMessage = ({message}: StatusMessageProps) => {
  console.log(message)
  return (
    <aside className={styles.container}
      style={{
        backgroundColor: message.error ? "#D10A0A26" : "#dae6d5"
      }}
    >
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={"24"} height={"24"} viewBox="0 0 512 512" fill={message.error ? "red" : '#419423'}>
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
      </svg>
        <p
          style={{
            color: message.error ? "#D10A0A" : "#419423"
          }}
        >{message.error || message}</p>
      </div>
    </aside>
  )
}

export default StatusMessage

import React from 'react'

export default function Footer() {
  const today = new Date()
  return (
    <>
      <div className="text-center fixed-bottom">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </div>
    </>
  )
}

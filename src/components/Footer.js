import React from 'react'

export default function Footer() {
  const today = new Date()
  return (
    // creating footer for app
    <>
      <div className="text-center fixed-bottom">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </div>
    </>
  );
}

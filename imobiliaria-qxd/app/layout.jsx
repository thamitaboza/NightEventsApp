//import React from 'react'
import '@/assets/styles/globals.css';

export const metadata = {
    title: ''  
}

const PrincipalLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div>{children}</div>

        </body>
    </html>
  )
};

export default PrincipalLayout;
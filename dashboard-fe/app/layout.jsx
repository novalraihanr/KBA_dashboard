import '@styles/globals.css';

export const metadata = {
  title: "Acong Dashboard",
  description: 'Dashboard Toko Mainan Acong'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
          <main>
            {children}
          </main>
        </body>
    </html>
  )
}

export default RootLayout;
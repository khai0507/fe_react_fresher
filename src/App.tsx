import { ReactNode } from 'react'

interface AppProps {
  children: ReactNode;
}

function App({children}:AppProps) {

  return (
    <>
    <div className='app-wrapper'>
      {children}
    </div>
     
    </>
  )
}

export default App

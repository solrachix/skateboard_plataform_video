import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback
} from 'react'

import SideBar from '@/components/SideBar'
import Layout from '@/components/Layout'
import Header from '@/components/Header'

interface GlobalContextData {
  NavBar: {
    activated: boolean
    set(prop: boolean): void
  }
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const [enableNavBar, setEnableNavBar] = useState(true)

  const NavBar = {
    activated: enableNavBar,
    set: useCallback((prop: boolean) => {
      !prop
        ? document.querySelector('#__next').classList.add('navbar-false')
        : document.querySelector('#__next').classList.remove('navbar-false')

      setEnableNavBar(prop)
    }, [])
  }

  return (
    <GlobalContext.Provider value={{ NavBar }}>
      {enableNavBar && <SideBar />}

      <Layout>
        <Header />
        {children}
      </Layout>
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}

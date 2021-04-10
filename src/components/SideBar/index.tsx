import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import routes from '@/routes'
import { Container } from './styles'

const SideBar: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    handleSizeBar()

    window.addEventListener('resize', handleSizeBar)
  }, [])

  const handleSizeBar = () => {
    const sidebar = document.querySelector('.sidebar') as HTMLDivElement
    if (window.innerWidth > 1090) {
      sidebar.classList.remove('collapse')
    } else {
      sidebar.classList.add('collapse')
    }
  }
  return (
    <Container className="sidebar">
      {/* <Logo className="logo" /> */}

      {/* <div className="icons">
        {routes.map(props => (
          <Link key={props.route} href={props.route}>
            <a className={router.pathname === props.route ? 'actived' : ''}>
              {props.icon({})}
            </a>
          </Link>
        ))}
      </div> */}

      <span className="logo">S</span>
      <a className="logo-expand" href="#">
        skateboard
      </a>
      {routes.map(wrapper => (
        <div className="side-wrapper" key={wrapper.title}>
          <div className="side-title">{wrapper.title}</div>

          <div className="side-menu">
            {wrapper.routes.map((route, index) => (
              <Link key={route.path + index} href={route.path}>
                <a
                  className={`link ${
                    router.pathname === route.path && 'is-active'
                  }`}
                >
                  {route.icon({})}
                  {route.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Container>
  )
}

export default SideBar

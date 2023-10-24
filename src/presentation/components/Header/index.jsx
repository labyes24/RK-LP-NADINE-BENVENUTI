import { Container, Logo, ToggleHamburger, Links, LinkWrapper } from './styles'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoRKI from '../../assets/logoRKI.svg'

const routes = [
  { route: '/', name: 'home' },
  { route: 'profile', name: 'perfil' },
  { route: 'properties', name: 'imóveis' },
  { route: 'contact', name: 'contato' },
]

/**
 * Render burger component.
 * @param {boolean} $opened - Check the status of the burger.
 * @param {void} onChange - Handles burger state.
 * @return {JSX.Element} The rendered animated burger component.
 */

function Hamburger({ $opened, ...rest }) {
  return (
    <ToggleHamburger $opened={$opened}>
      <input id="checkbox" type="checkbox" {...rest} />
      <label htmlFor="checkbox">
        <span />
        <span />
        <span />
      </label>
    </ToggleHamburger>
  )
}

/**
 * Render a header component.
 *
 * @param {Array<Object>?} paths - Routes array that this routes have route attribute and name.
 * @return {JSX.Element} The rendered header component.
 */
export function Header({ paths = routes }) {
  const [openMenuHambuger, setOpenMenuHambuger] = useState(false)
  function handleOpenMenuHambuger() {
    return setOpenMenuHambuger(!openMenuHambuger)
  }

  return (
    <Container $opened={openMenuHambuger}>
      <Logo to={paths[0].route}>
        <img src={logoRKI} alt="Logo da RK Imóveis" />
      </Logo>
      <Hamburger $opened={openMenuHambuger} onChange={handleOpenMenuHambuger} />

      <Links $opened={openMenuHambuger}>
        {paths.slice(1).map(path => (
          <LinkWrapper key={path.name}>
            <NavLink to={path.route}>
              <span>{path.name}</span>
            </NavLink>
          </LinkWrapper>
        ))}
      </Links>
    </Container>
  )
}

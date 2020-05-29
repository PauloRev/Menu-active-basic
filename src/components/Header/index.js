import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header({ isActiveMenu }) {
  const [menuCurrency,] = useState(isActiveMenu)

  return (
    <Container>
      <Link to="/" style={{
        color: menuCurrency === 'HOME' ? '#00bfff' : '#fff'
      }}>Home</Link>
      <Link to="/about" style={{
        color: menuCurrency === 'ABOUT' ? '#00bfff' : '#fff'
      }}>Sobre</Link>
    </Container>
  )
}

export default Header;
import React from 'react';

import Header from '../../components/Header';

function Home() {
  return (
    <>
      <Header isActiveMenu="HOME" />
      <h1 style={{ marginTop: 60, textAlign: 'center' }}>Home</h1>
    </>
  );
}

export default Home;
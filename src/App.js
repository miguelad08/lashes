import React from 'react';

import Directory from './components/directory/directory.component'





const App = () => {

  const categories = [
    {
      id: 1,
      title: "lashes",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "make-up",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "hair style",
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    }
  ];

  return (

    <Directory categories={categories} />

  )
}

export default App;

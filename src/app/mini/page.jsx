"use client"

import { useSelector } from 'react-redux';

function ClothesList() {
  const clothes = useSelector((state) => state.clothes.clothes);

  return (
    <div>
      {clothes.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <img src={item.images.src} alt="" />
          <button onClick={() => console.log(item)}>Button</button>
        </div>
      ))}
    </div>
  );
}

export default ClothesList;
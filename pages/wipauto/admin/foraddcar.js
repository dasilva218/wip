import fs from 'fs/promises';
import path from 'path';
import { useState } from 'react';

function Foraddcar() {
  const [image, setImage] = useState();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    console.log(e.target.files);
  };

  return (
    <div>
      <input onChange={handleChange} type='file' name='' id='' />
      <input onChange={handleChange} type='file' name='' id='' />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  fs.mkdir('/public/home');

  return {
    props: {
      data: null,
    },
  };
}

export default Foraddcar;

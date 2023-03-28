import Certifie from '../components/Certifie';

function Home() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src='/home.svg'
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div className='border' >
          <Certifie />
          <div className='flex border items-center justify-between w-3/4' >
            <h1 className='text-7xl font-bold'>Le meilleur</h1>
            <h2 className=' after:content-["url(/inderline.svg")] border text-5xl leading-relaxed text-center flex-1 ' >en un seul endroit</h2>
          </div>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti
            eaque aut repudiandae et a id nisi.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

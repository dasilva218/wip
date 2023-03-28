import Head from 'next/head';
import Layout from '../../../components/layout/Form';
import {
  HiOutlineUser,
  HiOutlineEye,
  HiOutlineEyeOff,
} from 'react-icons/hi';
import styles from '../../../styles/Form.module.css';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  let router = useRouter();
  const [message, setMessage] = useState('');
  let erreur = 'ce champ est obligatoire';
  // affiche le champ password
  const [Show, setShow] = useState(true);
  // vlurs initiales du formulaires
  const InitialValues = { name: '', password: '' };
  /** validation des champs du formulaire */
  let schema = yup.object().shape({
    name: yup.string().required(erreur),
    password: yup.string().required(erreur),
  });

  /**
   * * fontion de soumission du formulaire
   * @params valeurs du formulaire
   */

  const Submit = async ({ name, password }) => {
    const result = await signIn('credentials', {
      redirect: false,
      name,
      password,
      callbackUrl: '/wipauto/admin/user',
    });

    setMessage(result.error);

    if (result.ok) router.push(result.url);
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <Link href={"/wipauto/"} >Retour à l'accueil</Link>
      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>
            connexion
          </h1>
          {message && (
            <p className='w-3/4 mx-auto text-gray-400'>{message}</p>
          )}
          {/* <p className='w-3/4 mx-auto text-gray-400'>
            connectez vous à votre panel admin
          </p> */}
        </div>

        {/* form */}
        <Formik
          initialValues={InitialValues}
          validationSchema={schema}
          onSubmit={Submit}>
          <Form className='flex flex-col gap-5'>
            <div className={`${styles.input_group} `}>
              <Field
                type='text'
                name='name'
                placeholder='Nom'
                className={styles.input_text}
              />
              <span className='icon flex items-center px-4'>
                <HiOutlineUser size={25} />
              </span>
            </div>
            <ErrorMessage name='name' component={'span'} />

            <div className={`${styles.input_group} `}>
              <Field
                type={`${Show ? 'password' : 'text'}`}
                name='password'
                placeholder='password'
                className={styles.input_text}
              />
              <span
                className='icon flex items-center px-4'
                onClick={() => setShow(!Show)}>
                {Show ? (
                  <HiOutlineEye size={25} />
                ) : (
                  <HiOutlineEyeOff size={25} />
                )}
              </span>
              <ErrorMessage name='password' component={'span'} />
            </div>

            <div className='input-button'>
              <button
                type='submit'
                className={styles.button}
                disabled={Formik.isValid}>
                se connecter
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </Layout>
  );
}

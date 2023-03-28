import { Field, Formik } from 'formik';

function FormUpdate() {
  return (
    <div>
      <Formik>
        <div className=''>
          <label htmlFor=''>Nom</label>
          <Field type="text" name="name" />
        </div>
      </Formik>
    </div>
  );
}

export default FormUpdate;

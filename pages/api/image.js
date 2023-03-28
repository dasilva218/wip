import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';
import { post_car_rent } from '../../controllers/controllerCarRent';

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/images');
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename;
    };
  }
  
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + '/public', '/images'));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + '/public', '/images'));
  }
  const data = await readFile(req, true);
  console.log(data);
  res.json({ done: data.files });
};

export default handler;

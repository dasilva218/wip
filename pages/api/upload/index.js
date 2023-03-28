// import { createRouter, expressWrapper } from 'next-connect';

import multer from 'multer';

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/uploads'),
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

// // const router = createRouter();

// // router
// //   .get("/api/upload",(req, res) => {
// //     res.json({ message: 'ok' });
// //   })
// //   .post(async (req, res) => {
// //     // use async/await
// //     res.status(200).json({ data: 'success' });
// //   });

// const apiRoute = nextConnect({
//   onError(error, req, res) {
//     res
//       .status(501)
//       .json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res
//       .status(405)
//       .json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// apiRoute.use(upload.array('theFiles'));

// apiRoute.get((req, res) => {
//   res.status(200).json({ data: 'success' });
// });

// apiRoute.post((req, res) => {
//   res.status(200).json({ data: 'success' });
// });

// export default apiRoute;

const handler = async (req, res) => {
  // res.status(200).json({ message: 'ok' });

  if (req.method === 'POST') {
    const teste = upload.array('theFiles');
    res.json({ mess: teste });
  }
};

export default handler;

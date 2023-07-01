import express, { Application } from 'express';
import cors from 'cors';
import globarErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import NOTFound from './shared/NOTFound';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

// app.get('/', (req, res) => {
//   // res.send('Hello World!')
// })

app.use(globarErrorHandler);
//not found route
app.use(NOTFound);

export default app;

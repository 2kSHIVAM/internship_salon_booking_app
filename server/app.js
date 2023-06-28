const express = require('express');
// const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const expressMongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
// const hpp = require('hpp');
const path= require('path');
// const cookieParser = require('cookie-parser');
const app = express();
// const globalErrorHandler=require('./controllers/errorController')
const userRouter = require('./routes/userRouter');
// const viewRouter = require('./routes/viewRouter');
const serviceRouter=require('./routes/ServiceRouter');
// const teamRouter=require('./routes/teamRouter');
const voucherRouter=require('./routes/voucherRouter');
const AppError=require('./utils/AppError')
var cors = require('cors')
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json({limit:'10kb'})); //can take data upto 10kb
app.use(cors());

// app.use(express.urlencoded({extended: true,limit: '10kb'}))// it is used to take input from the form itself without involving the APIs
app.use(express.json());
app.use(expressMongoSanitize());
// app.use(xss());
app.use((req, res, next) => {
    // console.log('hello from middleware 1');
    req.requestTime=new Date().toISOString();
    // console.log(req.cookies)
    next(); // if there is not next we will be stuck here for ever
  });
//   app.use('/')
const teamRouter=require('./routes/teamRouter');
app.use('/api/v1/user',userRouter)
app.use('/api/v1/service',serviceRouter)
app.use('/api/v1/team',teamRouter)
app.use('/api/v1/voucher',voucherRouter)


module.exports = app;
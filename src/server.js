require( 'dotenv' ).config();
const express = require( 'express' );
const connection = require( './config/connectDB' );
const app = express();
// const initWebRoutes = require( './routes/web' );
const initApiRoutes = require( './routes/api' );
const bodyParser = require( 'body-parser' );
const configCors = require( './config/configCors' );
const fileUpload = require( 'express-fileupload' );
const path = require( 'path' );
const cookieParser = require( 'cookie-parser' );
const { deleteFileServ } = require( './services/fileService' );
const port = process.env.PORT;

//config cors
configCors( app );

//config body-parser
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );
//config file upload
// configStaticFile( app );
app.use( fileUpload() );

//connect db
connection();

//cookie parser
app.use( cookieParser() )

// initApiRoutes
initApiRoutes( app );

app.listen( port, () => {
  console.log( `App listening on port: ${ port }` )
} )
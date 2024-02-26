const router = require( 'express' ).Router();
const userController = require( '../controller/userController' );

const initWebRoutes = ( app ) => {
  router.get( '/', ( req, res ) => { res.send( 'abc' ) } );

  return app.use( '/', router );
}

module.exports = initWebRoutes;
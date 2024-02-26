const path = require( 'path' );
const express = require( 'express' );

const configStaticFile = ( app ) => {
  app.use( express.static( path.join( './src', 'public' ) ) );
}

module.exports = configStaticFile;

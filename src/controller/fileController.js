const uploadFileServ = require( "../services/fileService" );


const uploadFile = async ( fileObj ) => {
  console.log( 'data: ', fileObj.file );
  let results = await uploadFileServ( fileObj.file );
  return {
    EM: results.EM,
    DT: results.DT,
    EC: results.EC,
  };
}

module.exports = { uploadFile };
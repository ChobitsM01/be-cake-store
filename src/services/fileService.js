const path = require( 'path' );

const uploadFileServ = async ( fileObject ) => {
  //customize image name
  console.log( fileObject );
  let oldName = fileObject.name;
  let extName = path.extname( oldName );
  let baseName = path.basename( oldName, extName );
  let newName = `${ baseName }-${ Date.now() }${ extName }`;

  //customize store path
  let uploadPath = `${ __dirname }/../public/img/products`;
  let finalPath = `${ uploadPath }/${ newName }`;
  let imgPath = `http://localhost:8080/img/products/${ newName }`
  try {
    await fileObject.mv( finalPath );

    return {
      EM: 'Tải lên ảnh thành công!',
      DT: imgPath,
      EC: 0
    }
  }
  catch ( err ) {
    console.log( err );
    return {
      EM: 'Tải lên ảnh không thành công!',
      DT: null,
      EC: 1
    }
  }
}

// const deleteFileServ = async (imgFi) => {
//   let deletePath = `${ __dirname }/../public/img/products`
// try {
//   upload.remove( deletePath );
// } catch (error) {
//   console.log(error);
// }
// }

module.exports = uploadFileServ;
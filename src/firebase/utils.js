import firebase from './config';

// File upload to storage method

export const uploadFilesToStorage = (data) => {
  //Returning promise to handle later
  return new Promise((resolve, reject) => {
    //Get file
    const file = data.value;

    //Create refference
    const storageRef = firebase.storage().ref(`${data.type}/${data.fileName}`);

    //Upload File
    storageRef.put(file).then((res) => {
      storageRef
        .getDownloadURL()
        .then((url) => {
          resolve({ type: data.type, value: url });
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    });
  });
};

// Upload files info to the firestore
export const uploadFilesInfoToDatabase = (data) => {
  return new Promise((resolve, reject) => {
    //Get the data
    const fileInfo = data;

    //Create a firestore refference

    const firestore = firebase.firestore();

    //Send request to database to store button data

    firestore
      .collection('files')
      .add(fileInfo)
      .then((res) => {
        resolve(res);
      });
  });
};

// Fetching files data from firestore

export const fetchFilesFromStorage = (id) => {
  return new Promise((resolve, reject) => {
    // Get id
    const fileID = id;

    // Creating firestore refference
    const firestore = firebase.firestore();

    // Send fetch request
    firestore
      .collection('files')
      .doc(fileID)
      .get()
      .then((res) => {
        if (res.exists) {
          resolve(res.data());
        }
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

// Read file size

export const returnFileSize = (number) => {
  if (number < 1024) {
    return number + 'bytes';
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB';
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + 'MB';
  }
};

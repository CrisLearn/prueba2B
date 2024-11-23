// environment.ts

export interface Environment {
  production: boolean;
  firebase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
}

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAhoofBl1c9nmH5wa0dcQSIPPuwfumQtdI",
    authDomain: "b-2bff7.firebaseapp.com",
    projectId: "b-2bff7",
    storageBucket: "b-2bff7.appspot.com",
    messagingSenderId: "1045510192311",
    appId: "1:1045510192311:web:d5200b57294dbb7fe0e132",
    measurementId: "G-M6LJ6CL8DY"
  }
};
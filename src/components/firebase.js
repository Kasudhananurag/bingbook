import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBQp4Ssun_g58cNPMm49Xtnega_zvThlxc",
    authDomain: "fir-3d55f.firebaseapp.com",
    projectId: "fir-3d55f",
    storageBucket: "fir-3d55f.appspot.com",
    messagingSenderId: "966876847105",
    appId: "1:966876847105:web:000b4d4346a9fa62fe3400",
    databaseURL: "https://bingo-bookbb-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
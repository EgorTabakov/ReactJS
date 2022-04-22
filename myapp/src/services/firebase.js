import { initializeApp } from "firebase/app";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "firebase/auth";
import {getDatabase, ref} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDasDz5uXR9L_MtjEerRUPwUbHz-_fdhII",
    authDomain: "gb2022-04.firebaseapp.com",
    projectId: "gb2022-04",
    storageBucket: "gb2022-04.appspot.com",
    messagingSenderId: "204036344066",
    appId: "1:204036344066:web:8501509a42d131ef1b1a1b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "profile");
export const userNameRef = ref(db, "profile/name");
export const userShowNameRef = ref(db, "profile/showName");
export const userUidRef = ref(db, "profile/uid");
export const chatsRef = ref(db, "chats");
export const chatsUserUidRef = (chatId) => ref(db, `chats/${chatId}/owners`);
export const msgRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);
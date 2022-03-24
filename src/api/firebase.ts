import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    query,
    orderBy,
    limit,
    getDoc,
    deleteDoc,
} from 'firebase/firestore';
import { HighscoreEntry } from '../types/game';

const firebaseConfig = {
    apiKey: 'AIzaSyAwtGacFb6f5mA4Bjyu8KiDOM-QrHI7zMs',
    authDomain: 'greenk-scoreboard.firebaseapp.com',
    projectId: 'greenk-scoreboard',
    storageBucket: 'greenk-scoreboard.appspot.com',
    messagingSenderId: '843595535977',
    appId: '1:843595535977:web:8b98e3cbdd34f8cd78f4f8',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const dbRef = getFirestore();
const scoresRef = collection(dbRef, 'scores');

export async function fetchHighscores(): Promise<HighscoreEntry[]> {
    try {
        const highscores = [] as HighscoreEntry[];

        const q = query(scoresRef, orderBy('score', 'desc'), limit(10));
        const highscoresSnapshot = await getDocs(q);
        highscoresSnapshot.forEach((highscore) => {
            highscores.push(highscore.data() as HighscoreEntry);
        });
        return highscores;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function addHighscore(highscore: HighscoreEntry) {
    try {
        await addDoc(scoresRef, highscore);
    } catch (error) {
        console.log(error);
    }
}

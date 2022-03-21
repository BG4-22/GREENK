import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    DocumentReference,
} from 'firebase/firestore';
import { HighscoreEntry } from './types';

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
const db = getFirestore();
const scores = collection(db, 'scores');

export async function getScores(): Promise<HighscoreEntry[]> {
    return await getDocs(scores)
        .then((snapshot) => {
            let highscores = [] as HighscoreEntry[];
            snapshot.docs.forEach((highscore) => {
                highscores.push({ ...highscore.data() } as HighscoreEntry);
            });
            return highscores.sort((a, b) => b.score - a.score);
        })
        .catch((error) => {
            console.log(error);
            return [];
        });
}

export async function storeScore(
    name: string,
    score: number
): Promise<boolean> {
    return await addDoc(scores, { name: name, score: score })
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
}

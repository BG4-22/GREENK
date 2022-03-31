import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    query,
    orderBy,
    limit,
} from 'firebase/firestore';
import { HighscoreEntry } from '../types/game';

// Config to connect to Firebase
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

/**
 * Fetches scores from Firestore, limiting the results to the 10 higest scores
 * @returns the 10 highest scores from the database, or an empty list on error
 */
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

/**
 * Adds a highscore to Firestore for storage
 * @param highscore the highscore to store
 */
export async function addHighscore(highscore: HighscoreEntry) {
    try {
        await addDoc(scoresRef, highscore);
    } catch (error) {
        console.log(error);
    }
}

import { fetchHighscores, addHighscore } from '../api/firebase';
import { HighscoreEntry } from '../api/types';

export async function getHighscores(): Promise<HighscoreEntry[]> {
    return await fetchHighscores();
}

export async function submitScore(score: HighscoreEntry): Promise<boolean> {
    const highscores = await fetchHighscores();
    if (highscores.length < 10 || score.score <= highscores[9].score) {
        await addHighscore(score);
        return true;
    }
    return false;
}

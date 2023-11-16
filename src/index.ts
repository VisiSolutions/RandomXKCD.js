import axios from 'axios';

interface XKCDResponse {
	num: number;
	img: string;
}

async function getRandomXKCD(): Promise<string> {
	const response = await axios.get('https://xkcd.com/info.0.json');
	const latestComic: XKCDResponse = response.data;
	const randomComicNumber = Math.floor(Math.random() * latestComic.num) + 1;
	const randomComicResponse = await axios.get(`https://xkcd.com/${randomComicNumber}/info.0.json`);
	const randomComic: XKCDResponse = randomComicResponse.data;
	return randomComic.img;
}

export default getRandomXKCD;
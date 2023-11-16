import getRandomXKCD from '../src/index';
import { expect } from 'chai';

describe('getRandomXKCD', () => {
	it('returns a string', async () => {
		const result = await getRandomXKCD();
		expect(result).to.be.a('string');
	});

	it('returns a URL to an XKCD comic', async () => {
		const result = await getRandomXKCD();
		expect(result).to.match(/^https:\/\/imgs\.xkcd\.com\/comics\/.*\.(png|jpg|gif)$/);
	});
});

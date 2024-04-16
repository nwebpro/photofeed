import PhotoList from '@/components/PhotoList';
import { getDictionary } from './disctionaries';

const Home = async ({ params: { lang } }) => {
	const dictionary = await getDictionary(lang);
	const photosData = await fetch(`${process.env.BASE_API_URL}/photos`);
	const photos = await photosData.json();

	return <PhotoList photos={photos} />;
};

export default Home;

import PhotoList from '@/components/PhotoList';

const Home = async ({ params: { lang } }) => {
	const photosData = await fetch(`${process.env.BASE_API_URL}/photos`);
	const photos = await photosData.json();

	return <PhotoList photos={photos} />;
};

export default Home;

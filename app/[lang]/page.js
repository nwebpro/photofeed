import { getDictionary } from "./disctionaries";

const Home = async ({params: {lang}}) => {
	const dictionary = await getDictionary(lang)
	return (
		<div>
			{dictionary.followers}
		</div>
	);
};

export default Home;
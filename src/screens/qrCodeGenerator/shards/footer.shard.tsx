import { images } from '../../../assets';

export const FooterShard: React.FC = () => {
	const handleGitHubOnClick = () => {
		window.open('https://github.com/AlexandreFPGoncalves');
	};

	return (
		<img
			src={images.gh}
			onClick={handleGitHubOnClick}
			className="fixed bottom-8 h-6 w-6 cursor-pointer transition hover:-translate-y-[2px] hover:opacity-80"
		/>
	);
};

import { shards } from './shards';

export const QRCodeGeneratorCore = () => {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
			<shards.InputsShard />
			<shards.FooterShard />
		</div>
	);
};

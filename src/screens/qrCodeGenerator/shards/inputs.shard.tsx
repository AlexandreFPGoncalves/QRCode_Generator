import { useState } from 'react';

export const InputsShard = () => {
	const [qrCodeUrl, setQRCodeUrl] = useState<string>('');
	const [qrCodeSize, setQRCodeSize] = useState<string>('');
	const [qrCode, setQRCode] = useState<string>('');

	const qrCodeServerBaseUrl = 'https://api.qrserver.com/v1/create-qr-code/';

	const generateQRCode = (data: string, size: string) => {
		const qrCodeImageURL = `${qrCodeServerBaseUrl}?data=${encodeURIComponent(data)}&size=${size}`;
		setQRCode(qrCodeImageURL);
	};

	return (
		<>
			<div className="flex gap-4">
				<div className="w-[240px] rounded-lg border-2 border-violet-600 py-1 hover:border-violet-700">
					<input
						type="text"
						className={'text-bold w-full bg-transparent text-center font-semibold outline-none'}
						placeholder="QR URL"
						value={qrCodeUrl}
						onChange={(e) => setQRCodeUrl(e.target.value)}
					/>
				</div>
				<div className="w-[240px] rounded-lg border-2 border-violet-600 py-1 hover:border-violet-700">
					<input
						type="text"
						className={'text-bold w-full bg-transparent text-center font-semibold outline-none'}
						placeholder="QR Size"
						value={qrCodeSize}
						onChange={(e) => setQRCodeSize(e.target.value)}
					/>
				</div>
			</div>

			<button
				className="w-[496px] rounded bg-violet-600 py-1 text-lg font-semibold transition-all hover:-translate-y-[1px] hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
				onClick={() => generateQRCode(qrCodeUrl, qrCodeSize)}
				disabled={qrCodeUrl === '' || qrCodeSize === ''}
			>
				Generate
			</button>

			{qrCode && <img src={qrCode} alt={'QR Code'} />}
		</>
	);
};

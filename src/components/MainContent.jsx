import { useState } from 'react';
import Stats from './Stats';
import TextArea from './TextArea';

function MainContent() {
	const [text, setText] = useState('');
	let charCount = text.length;
	let wordCount = text.split(' ').filter((word) => word !== '').length;

	return (
		<main className="w-[1050px] h-[620px] bg-white rounded-xl shadow-xl mt-20 flex overflow-hidden relative">
			<TextArea text={text} setText={setText} />
			<Stats wordCount={wordCount} charCount={charCount} />
		</main>
	);
}

export default MainContent;

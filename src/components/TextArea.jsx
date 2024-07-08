import { useState } from 'react';
import Warning from './Warning';

function TextArea({ text, setText }) {
	const [warningText, setWarningText] = useState('');

	const handleInput = (event) => {
		let inputText = event.target.value;
		setWarningText('');
		if (inputText.includes('<script>')) {
			setWarningText('<script>');
			// alert('No script tags allowed');
			inputText = inputText.replaceAll('<script>', '');
		}
		setText(inputText);
	};

	return (
		<div className="resize-none flex-[2] py-8 px-10 text-xl">
			<textarea
				value={text}
				onChange={handleInput}
				placeholder="Enter your Text..."
				spellCheck="false"
				className="h-full w-full bg-transparent outline-none resize-none placeholder:italic"
			/>
			{warningText && <Warning warningText={warningText} />}
		</div>
	);
}

export default TextArea;

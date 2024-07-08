import {
	FACEBOOK_MAX_CHARACTERS,
	INSTAGRAM_MAX_CHARACTERS,
} from '../lib/constants';

function Stats({ wordCount, charCount }) {
	let facebookCharCountLeft = FACEBOOK_MAX_CHARACTERS - charCount;
	// if (facebookCharCountLeft < 0) facebookCharCountLeft = 0;
	let instagramCharCountLeft = INSTAGRAM_MAX_CHARACTERS - charCount;
	// if (instagramCharCountLeft < 0) instagramCharCountLeft = 0;

	return (
		<section className="flex-[1.3] flex flex-wrap bg-[#f1f6f8]">
			<Stat number={wordCount} label="Words" />
			<Stat number={charCount} label="Characters" />
			<Stat number={instagramCharCountLeft} label="Instagram" />
			<Stat number={facebookCharCountLeft} label="Facebook" />
		</section>
	);
}

export default Stats;

function Stat({ number, label }) {
	return (
		<section className="stat">
			<span
				className={`${
					number >= 0 ? 'text-slate-600' : 'text-red-600'
				} font-semibold text-4xl mb-3"`}
			>
				{number}
			</span>
			<h2 className="text-sm uppercase font-medium text-slate-500">
				{label}
			</h2>
		</section>
	);
}

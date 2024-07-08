function Warning({ warningText }) {
	return (
		<p className="absolute bottom-4 left-9 text-red-600 text-sm mt-1 ml-1">
			No {warningText} tags allowed
		</p>
	);
}

export default Warning;

const connectToDatabase = async () => {
	const dummy = await new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Connected to database');
			resolve('Connected to database');
		}, 1000);
	});
	return dummy;
};

export default connectToDatabase;

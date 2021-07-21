import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.status(200).send({ message: 'hello world' });
});

app.listen(3000, () => {
	console.log('server running at http://localhost:3000');
});

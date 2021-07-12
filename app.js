const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json({ extended: false }));

connectDB();
app.use('/api', require("./routes/personRouter"));

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    })
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
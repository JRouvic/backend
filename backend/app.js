import express from "express";
import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from "./routes/studentRoutes.js";

//create express app
const app = express();

//backend updated
app.use(express.json());

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

try {
    const port = 3000; // define port variable here for safety
    app.listen(port, () => {
        console.log(`wait lang boss ${port}...`);
    });
    } catch(e) {
        console.log(e);
    }
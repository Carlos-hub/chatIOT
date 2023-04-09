import { app } from ".";

require('dotenv').config();

app.listen(process.env.PORT,() =>{
 console.log(`Server is running ${process.env.PORT}`);
})
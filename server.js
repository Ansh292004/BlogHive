require("dotenv").config()
const mongoose=require('mongoose');
const app=require('./index');
const PORT=process.env.PORT || 3000;

const startServer=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB CONNECTED!!!!!');

        const server=app.listen(PORT,()=>{
            console.log(`SERVER RUNNING AT http://localhost:${PORT}`);
        });
        
        server.on('error',(err)=>{
            console.error('SERVER FAILED TO START:',err.message);
            process.exit(1);
        });

        //GRACEFUL SHUTDOWN
        process.on('SIGINT',async ()=>{
            console.log('SHUTTING DOWN.......');
                await mongoose.connection.close();
                server.close(()=>{
                    console.log('SERVER CLOSED AND DATABASE CONNECTION TERMINATED......');
                    process.exit(0);
                });
        });
    } catch (err) {
        console.log('DATABASE CONNECTION FAILED:', err.message);
        process.exit(1);
    }
};

startServer();

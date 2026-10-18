import express from 'express';

const app=express();
app.use(express.json());

app.get('/api/health',(req,res)=>{
    res.status(200).json({
        success: true,
        message: 'TaskFlow API đang hoạt động',
    });
});
export default app;
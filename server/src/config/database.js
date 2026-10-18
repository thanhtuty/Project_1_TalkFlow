import mongoose from 'mongoose';

const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
        throw new Error('Chưa tìm thấy biến MONGODB_URI trong file .env');
    }

    await mongoose.connect(mongoURI);

    console.log('Đã kết nối MongoDB Atlas');
};

export default connectDB;
import mongoose from 'mongoose';

//database schema, to give informaity to the document
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
    
});

//turning schema into a model

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;




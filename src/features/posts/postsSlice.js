import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    { id: '0', title: 'Learning Redux Toolkit', 
        content: "I've heard good things.", 
        userId: '0',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    { id: '1', 
        title: 'Slices...', 
        content: "The more I say slice, the more I want pizza.", 
        userId: '1',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{

        postAdded : {
            reducer(state, action){
            state.push(action.payload);
            },
            prepare(title,content, userId){
                return{
                    payload: {
                        id :nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }                
            }
        },
        reactionAdded(state,action){
            const {postId, reaction } = action.payload;
            const exitingPost = state.find(post=> post.id === postId);
            if(exitingPost){
                exitingPost.reactions[reaction]++;
            }
        }
    }

})

export const selectAllPosts = (state) => state.posts;

export const {postAdded, reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;
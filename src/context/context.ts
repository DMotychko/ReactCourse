import {create} from "zustand/react";
import {IUser} from "../models/IUser";
import {IPosts} from "../models/IPosts";
import {IComments} from "../models/IComments";


interface IStore {
    userSlice: {
        allUsers: IUser[],
        loadUsers: (users: IUser[]) => void
    },
    postsSlice: {
        allPosts: IPosts[],
        loadPosts: (posts: IPosts[]) => void
    },
    commentsSlice: {
        allComments: IComments[],
        loadComments: (comments: IComments[]) => void
    }
}
export const useStore = create<IStore>()(set => ({
    userSlice: {
        allUsers: [],
        loadUsers: (users) =>
            set(state => ({
                ...state,
                userSlice: {
                    ...state.userSlice,
                    allUsers: users
                }
            }))
    },
    postsSlice: {
        allPosts: [],
        loadPosts: (posts) =>
            set(state => ({
                ...state,
                postsSlice: {
                    ...state.postsSlice,
                    allPosts: posts
                }
            }))
    },
    commentsSlice: {
        allComments: [],
        loadComments: (comments) =>
            set(state => ({
                ...state,
                commentsSlice: {
                    ...state.commentsSlice,
                    allComments: comments
                }
            }))
    }
}));

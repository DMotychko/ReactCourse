export const baseUrl: string = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        allUsers: '/users',
        byId: (id: string) => `${urls.users.allUsers}/${id}`
    },
    posts: {
        allPosts: '/posts',
        byId: (id: string) => `${urls.posts.allPosts}/${id}`
    }
}
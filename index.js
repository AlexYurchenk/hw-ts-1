import updateObjectInArray from './updateObjectInArray.js';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const list = document.querySelector('.list');
function request(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data);
}
const getPosts = async (url) => {
    const res = await request(url);
    return res;
};
const createPostsLists = (posts) => {
    return posts.map((post) => createPost(post)).join('');
};
const createPost = ({ userId, id, title, body }) => {
    return `<li id=${id}><div id=${userId}><h2>${title}</h2><p>${body}</p></div></li>`;
};
const handleWindowLoad = async () => {
    try {
        const posts = await getPosts(API_URL);
        const updatedPosts = updateObjectInArray(
            posts,
            'title',
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            'aaaaaaaaaaaaaaaaaaaa'
        );
        const markup = createPostsLists(updatedPosts);
        list?.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
        alert(error);
    }
};
window.addEventListener('load', handleWindowLoad);

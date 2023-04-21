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
const makeNormalMarkUp = async () => {
    try {
        const posts = await getPosts(API_URL);
        const markup = createPostsLists(posts);
        return markup;
    } catch (error) {
        alert(error);
    }
};
const makeUpdatedMarkUp = async () => {
    const posts = await getPosts(API_URL);
    const updatedPosts = updateObjectInArray(
        posts,
        'title',
        'ddddident occaecati excepturi optio reprehenderit',
        'aaaaaaaaaaaaaaaaaaaa'
    );
    return updatedPosts;
};
const handleWindowLoad = async () => {
    try {
        const updatedPosts = await makeUpdatedMarkUp();
        const markup = createPostsLists(updatedPosts);
        list?.insertAdjacentHTML('beforeend', markup);
    } catch (error) {
        alert(error + 'Thats why we have rendered a normal list');
        makeNormalMarkUp().then((m) => {
            if (m) {
                list?.insertAdjacentHTML('beforeend', m);
            }
        });
    }
};
window.addEventListener('load', handleWindowLoad);

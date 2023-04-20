import updateObjectInArray from './updateObjectInArray';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const list = document.querySelector<HTMLUListElement>('.list');
interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function request<TResponse>(url: string): Promise<TResponse> {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data as TResponse);
}
const getPosts = async (url: string): Promise<IPost[]> => {
    const res = await request<IPost[]>(url);
    return res;
};
const createPostsLists = (posts: IPost[]): string => {
    return posts.map((post) => createPost(post)).join('');
};
const createPost = ({ userId, id, title, body }: IPost): string => {
    return `<li id=${id}><div id=${userId}><h2>${title}</h2><p>${body}</p></div></li>`;
};

const handleWindowLoad = async (): Promise<void> => {
    try {
        const posts = await getPosts(API_URL);
        const updatedPosts = updateObjectInArray<IPost>(
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

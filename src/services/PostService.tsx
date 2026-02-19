import type { Posttype } from "../types/PostTypes";

const API_URL = "http://localhost:3000/posts";

const getPosts = async (): Promise<Posttype[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return await response.json();
};

const createPost = async (newPost: Omit<Posttype, "id">): Promise<Posttype> => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    });

    if (!response.ok) throw new Error("Failed to create post");
    return await response.json();
};

const deletePost = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete post");
};

export { getPosts, createPost, deletePost };

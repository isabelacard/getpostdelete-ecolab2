import { useEffect, useState } from "react";

import Card from "../components/card";
import { getPosts } from "../services/posts";
import type { Post } from "../types/PostTypes";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <>
            <div className="flex justify-between items-center px-20 pt-16">
                <h1 className="text-[#00d3bc] text-5xl font-extrabold">POSTS (｡•ᴗ•｡)♡</h1>

                <button className="btn btn-accent">Create Post</button>
            </div>

            <div>
                <Card posts={posts} />
            </div>
        </>
    );
}

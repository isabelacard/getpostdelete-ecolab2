import { useEffect, useState } from "react";

import { getPosts } from "../services/PostService";
import Card from "../components/card";
import type { Posttype } from "../types/PostTypes";

export default function Home() {
    const [posts, setPosts] = useState<Posttype[]>([]);

    useEffect(() => {
        getPosts().then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center px-20 pt-16">
                <h1 className="text-[#00d3bc] text-5xl font-extrabold">TAMAGOCHI (｡•ᴗ•｡)♡</h1>
                <button className="btn btn-accent">Create Post</button>
            </div>

            <div className="flex flex-wrap gap-6 p-20">
                {posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

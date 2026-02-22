import { useEffect, useState } from "react";
import { Link } from "react-router";

import { getPosts, deletePost } from "../services/PostService";
import Card from "../components/card";
import type { Posttype } from "../types/PostTypes";

export default function Home() {
    const [posts, setPosts] = useState<Posttype[]>([]);

    const handleDelete = async (id: number) => {
        await deletePost(id);
        setPosts((prev) => prev.filter((p) => p.id !== id));
    };

    useEffect(() => {
        getPosts().then((data) => setPosts(data));
    }, []);

    return (
        <div className="pt-4 flex justify-center items-center flex-col">
            <div className="flex justify-between gap-8 h-30 w-300 rounded-4xl items-center px-20 pt-2 sticky top-0  z-10 transition-colors duration-300 bg-gradient-to-r from-teal-50 to-white">
                <h1 className="text-[#01a491] text-4xl font-extrabold flex justify-center ">TAMAGOCHI SHOWROOM (｡•ᴗ•｡)♡</h1>
                <Link to="/posts" className="btn bg-teal-700 text-white">
                    Create Post
                </Link>
            </div>

            <div className="grid grid-cols-4 gap-6 p-20 pt-15">
                {posts.map((post) => (
                    <Card key={post.id} post={post} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}

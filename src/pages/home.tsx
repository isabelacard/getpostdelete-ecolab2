import { useEffect, useState } from "react";

import { getPosts, deletePost, createPost } from "../services/PostService";
import Card from "../components/card";
import type { Posttype } from "../types/PostTypes";
import CreatePost from "../components/CreatePost";

export default function Home() {
    const [posts, setPosts] = useState<Posttype[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    const handleDelete = async (id: number) => {
        await deletePost(id);
        setPosts((prev) => prev.filter((p) => p.id !== id));
    };

    const handleCreate = async (newPost: Omit<Posttype, "id">) => {
        const created = await createPost(newPost);
        setPosts((prev) => [...prev, created]);
        setModalOpen(false); // cerrar modal
    };

    useEffect(() => {
        getPosts().then((data) => setPosts(data));
    }, []);

    return (
        <div className="pt-4 flex justify-center items-center flex-col">
            <div className="flex justify-between gap-8 h-30 w-300 rounded-4xl items-center px-20 pt-2 sticky top-0  z-10 transition-colors duration-300 bg-gradient-to-r from-teal-50 to-white">
                <h1 className="text-[#01a491] text-4xl font-extrabold flex justify-center ">TAMAGOCHI SHOWROOM (｡•ᴗ•｡)♡</h1>
                <button className="btn btn-accent text-white" onClick={() => setModalOpen(true)}>
                    Create Post
                </button>
            </div>

            <div className="grid grid-cols-4 gap-6 p-20 pt-15">
                {posts.map((post) => (
                    <Card key={post.id} post={post} onDelete={handleDelete} />
                ))}
            </div>

            {modalOpen && (
                <dialog className="modal modal-open">
                    <div className="modal-box bg-[#ffffff] border-white border-[0.1px]">
                        <CreatePost onCreate={handleCreate} />
                        <button className="absolute top-2 right-2 text-white bg-teal-500 rounded-full w-8 h-8 flex items-center justify-center" onClick={() => setModalOpen(false)}>
                            ×
                        </button>
                    </div>
                </dialog>
            )}
        </div>
    );
}

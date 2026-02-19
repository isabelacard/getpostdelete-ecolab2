import React, { useState } from "react";

import type { Posttype } from "../types/PostTypes";

type Props = {
    onCreate: (_newPost: Omit<Posttype, "id">) => void;
};

export default function CreatePost({ onCreate }: Props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !description || !image) return;
        onCreate({ name, description, image });
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-teal-700 mb-4 flex justify-center items-center">Post your tamagotchi :D</h1>
            <form onSubmit={handleSubmit} className="card-body p-0">
                <fieldset className="fieldset border-0 p-0">
                    <div className="space-y-1">
                        <label className="text-sm text-teal-600 font-medium">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://..."
                            className="w-full px-4 py-2 rounded-2xl bg-teal-50 border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 text-black transition"
                            required
                        />
                    </div>

                    <div className="space-y-1 mt-4">
                        <label className="text-sm text-teal-600 font-medium">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Version of your tamagotchi ✨"
                            className="w-full px-4 py-2 rounded-2xl bg-teal-50 text-black border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                            required
                        />
                    </div>

                    <div className="space-y-1 mt-4">
                        <label className="text-sm text-teal-600 font-medium">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Say something bubbly..."
                            className="w-full px-4 py-2 rounded-2xl bg-teal-50 border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-y h-24 text-black transition"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-neutral mt-6 bg-teal-700 hover:bg-teal-800 text-white rounded-4xl border-0 w-full">
                        Create post
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

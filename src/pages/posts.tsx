import { type FormEvent, useState } from "react";
import { Link } from "react-router";

import { createPost } from "../services/PostService";

export default function Posts() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!name || !description || !image) return;

        setIsSubmitting(true);
        setFeedback("");

        createPost({ name, description, image })
            .then(() => {
                setName("");
                setDescription("");
                setImage("");
                setFeedback("Post created");
            })
            .catch(() => {
                setFeedback("The post is not created");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <main className="min-h-screen  bg-gradient-to-r from-pink-100 to-teal-100 flex items-center justify-center p-4">
            <section className="mx-auto w-full max-w-2xl rounded-4xl border border-teal-100 bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <h1 className="text-3xl font-extrabold text-teal-700">Create Tamagochi Post ( •̀ ω •́ )✧</h1>
                </div>

                <form onSubmit={handleSubmit} className="card-body p-0 mr">
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

                        <button type="submit" disabled={isSubmitting} className="btn btn-neutral mt-6 bg-teal-700 hover:bg-teal-800 text-white rounded-4xl border-0 w-full disabled:opacity-60">
                            {isSubmitting ? "Creating..." : "Created post"}
                        </button>
                        <Link to="/home" className="btn btn-outline border-teal-300 text-teal-700 hover:bg-teal-50">
                            List Posts
                        </Link>

                        {feedback && <p className="mt-4 text-center text-sm text-teal-700">{feedback}</p>}
                    </fieldset>
                </form>
            </section>
        </main>
    );
}

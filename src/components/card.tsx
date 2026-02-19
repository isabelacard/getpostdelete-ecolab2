import type { Posttype } from "../types/PostTypes";

type Props = {
    post: Posttype;
    onDelete: (_id: number) => void;
};

export default function Card({ post, onDelete }: Props) {
    return (
        <div className="flex align-items-left justify-start">
            <div className="card w-100 bg-white shadow-md rounded-3xl border border-teal-400 hover:scale-105 transition-transform duration-300">
                <figure className="px-4 pt-4">
                    <img src={post.image} alt={post.name} className="rounded-2xl h-44 w-full object-cover" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="line-clamp-1 card-title text-teal-700 font-bold text-lg">{post.name}</h2>

                    <p className="text-gray-500 text-sm line-clamp-3">{post.description}</p>

                    <div className="card-actions mt-2">
                        <button className="btn bg-teal-700 hover:bg-teal-500 text-white border-none rounded-full px-6 shadow-sm " onClick={() => onDelete(post.id)}>
                            Delete post{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

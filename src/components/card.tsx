import type { Posttype } from "../types/PostTypes";

export default function Card({ post }: { post: Posttype }) {
    return (
        <div>
            <div className="card bg-base-100 w-96 h-96 shadow-sm">
                <figure>
                    <img src={post.image} alt="Shoes" className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{post.name}</h2>
                    <p>{post.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

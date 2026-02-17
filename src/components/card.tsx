import type { Post } from "../types/PostTypes";

export default function Card({ posts }: { posts: Post[] }) {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                {posts.map((post) => (
                    <div key={post.id}>
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

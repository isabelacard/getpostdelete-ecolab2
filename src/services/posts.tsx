import type { Post } from "../types/PostTypes";

const getPosts = async (): Promise<Post[]> => {
    try {
        const response = await fetch("http://localhost:3000/posts");

        console.info("Raw response:", response);
        const responseBody = await response.text();
        console.info("Response body:", responseBody);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = JSON.parse(responseBody); // Parse the response body as JSON
        return data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        throw error; // Re-throw the error to handle it further up the call stack
    }
};

export { getPosts };

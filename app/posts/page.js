import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
// import React from 'react';

export default async function Posts() {
    const posts = await getAllPosts();
    console.log(posts);
    
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <h1 className='font-bold text-2xl mt-10'>Posts</h1>
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2 className='font-bold'> <Link href={`/posts/${post.id}`}> {post.title} </Link> </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

// export default function Posts() {
//     return (
//         <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//             <h1>Posts</h1>
//         </div>
//     );
// }

import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
// import React from 'react';

export default async function Posts() {
    const posts = await getAllPosts();
    console.log(posts);
    
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <h1 className='font-bold text-2xl mt-10'>Posts</h1>
            <aside
                aria-label="Related articles"
                className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
            >
                <div className="px-4 mx-auto max-w-screen-xl">
                    {/* <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Related articles
        </h2> */}

                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Article 1 */}
                        {posts.map((post) => (
                            <article className="max-w-xs" key={post.id}>
                                <Link href={`/posts/${post.id}`}>
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                                        className="mb-5 rounded-lg"
                                        alt="Image 1"
                                    />
                                </Link>
                                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                                </h2>
                                {/* <a
                                    href="#"
                                    className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                                >
                                    Read in 2 minutes
                                </a> */}
                            </article>
                        ))}
                    </div>
                </div>
            </aside>
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

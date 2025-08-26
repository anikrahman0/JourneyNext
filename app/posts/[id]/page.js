import getPost from '@/lib/getPost';
import getAllPosts from '@/lib/getAllPosts';
import getPostComment from '@/lib/getPostComment';
import React, { Suspense } from 'react';
import Comments from '@/app/components/Comments';



export async function generateMetadata({ params }) {
    const { id } = await params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    }
}


export default async function PostPage({params}) {
    const {id} =  params;
    const postPromise =  getPost(id);
    const commentsPromise = getPostComment(id);
    const post = await postPromise;

    return (
        <div className="p-2 mt-10">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mt-20">
                <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            <img
                                className="mr-4 w-16 h-16 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                alt="Jese Leos"
                            />
                            <div>
                                <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                                    Jese Leos
                                </a>
                                <p className="text-base text-gray-500 dark:text-gray-400">
                                    Graphic Designer, educator & CEO Flowbite
                                </p>
                                <p className="text-base text-gray-500 dark:text-gray-400">
                                    <time dateTime="2022-02-08" title="February 8th, 2022">
                                        Feb. 8, 2022
                                    </time>
                                </p>
                            </div>
                        </div>
                    </address>
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                        {post.title}
                    </h1>
                </header>

                <p className="lead mb-6">
                    {post.body}
                </p>

                <figure>
                    <img
                        src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                        alt=""
                    />
                    <figcaption className="mt-5">Digital art by Anonymous</figcaption>
                </figure>

                {/* --- Comments Section --- */}
                <section className="not-format mt-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                            Discussion (20)
                        </h2>
                    </div>

                    {/* Comment Form */}
                    <form className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label htmlFor="comment" className="sr-only">
                                Your comment
                            </label>
                            <textarea
                                id="comment"
                                rows="6"
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        >
                            Post comment
                        </button>
                    </form>

                    {/* Example Comment */}

                    <Suspense fallback={<span className="loader"></span>}>
                        <Comments promise={commentsPromise} />
                    </Suspense>
                </section>
            </article>

        </div>
    )
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ id: post.id.toString() }))
}
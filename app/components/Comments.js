import React from 'react'

export default async function Comments({promise}) {
    const comments = await promise;
    return (
        <>
            <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                            <img
                                className="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                alt="Michael Gough"
                            />
                            Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <time dateTime="2022-02-08" title="February 8th, 2022">
                                Feb. 8, 2022
                            </time>
                        </p>
                    </div>
                </footer>

                {
                    comments.map((comment) => (
                        <p key={comment.id}> {comment.body} </p>
                    ))
                } 
            </article>
        </>
    )
}

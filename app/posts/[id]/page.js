import getPost from '@/lib/getPost';
import Link from 'next/link';
import React from 'react';

export default async function PostPage({params}) {
    const {id} = await params;
    const post = await getPost(id);
    return (
        <div className="p-2 mt-10">
            <h1 className='font-bold text-2xl mt-10 text-amber-700'>{post.title}</h1>
            <p> {post.body} </p>
        </div>
    )
}

import React, { cache } from 'react'

export default async function getAllPosts() {
  // const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=100');
  const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20',{
    next: {
      revalidate: 10
    }
  }
  );
  if(!result.ok) throw new Error('Failed to fetch posts');
  return result.json()
}

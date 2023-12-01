import PostPages from "../page"
import { Suspense } from "react"

async function loadPost(
    params: {id: string}
){
   const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
   const post = await data.json()
   return post 
}

export default async function page({params}: {params: {id: string}} ) {
  
  const post = await loadPost(params)  
  console.log('post:\t',post)

  return (
    <>
        <h1>Post Page: {params.id}</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <h2>Otra publicaciones</h2> 
        <Suspense fallback={<div>Loading posts...</div>}> 
            <PostPages className="post__pages"/>
        </Suspense>
    </>
  )
}

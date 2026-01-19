import React, {useState, useEffect} from 'react'
import dbService from '../appwrite/config'
import { Container, PostCard } from '../components'
const AllPosts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{},[])

    dbService.getAllPost().then((posts)=>{
        setPosts(posts.documents)
    })
  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div key={post.id} className='p-2 w-1'>
              <PostCard post={post} />;
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts
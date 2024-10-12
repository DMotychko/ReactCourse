import React, {useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import IPost from "./models/IPost";
import {getUserPosts} from "./services/api.service";

function App() {
    const [posts, setPosts] = useState<IPost[]>([])

    const lift = async (id: number) => {
        setPosts(await getUserPosts(id))
    }

  return (
    <div className='app-page'>
        <div><Users lift={lift}/></div>
        <div>
            <Posts posts={posts}/>
        </div>
    </div>
  );
}

export default App;

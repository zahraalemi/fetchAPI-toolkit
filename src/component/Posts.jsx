
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postSlice";
import { useState } from "react";

const Posts = () => {
    
    const [ id, setId ] = useState('');
    const showPost = useSelector((state) => state.posts.postsList);
    const dispatch = useDispatch();
    const handleGetPosts = () => {
            if(id < 101 && id>0){ 
                dispatch(getPosts({ id: id }));
                setId('');
            }else{
                alert("Your Number is not between 1-100")
            }
    };
    

  const getID = (e) =>{
    setId(e.target.value);
    
  }
  return (
    <div>
        <input type="text" value={id} onChange={getID} placeholder="choose id (0-100)"/>
        <button onClick={handleGetPosts}> Search </button>
     <div className="post-box">
        <h3>{showPost.title}</h3>
        <p>{showPost.body}</p>
     </div>
    </div>
  );
};

export default Posts;

import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const EditPost = () => {
    const {posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle} = useContext(DataContext)
  const {id} = useParams();
  const post = posts.find(post=>(post.id).toString() === id);
    
    useEffect(()=>{
        if (post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post, setEditTitle, setEditBody])
    return (
        <main className='NewPost'>
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='newPostForm'
                    onSubmit={(e)=>e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input 
                            type="text"
                            id='postTitle'
                            required
                            value={editTitle}
                            onChange={(e)=>setEditTitle(e.target.value)}
                            />
                            <label htmlFor="postBody">Post:</label>
                            <textarea
                                type="text"
                                id='postBody'
                                required
                                value={editBody}
                                onChange={(e)=>setEditBody(e.target.value)}
                            />
                            <button type='submit' onClick={()=> handleEdit(post.id)}>
                                submit
                            </button>
                        </form>
                    </>
                }{!editTitle &&
                    <>
                        <h2>post not found</h2>
                        <p>well,thats disappointing</p>
                        <p>
                            <Link to='/'>visit our homepage</Link>
                        </p>
                    </>
                }
        </main>
        )
}

export default EditPost

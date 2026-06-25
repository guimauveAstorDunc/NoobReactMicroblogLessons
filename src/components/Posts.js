// New Stuff
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
// Old Stuff
import Container from 'react-bootstrap/Container'; // Still using this in the JSX.

export default function Posts() {
  const [posts, setPosts] = useState();

  // TODO: add side effect function to request posts

  return (
    <>
      {posts === undefined ?
        <Spinner animation="border"/>
      :
        <>
          <Container className="Posts">
              {posts.length === 0 ?
                  <p>There are no blog posts.</p>
                  :
                  posts.map(post => {
                    return (
                      <p key={post.id}>
                          <b>{post.author.username}</b> &mdash; {post.timestamp}
                          <br />
                          {post.text}
                          </p>
                      );
                    })
              }
          </Container>
        </>
      }
    </>
  );
}
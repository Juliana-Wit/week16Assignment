import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import LikeButton from './Components/like-button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function App() {
  
  //Here is fake data that will be displayed as posts on the
  //Discussion Forum page
  const posts = [
    {
      id: 1,
      title: 'First Fake Post',
      date: '11-03-23',
      content: 'This is a fake post.',
    },
    {
      id: 2,
      title: 'Second Fake Post',
      date: '11-04-23',
      content: 'This is another fake post.',
    },
    {
      id: 3,
      title: 'Third Fake Post',
      date: '11-05-23',
      content: 'This is my final fake post.',
    }
  ];

  return (
    <Container>
      <Router>
        <div>
          <ButtonGroup>
            <Button variant='outline-secondary'>
            <Link to='/home'>Home</Link>
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant='outline-secondary'>
            <Link to='/forum'>Discussion Forum</Link> 
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant='outline-secondary'>
            <Link to='/photo'>Photo Library</Link>
            </Button>
          </ButtonGroup>
          <Switch>
            <Route path='/forum'>
              <Posts posts={posts} />
            </Route>
            <Route path='/photos'>
              <Photos />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

//The below function represent what will look like individual
//web pages to the user
function Home() {
  return <h2>Home</h2>
}

function Photos() {
  return <h2>Photo Library</h2>
}

function Posts({ posts }) {
  const match = useRouteMatch();
  const findPostById = (id) =>
    posts.filter((post) => post.id == id)[0];

  return (
    <div> 
      <h2>Discussion Forum</h2>
    
        {posts.map((post, index) => {
          return (
            <Alert variant='primary' key={index}>
              <Link to={`${match.url}/${post.id}`}>
                {post.title}
              </Link>
            </Alert>
          );
        })}
      
      <Switch>
        <Route
          path={`${match.path}/${postId}`}
          
          //This will make it so that each individual post will
          //be rendered to the UI.
          render={(props) => {
            <Forum
            {...props}
            data={findPostById(props.match.params.postId)}
            />
          }}
        />
        <Route path={match.post}>
          <h1>Please Select a Post</h1>
        </Route>
      </Switch>
    </div>
  );
}

function postId(props) {
  const { data } = props;
  return (
    <Card>
      <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <Card.Subtitle>{data.date}</Card.Subtitle>
          <Card.Text>{data.content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <LikeButton/>
        </Card.Footer>
    </Card>
  );
}


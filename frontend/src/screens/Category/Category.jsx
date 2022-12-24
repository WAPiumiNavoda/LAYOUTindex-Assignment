import React,{useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import MainScreen from '../../component/MainScreen';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';

const Category = () => {
  
const [category,setCategory] = useState([]);

const fetchNotes = async() =>{
 const { data } = await axios.get('/api/category');
 setCategory(data);
}
console.log(category);

  useEffect(() => {
   fetchNotes();
  }, [])

  return (
    <div className='my-5 '>

    <MainScreen titles='Welcome Piumi'>
        <Link to='createcategory'>
            <Button  style={{marginLeft: 10,marginBottom:6}} size='lg'>Create New Category</Button>
        </Link>
      {
        category.map((category)=>(
           <Accordion key={category._id}>
           <Card style={{ width: '18rem', marginBottom:'50px' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{category.title}</Card.Title>
        <Card.Text>
         {category.category}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <div>
        <Button className='m-5 '>Edit</Button>
         <Button variant='danger'>Delete</Button>
      </div>
    </Card>
    </Accordion>
        ))
      }
    </MainScreen>
    </div>
  )
}

export default Category
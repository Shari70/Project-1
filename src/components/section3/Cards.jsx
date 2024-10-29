// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import img1 from '../../assets/img_1.jpg.webp'
// import img2 from '../../assets/img_2.jpg.webp'
// import img3 from '../../assets/img_3.jpg.webp'

// function Cards() {
//     const im1 = "img1";

//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src= {img1}/>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Cards;

// src/Cards.js
import React from 'react';
import CardItem from './CardItem';

function Cards({ cardData }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cardData.map((card, index) => (
        <CardItem key={index} {...card} />
      ))}
    </div>
  );
}

export default Cards;

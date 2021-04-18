import React, { useEffect, useState } from 'react';
import './Testimonials.css'
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
    // const TestimonialsData = [
    //     {
    //         id: 1,
    //         img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    //         name: "Ben Ten",
    //         comment: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa.", 
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    //         name: "Mr. Bean",
    //         comment: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa.", 
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80",
    //         name: "Mohammad Ali",
    //         comment: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa.", 
    //     },
    // ]
const [reviews, setReviews] = useState([])
      //fetching all services from database 
  useEffect(() => {
    fetch("https://digma-server.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((review) => {
        setReviews(review);
      });
  }, []);
    return (
        <div class="testimonials-clean">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Testimonials </h2>
                <p class="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div class="row people">                
{
    reviews.map((obj) => <TestimonialsCard reviewInfo={obj} />)
}               
            </div>
        </div>
    </div>
    );
};

export default Testimonials;
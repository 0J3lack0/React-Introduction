import React from "react";

function Course({ course }) {
  //   console.log(course.title);
  const { id, title, description, price, link, image } = course;
  return (
    <div className="courses">
      <div className="course-img">
        <img src={image} width={300} height={250} />
      </div>
      <h4 className="course-title">{title}</h4>
      <h5 className="course-description">{description}</h5>
      <h3 className="course-price">{price}₺</h3>
      <div className="course-link">
        <a style={{ textDecoration: "none" }} href={link}>
          Satın Al
        </a>
      </div>
    </div>
  );
}

export default Course;

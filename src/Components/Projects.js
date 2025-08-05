// // src/components/Projects.jsx
// import React, { useEffect, useState } from 'react';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/projects.json') // Replace with your actual link
//       .then(response => response.json())
//       .then(data => {
//         setProjects(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading projects...</p>;

//   return (
//     <section className="p-8 bg-white-100">
//       <h2 className="text-3xl font-bold">Some of Our</h2>
//       <h2 className="text-2xl font-bold text-gray mb-6">Recent Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-white rounded-lg shadow-md p-4">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold">{project.title}</h3>
//             <p className="text-gray-600">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;




// src/components/Projects.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json') // Replace with your actual path if needed
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold">Some of Our</h2>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Recent Projects</h2>

      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;




import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    (async function fetchCourseData() {
      const courseDataStream = await fetch("/course-data");
      const courseDataJson = await courseDataStream.json();
      console.log("course data app.js", courseDataJson);

      setCourseData(courseDataJson);
    })();
  }, []);

  return <div className="App">Add carousels</div>;
}

export default App;

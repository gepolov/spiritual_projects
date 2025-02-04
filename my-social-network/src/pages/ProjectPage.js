import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Страница проекта {id}</h1>
      {/* Здесь будет информация о проекте */}
    </div>
  );
}

export default ProjectPage;
import React from 'react';
import ProjectContent from './ProjectClientSection';

const Project = async () => {
     let projects = [];
     try {
          const res = await fetch("http://localhost:3000/project.json");
          if (!res.ok) throw new Error('Failed to fetch projects');
          projects = await res.json();
     } catch (error) {
          console.error("Project Fetch Error:", error);
          return <p className="text-center text-slate-500 py-10">Error loading projects. Please check connection.</p>;
     }

     return <ProjectContent projects={projects} />;
};

export default Project;
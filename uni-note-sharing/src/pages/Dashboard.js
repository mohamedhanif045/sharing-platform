import React from 'react';
import NoteUploadForm from '../components/NoteUploadForm';
import NoteList from '../components/NoteList';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the University Note Sharing Dashboard</h2>
      <NoteUploadForm />
      <NoteList />
    </div>
  );
};

export default Dashboard;

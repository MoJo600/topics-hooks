import React, { useEffect, useState } from 'react';
import { fetchTopics } from './api';
import './App.css';
import Dashboard from './components/Dashboard';
import TopicPost from './components/TopicPost';
import TopicsList from './components/TopicsList';

export function App (_) {

  const [topics, setTopics] = useState([])
  const [selectedTopicId, setSelectedTopicId] = useState(null)

  useEffect(() => {
    fetchTopics().then(topics => setTopics(topics))
  })

  function renderTopicsList () {
    if (topics && topics.length !== 0) {
       return (
        <TopicsList
          topics={topics}
          onClickTopic={onClickTopicCard}
          selectedTopicId={selectedTopicId}
        />
        )
    }
  }

  function renderTopicPost () {
    if (selectedTopicId) {
      return (
        <TopicPost selectedTopicId={selectedTopicId}/>
      )
    }
  }


  function onClickTopicCard (selectedTopicId) {
    return  () => {
      setSelectedTopicId(selectedTopicId)
    }
  }

  return (
    <Dashboard>
        {renderTopicsList()}
        {renderTopicPost()}
    </Dashboard>
  );
}

export default App;

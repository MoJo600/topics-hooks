import React from 'react';
import { fetchTopics } from './api';
import './App.css';
import Dashboard from './components/Dashboard';
import TopicPost from './components/TopicPost';
import TopicsList from './components/TopicsList';

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTopicId: null,
      topics: []
    }
  }

  fetchData = () => {
    fetchTopics().then(topics => this.setState({ topics }))
  }


  componentWillMount () {
    this.fetchData()
  }

  renderTopicsList = () => {
    if (this.state.topics && this.state.topics.length !== 0) {
       return (
        <TopicsList
          topics={this.state.topics}
          onClickTopic={this.onClickTopicCard}
          selectedTopicId={this.state.selectedTopicId}
        />
        )
    }
  }

  renderTopicPost = () => {
    if (this.state.selectedTopicId) {
      return (
        <TopicPost selectedTopicId={this.state.selectedTopicId}/>
      )
    }
  }


  onClickTopicCard = (selectedTopicId) => () => {
    this.setState({ selectedTopicId })
  }

  render () {
    return (
      <Dashboard>
          {this.renderTopicsList()}
          {this.renderTopicPost()}
      </Dashboard>
    );
  }
}

export default App;

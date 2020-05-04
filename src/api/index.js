
import allPosts from './files/posts.json'
import allTopics from './files/topics.json'


export const fetchTopics = () => {
    return Promise.resolve(allTopics)
}

export const fetchTopicPost = (topicId) => {
    return Promise.resolve(allPosts.find(post => {
      return post.topicId === topicId
    }))
}
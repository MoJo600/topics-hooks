import { useEffect, useState } from 'react';
import { fetchTopicPost } from '../api';


export const useTopicPostHook = (topicId) => {
    const [topicPost, setTopicPost] = useState(null)
    useEffect(() => {
        if (topicId) {
            fetchTopicPost(topicId)
                .then(topicPost => setTopicPost(topicPost))
        }
    }, [topicId])
    return topicPost
}
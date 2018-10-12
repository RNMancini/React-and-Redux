const initState = {
    posts: [
        {id: '1', title: 'frjfhrfjl', body: 'wefwffe'}
        {id: '2', title: 'edkjekfjkf', body: 'djdjnd'}
        ]
}

const rootReducer = (state = initState, action) => {
   console.log(action.type === 'DELETE_POST'){
       let newPosts = state.posts.filter(post => {
           return action.id !== post.id
       });
       return {
           ...state,
           posts: newPosts
       }
  
}
    return state;
}

export default rootReducer
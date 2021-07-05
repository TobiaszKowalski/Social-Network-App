import profileReducer, { addPostActionCreater, deletePost } from "../state/reducers/profile-reducer";

// Test data
let state = {
    postData: [
        {id: '1', message: 'Hi', likesCount: 0},
        {id: '2', message: 'Whats up?', likesCount: 0},
        {id: '3', message: '=)', likesCount: 0}
    ]
};

it('posts quantity should be incremented', () => {
    // Test data
    let action = addPostActionCreater('some text');

    // Action
    let newState = profileReducer(state, action);

    // Expectation
    expect(newState.postData.length).toBe(4);
});

it('new post should be added', () => {
    // Test data
    let action = addPostActionCreater('some text');

    // Action
    let newState = profileReducer(state, action);

    // Expectation
    expect(newState.postData[3].message).toBe('some text');
});

it('after removing post posts length should be decremented', () => {
    // Test data
    let action = deletePost(3);

    // Action
    let newState = profileReducer(state, action);

    // Expectation
    expect(newState.postData.length).toBe(2);
});

it('after removing post posts length shouldn`t be decremented if id is incorrect', () => {
    // Test data
    let action = deletePost(1000);

    // Action
    let newState = profileReducer(state, action);

    // Expectation
    expect(newState.postData.length).toBe(3);
});


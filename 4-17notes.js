import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

export default (createStore, applyMiddleware(thunk));

//Thunk middleware looks at what we dispatched and makes a decision about what to do- is it an object? let it go through- is it a function? call it-

//Object
const action = {
    type: 'WHATEVER',
    payload: 42
};

//Asycn Action- function
function fetchRepos() {
    console.log('I\'m an async action');
}

//in a class ----- this.props.dispatch(fetchRepos());
import {fetchRepos} from './actions';

const actionCreator = () => {
    return {
        type: 'FOO',
        payload: 'bar'
    }
}

const action1 = actionCreator();
const action2 = actionCreator();


export function fetchRepos() {
    return function() {
        console.log('I\'m an async action');
    }
}

//Function that returns another function
export const fetchRepos = (username) => () => {
    return fetch(`https://api.github.com/users/${username}/repos`).then(res => {
        return res.json()
    })
    .then(data => console.log(data));
    //return fetch('url')
}

//fetch returns a promise.
export const fetchRepos = (username) => () => {
    return fetch(`https://api.github.com/users/${username}/repos`, {
        method: 'POST',
        headers: {
            foo: 'bar'
        }
    }).then(res => {
        return res.json()
    })
    .then(data => console.log(data));
    //return fetch('url')
}

//

import store from './store';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const fetchReposSuccess = (repos) => {
    type: FETCH_REPOS_SUCCESS,
    repos
}

export const fetchRepos = (username) => () => {
    return fetch(`https://api.github.com/users/${username}/repos`).then(res => {
        return res.json()
    })
    .then(data => store.dispatch(fetchReposSuccess(data.map(repo => repo.name))));
    //return fetch('url')
}

//

import FETCH_REPOS_SUCCESS from './actions';
const initialState = {
    repos: ['foo', 'bar', 'baz'],
    loading: 'loading blahblah',
    error: 'something went wrong'
}

export default (state = initialState, action) => {
    if (action.type === FETCH_REPOS_SUCCESS) {
        return Object.assign({}, state, {
            repos: action.repos,
            loading: action.loading
        })
    }
    console.log(action)
    return state;
}




export const mapStateToProps = (state, props) => ({
    repos: state.repos,
    loading: state.loading,
    error: state.error
})



export const fetchRepos = (username) => (dispatch) => {
    dispatch(fetchReposRequest());
    return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(`Something went wrong`)
        }
        return res.json()
    })
    .then(data => store.dispatch(fetchReposSuccess(data.map(repo => repo.name))))
    .catch(err => dispatch(fetchReposError(err)));
    //return fetch('url')
}



/////////////////////////////////////////////////////////////

export default function App(props) {
    return (
        <div>
            <NavBar />
            <Route path="/" exact component={HomePage} />
            <Route path="/projects" component={ProjectsNav} />
        </div>
    )
}

req.params.name
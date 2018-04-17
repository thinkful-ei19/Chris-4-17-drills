import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchCharacters, searchCharactersRequest, SEARCH_CHARACTERS_ERROR} from '../actions';

export class CharacterSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        console.log(this.props)
        e.preventDefault();
        this.props.dispatch(searchCharacters(this.input.value))
    }

    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const characters = this.props.characters.map((character) => (
            <li>{character}</li>
        ));

        return <ul className="character-search-results">{characters}</ul>;
    }

    render() {
        return (
            <div className="character-search">
                {/* When this form is submitted you should submit the
                    searchCharacters action */}
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input type="search" ref={input => (this.input = input)} />
                    <button>Search</button>
                </form>
                <ul className="character-search-results">
                    {this.renderResults()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    characters: state.characters,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(CharacterSearch);

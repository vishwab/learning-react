import React from 'react';

import $ from 'jquery';

// https://jsfiddle.net/vbwe1s44/

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                searchResults: [],
                moveResults: []
        }

        this.handleEvent = this.handleEvent.bind(this);
    }

    showResults = (response) => {
        this.setState({
            searchResults: response.results,
            moveResults: []
        })
    }

    search = (URL) => {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: URL,
            success: function(response) {
                this.showResults(response);
            }.bind(this)
        });
    }

    handleEvent = (clickedTrack) => {
        const { searchResults, moveResults } = this.state;
        const isInSearchResults = searchResults.some(result => result.trackId === clickedTrack.trackId);

        this.setState({
            searchResults: isInSearchResults ? searchResults.filter(i => i.trackId  !== clickedTrack.trackId) : [...searchResults, clickedTrack],
            moveResults: isInSearchResults ? [...moveResults, clickedTrack] : moveResults.filter(i => i.trackId !== clickedTrack.trackId)
        });
    }

    componentDidMount() {
        this.search('https://itunes.apple.com/search?term=broods');
    }

    render(){
        return (
            <div>
                <Results 
                  searchResults={this.state.searchResults} 
                  handleEvent={this.handleEvent}/>
                <Results 
                  searchResults={this.state.moveResults} 
                  handleEvent={this.handleEvent} />
            </div>
        );
    }
}


class Results extends React.Component {
    render(){
        const { handleEvent, searchResults } = this.props;
        return(
            <ul>
                {this.props.searchResults.map((result, idx) => 
            			<ResultItem 
                     key={`${result.trackId}-${idx}`} 
                     trackName={result.trackName} 
                     track={result}
                     handleClick={handleEvent} />
        				)}
            </ul>
        );
    }
}

class ResultItem extends React.Component {
    render(){
    		const { handleClick, track, trackName } = this.props
        return <li onClick={() => handleClick(track)}> {trackName} </li>;
    }
}


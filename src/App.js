import React, { Component } from 'react';
import Table from './Table/Table';
import Form from './Form/Form';

class App extends Component {

    state = {
        characters: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Actress'
            }
        ]
    };
    
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    duplicateCharacter = index => {
        const { characters } = this.state;
        console.log('duplicating...');
        console.log(characters[index]);
        this.setState({characters: [...this.state.characters, characters[index]]});
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {

        const { characters } = this.state;

        return (
            <div className="App">
                <Table 
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                    duplicateCharacter={this.duplicateCharacter}/>
                <Form 
                    handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;
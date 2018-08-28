import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
    render() {

        const { characterData, removeCharacter, duplicateCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                    duplicateCharacter={duplicateCharacter}/>
            </table>
        );
    }
}

export default Table;
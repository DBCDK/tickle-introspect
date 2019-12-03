/*
 * Copyright Dansk Bibliotekscenter a/s. Licensed under GNU GPL v3
 * See license text at https://opensource.dbc.dk/licenses/gpl-3.0
 */

import React from "react";
import {Button, ButtonGroup} from "react-bootstrap";

class TickleRepoIntrospectRecordCopy extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (navigator.clipboard) {
            return (
                <div>
                    <div id='format-div'>
                        <ButtonGroup id='button-tool-bar-format'>
                            <Button onClick={this.props.onCopyToClipboard}
                                    bsStyle='default'
                                    id='button-copy'
                                    disabled={!this.props.recordLoaded}>Kopiér post</Button>
                        </ButtonGroup>
                    </div>
                </div>
            )
        } else {
            return <div/>
        }
    }
}

export default TickleRepoIntrospectRecordCopy;
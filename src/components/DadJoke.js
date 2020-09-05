import React from "react";
import {Card, Button} from "semantic-ui-react";
import PropTypes from 'prop-types'
const axios = require('axios')

// require('../endpoints/icanhazdadjoke')

export default function DadJoke(props) {
    const [id, setId] = React.useState('placeholder_id')
    const [joke, setJoke] = React.useState('placeholder_joke')

    const updateJoke = () => {
        const config = {
            headers: {
                'User-Agent': 'funniez - repo tbd',
                'Accept': 'application/json',
            }
        }

        axios.get('https://icanhazdadjoke.com/', config).then((response) => {
            setId(response.data.id)
            setJoke(response.data.joke)
        })
    }

    return (
        <div className={"joke"}>
            <Card centered={true}>
                <Card.Content>
                    {/*Title and image go here*/}
                    <Card.Header>
                        {id}
                    </Card.Header>
                    <Card.Description>
                        {joke}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra={true}>
                    {/*Control buttons go here, favorite and new joke*/}
                    <Button basic color={'green'} disabled={true}>
                        Add to Favorites
                    </Button>
                    <Button basic onClick={() => updateJoke()}>
                        Next
                    </Button>
                </Card.Content>
            </Card>
        </div>
    )
}

DadJoke.propTypes = {
    id: PropTypes.string,
    joke: PropTypes.string,
    updateJoke: PropTypes.func,
}

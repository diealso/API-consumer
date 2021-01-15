import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Search.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import {interInitialState} from "../../store/reducers/queryReducer";

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const message = useSelector((state: interInitialState ) => state.message);

    const updateQuery = async function(event: any) {
        const query = event.target.value;
        (() => dispatch({type:"FETCHDATA", query:query}))();
    }

    return (
        <>
            <h1 className="mainTitle">API Consumer</h1>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Query</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Query"
                aria-label="Query"
                aria-describedby="basic-addon1"
                onKeyUp={updateQuery}
                />
            </InputGroup>
            <p>{message}</p>
        </>
    )
  
};

export default Search;

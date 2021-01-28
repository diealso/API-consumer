import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './DataViewer.css';
import { Row, Col, Button } from 'react-bootstrap';
import {interInitialState} from "../../store/reducers/queryReducer";

const DataViewer = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: interInitialState ) => state.data);
    const selectedData = useSelector((state: interInitialState ) => state.selectedData);

    const addToSelected = (event:any) => {
        const queryName = event.target.innerHTML;
        if(!selectedData.includes(queryName)){
            (() => dispatch({type:"SELECTQUERY", query:queryName}))()
        }
    }

    const removeFromSelected = (event:any) => {
        const queryName = event.target.innerHTML;
        (() => dispatch({type:"REMOVEQUERY", query:queryName}))()
    }

    return (
        <>
            <Row>
                <Col>
                    <p className="title">Results</p>
                    <ul className="dataList unselectedList">
                        {data.length !== 0 ? data.map(
                            (query, id) => {return (
                                <li key={id}>
                                    <Button onClick={addToSelected} variant="primary">{query.show.name ? query.show.name : "" }</Button>
                                </li>
                            )}) : (<li><p>There is no query</p></li>)}
                    </ul>
                </Col>
                <Col>
                    <p className="title">Selected results</p>
                    <table className="dataList selectedList">
                        <tbody>
                        {selectedData.length !== 0 ? selectedData.map(
                            (query, id) => {return (
                                <tr key={id}>
                                    <td>
                                        <Button onClick={removeFromSelected} variant="danger">{query}</Button>
                                    </td>
                                </tr>
                            )}) : (<tr><td><p>There is no data selecte</p></td></tr>)}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
    )
  
};

export default DataViewer;

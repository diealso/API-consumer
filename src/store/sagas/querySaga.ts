import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchDataAsync(action:any) {
    const query = action.query;

    if (query === '') {
        yield put({ type: 'BLANK' });
    } else {
        try {
            yield put({ type: 'SEARCHING', query: query });

            const response = yield axios({
                method: 'get',
                headers: {
                    'Acceseees-Control-Allow-Origin': '*',
                },
                url: '/search/shows?q=' + query,
            });
            yield put({ type: 'SAVEDATA', query: query, response: response.data });
        } catch (error) {
            yield put({ type: 'ERRORSEARCHING' });
        }
    }
}

export function* fetchDataSaga() {
    yield takeEvery('FETCHDATA', fetchDataAsync);
}

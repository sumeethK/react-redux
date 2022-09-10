import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError } from '../actions';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
    try {
        console.log('IMAGE_LOAD in SAGA');
        const page = yield select(getPage); //get data from state
        const images = yield call(fetchImages, page); //call aysnc API
        console.log("Fetch Image: ", images,page)
        yield put(setImages(images)); // trigger action that will be handled in reducer
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);   //watch actions, and trigger saga
}

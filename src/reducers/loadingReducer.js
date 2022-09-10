import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            console.log('IMAGE_LOAD_REDUCER');
            return true;
        case IMAGES.LOAD_SUCCESS:
            console.log('IMAGE_LOAD_SUCCESS_REDUCER');
            return false;
        case IMAGES.LOAD_FAIL:
            return false;

        default:
            return state;
    }
};

export default loadingReducer;

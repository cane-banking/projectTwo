import {CaneBankingState} from './store';
import {AppAction} from './actions';
import {ThunkAction} from 'redux-thunk';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, CaneBankingState, unknown, AppAction>;

// export const thunkGetRestaurants = (): AppThunk => async dispatch => {
//     const asyncResp = await restaurantService.getRestaurants();
//     console.log('before thunk dispatch');
//     dispatch(getRestaurants(asyncResp));
// }
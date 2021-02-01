import {CaneBankingState} from './store';
import {AppAction, getApplications} from './actions';
import {ThunkAction} from 'redux-thunk';
import adminService from '../employee/admin.service';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, CaneBankingState, unknown, AppAction>;

export const thunkGetApps = (): AppThunk => async dispatch => {
    const asyncResp = await adminService.getApplications();
    console.log('before thunk dispatch');
    dispatch(getApplications(asyncResp));
    }
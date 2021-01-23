import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/actions';
import { UserState } from '../store/store';
import userService from '../user/user.service';


export default function Accounts() {
    const userSelector = (state: UserState) => state.loginUser;
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        // Check to see if we're already logged in. Redirect if we are.
        userService
            .getLogin()
            .then((loggedUser) => {
                dispatch(getUser(loggedUser));
            })
            .catch((err) => {
                console.error(err);
            });
    }, [user]);
    console.log(user)
  return (
    <View>Welcome to your accounts {user.firstname}</View>

  );
}
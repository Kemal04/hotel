import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './slices/contact';
import usersReducer from './slices/users';

const reducer = {
    contacts: contactsReducer,
    users: usersReducer,
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;
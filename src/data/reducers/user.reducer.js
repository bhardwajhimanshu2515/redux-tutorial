import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI, loginAPI } from "../services/user.service";

export const loginItem = createAsyncThunk(
    'user/loginItem',
    async (payload, thunkAPI) => {
        let response = await loginAPI(payload);
        console.log(localStorage.getItem('token'));
        if (response.isSuccessful === true) {
            localStorage.setItem('token',response.data.token);
              console.log("response=",response);
            return response.data
        }
        else thunkAPI.rejectWithValue('network call failed');
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: [],
        loggedIn: false
    },
    reducers: {
    },
    extraReducers: {
        [loginItem.fulfilled]: (state, action) => {
            if (action.payload.token) {
                state.userInfo=action.payload;
                let updateConnector = true;
                state.loggedIn = updateConnector;
            }
            else{
                state.loggedIn=false;
            }
        }
    }
});

export default userSlice.reducer;


// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import toast from 'react-hot-toast'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthServices from '../../../Services/auth.service'
import ProfileServices from '../../../Services/profile.service'


// ** Types Imports
import { IAuth } from '../../../types/auth'

interface InitialState {
    auths: IAuth[] | [];
    auth: IAuth | {};
    total: number;
    params: {};
    status: 'pending' | 'error' | 'success' | 'idle';
    user: {}
}

interface DataParams {
    q: string
    role: string
    status: string
    currentPlan: string
}

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

// ** Fetch Client
export const fetchAction = createAsyncThunk(
    'auth/fetch',
    async (id: string) => {
        return { id }
    }
)

// ** Fetch Clients
// export const fetchAllAction = createAsyncThunk(
//     'example/fetchAll',
//     async (params: DataParams) => {
//         const response = await AuthServices.getAll();
//         return response.data
//     }
// )

// ** Add Client
export const loginAction = createAsyncThunk(
    'auth/login',
    async (data: any, { getState, dispatch }: Redux) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await AuthServices.login(data);
            // console.log(response.data);
            if (response) {
                toast.success(response.data.message)
            }
            // dispatch(fetchAllAction(getState().user.params))
            // toast.success("Assignment Added successfully!")
            dispatch(slice.actions.handleUser(response.data.data.user))
            dispatch(slice.actions.handleStatus('success'))
            return response.data;
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
            return error.response.data;
        }
    }
)

export const registerAction = createAsyncThunk(
    'auth/register',
    async (data: any, { getState, dispatch }: Redux) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await AuthServices.signup(data);
            // console.log(response.data);

            // dispatch(fetchAllAction(getState().user.params))
            if (response) {
                toast.success(response.data.message || "Success")
            }
            dispatch(slice.actions.handleUser(response.data.data.user))
            dispatch(slice.actions.handleStatus('success'))
            return response.data;
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
            return error.response.data;
        }
    }
)

export const businessInformationAction = createAsyncThunk(
    'auth/business',async (data: any, { getState, dispatch }: Redux) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await AuthServices.businessAdd(data);
            console.log(response.data);

            // dispatch(fetchAllAction(getState().user.params))
            if (response) {
                toast.success(response.data.message || "Success")
            }
            dispatch(slice.actions.handleStatus('success'))
            return response.data;
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
            return error.response.data;
        }
    }
)

export const profileAction = createAsyncThunk(
    'setting/profile',
    async (data: any, { getState, dispatch }: Redux) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await ProfileServices.update(data);
            if (response){
                toast.success(response.data.message||"Success")
            }
            dispatch(slice.actions.handleStatus('success'))
            return response.data;
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
            return error.response.data;
        }
    }
)
// @ts-ignore
export const slice = createSlice({
    name: 'auth',
    initialState: {
        auths: [],
        auth: {},
        total: 0,
        params: {},
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : {}
    } as InitialState,
    reducers: {
        handleStatus: (state, action) => {
            state.status = action.payload;
        },
        handleUser: (state, action) => {
            action.payload.role_code = action.payload.role.code
            return { ...state, user: action.payload }
        }
    },
    // extraReducers: builder => {
    //     builder.addCase(fetchAllAction.fulfilled, (state, action) => {
    //         const { data } = action.payload;

    //         state.examples = data.examples || []
    //         state.total = data.examples.length || 0
    //     })
    //     builder.addCase(fetchAction.fulfilled, (state, action) => {
    //         const { id } = action.payload;
    //         state.example = state.examples.find((example: any) => example.id === id) || {};
    //     })
    // }
})

export default slice.reducer

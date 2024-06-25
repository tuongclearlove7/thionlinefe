import axios from "axios";
import {notify_error} from "./function";

export const api = axios.create({
    baseURL: `http://localhost:9090`
    //process.env.REACT_APP_URL_SERVER_HOSTNAME
    //https://project-java2.onrender.com
    //http://localhost:9090
});


export async function create_category_question(url, data, dispatch) {
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        throw error;
    }
}


export async function create_question(url, data, dispatch) {
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        throw error;
    }
}


export async function create_exam(url, data, dispatch) {
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        throw error;
    }
}

export async function create_result(url, data, dispatch) {
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        throw error;
    }
}


export async function create_data(url, data, dispatch) {
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                // "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        throw error;
    }
}


export const getData = async (url, dispatch, f_start, f_success, f_failed)=>{
    dispatch(f_start());
    try{
        const res = await api.get(url, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                // "Content-Type" : "multipart/form-data",
            }
        });
        dispatch(f_success(res.data));
        return res.data;
    }catch (error) {
        notify_error(error.response?.data?.error, 2000);
        dispatch(f_failed({
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
        }));
        throw error;
    }
}

export const deleteData = async (url, dispatch, f_success)=>{
    try{
        const res = await api.delete(url, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                // "Content-Type" : "multipart/form-data",
            }
        });
        dispatch(f_success(null));
        return res.data;
    }catch (error) {
        notify_error(error.response?.data?.error, 2000);
        throw error;
    }
}
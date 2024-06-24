import axios from "axios";
import {notify_error} from "./function";
import {getCategoryQuestionCreateFailed, getCategoryQuestionCreateStart, getCategoryQuestionCreateSuccess
} from "../redux/action/category_question";
import {getQuestionCreateFailed, getQuestionCreateStart, getQuestionCreateSuccess} from "../redux/action/question";
import {getExamCreateStart, getExamCreateSuccess, getExamCreateFailed} from "../redux/action/exam";
import {getResultCreateFailed, getResultCreateStart, getResultCreateSuccess} from "../redux/action/result";

export const api = axios.create({
    baseURL: `http://localhost:9090`
    //process.env.REACT_APP_URL_SERVER_HOSTNAME
    //https://project-java2.onrender.com
    //http://localhost:9090
});


export async function create_category_question(url, data, dispatch) {
    dispatch(getCategoryQuestionCreateStart());
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        dispatch(getCategoryQuestionCreateSuccess(res.data));
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        dispatch(getCategoryQuestionCreateFailed({
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
        }));
        throw error;
    }
}


export async function create_question(url, data, dispatch) {
    dispatch(getQuestionCreateStart());
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        dispatch(getQuestionCreateSuccess(res.data));
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        dispatch(getQuestionCreateFailed({
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
        }));
        throw error;
    }
}


export async function create_exam(url, data, dispatch) {
    dispatch(getExamCreateStart());
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        dispatch(getExamCreateSuccess(res.data));
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        dispatch(getExamCreateFailed({
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
        }));
        throw error;
    }
}

export async function create_result(url, data, dispatch) {
    dispatch(getResultCreateStart());
    try{
        const res = await api.post(url,data, {
            withCredentials: true,
            headers: {
                // Authorization: `Bearer ${token}`,
                "Content-Type" : "multipart/form-data",
            }
        });
        console.log(res.data);
        dispatch(getResultCreateSuccess(res.data));
        return res.data;
    }catch (error) {

        notify_error(error.response?.data?.error, 2000);
        dispatch(getResultCreateFailed({
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
        }));
        throw error;
    }
}
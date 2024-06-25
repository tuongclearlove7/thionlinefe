import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {notify_error, notify_success} from "../../request/function";

const Delete = props => {

    const dispatch = useDispatch();

    const deleteData = async () => {

        props?.deleteData(
            props?.url,
            dispatch,
            props?.getData
        ).then(res=>{
            notify_success("Delete successfully", 2000);
        }).catch(
    err=>{
                notify_error("Delete failed!!!", 2000);
                console.error(err);
            }
        );
    }
    
    return (
        <>
            <button onClick={deleteData} className="btn btn-danger">
                DELETE DATA
            </button>
        </>
    );
};

Delete.propTypes = {};

export default Delete;
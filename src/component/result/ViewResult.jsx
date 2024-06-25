import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getResultCreateSuccess, getResultStart,
getResultSuccess, getResultFailed} from "../../redux/action/result";
import styles from "../../assets/css/styles.module.css";
import {deleteData, getData} from "../../request/api";
import Delete from "../admin/Delete";

const ViewResult = props => {

    const dispatch = useDispatch();
    const data = useSelector((state) =>
    state.result.results?.data);

    useEffect(() => {
        getData("/v1/api/get_result", dispatch,
        getResultStart,
        getResultSuccess,
        getResultFailed).then(
        res=>{

        }).catch(
            err => {
                console.error("err ",err);
            }
        );
    }, []);

    useEffect(() => {
        return ()=>{
            dispatch(getResultSuccess(null));
        }
    }, []);

    const clearResult = () => {
        dispatch(getResultCreateSuccess(null));
    }

    return (<>{data && <div className={styles.padding_top_20px}>
            <div className="d-flex justify-content-start pb-3">
                <div className="form-inline">
                    <h2 className="text-muted mr-3" htmlFor="order-sort">
                        RESULT
                    </h2>
                </div>
            </div>
            <div className="table-responsive">
                {data?.length > 0 &&
                    <table className="table table-hover mb-0">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Correct answer</th>
                            <th>Note</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data && data.map((item, index) =>
                            <tr key={index}>
                                <td>
                                    {item?.id}
                                </td>
                                <td>
                                    {item?.correct_answer}
                                </td>
                                <td>
                                    {item?.note}
                                </td>
                            </tr>)}
                        </tbody>
                    </table>}
            </div>
            <div className={styles.padding_top_20px}>
                {/*    Delete button */}
                {data?.length > 0 &&
                <Delete deleteData={deleteData}
                getData={getResultSuccess}
                url={"/v1/api/delete_result"}
                />}
            </div>
        </div>
        }
        </>
    );
};

ViewResult.propTypes = {};

export default ViewResult;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "../../assets/css/styles.module.css";
import {getExamCreateSuccess, getExamStart,
getExamSuccess, getExamFailed}
from "../../redux/action/exam";
import {deleteData, getData} from "../../request/api";
import Delete from "../admin/Delete";

const ViewExam = props => {

    const dispatch = useDispatch();
    const data = useSelector((state) =>
    state.exam.exams?.data);

    useEffect(() => {
        getData("/v1/api/get_exam", dispatch,
            getExamStart,
            getExamSuccess,
            getExamFailed).then(
            res=>{

            }
        ).catch(err=>{
            console.error("err ", err);
        });
    }, []);

    useEffect(() => {
        return ()=>{
            dispatch(getExamSuccess(null));
        }
    }, []);

    const clearExam = () => {
        dispatch(getExamCreateSuccess(null));
    }

    return (<>{data && <div className={styles.padding_top_20px}>
            <div className="d-flex justify-content-start pb-3">
                <div className="form-inline">
                    <h2 className="text-muted mr-3" htmlFor="order-sort">
                       EXAM
                    </h2>
                </div>
            </div>
            <div className="table-responsive">
                {data?.length > 0 &&
                <table className="table table-hover mb-0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data && data.map((item, index) =>
                        <tr key={index}>
                            <td>
                                {item?.id}
                            </td>
                            <td>
                                {item?.name}
                            </td>
                            <td>
                                {item?.description}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                }
            </div>
            <div className={styles.padding_top_20px}>
                {/*    Delete button */}
                {data?.length > 0 &&
                <Delete deleteData={deleteData}
                getData={getExamSuccess}
                url={"/v1/api/delete_exam"}
                />}
            </div>
        </div>
        }
        </>
    );
};

ViewExam.propTypes = {};

export default ViewExam;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getQuestionCreateSuccess} from "../../redux/action/question";
import styles from "../../assets/css/styles.module.css";
import {getExamCreateSuccess} from "../../redux/action/exam";

const ViewExam = props => {

    const dispatch = useDispatch();
    const data = useSelector((state) =>
        state.exam.exam_creates?.data);

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
            </div>
            <div className={styles.padding_top_20px}>
                <button onClick={clearExam} className="btn btn-danger">
                    CLEAR DATA
                </button>
            </div>
        </div>
        }
        </>
    );
};

ViewExam.propTypes = {

};

export default ViewExam;
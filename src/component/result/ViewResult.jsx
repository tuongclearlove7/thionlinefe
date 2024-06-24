import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getResultCreateSuccess} from "../../redux/action/result";
import styles from "../../assets/css/styles.module.css";

const ViewResult = props => {

    const dispatch = useDispatch();
    const data = useSelector((state) =>
        state.result.result_creates?.data);

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
                </table>
            </div>
            <div className={styles.padding_top_20px}>
                <button onClick={clearResult} className="btn btn-danger">
                    CLEAR DATA
                </button>
            </div>
        </div>
        }
        </>
    );
};

ViewResult.propTypes = {

};

export default ViewResult;
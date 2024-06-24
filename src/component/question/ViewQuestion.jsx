import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "../../assets/css/styles.module.css";
import {getQuestionCreateSuccess} from "../../redux/action/question";

const ViewQuestion = props => {

    const dispatch = useDispatch();
    const data = useSelector((state) =>
    state.question.question_creates?.data);

    const clearQuestion = () => {
        dispatch(getQuestionCreateSuccess(null));
    }

    return (<>{data && <div className={styles.padding_top_20px}>
            <div className="d-flex justify-content-start pb-3">
                <div className="form-inline">
                    <h2 className="text-muted mr-3" htmlFor="order-sort">
                        QUESTION
                    </h2>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Content</th>
                        <th>Answer 1</th>
                        <th>Answer 2</th>
                        <th>Answer 3</th>
                        <th>Answer 4</th>
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
                                {item?.content}
                            </td>
                            <td>
                                {item?.answer1}
                            </td>
                            <td>
                                {item?.answer2}
                            </td>
                            <td>
                                {item?.answer3}
                            </td>
                            <td>
                                {item?.answer4}
                            </td>
                            <td>{item?.note}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div className={styles.padding_top_20px}>
                <button onClick={clearQuestion} className="btn btn-danger">
                    CLEAR DATA
                </button>
            </div>
        </div>
        }
        </>
    );
};

ViewQuestion.propTypes = {

};

export default ViewQuestion;
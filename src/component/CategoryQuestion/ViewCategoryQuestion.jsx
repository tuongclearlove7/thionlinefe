import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "../../assets/css/styles.module.css"
import {getCategoryQuestionCreateSuccess} from "../../redux/action/category_question";

const ViewCategoryQuestion = props => {

    const dispatch = useDispatch();
    const data = useSelector((state) =>
    state.category_question.category_question_creates?.data);
    
    const clearCategoryQuestion = () => {
        dispatch(getCategoryQuestionCreateSuccess(null));
    }

    return (<>{data && <div className={styles.padding_top_20px}>
            <div className="d-flex justify-content-start pb-3">
                <div className="form-inline">
                    <h2 className="text-muted mr-3" htmlFor="order-sort">
                        CATEGORY QUESTION
                    </h2>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data && data.map((item, index) =>
                        <tr key={index}>
                            <td>
                                {item?.id}
                            </td>
                            <td>
                                {item?.category_name}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div className={styles.padding_top_20px}>
                <button onClick={clearCategoryQuestion} className="btn btn-danger">
                    CLEAR DATA
                </button>
            </div>
        </div>
        }
        </>
    );
};

ViewCategoryQuestion.propTypes = {};

export default ViewCategoryQuestion;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "../../assets/css/styles.module.css"
import {getCategoryQuestionCreateSuccess,
getCategoryQuestionStart, getCategoryQuestionSuccess,
getCategoryQuestionFailed} from "../../redux/action/category_question";
import {deleteData, getData} from "../../request/api";
import Delete from "../admin/Delete";

const ViewCategoryQuestion = props => {

    const dispatch = useDispatch();
    const data = useSelector((state) =>
    state.category_question.category_questions?.data);

    useEffect(() => {
        getData("/v1/api/get_category_question", dispatch,
        getCategoryQuestionStart,
        getCategoryQuestionSuccess,
        getCategoryQuestionFailed).then(res=>{

        })
        .catch(error=>{
            console.error("err ", error);
        });
    }, []);

    useEffect(() => {

        return ()=>{
            dispatch(getCategoryQuestionSuccess(null));
        }
    }, []);

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
                {data?.length > 0 &&
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
                </table>}
            </div>
            <div className={styles.padding_top_20px}>
                {/*    Delete button */}
                {data?.length > 0 &&
                <Delete deleteData={deleteData}
                 getData={getCategoryQuestionSuccess}
                 url={"/v1/api/delete_category_question"}/>
                }
            </div>
        </div>
        }
        </>
    );
};

ViewCategoryQuestion.propTypes = {};

export default ViewCategoryQuestion;
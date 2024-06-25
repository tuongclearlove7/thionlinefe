import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {notify_error, notify_success} from "../../request/function";
import {create_data, getData} from "../../request/api";
import styles from "../../assets/css/styles.module.css";

const CreateExamDetail = props => {

    const dispatch = useDispatch();
    const [categoryQuestion, setCategoryQuestion] = useState("");
    const [question, setQuestion] = useState("");
    const [exam, setExam] = useState("");
    const [result, setResult] = useState("");
    const category_question_data = useSelector((state) =>
    state.category_question.category_questions?.data);
    const question_data = useSelector((state) =>
    state.question.questions?.data);
    const exam_data = useSelector((state) =>
    state.exam.exams?.data)
    const result_data = useSelector((state) =>
    state.result.results?.data);

    const handleSubmit_create_exam_detail = async (event) => {
        event.preventDefault();//function does have form not refresh

        try{
            await create_data("/v1/api/create_exam_detail", {
                category_question_id : categoryQuestion,
                exam_id : exam,
                question_id : question,
                result_id : result
            }, dispatch).then(
                async (data) =>{
                    await getData("/v1/api/get_result", dispatch,
                        // getResultStart,
                        // getResultSuccess,
                        // getResultFailed
                    ).then(
                        res=>{
                            notify_success("Create result successfully",2000);
                        }).catch(error=>{
                        console.error("err ", error);
                    });
                });
        }catch (error) {
            notify_error(error.response?.data?.error, 2000);
        }
    }

    return (
        <div className={styles.padding_top_50px}>
            <div>
                <h2>Create structure exam</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit_create_exam_detail}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-3">
                                <label className="form-label"
                                       htmlFor="billing-phone">
                                    Select category question
                                </label>
                                <select className="form-select"
                                        aria-label="Default select example"
                                        name={"category_question_id"}
                                        value={categoryQuestion}
                                        onChange={e => {
                                            setCategoryQuestion(e.target.value);
                                        }}>
                                    <option defaultValue disabled>Open this select menu</option>
                                    {category_question_data && category_question_data.map((item) => (
                                        <option key={item?.id} value={item?.id}>
                                            {item?.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label"
                                       htmlFor="billing-phone">
                                    Select question
                                </label>
                                <select className="form-select"
                                        aria-label="Default select example"
                                        name={"question_id"}
                                        value={question}
                                        onChange={e => {
                                            setQuestion(e.target.value);
                                        }}>
                                    <option defaultValue disabled>Open this select menu</option>
                                    {question_data && question_data.map((item) => (
                                        <option key={item?.id} value={item?.id}>
                                            {item?.content}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label"
                                       htmlFor="billing-phone">
                                    Select exam
                                </label>
                                <select className="form-select"
                                        aria-label="Default select example"
                                        name={"exam_id"}
                                        value={exam}
                                        onChange={e => {
                                            setExam(e.target.value);
                                        }}>
                                    <option defaultValue disabled>Open this select menu</option>
                                    {exam_data && exam_data.map((item) => (
                                        <option key={item?.id} value={item?.id}>
                                            {item?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label"
                                       htmlFor="billing-phone">
                                    Select exam
                                </label>
                                <select className="form-select"
                                        aria-label="Default select example"
                                        name={"result_id"}
                                        value={result}
                                        onChange={e => {
                                            setResult(e.target.value);
                                        }}>
                                    <option defaultValue disabled>Open this select menu</option>
                                    {result_data && result_data.map((item) => (
                                        <option key={item?.id} value={item?.id}>
                                            {item?.correct_answer}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-end mt-2 mt-sm-0">
                                <button className="btn btn-success">
                                    <i className="mdi mdi-cart-outline me-1"/> Create
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
};

CreateExamDetail.propTypes = {};

export default CreateExamDetail;
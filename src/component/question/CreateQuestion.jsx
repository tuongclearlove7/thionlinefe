import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {notify_error, notify_success} from "../../request/function";
import {create_question} from "../../request/api";
import ViewQuestion from "./ViewQuestion";
import styles from "../../assets/css/styles.module.css";
const CreateQuestion = props => {


    const [file, setFile] = useState();
    const dispatch = useDispatch();

    function handleChooseFileChange(event) {
        setFile(event.target.files[0])
    }

    const handleSubmit_create_question = async (event) => {
        event.preventDefault();//function does have form not refresh

        console.log("run")
        if (!file) {
            notify_error("Non-existent file!!!",2000)
            console.warn("LỖI: File không tồn tại!!!");
            return;
        }
        try{
            await create_question("/v1/api/create_question", {
                file : file,
            }, dispatch).then(
                (data) =>
                notify_success("Create question successfully",2000)
            );
        }catch (error) {
            notify_error(error.response?.data?.error, 2000);
        }
    }

    return (
        <div className={styles.padding_top_50px}>
            <div>
                <h2>Create question</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit_create_question} encType="multipart/form-data">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-3">
                                <label className="form-label"
                                       htmlFor="billing-phone">
                                    Choose file excel
                                </label>
                                <input type="file" className="form-control" id="file" name={"file"}
                                       onChange={handleChooseFileChange}
                                />
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
                <ViewQuestion/>
            </div>
        </div>
    );
};

CreateQuestion.propTypes = {
    
};

export default CreateQuestion;
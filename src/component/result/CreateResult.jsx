import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {notify_error, notify_success} from "../../request/function";
import {create_result} from "../../request/api";
import ViewResult from "./ViewResult";
import styles from "../../assets/css/styles.module.css";

const CreateResult = props => {


    const [file, setFile] = useState();
    const dispatch = useDispatch();

    function handleChooseFileChange(event) {
        setFile(event.target.files[0])
    }

    const handleSubmit_create_result = async (event) => {
        event.preventDefault();//function does have form not refresh

        console.log("run")
        if (!file) {
            notify_error("Non-existent file!!!",2000)
            console.warn("LỖI: File không tồn tại!!!");
            return;
        }
        try{
            await create_result("/v1/api/create_result", {
                file : file,
            }, dispatch).then(
                (data) =>
                notify_success("Create result successfully",2000));
        }catch (error) {
            notify_error(error.response?.data?.error, 2000);
        }
    }

    return (
        <div className={styles.padding_top_50px}>
            <div>
                <h2>Create result</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit_create_result} encType="multipart/form-data">
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
                <ViewResult/>
            </div>
        </div>
    );
};

CreateResult.propTypes = {

};

export default CreateResult;
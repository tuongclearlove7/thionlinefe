import React from 'react';
import ViewCategoryQuestion from "../CategoryQuestion/ViewCategoryQuestion";
import ViewQuestion from "../question/ViewQuestion";
import ViewExam from "../exam/ViewExam";
import ViewResult from "../result/ViewResult";
import styles from "../../assets/css/styles.module.css"

const StructureExam = props => {


    return (
        <div className={`${styles.padding_top_50px}`}>
            <h2>
                Exam structure
            </h2>
            <div>
                <ViewCategoryQuestion/>
            </div>
            <div>
                <ViewQuestion/>
            </div>
            <div>
                <ViewExam/>
            </div>
            <div>
                <ViewResult/>
            </div>
        </div>
    );
};

StructureExam.propTypes = {
    
};

export default StructureExam;
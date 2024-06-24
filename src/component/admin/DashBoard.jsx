import React from 'react';
import CreateCategoryQuestion from "../CategoryQuestion/CreateCategoryQuestion";
import CreateQuestion from "../question/CreateQuestion";
import CreateExam from "../exam/CreateExam";
import CreateResult from "../result/CreateResult";
const DashBoard = props => {


    return (
        <div>
            <div>
                <CreateCategoryQuestion/>
            </div>
            <div>
                <CreateQuestion/>
            </div>
            <div>
                <CreateExam/>
            </div>
            <div>
                <CreateResult/>
            </div>
        </div>
    );
};

DashBoard.propTypes = {

};

export default DashBoard;
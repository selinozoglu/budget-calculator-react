import React from 'react';
import {MdEdit, MdDelete} from "react-icons/md";
import * as constants from "constants";

const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
    const {id, charge, amount } = expense;
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">{amount}</span>
            </div>
            <div>
                <button className="edit-btn"
                        onClick={()=>(handleEdit(id))}
                        aria-label="edit button">
                    <MdEdit/>
                </button>
                <button className="clear-btn" onClick={()=>handleDelete(id)} aria-label="delete button">
                    <MdDelete/>
                </button>
            </div>
        </li>
    );
};

export default ExpenseItem;

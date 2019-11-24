import React from 'react';
import './style.css';
function ConfirmModal (props) {
    return(
        <div 
            className="popup"
            style = {props.visible ? {display: ''} : {display: 'none' }}
        >
            <span className="title">Are you sure? </span><br/> 
            <button onClick = { props.deleteTodo } >OK</button>
            <button onClick = { props.cancelDelete }>Cancel</button>
        </div>
    )
}
export default ConfirmModal;
import React from 'react';

import './pop-up.css';

const PopUp=({onClosePopUp,onConfirmDelete})=>{
    return(
        <div id="modal" className="modal">
            <div className="modal-content">
                <span onClick={onClosePopUp} className="modal-close">&times;</span>
                <div className="modal-button-wrapper">
                    <button className='modal-button' onClick={onConfirmDelete}>OK</button>
                    <button className='modal-button' onClick={onClosePopUp}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
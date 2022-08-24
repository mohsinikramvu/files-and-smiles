import React from 'react'
import './listChildRow.css'
// import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
// import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function ListChildRow() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                <h2 className="fs-5">Children</h2>
                <div className="d-flex gap-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            0
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            0
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            0
                        </label>
                    </div>
                </div>
            </div>
            {/*<div className='list-row'>*/}
            {/*    <h2>Children</h2>*/}
            {/*    <div className='circles'>*/}
            {/*        <div className='greenCircle'>*/}
            {/*            <input type="radio" className='circle-green'/>*/}
            {/*            <p>o</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <input type="radio" className='circle-grey'/>*/}
            {/*            <p>o</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <input type="radio" className='circle-trans'/>*/}
            {/*            <p>o</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default ListChildRow
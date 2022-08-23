import React from 'react'
import '../Staff-profile/StaffManagement.css'
import ListHead from '../../Lists/ListHead'
import ListTwo from '../../Lists/ListTwo'
import ListChildRow from '../../Lists/listChildRow'

function StaffManagement() {
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-12 mb-20">
                    <div className="card">
                        <div className="card-header">
                            <ListHead />
                        </div>
                        <div className="card-body">
                            <ListTwo />
                            <ListTwo />
                            <ListTwo />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mb-20">
                    <div className="card">
                        <div className="card-header">
                            <ListChildRow />
                        </div>
                        <div className="card-body">
                            <ListTwo />
                            <ListTwo />
                            <ListTwo />
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className='Home'>*/}
            {/*    <div className='list-bg-one'>*/}
            {/*        <ListHead/>*/}
            {/*    </div>*/}
            {/*    <div className='list-bg-two'>*/}
            {/*        <ListTwo/>*/}
            {/*        <ListTwo/>*/}
            {/*        <ListTwo/>*/}
            {/*    </div>*/}
            {/*    <div className='list-bg-three'>*/}
            {/*        <ListChildRow/>*/}
            {/*    </div>*/}
            {/*    <div className='list-bg-two'>*/}
            {/*        <ListTwo/>*/}
            {/*        <ListTwo/>*/}
            {/*        <ListTwo/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default StaffManagement

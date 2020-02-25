import React from 'react'

import './Loader.scss'

const Loader = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-rolling">
                <div></div>
            </div>
        </div>
    )
}

export default Loader

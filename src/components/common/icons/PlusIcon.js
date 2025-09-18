import React from 'react'

const PlusIcon = ({ width, height }) => {
    return (
        <svg width={width} height={height}>
            <use xlinkHref="#plus-icon">
                <symbol id="plus-icon" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </symbol>
            </use>
        </svg>
    )
}

export default PlusIcon
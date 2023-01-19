import React from 'react'

const Filter = ({ filterItem, setItem, roomType, rooms }) => {
    return (
        <div>
            <div className="d-flex justify-content-center flex-column">
                {roomType.map((name, id) => {
                    return (
                        <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold mb-4" onClick={() => filterItem(name)} key={id} >
                            {name}
                        </button>
                    )
                })}
                <button className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn" onClick={() => setItem(rooms)} >
                    All
                </button>
            </div>
        </div>
    )
}

export default Filter
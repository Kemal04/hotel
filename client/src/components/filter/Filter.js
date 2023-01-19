import React from 'react'

const Filter = ({ filterItem, setItem, roomType, rooms }) => {
    return (
        <div>
            <div className="d-flex justify-content-center flex-column border-bottom">
                {roomType.map((name, id) => {
                    return (
                        <div className="text-blue fw-bold small mb-2" style={{ cursor: "pointer" }} onClick={() => filterItem(name)} key={id} >
                            {name} Otag
                        </div>
                    )
                })}
                <div className="text-blue fw-bold small mb-2" style={{ cursor: "pointer" }} onClick={() => setItem(rooms)} >
                    Hemmesi
                </div>
            </div>
        </div>
    )
}

export default Filter
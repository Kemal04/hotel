import React from 'react'
import "../../pages/userInterface/room/room.css"

const Filter = ({ filterItem, setItem, roomType, rooms, filterCapacity, roomCapacity }) => {
    return (
        <>
            <div className='row'>

                <div className='col-xl-12 mt-5 mb-3' >
                    <div className='label mb-3 fw-bold small'>Otag görnüşleri</div>
                    <div className="d-flex justify-content-center flex-column">
                        {roomType.map((name, id) => {
                            return (
                                <div className="small mb-2" style={{ cursor: "pointer" }} onClick={() => filterItem(name)} key={id} >
                                    {name} Otag
                                </div>
                            )
                        })}
                        <div className="small mb-2" style={{ cursor: "pointer" }} onClick={() => setItem(rooms)} >
                            Hemmesi
                        </div>
                    </div>
                </div>

                <div className='col-xl-12 mb-3'>
                    <div className='label mb-3 fw-bold small'>Adam sany</div>
                    <div className="d-flex justify-content-center flex-column">
                        {roomCapacity.map((name, id) => {
                            return (
                                <>
                                    <label className="small mb-2 fw-normal d-flex align-items-center position-relative ps-4 check" style={{ cursor: "pointer", userSelect: "none" }} htmlFor={id} key={id}>{name} Adam
                                        <input type="radio" id={id} className="opacity-0" name="radio" onChange={() => filterCapacity(name)} key={id} />
                                        <span className="position-absolute top-0 start-0 bg-light checkmark" style={{ height: "20px", width: "20px" }}></span>
                                    </label>
                                </>
                            )
                        })}

                        <label className="small mb-2 fw-normal d-flex align-items-center position-relative ps-4 check" style={{ cursor: "pointer", userSelect: "none" }}> Hemmesi
                            <input type="radio" className="opacity-0" name="radio" onClick={() => setItem(rooms)} />
                            <span className="position-absolute top-0 start-0 bg-light checkmark" style={{ height: "20px", width: "20px" }}></span>
                        </label>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Filter
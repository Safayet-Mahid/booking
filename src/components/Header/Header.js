import './Header.css';
import { useNavigate } from "react-router-dom";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const Header = ({ type }) => {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [location, setLocation] = useState("")


    const navigate = useNavigate()

    const searchHandler = () => {
        navigate("/hotels", {
            state: {
                date,
                optionCounter,
                location
            }
        })
    }

    const [optionCounter, setOptionCounter] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const [openCalender, setOpenCalender] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)

    const optionHandler = (name, operation) => {

        setOptionCounter((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? optionCounter[name] + 1 : optionCounter[name] - 1
            }

        })

    }



    return (
        <div className="header">
            <div className={type !== "list" ? "headerContainer" : "headerContainer listMode"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {
                    type !== "list" &&
                    <>
                        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                        <p className='headerDesc'>
                            Get rewarded for your travels - unlock instant savings of 10% or with a free booking account
                        </p>
                        <button className='headerBtn'>Sign In / Register</button>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} />
                                <input type="text" placeholder='Where are you going?' onChange={(e) => setLocation(e.target.value)} className='headerSearchInput' />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <span onClick={() => setOpenCalender(!openCalender)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openCalender && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    minDate={new Date()}
                                    ranges={date}
                                    className="date"
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} />
                                <span onClick={() => setOpenOptions(!openOptions)}>{`${optionCounter.adult} adults ·  ${optionCounter.children} children · ${optionCounter.room} room`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionsItem">
                                        <span className='optionsText'>Adult</span>
                                        <div className="optionInner">
                                            <button disabled={optionCounter.adult <= 1} className="optionBtn" onClick={() => optionHandler("adult", "d")}>-</button>
                                            <span>{optionCounter.adult}</span>
                                            <button className="optionBtn" onClick={() => optionHandler("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionsItem">
                                        <span className='optionsText'>Children</span>
                                        <div className="optionInner">
                                            <button disabled={optionCounter.children <= 0} onClick={() => optionHandler("children", "d")} className="optionBtn">-</button>
                                            <span>{optionCounter.children}</span>
                                            <button className="optionBtn" onClick={() => optionHandler("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionsItem">
                                        <span className='optionsText'>Room</span>
                                        <div className="optionInner">
                                            <button disabled={optionCounter.room <= 1} onClick={() => optionHandler("room", "d")} className="optionBtn">-</button>
                                            <span>{optionCounter.room}</span>
                                            <button onClick={() => optionHandler("room", "i")} className="optionBtn">+</button>
                                        </div>
                                    </div>
                                </div>}


                            </div>
                            <div className="headerSearchItem">
                                <button onClick={() => searchHandler()} className='headerBtn'>Search</button>
                            </div>
                        </div>
                    </>}


            </div>
        </div>
    );
};

export default Header;
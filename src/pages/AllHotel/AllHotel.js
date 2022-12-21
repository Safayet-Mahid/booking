import './AllHotel.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';

const AllHotel = () => {

    const location = useLocation()
    const [date, setDate] = useState(location.state.date)
    const [destination, setDestination] = useState(location.state.location)
    const [options, setOptions] = useState(location.state.optionCounter)
    const [openCalender, setOpenCalender] = useState(false)
    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="searchedHotelContainer">
                <div className="searchedHotelWrapper">
                    <div className="searchContainer">
                        <h1 className="searchTitle">Search</h1>
                        <div className="searchInput">
                            <label >Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="searchInput">
                            <label >Check-in Date</label>
                            <span onClick={() => setOpenCalender(!openCalender)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openCalender && <DateRange onChange={item => setDate([item.selection])} ranges={date} minDate={new Date()} />}
                        </div>
                        <span className='searchOptionTitle'>Options</span>
                        <div className="searchOptions">
                            <div className="searchOptionItem">
                                <span searchOptionItemText>Min price <small>per night</small></span>
                                <input type="number" min={1} />
                            </div>
                            <div className="searchOptionItem">
                                <span searchOptionItemText>Min price <small>per night</small></span>
                                <input type="number" min={0} />
                            </div>

                            <div className="searchOptionItem">
                                <span searchOptionItemText>Adult</span>
                                <input type="number" placeholder={options.adult} />
                            </div>
                            <div className="searchOptionItem">
                                <span searchOptionItemText>Children</span>
                                <input type="number" min={1} placeholder={options.children} />
                            </div>
                            <div className="searchOptionItem">
                                <span searchOptionItemText>Room <small>per night</small></span>
                                <input type="number" placeholder={options.room} />
                            </div>
                            <button className="searchBtn">Search</button>
                        </div>
                    </div>
                    <div className="searchResultContainer">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllHotel;
import { useState, useEffect } from "react";
import hotels from "../../assets/data.json";
import Hotelcard from "./Hotelcard";
import Filters from "./Filters";
import "./Home.css";
import Search from "./Search";
const Home = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredlist, setFilteredList] = useState(hotels);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);

  const handleStarClick = (value) => {
    const filtered = hotels.filter((item) => item.starRating === value);
    setFilteredList(filtered);
  };
  const handleSearch = () => {
    const numbers = [4, 8, 24];

    const randomIndex = Math.floor(Math.random() * numbers.length);
    console.log("random:", numbers[randomIndex]);
    const filtered = hotels.filter(
      (item) => item.duration == numbers[randomIndex]
    );
    console.log("search:", filtered);
    setFilteredList(filtered);
  };
  const filterHotels = () => {
    const newList = hotels?.filter(
      (hotel) =>
        hotel?.pricePerNight &&
        hotel?.pricePerNight >= priceRange[0] &&
        hotel.pricePerNight <= priceRange[1] &&
        (selectedLocations.length === 0 ||
          selectedLocations.includes(hotel.location)) &&
        (selectedDurations.length === 0 ||
          selectedDurations.includes(hotel.duration))
    );
    setFilteredList(newList);
  };

  const handleChange = (e, newValue) => {
    setPriceRange(newValue);
  };
  const handleLocationCheckboxChange = (location) => {
    // Toggle selected location
    setSelectedLocations((prevLocations) => {
      console.log("Previous Locations:", prevLocations);

      if (prevLocations.includes(location)) {
        return prevLocations.filter((loc) => loc !== location);
      } else {
        return [...prevLocations, location];
      }
    });
  };

  const handleDurationCheckboxChange = (duration) => {
    setSelectedDurations((prevDurations) => {
      if (prevDurations.includes(duration)) {
        return prevDurations.filter((dur) => dur !== duration);
      } else {
        return [...prevDurations, duration];
      }
    });
  };
  console.log(selectedDurations);
  const ClearFilter = () => {
    setFilteredList(hotels);
  };
  useEffect(() => {
    let timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(filterHotels, 500);
  }, [priceRange, selectedLocations, selectedDurations]);
  console.log(hotels);
  return (
    <>
      <div className="wrapper">
        <Search handleSearch={handleSearch} />
        <div className="Home-container">
          <div className="filters-container">
            <Filters
              priceRange={priceRange}
              handleChange={handleChange}
              handleStarClick={handleStarClick}
              handleLocationCheckboxChange={handleLocationCheckboxChange}
              handleDurationCheckboxChange={handleDurationCheckboxChange}
              ClearFilter={ClearFilter}
            />
          </div>
          <div className="card-container">
            <Hotelcard filteredlist={filteredlist} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

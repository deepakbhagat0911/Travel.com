import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { TextField, Button, styled } from "@mui/material";
import "./Home.css";

const Search = ({ handleSearch }) => {
  const [adults, setAdults] = useState("");
  const handleAdultsChange = (e) => {
    setAdults(e.target.value);
  };
  // value={adults}
  //             onChange={handleAdultsChange}
  //             onClick={() => handleSearch()}

  console.log(adults);
  return (
    <>
      <div className="search-box">
        <div>
          <TextField id="outlined-basic" label="Location" variant="outlined" />
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              localeText={{ start: "Check-in", end: "Check-out" }}
            />
          </LocalizationProvider>
        </div>
        <div>
          <Button variant="contained" onClick={() => handleSearch()}>
            SEARCH
          </Button>
        </div>
      </div>
    </>
  );
};

export default Search;

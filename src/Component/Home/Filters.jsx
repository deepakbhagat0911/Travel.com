import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "./filters.css";

import { styled } from "@mui/material";
const StarRating = styled(Typography)`
  display: flex;
  align-item: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2px;
  padding: 3px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
const Star = styled(StarRateIcon)`
  font-size: 20px;
  color: #fac213;
`;

const Filters = ({
  priceRange,
  handleChange,
  handleStarClick,
  handleLocationCheckboxChange,
  handleDurationCheckboxChange,
  ClearFilter,
}) => {
  return (
    <div
      className="filter-flex"
      style={{
        position: "sticky",
        top: 100,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="F-container">
        <h4>Popular filter</h4>
        <p className="clear" onClick={ClearFilter}>
          Clear filter
        </p>
        <hr />

        <div>
          <p>Star Rating </p>
          <div className="star-rating-container">
            <StarRating onClick={() => handleStarClick(2)}>
              {String.fromCharCode(60)}2<Star />
            </StarRating>
            <StarRating onClick={() => handleStarClick(3)}>
              3<Star />
            </StarRating>
            <StarRating onClick={() => handleStarClick(4)}>
              4<Star />
            </StarRating>
            <StarRating onClick={() => handleStarClick(5)}>
              5<Star />
            </StarRating>
            {/* Render the selected value */}
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div>
            <p>Guest Rating </p>
            <div className="star-rating-container">
              <StarRating onClick={() => handleStarClick(2)}>
                {String.fromCharCode(60)}2
              </StarRating>
              <StarRating onClick={() => handleStarClick(3)}>3.5</StarRating>
              <StarRating onClick={() => handleStarClick(4)}>4.5</StarRating>
              <StarRating onClick={() => handleStarClick(5)}>5.0</StarRating>
              {/* Render the selected value */}
            </div>
          </div>
        </div>
      </div>
      <div className="F-container hide">
        <h4>Duration</h4>
        <div>
          <FormGroup sx={{ fontSize: 30 }}>
            <FormControlLabel
              control={
                <Checkbox onChange={() => handleDurationCheckboxChange(4)} />
              }
              label={
                <Typography
                  style={{
                    fontFamily: "normal",
                    fontWeight: "normal",
                  }}
                >
                  up to 4 hours
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onChange={() => handleDurationCheckboxChange(8)} />
              }
              label={
                <Typography
                  style={{
                    fontFamily: "normal",
                    fontWeight: "normal",
                  }}
                >
                  4 to 8 hours
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onChange={() => handleDurationCheckboxChange(24)} />
              }
              label={
                <Typography
                  style={{
                    fontFamily: "normal",
                    fontWeight: "normal",
                  }}
                >
                  24 hours
                </Typography>
              }
            />
            <FormControlLabel
              disabled
              control={
                <Checkbox onChange={() => handleDurationCheckboxChange(4)} />
              }
              label={
                <Typography
                  style={{
                    fontFamily: "normal",
                    fontWeight: "normal",
                  }}
                >
                  2 days
                </Typography>
              }
            />
          </FormGroup>
        </div>
      </div>
      <div>
        <h4>Price:</h4>
        <p>$0-$1000</p>
        <Box sx={{ width: "100%", maxWidth: 400, margin: "0 auto" }}>
          <Slider
            value={priceRange}
            getAriaLabel={() => "Temperature range"}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            sx={{
              // Customize the styles here
              "& .MuiSlider-rail": {
                height: 4, // Change the thickness of the rail
              },
              "& .MuiSlider-track": {
                height: 3, // Change the thickness of the track
              },
              "& .MuiSlider-thumb": {
                width: 6,
                height: 6,
              },
            }}
          />
        </Box>
      </div>
      <div className="F-container hide">
        <h4>Location</h4>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox onChange={() => handleLocationCheckboxChange("us")} />
              }
              label={
                <Typography
                  style={{
                    fontFamily: "normal",
                    fontWeight: "normal",
                  }}
                >
                  Us
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => handleLocationCheckboxChange("indonesia")}
                />
              }
              label={
                <Typography
                  style={{
                    fontFamily: "normal",
                    fontWeight: "normal",
                  }}
                >
                  Indonesia
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => handleLocationCheckboxChange("greece")}
                />
              }
              label={
                <Typography
                  style={{
                    fontFamily: "normal",
                    fontWeight: "normal",
                  }}
                >
                  Greece
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => handleLocationCheckboxChange("finland")}
                />
              }
              label={
                <Typography
                  style={{
                    fontFamily: "normal",
                    fontWeight: "normal",
                  }}
                >
                  Finland
                </Typography>
              }
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default Filters;

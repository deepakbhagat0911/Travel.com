import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  styled,
  Button,
  CardActionArea,
  CardActions,
  Pagination,
} from "@mui/material";

const Cardcontainer = styled(CardActionArea)`
  display: flex;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 951px) {
    align-items: flex-start; /* or any other desired value */
  }
`;
const Imagemedia = styled(CardMedia)`
  width: 100%;
  max-height: 220px;

  @media (max-width: 950px) {
    max-height: 250px;
  }
`;
const Location = styled(Typography)`
  display: flex;
  align-item: center;
`;
const Container = styled("div")`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DetailBtn = styled(Button)`
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 5px 10px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 3px 7px;
    margin: 3px 0 0 0;
  }
`;
const Hotelcard = ({ filteredlist }) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredlist.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (_, newPage) => setCurrentPage(newPage);

  return (
    <Container>
      <div>
        {currentItems.length === 0 ? (
          <Typography variant="body1">No results</Typography>
        ) : (
          currentItems.map((item, index) => (
            <div key={index} style={{ marginBottom: "7px" }}>
              {/* Render your components based on the data */}
              <Card sx={{ maxWidth: 900 }}>
                <Cardcontainer>
                  <Imagemedia
                    component="img"
                    height="250"
                    image={item.thumbnail}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Make yourself at home in one of the 3773 guestrooms.
                      Complimentary wireless internet access keeps you
                      connected.
                    </Typography>
                    <Location>
                      <LocationOnIcon />
                      {item.address}
                    </Location>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Rating
                          name="half-rating-read"
                          value={item.starRating}
                          readOnly
                        />
                        <div style={{ fontSize: "1.2rem" }}>
                          ${item.pricePerNight}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>Guest:{item.guestrating}/5 Rating</p>
                        <DetailBtn variant="contained">View Details</DetailBtn>
                      </div>
                    </div>
                  </CardContent>
                </Cardcontainer>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))
        )}
      </div>
      {filteredlist.length > itemsPerPage && currentItems.length > 0 && (
        <div>
          {/* MUI Pagination component */}
          <Pagination
            sx={{ marginTop: 2 }}
            count={Math.ceil(filteredlist.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
          />
        </div>
      )}
    </Container>
  );
};

export default Hotelcard;

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Grid, Button, Container } from "@mui/material";
import { Label } from "@mui/icons-material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import HomeWorkIcon from '@mui/icons-material/HomeWork';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [isactive, setIsActive] = React.useState("flight");
  const [open, setOpen] = React.useState(false);

  const onFlight = () => {
    setIsActive("flight");
  };

  const onHotel = () => {
    setIsActive("hotel");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const RoomGuest = () => {
    setOpen(true);
    console.log("open");
  };

  const RoomGuestLeave = () => {
    setOpen(false);
  };

  return (
    <>
    <Container>

   
      <div className="container">
        <Box
          sx={{
            padding: { xs: "0rem", md: "3rem", sm: "3rem" },
            marginTop: { xs: "0rem", sm: "-3rem", md: "-4rem" },
            borderRadius: { xs: "0", md: "2rem", sm: "2rem" },
            width: "100%",
            position: "relative",
            zIndex: "1",
            boxShadow: "0rem 0rem 3rem 0rem gray",
            background: "white",
          }}
        >
          <Typography
            sx={{
              paddingTop: { xs: "1rem", md: "0rem", sm: "0rem" },
              textAlign: { xs: "center", md: "start", sm: "start" },
            }}
            mb={2}
            pt={2}
          >
            <Button
              style={{ marginRight: "1rem", color:'brown', border:'1px solid brown' }}
              onClick={onFlight}
              variant="outlined"
            >
                <b>
              Flight
                </b>
              <ConnectingAirportsIcon style={{color:'brown'}} />
            </Button>
            <Button onClick={onHotel} variant="outlined" style={{color:'brown', border:'1px solid brown' }}>
                <b>
              Hotel
                </b>
              <HomeWorkIcon style={{color:'brown'}} />
            </Button>
          </Typography>
          {isactive === "flight" ? (
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  style={{
                    textTransform: "capitalize",
                    fontSize: "18px",
                    color: "#7B3226",
                    letterSpacing: "1px",
                    fontWeight: "600",
                  }}
                  label="One Way"
                  {...a11yProps(0)}
                />
                <Tab
                  style={{
                    textTransform: "capitalize",
                    fontSize: "18px",
                    color: "#7B3226",
                    letterSpacing: "1px",
                    fontWeight: "600",
                  }}
                  label="Round-Trip"
                  {...a11yProps(1)}
                />
                <Tab
                  style={{
                    textTransform: "capitalize",
                    fontSize: "18px",
                    color: "#7B3226",
                    letterSpacing: "1px",
                    fontWeight: "600",
                  }}
                  label="Multi-City"
                  {...a11yProps(2)}
                />
              </Tabs>
              <CustomTabPanel value={value} index={0}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid xs={12} p={1} md={2}>
                      <label htmlFor="">
                        <b>From</b>
                      </label>
                      <TextField
                        style={{ width: "98%" }}
                        id="outlined-basic"
                        placeholder="Enter city or airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                      <label htmlFor="">
                        <b>To</b>
                      </label>
                      <TextField
                        style={{ width: "98%" }}
                        id="outlined-basic"
                        placeholder="Enter city or airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Departure</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          borderRadius: "8px",
                          width: "98%",
                          border:'1px solid lightgray'
                        }}
                      >
                        <input
                        style={{ width: "100%" }}
                          type="date"
                          id="Departure"
                          name="Departure"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                    <label htmlFor="">
                      <b>Return</b>
                    </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input style={{ width: "100%" }} type="date" id="return" name="return" />
                      </Box>
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                        <label htmlFor="">
                          <b>Total Person</b>
                        </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "100%",
                        }}
                      >
                        <input
                          style={{ width: "100%" }}
                          type="number"
                          placeholder="Select Person"
                          name=""
                          id=""
                        />
                      </Box>
                    </Grid>
                    <Grid style={{display:'flex', alignItems:'center'}} item xs={12} md={2}>
                <Button
                  style={{
                    padding: "1rem",
                    marginTop:'1rem',
                    width: "100%",
                    background: "brown",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
                  </Grid>
                </Box>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid xs={12} p={1} md={2}>
                      <label htmlFor="">
                        <b>From</b>
                      </label>
                      <TextField
                        style={{ width: "98%" }}
                        id="outlined-basic"
                        placeholder="Enter city or airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                      <label htmlFor="">
                        <b>To</b>
                      </label>
                      <TextField
                        style={{ width: "98%" }}
                        id="outlined-basic"
                        placeholder="Enter city or airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Departure</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input
                        style={{width:'100%'}}
                          placeholder="Departure"
                          type="date"
                          id="Departure"
                          name="Departure"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Return</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input style={{width:'100%'}} type="date" id="return" name="return" />
                      </Box>
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Total Person</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input
                          style={{ width: "100%" }}
                          type="number"
                          placeholder="Select Person"
                          name=""
                          id=""
                        />
                      </Box>
                    </Grid>
                    <Grid style={{display:'flex', alignItems:'center'}} item xs={12} md={2}>
                <Button
                  style={{
                    padding: "1rem",
                    marginTop:'1rem',
                    width: "100%",
                    background: "brown",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
                  </Grid>
                </Box>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid xs={12} p={1} md={2}>
                      <label htmlFor="">
                        <b>From</b>
                      </label>
                      <TextField
                        style={{ width: "98%" }}
                        id="outlined-basic"
                        placeholder="Enter city or airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                      <label htmlFor="">
                        <b>To</b>
                      </label>
                      <TextField
                        style={{ width: "98%" }}
                        id="outlined-basic"
                        placeholder="Enter city or airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Departure</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input
                        style={{width:'100%'}}
                          placeholder="Departure"
                          type="date"
                          id="Departure"
                          name="Departure"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Return</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input style={{width:'100%'}} type="date" id="return" name="return" />
                      </Box>
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Total Person</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input
                          style={{ width: "100%" }}
                          type="number"
                          placeholder="Select Person"
                          name=""
                          id=""
                        />
                      </Box>
                    </Grid>
                    <Grid style={{display:'flex', alignItems:'center'}} item xs={12} md={2}>
                <Button
                  style={{
                    padding: "1rem",
                    marginTop:'1rem',
                    width: "100%",
                    background: "brown",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
                  </Grid>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* <Grid container spacing={1}>
                    <Grid xs={12} p={1} md={2}>
                      <label htmlFor="">
                        <b>From</b>
                      </label>
                      <TextField
                        style={{ width: "98%" }}
                        id="outlined-basic"
                        placeholder="Enter city or airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                      <label htmlFor="">
                        <b>To</b>
                      </label>
                      <TextField
                        style={{ width: "98%" }}
                        id="outlined-basic"
                        placeholder="Enter city or airport"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Departure</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input
                        style={{width:'100%'}}
                          placeholder="Departure"
                          type="date"
                          id="Departure"
                          name="Departure"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Return</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input style={{width:'100%'}} type="date" id="return" name="return" />
                      </Box>
                    </Grid>
                    <Grid xs={12} p={1} md={2}>
                          <label htmlFor="">
                            <b>Total Person</b>
                          </label>
                      <Box
                        style={{
                          padding: "15px",
                          border: "1px solid lightgray",
                          borderRadius: "8px",
                          width: "98%",
                        }}
                      >
                        <input
                          style={{ width: "100%" }}
                          type="number"
                          placeholder="Select Person"
                          name=""
                          id=""
                        />
                      </Box>
                    </Grid>
                    <Grid style={{display:'flex', alignItems:'center'}} item xs={12} md={2}>
                <Button
                  style={{
                    padding: "1rem",
                    marginTop:'1rem',
                    width: "100%",
                    background: "brown",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
                  </Grid> */}
                </Box>
              </CustomTabPanel>
            </Box>
          ) : isactive === "hotel" ? (
            <Grid sx={{padding:{xs:'1rem', sm:'1rem', md:'0rem'}}} container spacing={2}>
              <Grid item xs={12} md={2}>
                
                <label htmlFor="">
                  <b>Where</b>
                </label>
                <TextField
                  style={{ width: "98%" }}
                  id="outlined-basic"
                  placeholder="Enter city or airport"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                    <label htmlFor="">
                      <b>CheckIn</b>
                    </label>
                <Box
                  style={{
                    padding: "15px",
                    border: "1px solid lightgray",
                    borderRadius: "8px",
                    width: "98%",
                  }}
                >
                  <input
                    placeholder="Departure"
                    type="date"
                    id="Departure"
                    name="Departure"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                    <label htmlFor="">
                      <b>CheckOut</b>
                    </label>
                <Box
                  style={{
                    padding: "15px",
                    border: "1px solid lightgray",
                    borderRadius: "8px",
                    width: "98%",
                  }}
                >
                  <input
                    placeholder="Departure"
                    type="date"
                    id="Departure"
                    name="Departure"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
              <label htmlFor="">
                      <b>Room & Guest</b>
                    </label>
                <Typography
                  style={{ border: "1px solid lightgray", padding: "1rem", borderRadius:'5px'}}
                >
                  <Typography onClick={RoomGuest}>Room & Guest</Typography>
                </Typography>
                {open ? (
                  <Box
                  sx={{position:{xs:'relative', sm:'relative', md:'absolute'}}}
                    onMouseLeave={RoomGuestLeave}
                    style={{
                      boxShadow: "0px 0px 14px 1px lightgray",
                      borderRadius: "1rem",
                      padding: "1rem",
                      background: "white",
                    }}
                  >
                    <Typography style={{ marginBottom: "1rem" }}>
                      <label for="quantity">
                        <b>Room (Max 8)</b>
                      </label>
                      <input
                        style={{ border: "1px solid lightgray", width: "100%" }}
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="8"
                      />
                    </Typography>
                    <Typography style={{ marginBottom: "1rem" }}>
                      <label for="quantity">
                        <b>Adults (12 + Year)</b>
                      </label>
                      <input
                        style={{ border: "1px solid lightgray", width: "100%" }}
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="12"
                        max="100"
                      />
                    </Typography>
                    <Typography style={{ marginBottom: "1rem" }}>
                      <label for="quantity">
                        <b>Children (0-12 Year)</b>
                      </label>
                      <input
                        style={{ border: "1px solid lightgray", width: "100%" }}
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="0"
                        max="12"
                      />
                    </Typography>
                    <Typography>
                      <Button variant="contained">Done</Button>
                    </Typography>
                  </Box>
                ) : (
                  false
                )}
              </Grid>
              <Grid style={{display:'flex', alignItems:'end'}} item xs={12} md={2}>
                <Button
                  style={{
                    padding: "1rem",
                    width: "100%",
                    background: "brown",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          ) : (
            <p>no</p>
          )}
        </Box>
      </div>
      </Container>
    </>
  );
}

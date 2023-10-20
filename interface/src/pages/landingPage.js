import React, { useState } from "react";
import CarouselComponent from "../components/carousel";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import UAParser from "ua-parser-js";
import SmallCarousel from "../components/smallCarousel";
import Section from "../components/section";
import MyFooter from "../components/footer";

const LandingPage = ({ deviceType }) => {
  const dummyApplication = [
    "https://www.verywellfamily.com/thmb/1QEaNZjVwwfsC3l9qqI9-iP-_Oo=/fit-in/1500x750/filters:format(png):fill(white):max_bytes(150000):strip_icc()/khan-academy-06eedd6edf804534be4f843659466971.jpg",
    "https://www.internetmatters.org/wp-content/uploads/2020/12/mt-big.png",
    "https://i.pcmag.com/imagery/reviews/06bnqFCCqMYNmhahHfpuUFs-13..v1620226809.png",
    "https://i.pcmag.com/imagery/reviews/00jhTm0Wm3HrXnMKoq2bcjU-18..v1602169894.png",
    "https://i.pcmag.com/imagery/reviews/07w3TE0qtevWbXyZZOsB6gK-45..v1680809084.jpg",
    "https://assets-a1.kompasiana.com/items/album/2022/12/22/screenshot-847-63a3d1e608a8b54fcb77b6f2.png",
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "transparent",
          height: "45vh",
        }}
      >
        <CarouselComponent />
      </div>
      <div style={{ paddingTop: "85px" }}>
        <Typography
          fontSize={30}
          sx={{ fontWeight: 500 }}
          style={{ fill: "#222831", margin: "0px 5vw" }}
          align="center"
        >
          {
            "God is able to make all grace abound to you, so that in all things at all times having all, that you need, you will abound in every good work"
          }
          <br />
          <br />
          {"(Paul)"}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "140px",
            flexDirection: "column",
          }}
        >
          <Box
            style={{ objectFit: "fill" }}
            component="img"
            height="25%px"
            width="50%"
            src="https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg"
          />
          <Typography
            style={{ marginTop: "221px", marginBottom: "78px" }}
            fontSize={"36px"}
          >
            Digital Collection
          </Typography>
        </div>
      </div>
      <Section>
        <SmallCarousel deviceType={deviceType} />
      </Section>
      <div
        style={{
          marginTop: "168px",
          marginBottom: "80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={36} fontWeight={500}>
          Educational Aplication
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "30%",
            padding: "0px 10vw",
          }}
        >
          <ImageList
            sx={{ width: "inherit", height: "inherit", padding: "15px" }}
            cols={3}
            rowHeight={"30vw"}
            gap={"5vw"}
          >
            {dummyApplication.map((item, index) => (
              <ImageListItem
                onMouseEnter={() => {
                  handleMouseEnter(index);
                }}
                onMouseLeave={handleMouseLeave}
                style={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s",
                  boxShadow:
                    hoveredItem === index
                      ? "0px 0px 10px 2px rgba(0, 0, 0, 0.5)"
                      : "",
                }}
                key={index}
              >
                <img
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  alt={item}
                  loading="lazy"
                  style={{ objectFit: "contain", borderRadius: "20px" }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
      <MyFooter />
    </>
  );
};

LandingPage.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};

export default LandingPage;

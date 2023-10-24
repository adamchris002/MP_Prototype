import React, { useState } from "react";
import CarouselComponent from "../components/carousel";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import SmallCarousel from "../components/smallCarousel";
import Section from "../components/section";
import MyFooter from "../components/footer";
import DivFlexCenter from "../components/centeredDiv";

const LandingPage = () => {
  const dummyApplication = [
    "https://www.verywellfamily.com/thmb/1QEaNZjVwwfsC3l9qqI9-iP-_Oo=/fit-in/1500x750/filters:format(png):fill(white):max_bytes(150000):strip_icc()/khan-academy-06eedd6edf804534be4f843659466971.jpg",
    "https://www.internetmatters.org/wp-content/uploads/2020/12/mt-big.png",
    "https://i.pcmag.com/imagery/reviews/06bnqFCCqMYNmhahHfpuUFs-13..v1620226809.png",
    "https://i.pcmag.com/imagery/reviews/00jhTm0Wm3HrXnMKoq2bcjU-18..v1602169894.png",
    "https://i.pcmag.com/imagery/reviews/07w3TE0qtevWbXyZZOsB6gK-45..v1680809084.jpg",
    "https://assets-a1.kompasiana.com/items/album/2022/12/22/screenshot-847-63a3d1e608a8b54fcb77b6f2.png",
  ];

  const repoCount = ["", "", "", ""];

  const [hoveredItem, setHoveredItem] = useState(null);
  const [repoHoveredItem, setRepoHoveredItem] = useState(null);
  const [miscHoveredItem, setMiscHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleRepoMouseEnter = (index) => {
    setRepoHoveredItem(index);
  };

  const handleRepoMouseLeave = () => {
    setRepoHoveredItem(null);
  };

  const handleMiscMouseEnter = (index) => {
    setMiscHoveredItem(index);
  };

  const handleMiscMouseLeave = () => {
    setMiscHoveredItem(null);
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
      </div>
      <DivFlexCenter style={{ marginTop: "140px" }}>
        <Box
          style={{ objectFit: "fill" }}
          component="img"
          height="25%px"
          width="50%"
          src="https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg"
        />
      </DivFlexCenter>
      <DivFlexCenter>
        <Typography
          style={{ marginTop: "221px", marginBottom: "78px" }}
          fontSize={"36px"}
        >
          Digital Collection
        </Typography>
      </DivFlexCenter>
      <Section>
        <SmallCarousel />
      </Section>
      <DivFlexCenter style={{ marginTop: "168px", marginBottom: "80px" }}>
        <Typography fontSize={36} fontWeight={500}>
          Educational Aplication
        </Typography>
      </DivFlexCenter>
      <DivFlexCenter>
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
      </DivFlexCenter>
      <DivFlexCenter style={{ paddingTop: "164px" }}>
        <Typography fontSize={36}>
          Repository & Free Certified E-Courses
        </Typography>
      </DivFlexCenter>
      <DivFlexCenter>
        {repoCount.map((item, index) => {
          return (
            <div
              index={index}
              onMouseEnter={() => {
                handleRepoMouseEnter(index);
              }}
              onMouseLeave={handleRepoMouseLeave}
              style={{
                width: "208px",
                height: "170px",
                background: "#D9D9D9",
                boxShadow:
                  repoHoveredItem === index
                    ? "0px 0px 10px 2px rgba(0, 0, 0, 0.5)"
                    : "",
                marginRight: "42px",
                borderRadius: "5px",
                marginTop: "40px",
                transition: "box-shadow 0.3s",
              }}
            ></div>
          );
        })}
      </DivFlexCenter>
      <div style={{ margin: "153px 214px" }}>
        <Typography fontSize={23} align="justify">
          {`If you need scientific reference materials, you can submit a request through the respective Program or Faculty lecturers. The library materials that can be proposed includee books, journals, multimedia materials, or other scientific materials that are not yet available in Atmalib or updated editions of existing titles in Atmalib. The more complete information you provide about the proposed materials, the greater the chance that the materials we provide will meet your needs. Please also mention the purpose of the materials (e.g., for learning, research, or community service). if applicable, please provide the name or course code. then, the request can be forwarded by the Program and Faculty to the Library through the Service Request menu.`}
        </Typography>
      </div>
      <DivFlexCenter>
        {repoCount.map((item, index) => {
          return (
            <div
              index={index}
              onMouseEnter={() => {
                handleMiscMouseEnter(index);
              }}
              onMouseLeave={handleMiscMouseLeave}
              style={{
                width: "188px",
                height: "109px",
                background: "#D9D9D9",
                marginRight: "38px",
                borderRadius: "5px",
                transition: "box-shadow 0.3s",
                boxShadow:
                  miscHoveredItem === index
                    ? "0px 0px 10px 2px rgba(0, 0, 0, 0.5)"
                    : "",
              }}
            ></div>
          );
        })}
      </DivFlexCenter>
      <MyFooter />
    </>
  );
};

export default LandingPage;

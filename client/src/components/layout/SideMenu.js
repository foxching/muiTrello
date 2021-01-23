import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import Clear from "@material-ui/icons/Clear";
import colors from "../../utils/colors";
import { getImages } from "../../utils/imageApi";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px"
  },
  titleContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  menu: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(2),
    flexWrap: "wrap"
  },
  optionContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: theme.spacing(2)
  },
  box: {
    borderRadius: "9px",
    marginBottom: theme.spacing(2),
    cursor: "pointer",
    height: "90px",
    width: "45%"
  }
}));
export default function SideMenu({ open, setOpen }) {
  const [optionColor, setOptionColor] = useState(false);
  const [optionImage, setOptionImage] = useState(false);
  const [images, setImages] = useState([]);
  const classes = useStyles();

  const getImagesFromApi = async () => {
    const imagesList = await getImages();
    setImages(imagesList);
  };

  useEffect(() => {
    getImagesFromApi();
  }, []);

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>Change Background</Typography>
          <Clear onClick={() => setOpen(false)} style={{ cursor: "pointer" }} />
        </div>
        <Divider />
        <div className={classes.menu}>
          <div
            className={classes.box}
            style={{
              backgroundImage:
                "url(https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            onClick={() => {
              setOptionImage(true);
              setOptionColor(false);
            }}
          >
            <span style={{ color: "#fff" }}>Images</span>
          </div>
          <div
            className={classes.box}
            style={{
              backgroundImage:
                "url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            onClick={() => {
              setOptionColor(true);
              setOptionImage(false);
            }}
          >
            <span
              style={{ color: "#fff", display: "flex", alignContent: "center" }}
            >
              Color
            </span>
          </div>
        </div>

        {/*  Option Area */}
        {optionImage ? (
          <Grow in={optionImage}>
            <div className={classes.optionContainer}>
              {images.map((img, index) => (
                <div
                  key={index}
                  className={classes.box}
                  style={{
                    backgroundImage: `url(${img.thumb})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
                  onClick={() => {
                    //setBackground(img.full);
                    setOpen(false);
                  }}
                ></div>
              ))}
            </div>
          </Grow>
        ) : (
            <Grow in={optionColor}>
              <div className={classes.optionContainer}>
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={classes.box}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      //setBackground(color);
                      setOpen(false);
                    }}
                  ></div>
                ))}
              </div>
            </Grow>
          )}
      </div>
    </Drawer>
  );
}

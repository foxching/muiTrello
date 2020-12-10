import React, { useState, useEffect, useContext } from "react";
import { Drawer, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";
import { getImages } from "../../utils/imageApi";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px"
  },
  menu: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(2)
  },
  optionContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: theme.spacing(2)
  },
  box: {
    backgroundColor: "blue",
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

  const { setBackground } = useContext(AppContext);

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
          ></div>
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
          ></div>
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
                    setBackground(img.full);
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
                    setBackground(color);
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

import { css } from "../../../styled-system/css";

export const navCSS = {
  container: css({
    position: "sticky",
    top: "0",
    height: "60px",
    width: "100%",
    backgroundColor: "nav",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // borderBottomLeftRadius: "10px",
    // borderBottomRightRadius: "10px",

    maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
  }),

  containerUl: css({
    width: "676px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  }),

  ul: css({
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
  }),

  li: css({
    listStyleType: "none",
    backgroundColor: "transparent",
    width: "85px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 12px",
    fontFamily: "{fonts.secondary}",
    fontWeight: "400",
    fontSize: "17px",
  }),

  logo: css({
    width: "325px",
    backgroundColor: "transparent",
    transform: "translateX(1.2px)",
    paddingLeft: "180px",
  }),
  video: css({
    backgroundColor: "transparent",
    width: "75px",
  }),

  wd: css({
    width: "325px",
    textAlign: "end",
    backgroundColor: "transparent",
  }),
};

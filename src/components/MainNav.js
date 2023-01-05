import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Link, NavLink } from "react-router-dom";
 import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
   const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/searchcar");
    } 
    
  }, [value, navigate]);
//  const trending = ()=>{
//     Navigate("/");
//  }
//   const seachpage = () => {
//     Navigate("/search");
//   };
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
   
        <BottomNavigationAction
          // onClick={trending}
          style={{ color: "white" }}
          label="Trending Cars"
          icon={<WhatshotIcon />}
        />
     

      <BottomNavigationAction
        // onClick={seachpage}
        style={{ color: "white" }}
        label="Search Car"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}

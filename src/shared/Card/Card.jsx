import styled from "@emotion/styled";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useDate from "../../hooks/useDate";
import { useEffect, useState } from "react";
// import { create } from "@emotion/react";

import AOS from "aos";
import "aos/dist/aos.css";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",

  transition: `transform ${theme.transitions}ms`,
}));

const BeerCard = ({ beer }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const {
    name,
    first_brewed,
    tagline,
    image_url,
    boil_volume,
    brewers_tips,
    contributed_by,
    description,
  } = beer;

  const beerDate = useDate(first_brewed);
  // console.log(beer?.first_brewed);
  // console.log(beer);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div data-aos="zoom-in-up">
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            tagline.split(" ").length < 20
              ? tagline
              : tagline.split(" ").slice(0, 20).join(" ")
          }
          subheader={beerDate}
        />
        <CardMedia
          component="img"
          height="200"
          style={{ height: "200px", width: "100%", objectFit: "contain" }}
          image={image_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {brewers_tips}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              <h1>
                {boil_volume.value} {boil_volume.unit}, {contributed_by}
              </h1>
            </Typography>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default BeerCard;

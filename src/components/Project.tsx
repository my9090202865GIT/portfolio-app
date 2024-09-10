import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { CardActionArea } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Project() {
  const projects = [
    {
      name: "travel_App_logo.jpg",
      technology: "React+Django",
      deployLink: "https://example.com/travel-app",
      icon: "React+Django.png",
    },
    {
      name: "todo_app_logo.png",
      technology: "React",
      deployLink: "https://example.com/todo-app",
      icon: "React.png",
    },
    {
      name: "stream_App_logo.jpg",
      technology: "React",
      deployLink: "https://example.com/stream-app",
      icon: "React.png",
    },
    {
      name: "pharmacy_app_logo.jpg",
      technology: "React+Django",
      deployLink: "https://example.com/pharmacy-app",
      icon: "React+Django.png",
    },
    {
      name: "food_app_logo.png",
      technology: "React",
      deployLink: "https://example.com/food-app",
      icon: "React.png",
    },
    {
      name: "ecommerce_logo_shopping_bag.webp",
      technology: "React",
      deployLink: "https://example.com/ecommerce-app",
      icon: "React.png",
    },
    {
      name: "crm_logo.png",
      technology: "Django",
      deployLink: "https://example.com/crm-app",
      icon: "Django.png",
    },
  ];
  // box-sizing: border-box;
  //   position: relative;
  //   top: 4rem;

  return (
    <>
      <Typography
        variant="h2"
        component="div"
        sx={{ textAlign: "left", paddingLeft: 2 }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          mt: 5,
        }}
      >
        {projects.map((project, i) => (
          <Card
            key={i}
            sx={{
              width: 400,
              Height: 300,
              mb: 2,
              boxShadow: "0 2px 20px -9px ",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`/portfolio-app/${project.name}`}
                alt={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name.split("_")[0]}
                </Typography>
                {project.technology.split("+").map((technology, i) => (
                  <Chip
                    size="small"
                    color="primary"
                    label={technology}
                    avatar={<Avatar src={`/portfolio-app/icons/${technology}.png`} />}
                  />
                ))}
                <Link href="#" underline="none">
                  <LaunchIcon
                    // fontSize="samll"
                    sx={{ top: 3,fontSize:"small" }}
                    color="primary"
                  ></LaunchIcon>
                </Link>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  accusamus, illum ipsa molestias consectetur harum quaerat
                  aliquam a voluptates autem.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

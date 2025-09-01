import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";

export default function Meeting() {
  const resto = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Meeting",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Meeting",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1664300162579-6a4f1084dd63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Meeting",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Meeting",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
  ];

  return (
    <div className="mt-10">
      <Container>
        <Typography sx={{ textAlign: "center", marginBottom: 10 }} variant="h4">
          Meetings Rooms
          <Divider />
        </Typography>
        <div className="flex flex-col gap-10">
          {resto.map((item, index) => {
            // Tentukan apakah item ganjil atau genap
            const isOdd = (index + 1) % 2 !== 0;

            return (
              <div
                key={item.id}
                className={`flex  gap-10 ${isOdd ? "" : "flex-row-reverse"}`}
              >
                <div>
                  <img
                    style={{
                      width: "900px",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                    src={item.image}
                    title={item.name}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {item.name}
                    <Divider />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", marginTop: 2 }}
                  >
                    {item.desc}
                  </Typography>
                  <CardActions sx={{ marginTop: 3 }}>
                    <Button variant="outlined" size="small">
                      Share
                    </Button>
                    <Button variant="outlined" size="small">
                      Learn More
                    </Button>
                  </CardActions>
                </CardContent>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";

export default function Resto() {
  const resto = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1674601031608-1a38ca161523?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "gorengan",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1726797728786-efdc34d29aeb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "pisang",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1619371812376-e34e819eb8f1?q=80&w=905&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "melon",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1701673468778-e9f374b988a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "water melon",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1701673468778-e9f374b988a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "water melon",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1701673468778-e9f374b988a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "water melon",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1701673468778-e9f374b988a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "water melon",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid commodi reprehenderit impedit molestiae repellat omnis nostrum enim, provident quo assumenda magnam velit cumque ipsa fugiat? Consequuntur consequatur unde incidunt vel.",
    },
  ];

  return (
    <div className="mt-10">
      <Container>
        <Typography sx={{ marginBottom: 10, textAlign: "center" }} variant="h4">
          Restaurant & Bar
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
          <Divider />
        </div>
      </Container>
    </div>
  );
}

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import FacebookOutlined from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const SocialMedia = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            marginBottom: "7px",
          }}
        >
          <Button
            startIcon={<FacebookOutlined />}
            variant="contained"
            sx={{
              bgcolor: "#4056AC",
              textTransform: "none",
              height: "50px",
              marginRight: "7px",
            }}
          >
            <div
              style={{
                padding: "20px",
              }}
            >
              <p
                style={{
                  bottom: "1px",
                  width: "50px",
                  lineHeight: "16px",
                }}
              >
                65.5K Likes
              </p>
            </div>
          </Button>

          <Button
            startIcon={<TwitterIcon />}
            variant="contained"
            sx={{
              bgcolor: "#60B7FE",
              textTransform: "none",
              height: "50px",
              ":hover": {
                bgcolor: "#709ec5",
              },
            }}
          >
            <div
              style={{
                padding: "20px",
              }}
            >
              <p
                style={{
                  bottom: "1px",
                  width: "50px",
                  lineHeight: "16px",
                }}
              >
                105 k Followers
              </p>
            </div>
          </Button>
        </Box>

        <Box>
          <Button
            startIcon={<YouTubeIcon />}
            variant="contained"
            sx={{
              bgcolor: "#FE2C3C",
              textTransform: "none",
              height: "50px",
              ":hover": {
                bgcolor: "rgb(190, 66, 66)",
              },
              marginRight: "7px",
            }}
          >
            <div
              style={{
                padding: "20px",
              }}
            >
              <p
                style={{
                  bottom: "1px",
                  width: "50px",
                  lineHeight: "16px",
                }}
              >
                1.5 M Subscribers
              </p>
            </div>
          </Button>

          <Button
            startIcon={<InstagramIcon />}
            variant="contained"
            sx={{
              bgcolor: "#E14D93",
              textTransform: "none",
              height: "50px",
              ":hover": {
                bgcolor: "#b07791",
              },
            }}
          >
            <div
              style={{
                padding: "20px",
              }}
            >
              <p
                style={{
                  bottom: "1px",
                  width: "50px",
                  lineHeight: "16px",
                }}
              >
                105 k Followers
              </p>
            </div>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SocialMedia;

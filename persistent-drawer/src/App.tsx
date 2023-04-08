import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BaseLayout from "./layout/BaseLayout";

export const App = () => {
  return (
    <BaseLayout>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography>Text 1</Typography>
        </Box>
        <Box>
          <Typography>Text 2</Typography>
        </Box>
      </Box>
    </BaseLayout>
  );
};

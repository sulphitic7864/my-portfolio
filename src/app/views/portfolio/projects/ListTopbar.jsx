import {
  Box,
  Hidden,
  Icon,
  IconButton,
  InputAdornment,
  Slider,
  styled,
  TextField
} from "@mui/material";
import { FlexBetween } from "../../../components/FlexBox";

// styled components
const FlexBox = styled(Box)({ display: "flex", alignItems: "center" });
const StyledSlider = styled(Slider)({ width: 120, marginRight: "16px" });

const ListTopbar = ({
  viewMode,
  sliderValue,
  handleSldierChange,
  handleInputChange,
  handleViewChange,
  list
}) => {
  let marks = [{ value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];

  return (
    <FlexBetween flexWrap="wrap">
      {viewMode === "grid" ? (
        <TextField
          variant="standard"
          placeholder="Search projects..."
          onChange={handleInputChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            )
          }}
          sx={{ width: { xs: "48%", md: 260 }, flex: { xs: "0 0 48%", md: "0 0 auto" } }}
        />
      ) : (
        <span />
      )}

      {/* <FlexBox
        justifyContent="flex-end"
        sx={{
          width: { xs: "48%", md: "auto" },
          mt: { xs: 0, md: 0 },
          gap: 1,
          flexWrap: "wrap",
          justifyContent: { xs: "flex-end", md: "flex-end" }
        }}
      >
        {viewMode === "grid" && (
          <Hidden smDown>
            <StyledSlider
              min={25}
              step={null}
              marks={marks}
              value={sliderValue}
              onChange={handleSldierChange}
              aria-labelledby="continuous-slider"
            />
          </Hidden>
        )}

        <IconButton
          size="large"
          color={viewMode === "grid" ? "primary" : "default"}
          onClick={() => handleViewChange("grid")}
        >
          <Icon>view_comfy</Icon>
        </IconButton>

        <IconButton
          size="large"
          color={viewMode === "list" ? "primary" : "default"}
          onClick={() => handleViewChange("list")}
        >
          <Icon>list</Icon>
        </IconButton>
      </FlexBox> */}
      <span>Total Projects: {list.length}</span>
    </FlexBetween>
  );
};

export default ListTopbar;

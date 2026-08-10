import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Icon,
  Link,
  Tooltip,
  styled,
  useTheme
} from "@mui/material";
import { useMemo, useState } from "react";
import { FlexAlignCenter, FlexBetween, FlexBox } from "../../../components/FlexBox";
import { Paragraph, Small } from "../../../components/Typography";
import { removeTimeFromDate } from "../../../utils/utils";
import ProjectViewer from "./ProjectViewer";

const StyledIcon = styled(Icon)({
  color: "#fff",
  cursor: "pointer",
  marginRight: "12px"
});

const IMG = styled("img")({
  width: "100%",
  height: "220px",
  objectFit: "cover",
  display: "block",
  cursor: "pointer",
  backgroundColor: "#f3f5f9",
  padding: "0px",
  borderRadius: "8px 8px 0px 0px"
});

const CardRoot = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: 14,
  border: "1px solid rgba(0, 0, 0, 0.04)",
  background: "#fff",
  "& .grid__card-top": {
    position: "relative",
    overflow: "hidden"
  },
  "& .grid__card-bottom": {
    padding: "16px 16px 18px",
    textAlign: "left"
  },
  "&:hover": {
    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.12)"
  }
}));

const parseSkills = (value = "") =>
  typeof value === "string"
    ? value
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean)
    : [];

const calculateColumnPerRow = (value) => {
  if (value <= 25) return 2;
  if (value <= 50) return 3;
  if (value <= 75) return 4;
  return 6;
};

const GridView = ({ list = [], sliderValue = 50 }) => {
  const [view, setView] = useState("");
  const [currentProject, setCurrentProject] = useState(null);
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.text.secondary;

  const safeList = useMemo(() => list || [], [list]);

  const viewProjectHandler = async (data) => {
    setView("ProjectViewer");
    setCurrentProject(data);
  };

  const back = () => {
    setView("");
  };

  return (
    <div>
      {view === "ProjectViewer" ? (
        <ProjectViewer back={back} data={currentProject} />
      ) : (
        <Grid container spacing={2.5}>
          {safeList.map((item) => {
            const projectSkills = parseSkills(item?.technology);
            const projectDateRange = item?.project_duration || [];
            const hasLiveUrl = Boolean(item?.live_url);

            return (
              <Grid item key={item.id} xs={12} sm={calculateColumnPerRow(sliderValue)}>
                <CardRoot elevation={0}>
                  <Box className="grid__card-top">
                    <IMG
                      src={item?.images?.[0] || "https://via.placeholder.com/800x500?text=Project+Preview"}
                      alt={item?.name || "Project preview"}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(15,23,42,0.06), rgba(15,23,42,0.18))",
                        opacity: 0,
                        transition: "opacity 0.25s ease",
                        "&:hover": { opacity: 1 },
                        pointerEvents: "none"
                      }}
                    />
                  </Box>

                  <Box className="grid__card-bottom">
                    <Paragraph sx={{ color: secondary, fontWeight: 700, fontSize: 18, mb: 0.5 }}>
                      {item?.name || "Untitled Project"}
                    </Paragraph>

                    <Small sx={{ display: "block", color: "text.secondary", mb: 1.5 }}>
                      {removeTimeFromDate(projectDateRange[0] ?? "-")} —{" "}
                      {removeTimeFromDate(projectDateRange[1] ?? "-")}
                    </Small>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
                      {projectSkills.length ? (
                        projectSkills.map((skill) => (
                          <Chip
                            key={`${item.id}-${skill}`}
                            label={skill}
                            size="small"
                            sx={{
                              borderRadius: "999px",
                              backgroundColor: "rgba(98, 0, 238, 0.08)",
                              color: primary,
                              fontWeight: 600,
                              fontSize: 11,
                              height: 26
                            }}
                          />
                        ))
                      ) : (
                        <Chip
                          label="Project"
                          size="small"
                          sx={{
                            borderRadius: "999px",
                            backgroundColor: "rgba(15, 23, 42, 0.06)",
                            color: secondary,
                            fontWeight: 600,
                            fontSize: 11,
                            height: 26
                          }}
                        />
                      )}
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Button
                        onClick={() => viewProjectHandler(item)}
                        variant="contained"
                        size="small"
                        sx={{
                          borderRadius: 2,
                          fontWeight: 600,
                          textTransform: "none",
                          boxShadow: "none",
                          px: 1.75,
                          py: 0.8
                        }}
                      >
                        View Details
                      </Button>

                      {hasLiveUrl && (
                        <Tooltip placement="top" title="Open live project" arrow>
                          <Link
                            href={
                              item?.live_url?.startsWith("http")
                                ? item.live_url
                                : `https://${item.live_url}`
                            }
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                              color: primary,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 0.5,
                              fontWeight: 600,
                              textDecoration: "none"
                            }}
                          >
                            <StyledIcon fontSize="small">open_in_new</StyledIcon>
                            Live
                          </Link>
                        </Tooltip>
                      )}
                    </Box>
                  </Box>
                </CardRoot>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default GridView;

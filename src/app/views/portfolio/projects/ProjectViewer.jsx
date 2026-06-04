import { Card, Divider, Box, Link, Grid, Icon, styled, useTheme, Button } from "@mui/material";
import { H4, H5, Paragraph, Span } from "../../../components/Typography";
import { removeTimeFromDate } from "../../../utils/utils";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "0px",
  overflow: "unset",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const FlexAlignCenter = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  overflowX: "scroll"
});

const ProductCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});

const IMG = styled("img")({
  padding: 32,
  // width: "100%",
  maxWidth: 500,
  maxHeight: 500
});

const CallBox = styled("div")({
  display: "flex",
  marginBottom: 16,
  alignItems: "center"
});

const ThumbImg = styled("img")({
  width: 100,
  maxHeight: 100,
  marginLeft: 2,
  marginRight: 2,
  borderRadius: "4px"
});

const ProductViewer = (props) => {
  const projectData = props.data;

  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.text.secondary;

  return (
    <Container>
      <Card sx={{ px: 4, pb: 2, pt: 4 }} elevation={3}>
        <Grid container spacing={3}>
          
          <Grid item md={12} xs={12} sx={{ order: { xs: 1, md: 1 } }}>
            <H4 sx={{ mt: 0, color: secondary, fontWeight: 700 }}>{projectData?.name}</H4>
            <Paragraph sx={{ mt: 0, mb: 2, color: secondary, fontSize: 12 }}>
              {removeTimeFromDate(projectData?.project_duration[0] ?? "-")} ||{" "}
              {removeTimeFromDate(projectData?.project_duration[1] ?? "-")}
            </Paragraph>

            <Paragraph sx={{ mt: 0, mb: 0 }}>
              <Span sx={{ color: secondary }}>Live Link:</Span>
              <Link
                href={
                  projectData?.live_url.startsWith("http")
                    ? projectData?.live_url
                    : `http://${projectData?.live_url}`
                }
                target="_blank"
                sx={{ color: primary }}
              >
                {" "}
                {projectData?.live_url ?? "-"}
              </Link>
            </Paragraph>

            <Paragraph sx={{ mt: 0, mb: 0 }}>
              <Span sx={{ color: secondary }}>Category: </Span>
              <Span sx={{ color: primary }}>{projectData?.category ?? "-"}</Span>
            </Paragraph>

            <Paragraph sx={{ mt: 0, mb: 0 }}>
              <Span sx={{ color: secondary }}>Languages or Technologies: </Span>
              <Span sx={{ color: primary }}>{projectData?.technology ?? "-"}</Span>
            </Paragraph>

            <Divider sx={{ mb: 2 }} />

            <Paragraph sx={{ mt: 0, mb: 1, color: secondary, fontWeight: "700" }}>
              Have questions about this project (Client Info)
            </Paragraph>

            <CallBox flexWrap="wrap" sx={{ display: "flex", justifyContent: "space-around" }}>
              <Span className="text-center">
                <Icon fontSize="small" color="primary">
                  person
                </Icon>
                <H5 sx={{ color: secondary }}>{projectData?.client ?? "-"}</H5>
              </Span>
              {/* <Span className="text-center">
                <Icon fontSize="small" color="primary">
                  contact_mail
                </Icon>
                <H5 sx={{ color: secondary }}>{projectData?.client_email ?? '-'}</H5>
              </Span>
              <Span className="text-center">
                <Icon fontSize="small" color="primary">
                  call
                </Icon>
                <H5 sx={{ color: secondary }}>{projectData?.client_phone ?? '-'}</H5>
              </Span> */}
              <Span className="text-center">
                <Icon fontSize="small" color="primary">
                  location_on
                </Icon>
                <H5 sx={{ color: secondary }}>{projectData?.client_region ?? "-"}</H5>
              </Span>
            </CallBox>
            <Divider sx={{ mb: 2 }} />
          </Grid>

          <Grid item md={12} xs={12} sx={{ order: { xs: 2, md: 2 } }}>
            <ProductCard className="ProductCard">
              {/* Only show thumbnails; clicking will open PhotoSwipe modal */}
              <Gallery>
                <FlexAlignCenter
                  className="border"
                  style={{ width: "-webkit-fill-available" }}
                  gap={2}
                  py={2}
                >
                  {projectData?.images?.map((imgUrl, idx) => (
                    <Item
                      key={`thumb-${projectData?.id}-${idx}`}
                      original={imgUrl}
                      thumbnail={imgUrl}
                      width="1200"
                      height="900"
                      title={projectData?.name}
                    >
                      {({ ref, open }) => (
                        <ThumbImg
                          ref={ref}
                          src={imgUrl}
                          alt={imgUrl}
                          onClick={() => open()}
                        />
                      )}
                    </Item>
                  ))}
                </FlexAlignCenter>
              </Gallery>
            </ProductCard>
          </Grid>

          <Grid item md={12} xs={12} sx={{ textAlign: "justify" }}>
            <H4
              sx={{
                ml: 0,
                mb: 1,
                fontSize: 16,
                fontWeight: "bold",
                color: secondary
              }}
            >
              Description
            </H4>
            <Paragraph
              style={{ fontSize: 13, textIndent: "2em" }}
              dangerouslySetInnerHTML={{ __html: projectData?.description ?? "-" }}
            ></Paragraph>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
          <Button
            type="button"
            color="primary"
            variant="contained"
            size="small"
            sx={{ flex: { xs: "0 0 48%", md: "0 0 auto" }, px: { xs: 2, md: 6 }, py: { xs: 0.75, md: 1.5 } }}
            onClick={() => props.back()}
          >
            Back
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default ProductViewer;

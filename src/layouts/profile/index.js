/* eslint-disable */
import { cloneElement } from "react";
import { Link } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useAuthContext } from "context/auth";

function Overview() {
  const [controller] = useAuthContext();
  const { user, role } = controller;
  console.log(role);
  const showRole = (role) => {
    if (role == "Doctor") {
      return "Dr.";
    }

    return "";
  };

  const doctorActions = [
    {
      text: "View Appointment History",
      link: "/appointments",
    },
  ];

  const nurseActions = [
    {
      text: "Add Patient's Vital Signs",
      link: "/patients/health/add",
    },
  ];

  const staffActions = [
    {
      text: "Add New Patient",
      link: "/patients/add",
    },

    {
      text: "Schedule Appointment",
      link: "/appointments/schedule",
    },
  ];

  const renderAction = (role) => {
    if (role === "Doctor") {
      return doctorActions.map(({ text, link }) => (
        <ListItem key={link}>
          <ListItemText>
            <MDTypography
              component={Link}
              to={link}
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              {text}
            </MDTypography>
          </ListItemText>
        </ListItem>
      ));
    } else if (role === "Nurse") {
      return nurseActions.map(({ text, link }) => (
        <ListItem key={link}>
          <ListItemText>
            <MDTypography
              component={Link}
              key={link}
              to={link}
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              {text}
            </MDTypography>
          </ListItemText>
        </ListItem>
      ));
    } else {
      return staffActions.map(({ text, link }) => (
        <ListItem key={link}>
          <ListItemText>
            <MDTypography
              component={Link}
              key={link}
              to={link}
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              {text}
            </MDTypography>
          </ListItemText>
        </ListItem>
      ));
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid> */}
            <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />

              <ProfileInfoCard
                title="profile information"
                description="Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: `${showRole(role)} ${user.firstname} ${user.lastname}`,
                  email: `${user.email}`,
                  username: `${user.username}`,
                  gender: `${user.gender}`,
                  speciality: "None" ?? `${user.speciality}`,
                }}
                social={[
                  {
                    link: "https://www.facebook.com/daniel.okoronkwo.52/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/@varsilias",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/_danielokoronkwo/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                // action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
              <List>{renderAction(role)}</List>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Overview;

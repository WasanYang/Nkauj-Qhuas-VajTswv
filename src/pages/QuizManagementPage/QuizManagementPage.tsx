import { Box, Tab, Tabs } from "@mui/material";
import { Fragment, SyntheticEvent, useState } from "react";
import { TabPanel } from "../../components/TabPanel";
import QuizCreateTab from "./QuizCreateTab/QuizCreateTab";
import QuizListTab from "./QuizListTab/QuizListTab";

export function QuizManagementPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Box>Quiz management</Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Create" {...a11yProps(0)} />
          <Tab label="List" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <QuizCreateTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuizListTab />
      </TabPanel>
    </Fragment>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

import { Fragment, useEffect, useState } from "react";
import "./SongManagementPage.scss";
import { Grid, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { useSearchSong } from "../../hooks/Song";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useRecoilState } from "recoil";
import { SongTabState } from "../../contexts/States/song";
import { CreateTab } from "./CreateTab/CreateTab";

export function SongManagementPage() {
  const [tab, setTab] = useRecoilState(SongTabState);
  const [selectedIndex, setSelectedIndex] = useState("A");
  const [songs, setSongs] = useState<any[]>([]);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: string
  ) => {
    setSelectedIndex(key);
  };

  const { submitSearchSong, isLoading } = useSearchSong();
  useEffect(() => {
    const fetchSong = async () => {
      const data = await submitSearchSong("asdf");
      setSongs(data.items);
    };
    fetchSong();
  }, []);

  if (isLoading) return <Fragment>Loading...</Fragment>;
  return (
    <Fragment>
      <Grid>
        <TabContext value={tab}>
          <TabList
            onChange={(_: any, newValue: string) => {
              setTab(newValue);
            }}
          >
            <Tab label={"Create user"} value="create" />
            <Tab label={"List"} value="list" />
          </TabList>
          <TabPanel value="create">
            <CreateTab />
          </TabPanel>
          <TabPanel value="list">list</TabPanel>
        </TabContext>
      </Grid>
    </Fragment>
  );
}

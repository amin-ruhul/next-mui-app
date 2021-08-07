import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

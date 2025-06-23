
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const DarkModeToggle = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default DarkModeToggle;

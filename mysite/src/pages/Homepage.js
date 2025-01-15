import '../assets/css/main.css';
import React from "react";
import { Link } from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu.js';
import DocumentMeta from 'react-document-meta';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    white: '#bfb8b8'
  },
});

const elsaOs = "+----------------------------------------------------+\n|,------.,--.    ,---.    ,---.      ,-----.  ,---.  |\n||  .---'|  |   '   .-'  /  O   \    '  .-.  ''   .-' |\n||  `--, |  |   `.  `-. |  .-.  |   |  | |  |`.  `-. |\n||  `---.|  '--..-'    ||  | |  |   '  '-'  '.-'    ||\n|`------'`-----'`-----' `--' `--'    `-----' `-----' |\n+----------------------------------------------------+"

function TextArt({ label, text }) {
  return (
    <pre
      aria-label={label}
      className="text-art ascii-art"
    >{text}</pre>
  );
}


function Homepage() {
  return (
    // <DocumentMeta {...meta}>

    <div className="Homepage">
      <body className="is-preload">

        <TextArt id="asciiTitle"
          text={elsaOs}
        />
        <ThemeProvider theme={theme}>

          <Box component="section" sx={{
            height: 200,
            width: 200,
            my: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            p: 2,
            // border: '2px solid grey',
            color: '#bfb8b8',
            flexDirection: 'column'
          }}>
            <div>------ MENU ------</div>
            <table>
              <tr>
                <th>
                  <Button className="navBtn" component={Link} to="/about">
                    ABOUT
                  </Button>
                </th>
              </tr>
              <tr>
                <Button className="navBtn" component={Link} to="/contact">
                  CONTACT
                </Button>
              </tr>
              <tr>
                <Button className="navBtn" component={Link} to="/about">
                  2
                </Button>
              </tr>
            </table>

          </Box>
        </ThemeProvider>



      </body>
    </div>
    // </DocumentMeta>
  );
}

export default Homepage;

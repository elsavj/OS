import '../assets/css/main.css';
import React from "react";
import { Link } from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu.js';
import DocumentMeta from 'react-document-meta';
import Box from '@mui/material/Box';

const elsaOs = "+----------------------------------------------------+\n|,------.,--.    ,---.    ,---.      ,-----.  ,---.  |\n||  .---'|  |   '   .-'  /  O   \    '  .-.  ''   .-' |\n||  `--, |  |   `.  `-. |  .-.  |   |  | |  |`.  `-. |\n||  `---.|  '--..-'    ||  | |  |   '  '-'  '.-'    ||\n|`------'`-----'`-----' `--' `--'    `-----' `-----' |\n+----------------------------------------------------+"

function TextArt({ label, text }) {
  return (
    <pre
      aria-label={label}
      className="text-art ascii-art"
    >{text}</pre>
  );
}

function About() {
  // const meta = {
  //   title: 'ELSA',
  //   // canonical: 'http://example.com/path/to/page',
  //   meta: {
  //     charset: 'utf-8'
  //   }
  // }

  return (
    // <DocumentMeta {...meta}>

    <div className="About">
      <body className="is-preload">
      
      Hi, I'm Elsa. 

      </body>
    </div>
    // </DocumentMeta>
  );
}

export default About;

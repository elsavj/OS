import './/../assets/css/main.css';
import React from "react";
import { Link } from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu.js';


function About() {
  return (
    <div className="About">
      <head>
        <title>Elsa Vijendran</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
      </head>
      <body class="is-preload">

        <div id="wrapper">

          <div id="main">
            <div class="inner">

              <header id="header">
                <a  class="logo"><strong>Elsa's Website</strong></a>
              </header>

              {/* Content */}
              <section>
                <header class="main">
                  <h1>About me</h1>
                </header>

              </section>
            </div>
          </div>

          <SidebarMenu/>
        </div>

      </body>


    </div>



  );
}

export default About;

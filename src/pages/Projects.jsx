import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import yp from "../assets/projects/yp.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on between 2015 and 2023.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="State of Georgia - Department of Health"
              description="Worked as a Developer III in the Informatics department. I was project lead on 4 projects and a team member of several other projects. Some of the projects include building an API using C# and .NET, building a XML/XLST Viewer, and Custom Dashboards using PHP, Postgres, HTML5, CSS3, Angular, Node, and jQuery. Worked with Azure DevOps. Worked with AWS Advanced. Did a test installation of Drupal 8 using Composer and XAMPP on Windows 10; created custom Drupal 8 module to train co-worker. Created apps in Apex 4.1 and Oracle 11g."
              ghLink="https://dph.georgia.gov/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Verizon"
              description="Worked as Communication & Template implementation specialist, creating Email and SMS Communications. Communications were primarily sent using XML and JSON. Worked with QA and with Product Managers. Utilized HTML4, HTML5, CSS3, CSS2 and JSON. Required knowledge of dynamic page assembly, rendering and diagramming. Created emails, SMS texts and printed flyers delivered to B2B and B2C customers. Assisted in End-to-End testing as part of the SDLC. Worked both in small teams and alone, created and documented technical artifacts for customer communications."
              ghLink="https://www.verizon.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Drummond Press"
              description="Worked with online shopping carts. Updated user accounts. Created new storefront builds. Worked with outside vendors to build store fronts. Worked on teamwork.com portal. Worked in an agile environment. Conducted site customizations, integrations, and new developments with print sites. Created PageFlex template builds. Created and managed access groups including administrator, user, and internal administrators. Worked with and created custom shipping modules. Created JavaScript code to validate form inputs. Created HTML5 and CSS3 responsive templates."
              ghLink="https://drummond.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="StoCorp"
              description="Rebuilt StoCorp E-Submittal Wordpress PHP Plugin. Utilized for each loops in PHP to display downloadable PDF files viewable and downloadable within accordion menus in bootstrap. Created tables within MySQL. PDF Files have associated URLs for download. Used Merge PDF software to ensure documents are combined, downloaded, and emailed. Created storyboards using Photoshop and PowerPoint. Created shortcodes to display different parts of the plugin. Created registration flow and login flow shortcodes. Created search page and shortcodes. Created CSS for plugin child theme, theme panel, and admin."
              ghLink="https://www.stocorp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Outdoor Sportsman Group"
              description="Used composer, PowerShell and a CLI Script to crawl and scan HTTPS-enabled websites for mixed content. Mobile web site and application development. PHP, JavaScript and jQuery debugging. Application testing. Web site testing. Work on Staging and Production servers with Amazon modules, jQuery overlays, popup video and banner ads, pop-overs, pop-outs and pop-ups, advanced z-index layouts in CSS3, replaced PHP code and created PHP application that creates blocks of text to report bugs. Used PHP scripts to do SQL queries. Worked with PHP arrays, functions, variables and isset. Designed API’s using raml.org."
              ghLink="https://www.outdoorsg.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yp}
              isBlog={false}
              title="YP (YellowPages)"
              description="Worked as Campaign Manager/Analyst in high paced team environment managing high-touch national and regional Pay-Per-Click clients. Developed, managed, and maintained web analytics infrastructure. Conducted site tracking and data collection. Work as Engineer on the Tracking team delivering high levels of performance in competitive markets utilizing Google AdWords, Bing Ads, and Yahoo Gemini PPC channels. PPC campaign creation and management and reporting using a variety of different software including GTM."
              ghLink="https://yp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
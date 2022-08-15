import styled from "styled-components";

const OnlineSchool = () => {
  const randomSkills = [
    "Postman to send requests",
    "Axios for making requests",
    "Auth0",
    "Joi Validation",
  ];

  const webDevSkills = [
    "HTML5",
    "CSS3",
    "Responsive Design",
    "JavaScript (all 2022 modern syntax, ES6, ES2018, etc.)",
    "Asynchronous JavaScript - Promises, async/await, etc.",
    "AJAX and single page apps",
    "Bootstrap 4 and 5",
    "DOM Manipulation",
    "Unix(Command Line) Commands",
    "NodeJS",
    "NPM",
    "ExpressJS",
    "Templating",
    "REST",
    "SQL vs. NoSQL databases",
    "MongoDB",
    "Database Associations",
    "Schema Design",
    "Mongoose",
    "Authentication From Scratch",
    "Cookies & Sessions",
    "Authorization",
    "Common Security Issues - SQL Injection, XSS, etc.",
    "Developer Best Practices",
    "Deploying Apps",
    "Cloud Databases",
    "Image Upload and Storage",
    "Maps and Geocoding",
  ];

  const gitSkills = [
    "Understand how Git works behind the scenes",
    "Explain the difference Git objects: trees, blobs, commits, and annotated tags",
    "Master the essential Git workflow: adding & committing",
    "Work with Git branches",
    "Perform Git merges and resolve merge conflicts",
    "Use Git diff to reveal changes over time",
    "Master Git stashing",
    "Undo changes using git restore, git revert, and git reset",
    "Work with local and remote repositories",
    'Master collaboration workflows: pull requests, "fork & clone", etc.',
    "Squash, clean up, and rewrite history using interactive rebase",
    'Retrieve "lost" work using git reflogs',
    "Write custom and powerful Git aliases",
    "Mark releases and versions using Git tags",
  ];

  const reactSkills = [
    "JSX",
    "Props",
    "Hooks - useState, useEffect, useRef, useReducer, useContext, etc...",
    "Creating custom hooks",
    "Conditional Rendering",
    "React Router 6",
    "useNavigate",
    "Pagination on server and client side",
    "styled-components",
  ];

  return (
    <Wrapper>
      <header className="school-header">
        <div className="title-company" target="_blank" rel="noreferrer">
          <h3>Independent Courses</h3>
        </div>
      </header>
      <p className="course">The Web Developer Bootcamp</p>
      <div className="certificate-wrapper">
        <img
          src="webdevcertificatelarge.png"
          alt="Web Developer Bootcamp Certificate of Completion"
        />
      </div>
      <ul>
        {webDevSkills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>

      <p className="course">The Git and Github Bootcamp</p>
      <div className="certificate-wrapper">
        <img
          src="gitbootcamplarge.png"
          alt="Web Developer Bootcamp Certificate of Completion"
        />
      </div>
      <ul>
        {gitSkills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      <p className="course">React Tutorial and Projects Course</p>
      <ul>
        {reactSkills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: var(--black);
  background-color: var(--white-opaque);
  .school-header {
    position: sticky;
    top: 6.95rem;
    height: 6.6rem;
    z-index: 1;
    background: var(--main-muted);
    padding-right: 7.5rem;
    padding-left: 0.3rem;
    border-bottom: var(--small-border);
    .title-company {
      padding: 0.5rem 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    h3 {
      font-family: "Bebas Neue", cursive;
      margin-top: 0.5rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
  }

  .course {
    font-family: "Bebas Neue", cursive;
    padding: 3rem 0.5rem 0;
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
  .certificate-wrapper {
    margin: 0 5%;
    width: 90%;
    box-shadow: 3px 3px 8px black;
    img {
      width: 100%;
    }
  }

  ul {
    padding: 3rem;
    list-style-type: square;
    li {
      margin-right: 2rem;
      font-size: 0.8rem;
    }
  }

  /* ------------- */
  /* MEDIA QUERIES */
  /* ------------- */

  @media (min-width: 480px) {
    .school-header {
      h3 {
        margin-top: 0.4rem;
        font-size: 1.9rem;
        line-height: 1.8rem;
      }
    }
    ul {
      .duty {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    border: var(--small-border);
    border-right: none;
    .school-header {
      padding-right: 0.3rem;
      padding-left: 0.3rem;
      h3 {
        font-size: 2.4rem;
        line-height: 2rem;
      }
    }
  }

  @media (min-width: 992px) {
    border: var(--small-border);
    .school-header {
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default OnlineSchool;

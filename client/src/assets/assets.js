import blog_pic_1 from "./blog_pic_1.png";
import blog_pic_2 from "./blog_pic_2.png";
import blog_pic_3 from "./blog_pic_3.png";
import blog_pic_4 from "./blog_pic_4.png";
import blog_pic_5 from "./blog_pic_5.png";
import blog_pic_6 from "./blog_pic_6.png";
import blog_pic_7 from "./blog_pic_7.png";
import blog_pic_8 from "./blog_pic_8.png";
import blog_pic_9 from "./blog_pic_9.png";
import blog_pic_10 from "./blog_pic_10.png";
import facebook_icon from "./facebook_icon.svg";
import googleplus_icon from "./googleplus_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import arrow from "./arrow.svg";
import logo_light from "./logo_light.svg";
import blog_icon from "./blog_icon.png";
import add_icon from "./add_icon.svg";
import list_icon from "./list_icon.svg";
import email_icon from "./email_icon.png";
import upload_area from "./upload_area.svg";
import user_icon from "./user_icon.svg";
import bin_icon from "./bin_icon.svg";
import comment_icon from "./comment_icon.svg";
import tick_icon from "./tick_icon.svg";
import star_icon from "./star_icon.svg";
import cross_icon from "./cross_icon.svg";
import home_icon from "./home_icon.svg";
import gradientBackground from "./gradientBackground.png";
import dashboard_icon_1 from "./dashboard_icon_1.svg";
import dashboard_icon_2 from "./dashboard_icon_2.svg";
import dashboard_icon_3 from "./dashboard_icon_3.svg";
import dashboard_icon_4 from "./dashboard_icon_4.svg";
import logo from "./h_letter.png";
import avt from "./avt.jpg";
import down from "./down.png";
import mpa from "./mpa.jpg";
import logpresso from "./logpresso.png";
import sirloin from "./sirloin.png";
import project_influencer from "./team_project_01.png";
import project_cinema from "./teamproject_02.png";
import sparking_stones from "./team_project_03.png";
import project_bot from "./project_bot.png";
import project_candy from "./project_candy.png";
import project_doctor from "./project_doctor.png";
import project_chat from "./project_chat.png";
import project_trade from "./project_trade.png";
import project_new from "./project_new.jpg";

export const assets = {
  down,
  avt,
  facebook_icon,
  googleplus_icon,
  twitter_icon,
  logo,
  arrow,
  logo_light,
  blog_icon,
  add_icon,
  email_icon,
  upload_area,
  user_icon,
  bin_icon,
  comment_icon,
  tick_icon,
  star_icon,
  home_icon,
  gradientBackground,
  list_icon,
  cross_icon,
  dashboard_icon_1,
  dashboard_icon_2,
  dashboard_icon_3,
  dashboard_icon_4,
};
export const blogCategories = [
  "All",
  "Technology",
  "Startup",
  "Lifestyle",
  "Finance",
];

export const projectCategories = ["Enterprise", "Team", "Personal"];

export const project_data = [
  {
    _id: "mpa",
    title: "MPA (Singapore) | @AvePoint",
    subTitle: "Enterprise-scale Project & Contract Management System",
    description: `
      <h1>Maritime Port Authority (Singapore)</h1>
      <p>
        Developed at <strong>AvePoint Company</strong> between <em>Feb 2024 - Jun 2025</em>, 
        this Enterprise-scale <strong>Project and Contract Management System</strong> 
        was designed to streamline maritime operations, improve contract oversight, 
        and enhance cross-stakeholder collaboration.
      </p>
      <h2>Team Size</h2>
      <p>20 members (7 front-end, 5 back-end, BAs and QAs)</p>
      <h2>Key Features</h2>
      <ul>
        <li>Comprehensive <strong>project management</strong> system for tracking maritime and port-related initiatives</li>
        <li>Centralized <strong>contract management</strong> under each project with approval workflows</li>
        <li>Support for <strong>vessel traffic, navigational safety, and port service regulation</strong></li>
        <li>Role-based dashboards for <strong>administrators, contractors, and port officials</strong></li>
        <li>Document handling and digital records for compliance and auditing</li>
        <li>Seamless integration with <strong>backend services</strong> to ensure operational efficiency and environmental compliance</li>
      </ul>
      <h2>Technologies</h2>
      <ul>
        <li>Front-end: React + TypeScript + Fluent UI + SASS</li>
        <li>Back-end: ASP.NET Web API + MS SQL Server</li>
      </ul>
      <h2>Responsibilities</h2>
      <ul>
        <li>Developed and maintained reusable common UI components and shared layout structures for consistency and scalability.</li>
        <li>Implemented multiple complex functional modules and pages aligned with UX requirements.</li>
        <li>Collaborated with Singaporean and Chinese Business Analysts to clarify complex business logic and communicate effectively with Team members.</li>
        <li>Participated in agile ceremonies (daily standups, sprint reviews) and handled high-priority JIRA tickets to resolve bugs and improve performance.</li>
      </ul>
    `,
    category: "Enterprise",
    image: mpa,
    createdAt: "2025-06-25T10:00:00.000Z", // example timestamp
    updatedAt: "2025-06-25T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  // {
  //   _id: "mpa-iss-001",
  //   title: "MPA ISS (Singapore) | @AvePoint",
  //   subTitle: "Port and Marine Services Management System",
  //   description: `
  //     <h1>Maritime Port Authority ISS (Singapore)</h1>
  //     <p>
  //       Developed at <strong>AvePoint Company</strong> between <em>Jan 2025 - Jun 2025</em>,
  //       this system was built for the <strong>Maritime Port Authority of Singapore (MPA)</strong>
  //       to regulate and manage port and marine services, facilities, and activities
  //       within Singaporean waters. It covers vessel traffic management, navigational
  //       safety, operational efficiency, and environmental compliance.
  //     </p>
  //     <h2>Team Size</h2>
  //     <p>26 members (12 front-end, 8 back-end, BAs and QAs)</p>
  //     <h2>Technologies</h2>
  //     <ul>
  //       <li>Front-end: React + TypeScript + Ant Design + SASS</li>
  //       <li>Back-end: ASP.NET Web API + MS SQL Server</li>
  //     </ul>
  //     <h2>Key Responsibilities</h2>
  //     <ul>
  //       <li>Conducted technical research and contributed to the initial frontend setup and theme configuration using Ant Design’s theming system.</li>
  //       <li>Collaborated with the Chinese leader to establish project structure and coding conventions for Team members.</li>
  //       <li>Analyzed designs and developed reusable common UI components.</li>
  //       <li>Implemented multiple complex modules and pages aligned with UX requirements.</li>
  //       <li>Managed and tracked the task progress of frontend Team members.</li>
  //     </ul>
  //   `,
  //   category: "Enterprise",
  //   image: mpa,
  //   createdAt: "2025-06-25T10:00:00.000Z", // example timestamp
  //   updatedAt: "2025-06-25T10:00:00.000Z",
  //   __v: 0,
  //   isPublished: true,
  // },
  {
    _id: "logpresso",
    title: "Logpresso (Korea) | @Sotatek",
    subTitle: "Automated Security Operation Platform",
    description: `
      <h1>Logpresso (Korea)</h1>
      <p>
        Developed at <strong>Sotatek Company</strong> starting from <em>Jun 2025 – Oct 2025</em>, 
        Logpresso is an <strong>automated security operation platform</strong> that integrates 
        on-premise, cloud, and SaaS environments to streamline security processes and 
        improve operational efficiency.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Centralized <strong>log management</strong> from on-premise, cloud, and SaaS environments</li>
        <li>Interactive <strong>log viewer</strong> with advanced filtering, table views, and detailed inspection</li>
        <li>Automated <strong>file scanning</strong> for viruses, malware, and malicious patterns</li>
        <li>Comprehensive <strong>policy management</strong> – create, modify, and enforce security policies in real time</li>
        <li>Integration with security workflows for <strong>incident detection and response</strong></li>
        <li>Responsive dashboards for monitoring security events and system health</li>
      </ul>
      <h2>Team Size</h2>
      <p>5 members (3 front-end, 2 QCs)</p>
      <h2>Technologies</h2>
      <ul>
        <li>Front-end: React.js (TypeScript) + Material UI + Tailwind CSS + Context API</li>
      </ul>
      <h2>Key Responsibilities</h2>
      <ul>
        <li>Acted as a key front-end developer from project initiation.</li>
        <li>Built the codebase from scratch and established project structure and best practices.</li>
        <li>Communicated directly with Korean clients to clarify requirements and provide updates.</li>
        <li>Assigned, tracked, and managed tasks for Team members to ensure on-time delivery.</li>
        <li>Developed responsive UIs, integrated APIs, and implemented core features across multiple modules/pages.</li>
      </ul>
    `,
    category: "Enterprise",
    image: logpresso,
    createdAt: "2025-06-26T10:00:00.000Z", // example timestamp
    updatedAt: "2025-06-26T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "sirloin",
    title: "SirLoin OMS & WMS (Korea) | @Sotatek",
    subTitle: "Order & Warehouse Management System",
    description: `
    <h1>SirLoin OMS & WMS</h1>
    <p>
      A comprehensive <strong>Order Management System (OMS)</strong> and 
      <strong>Warehouse Management System (WMS)</strong> developed for 
      <strong>SirLoin</strong>, a premium Korean beef shop. 
      The platform integrates with multiple <strong>e-commerce platforms</strong> 
      as well as SirLoin’s own online mall to streamline operations.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li>Automatic collection of orders from 3rd-party e-commerce platforms and SirLoin mall</li>
      <li>End-to-end <strong>picking, packing, and shipping</strong> workflows</li>
      <li>Warehouse stock management with real-time updates</li>
      <li>Optimized dashboards for tracking daily operations</li>
    </ul>
    <h2>Team Size</h2>
    <p>6 members (3 front-end, 3 back-end)</p>
    <h2>Role</h2>
    <p>Front-end Developer</p>
    <h2>Technologies</h2>
    <ul>
      <li>React + Typescript + Tailwind CSS</li>
      <li>Node.js (Express.js) + PostgreSQL</li>
    </ul>
    <h2>Key Responsibilities</h2>
    <ul>
        <li>Built the codebase from scratch and established project structure and best practices.</li>
        <li>Communicated directly with Korean clients to clarify requirements and provide updates.</li>
        <li>Assigned, tracked, and managed tasks for Team members to ensure on-time delivery.</li>
        <li>Developed responsive UIs, integrated APIs, and implemented core features across multiple modules/pages.</li>
    </ul>
  `,
    category: "Enterprise",
    image: sirloin,
    createdAt: "2025-07-01T10:00:00.000Z",
    updatedAt: "2025-07-01T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "upcoming",
    title: "... | @Sotatek",
    subTitle: "Order & Warehouse Management System",
    description: `
    <h1>...</h1>
    <p>
      ...
    </p>
    <h2>Key Features</h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <h2>Team Size</h2>
    <p>... members (... front-end, ... back-end)</p>
    <h2>Role</h2>
    <p>Front-end Developer</p>
    <h2>Technologies</h2>
    <ul>
      <li>...</li>
      <li>...</li>
    </ul>
    <h2>Key Responsibilities</h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  `,
    category: "Enterprise",
    image: project_new,
    createdAt: "2025-07-01T10:00:00.000Z",
    updatedAt: "2025-07-01T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "influencer-market",
    title: "Influencer Marketing Platform",
    subTitle: "AI-powered KOL/KOC & Brand Collaboration System",
    description: `
      <h1>Influencer Marketing Platform</h1>
      <p>
        A web platform designed for the <strong>Vietnamese influencer marketing industry</strong>, 
        connecting <strong>KOLs/KOCs with brands</strong> for product promotion and collaboration. 
        The platform enables influencer discovery, campaign creation, and provides 
        <strong>AI-powered interaction insights</strong> to optimize marketing outcomes.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li><strong>Influencer discovery</strong> – search and filter KOLs/KOCs by category, reach, and engagement</li>
        <li><strong>Campaign creation & management</strong> – brands can launch, monitor, and manage influencer campaigns</li>
        <li><strong>AI-powered insights</strong> – analyze influencer performance, engagement quality, and audience interaction</li>
        <li><strong>Collaboration tools</strong> – streamline communication between brands and influencers</li>
        <li><strong>Analytics dashboard</strong> – real-time campaign performance tracking and reporting</li>
      </ul>
      <h2>Team Size</h2>
      <p>5 members (2 front-end, 3 back-end)</p>
      <h2>Technologies</h2>
      <ul>
        <li>Front-end: Next.js + ShadCN UI + Tailwind CSS</li>
        <li>Back-end: ASP.NET Web API + MS SQL Server</li>
      </ul>
      <h2>Role</h2>
      <ul>
        <li>Front-end Developer</li>
      </ul>
      <h2>Links</h2>
      <p>
        <a href="https://lnk.ink/SjgbY" target="_blank" rel="noopener noreferrer">
          📄 Article
        </a><br/>
        <a href="https://github.com/fpt-blue-green" target="_blank" rel="noopener noreferrer">
          💻 GitHub Repository
        </a>
      </p>
    `,
    category: "Team",
    image: project_influencer,
    createdAt: "2025-06-26T10:00:00.000Z",
    updatedAt: "2025-06-26T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "cinema",
    title: "Cinema Booking System",
    subTitle: "Movie Ticket & Seat Reservation Platform",
    description: `
    <h1>Cinema Booking System</h1>
    <p>
      A web application that allows users to <strong>browse and search movies</strong>, 
      <strong>book seats</strong>, and purchase <strong>food, drinks, and combos</strong>. 
      The platform also provides an <strong>admin dashboard</strong> for managing 
      movies, seats, promotions, and concession items.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li>🎬 Movie browsing & searching</li>
      <li>🪑 Seat booking with real-time availability</li>
      <li>🍿 Food, drinks, and combo ordering</li>
      <li>🛠 Admin dashboard for managing seats, movies, and promotions</li>
    </ul>
    <h2>Team Size</h2>
    <p>Group project (university Team collaboration)</p>
    <h2>Technologies</h2>
    <ul>
      <li>Front-end: Next.js + ShadCN UI + Tailwind CSS</li>
      <li>Back-end: Node.js + Express</li>
    </ul>
    <h2>Links</h2>
    <p>
      <a href="https://github.com/fpt-wdp301-group6" target="_blank" rel="noopener noreferrer">
        💻 GitHub Repository
      </a>
    </p>
  `,
    category: "Team",
    image: project_cinema,
    createdAt: "2025-06-26T10:00:00.000Z", // adjust date
    updatedAt: "2025-06-26T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "sparkling-stones",
    title: "Sparkling Stones – Jewelry E-commerce Platform",
    subTitle: "Jewelry Shopping Platform (Diamonds, Gold, Watches)",
    description: `
    <h1>Sparkling Stones – Jewelry E-commerce Platform</h1>
    <p>
      The <strong>Sparkling Stones</strong> is a web application designed to sell jewelry 
      such as <strong>diamonds, gold, and watches</strong>. Customers can easily browse, 
      search, and purchase jewelry with just one click.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li>✅ User authentication (customers, users, admin)</li>
      <li>✅ Search and filter jewelry by categories</li>
      <li>✅ Track new products and store news</li>
      <li>✅ Place orders for products</li>
      <li>✅ Admin dashboard for managing users, products, and analytics</li>
    </ul>
    <h2>Team Size</h2>
    <p>3 Members – University Team Project (Team Collaboration)</p>
    <h2>Technologies</h2>
    <ul>
      <li>Front-end: JSP + Bootstrap</li>
      <li>Back-end: Servlet</li>
      <li>Database: PostgreSQL</li>
    </ul>
    <h2>Authors</h2>
    <p>
      👨‍💻 Tran Dinh Hieu (Wilson Tran) – <strong>Team Leader, Full Stack Developer</strong><br/>
      👨‍💻 Nguyen Hong Duc (Syaoran Nguyen) – Frontend Developer<br/>
      👨‍💻 Nguyen Van Binh – Backend Developer
    </p>
  `,
    category: "Team",
    image: sparking_stones,
    createdAt: "2025-06-26T10:00:00.000Z", // adjust date
    updatedAt: "2025-06-26T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "upcoming",
    title: "...",
    subTitle: "Order & Warehouse Management System",
    description: `
    <h1>...</h1>
    <p>
      ...
    </p>
    <h2>Key Features</h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <h2>Team Size</h2>
    <p>... members (... front-end, ... back-end)</p>
    <h2>Role</h2>
    <p>Front-end Developer</p>
    <h2>Technologies</h2>
    <ul>
      <li>...</li>
      <li>...</li>
    </ul>
    <h2>Key Responsibilities</h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  `,
    category: "Team",
    image: project_new,
    createdAt: "2025-07-01T10:00:00.000Z",
    updatedAt: "2025-07-01T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "medbook",
    title: "MedBook",
    subTitle: "Doctor Appointment Booking System",
    description: `
    <h1>MedBook</h1>
    <p>
      A web application designed to <strong>streamline medical appointment scheduling</strong>. 
      Patients can easily <strong>book appointments with doctors</strong> based on availability, 
      while doctors can efficiently <strong>manage their schedules</strong>.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li><strong>Patient appointment booking</strong> – schedule medical visits based on doctor availability</li>
      <li><strong>Doctor schedule management</strong> – doctors can view, update, and organize their schedules</li>
      <li><strong>User authentication</strong> – secure login for patients and doctors</li>
      <li><strong>Responsive design</strong> – optimized for both desktop and mobile use</li>
    </ul>
    <h2>Team Size</h2>
    1 (Personal Project)
    <h2>Role</h2>
    <p>Full Stack Developer</p>
    <h2>Technologies</h2>
    <ul>
      <li>ReactJS + Tailwind CSS</li>
      <li>Node.js (Express.js) + MongoDB</li>
    </ul>
    <h2>Links</h2>
    <p>
      <a href="https://github.com/dinhhieu110/medbook_system" target="_blank" rel="noopener noreferrer">
        💻 GitHub Repository
      </a>
    </p>
  `,
    category: "Personal",
    image: project_doctor,
    createdAt: "2024-07-15T10:00:00.000Z",
    updatedAt: "2024-07-15T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "bot-interview",
    title: "Bot Interview",
    subTitle: "AI-Powered Mock Interview Platform",
    description: `
    <h1>Bot Interview</h1>
    <p>
      An AI-powered web platform that allows users to 
      <strong>simulate and practice job interviews</strong> through 
      <strong>intelligent, voice-based conversations</strong>. 
      The system leverages <strong>Google Gemini</strong> and <strong>Vapi</strong> 
      to deliver realistic interview scenarios.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li><strong>AI-powered interview simulation</strong> – practice with realistic job interview scenarios</li>
      <li><strong>Voice-based conversations</strong> – interact naturally with the system using speech</li>
      <li><strong>Google Gemini integration</strong> – generate dynamic and intelligent interview questions</li>
      <li><strong>Vapi integration</strong> – handle real-time voice interactions smoothly</li>
      <li><strong>User-friendly interface</strong> – clean and responsive UI for seamless practice sessions</li>
    </ul>
    <h2>Team Size</h2>
    <p>1 (Personal Project)</p>
    <h2>Technologies</h2>
    <ul>
      <li>Google Gemini + Vapi</li>
      <li>Next.js 14 + Tailwind CSS</li>
    </ul>
    <h2>Links</h2>
    <p>
      <a href="https://github.com/dinhhieu110/medbook_system" target="_blank" rel="noopener noreferrer">
        💻 GitHub Repository
      </a>
    </p>
  `,
    category: "Personal",
    image: project_bot,
    createdAt: "2025-04-19T10:00:00.000Z",
    updatedAt: "2025-04-19T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "candy-flower",
    title: "Candy Shaped Flower Shop",
    subTitle: "E-commerce Platform for Candy & Snack Bouquets",
    description: `
    <h1>Candy Shaped Flower Shop</h1>
    <p>
      An <strong>e-commerce web application</strong> designed for selling 
      <strong>candies, cookies, and snacks</strong> that are creatively 
      shaped and arranged like <strong>flowers and bouquets</strong>. 
      The platform allows customers to browse collections, view product 
      details, and place online orders with ease.
    </p>
    <h2>Team Size</h2>
    <p>1 (Personal Project)</p>
    <h2>Technologies</h2>
    <ul>
      <li>Front-end: React.js + Tailwind CSS</li>
      <li>Back-end: Node.js (Express)</li>
      <li>Database: MongoDB</li>
    </ul>
    <h2>Key Features</h2>
    <ul>
      <li>🍬 Browse and search candy-flower products</li>
      <li>🌸 View detailed product information with images</li>
      <li>🛒 Add to cart and place orders</li>
      <li>📦 Order management (customer side)</li>
    </ul>
    <h2>Author</h2>
    <p>
      👨‍💻 Tran Dinh Hieu (Wilson Tran) – Full Stack Developer
    </p>
    <h2>Links</h2>
    <p>
      <a href="https://github.com/dinhhieu110/flower_shop" target="_blank" rel="noopener noreferrer">
        💻 GitHub Repository
      </a>
    </p>
  `,
    category: "Personal",
    image: project_candy,
    createdAt: "2025-06-26T10:00:00.000Z", // adjust date if needed
    updatedAt: "2025-06-26T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "realtime-chat",
    title: "Real-Time Chat Application",
    subTitle: "Fullstack Real-Time Messenger with Video Calling",
    description: `
    <h1>Real-Time Chat Application</h1>
    <p>
      A <strong>full-stack real-time chat platform</strong> similar to Messenger, 
      allowing users to <strong>chat instantly</strong> with friends, 
      <strong>send media</strong>, and even make <strong>video calls</strong>. 
      Built with the MERN stack and powered by <strong>Socket.IO</strong> for 
      live interactions.
    </p>
    <h2>Team Size</h2>
    <p>1 (Personal Project)</p>
    <h2>Technologies</h2>
    <ul>
      <li>Front-end: React.js + Tailwind CSS</li>
      <li>Back-end: Node.js (Express)</li>
      <li>Database: MongoDB + Mongoose</li>
      <li>Real-time: Socket.IO</li>
      <li>Media: Cloudinary (file uploads)</li>
    </ul>
    <h2>Key Features</h2>
    <ul>
      <li>💬 Real-time private and group chat</li>
      <li>📸 Media & file sharing with Cloudinary integration</li>
      <li>🔐 Authentication & authorization with JWT + bcryptjs</li>
      <li>📞 One-to-one video calling</li>
      <li>🍪 Cookie-based session management</li>
    </ul>
    <h2>Packages</h2>
    <p>
      <code>express mongoose dotenv jsonwebtoken bcryptjs cookie-parser cloudinary socket.io</code>
    </p>
    <h2>Author</h2>
    <p>
      👨‍💻 Tran Dinh Hieu (Wilson Tran) – Full Stack Developer
    </p>
    <h2>Links</h2>
    <p>
      <a href="https://github.com/dinhhieu110/social_interaction_system" target="_blank" rel="noopener noreferrer">
        💻 GitHub Repository
      </a>
    </p>
  `,
    category: "Personal",
    image: project_chat,
    createdAt: "2025-06-27T10:00:00.000Z",
    updatedAt: "2025-06-27T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
  {
    _id: "bloomberg-trade",
    title: "BloombergTrade System",
    subTitle: "Stock Monitoring & Trading Statistics Platform",
    description: `
    <h1>BloombergTrade System</h1>
    <p>
      A <strong>modern web application</strong> that enables users to 
      <strong>monitor, search, and analyze</strong> the stock performance 
      of listed companies. The platform provides <strong>real-time insights</strong>, 
      allows users to build a <strong>personalized watchlist</strong>, 
      and includes <strong>admin tools</strong> for managing company data effectively.
    </p>
    <h2>Team Size</h2>
    <p>1 (Personal Project)</p>
    <h2>Technologies</h2>
    <ul>
      <li>Front-end: React.js (TypeScript) + Tailwind CSS</li>
      <li>Back-end: ASP.NET Web API (.NET)</li>
      <li>Database: SQL Server</li>
      <li>Authentication: JWT</li>
      <li>State Management: React Context API</li>
    </ul>
    <h2>Key Features</h2>
    <ul>
      <li>🔐 User authentication with role-based access control</li>
      <li>📈 Real-time stock price updates</li>
      <li>🔍 Search, filter, and sort companies by name, sector, or performance</li>
      <li>⭐ Add or remove stocks from personal watchlist</li>
      <li>📊 Company detail pages with historical performance charts</li>
      <li>🛠 Scalable and secure backend API</li>
    </ul>
    <h2>Installation & Setup</h2>
    <h3>Frontend</h3>
    <ol>
      <li>Clone the repository</li>
      <li>Navigate to the <code>client</code> folder</li>
      <li>Run <code>npm install</code></li>
      <li>Create a <code>.env</code> file and configure your API base URL</li>
      <li>Start the app with <code>npm run dev</code></li>
    </ol>
    <h3>Backend</h3>
    <ol>
      <li>Navigate to the <code>server</code> folder</li>
      <li>Restore NuGet packages</li>
      <li>Update <code>appsettings.json</code> with DB connection string and JWT settings</li>
      <li>Run the project with Visual Studio or <code>dotnet run</code></li>
    </ol>
    <h2>Author</h2>
    <p>
      👨‍💻 Tran Dinh Hieu (Wilson Tran) – Full Stack Developer passionate about building secure, scalable systems.
    </p>
    <h2>Links</h2>
    <p>
      <a href="https://github.com/dinhhieu110/bloomberg_trade_system" target="_blank" rel="noopener noreferrer">
        💻 GitHub Repository
      </a>
    </p>
  `,
    category: "Personal",
    image: project_trade,
    createdAt: "2025-06-28T10:00:00.000Z",
    updatedAt: "2025-06-28T10:00:00.000Z",
    __v: 0,
    isPublished: true,
  },
];

export const blog_data = [
  {
    _id: "6805ee7dd8f584af5da78d37",
    title: "A detailed step by step guide to manage your lifestyle",
    description:
      "<h1>A Simple Step-by-Step Guide to Managing Your Lifestyle</h1><p>If you're looking to improve your health, boost productivity, and create a balanced life, managing your lifestyle intentionally is key. Here's a short guide to help you take control of your daily habits and overall well-being.</p><h2>1. Assess Your Current Lifestyle</h2><p>Track your habits for a week. Note your energy levels, sleep, diet, and daily routines. Reflect on what's working and what needs change.</p><h2>2. Focus on Health</h2><p>Eat balanced meals, stay hydrated, get enough sleep, and move your body daily. Mental health matters too—set boundaries and practice mindfulness.</p><h2>3. Set Clear Goals</h2><p>Break your goals into categories like health, career, and relationships. Make them specific and achievable.</p><h2>4. Create Daily Routines</h2><p>Establish morning and evening routines. Plan your days and weeks with intention using a planner or digital calendar.</p><h2>5. Manage Time Wisely</h2><p>Prioritize important tasks, limit distractions, and take regular breaks. Learn to say no when needed.</p><h2>6. Handle Finances Smartly</h2><p>Track your spending, set a budget, save regularly, and build financial literacy. Financial stability supports overall peace of mind.</p><h2>7. Build Strong Relationships</h2><p>Surround yourself with supportive people. Communicate openly and maintain healthy boundaries.</p><h2>8. Keep Learning</h2><p>Read, take online courses, or explore new hobbies. Personal growth keeps life fulfilling and dynamic.</p><h2>9. Declutter Regularly</h2><p>Simplify your physical and digital spaces. Clear surroundings help reduce stress and increase focus.</p><h2>10. Celebrate Small Wins</h2><p>Track your progress, reflect often, and reward yourself for sticking to positive habits. Consistency is more important than perfection.</p><p><strong>Final Tip</strong>: Start small, stay consistent, and review your lifestyle regularly. With steady effort, a well-managed life becomes a natural way of living.</p>",
    category: "Lifestyle",
    image: blog_pic_1,
    createdAt: "2025-04-21T07:06:37.508Z",
    updatedAt: "2025-04-24T08:26:29.750Z",
    __v: 0,
    isPublished: true,
    subTitle: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
  },
  {
    _id: "6805ef08d8f584af5da78d39",
    title: "How to create an effective startup roadmap or ideas",
    description:
      '<p>\tCreating an effective <strong>startup roadmap</strong> helps you turn an idea into a structured, actionable plan. It gives clarity on what to build, when to build it, and how to scale. Here\'s a short and practical guide to help you build your startup roadmap or refine your startup ideas:</p><h2>1. <strong>Start with the Problem, Not the Product</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Identify a real, painful problem.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Validate that it affects a significant audience.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Ask: “Is this a must-have or just nice to have?”</li></ol><p><strong>Tip:</strong> Talk to real users, not just friends or family.</p><h2>2. <strong>Define Your Vision and Mission</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Vision: Long-term impact you want to make.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mission: The approach or method to get there.</li></ol><p>This gives your roadmap a clear direction and purpose.</p><h2>3. <strong>Brainstorm and Filter Ideas</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>List all possible solutions to the problem.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Evaluate each based on:</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Feasibility</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Market demand</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Uniqueness</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Revenue potential</li></ol><p>Shortlist 1-2 core ideas to pursue initially.</p><h2>4. <strong>Define Your MVP (Minimum Viable Product)</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Strip your idea down to the core functionality.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Build only what\'s needed to solve the problem simply.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Focus on value, not features.</li></ol><p><strong>Example:</strong> If you\'re building a job portal, start with user registration and job posting only.</p><h2>5. <strong>Set Milestones (Roadmap Stages)</strong></h2><p>Break your journey into clear phases:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 1: Research &amp; Validation</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Market research</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Competitor analysis</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>User interviews</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 2: MVP Development</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Build core product</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Internal testing</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 3: Launch &amp; Feedback</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Soft launch to early users</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Collect data, iterate</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 4: Growth &amp; Optimization</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Marketing</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Add features based on feedback</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Improve UI/UX</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 5: Scale</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Monetization</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Partnerships</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Hiring Team</li></ol><h2>6. <strong>Use Tools for Planning and Tracking</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Product roadmap tools: Trello, Notion, Jira, ClickUp</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Timeline tools: Gantt charts, Google Sheets, Miro</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Analytics: Mixpanel, Hotjar, GA4 for feedback loops</li></ol><h2>7. <strong>Keep It Flexible</strong></h2><p>A roadmap is a guide, not a rulebook. Be ready to pivot based on user feedback, market trends, or technical limitations.</p><h2>8. <strong>Revisit and Refine Regularly</strong></h2><p>Review your progress monthly or quarterly. Adjust priorities based on:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>User data</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Business metrics</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>New opportunities</li></ol><p><br></p>',
    category: "Startup",
    image: blog_pic_2,
    createdAt: "2025-04-21T07:08:56.214Z",
    updatedAt: "2025-04-24T08:30:47.920Z",
    __v: 0,
    isPublished: true,
    subTitle: "Creating an effective <strong>startup roadmap",
  },
  {
    _id: "6805f2aad8f584af5da78d3b",
    title: "Learning new technology to boost your career in software",
    description:
      '<h1>Learning New Tech to Boost Your Software Career</h1><p>In tech, staying still means falling behind. Here\'s how learning new technologies can fast-track your software career:</p><h2>1. <strong>Stay Relevant</strong></h2><p>Tech evolves fast. Learning modern tools, frameworks, or languages keeps you valuable to employers and clients.</p><h2>2. <strong>Increase Opportunities</strong></h2><p>New skills open doors—whether it\'s switching to a better role, freelancing, or launching your own product.</p><h2>3. <strong>Grow Your Confidence</strong></h2><p>Tackling new tech boosts problem-solving skills and helps you adapt quickly in real-world projects.</p><h2>4. <strong>Stand Out</strong></h2><p>Knowing in-demand skills (like TypeScript, DevOps, AI/ML, or cloud platforms) makes your resume and GitHub shine.</p><h2>5. <strong>How to Learn Smart</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Pick tech that aligns with your goals</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Build real projects</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Join communities and open source</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Stay consistent, not perfect</li></ol><p><br></p>',
    category: "Technology",
    image: blog_pic_3,
    createdAt: "2025-04-21T07:24:26.853Z",
    updatedAt: "2025-04-24T08:20:36.187Z",
    __v: 0,
    isPublished: true,
    subTitle: "Learning New Tech to Boost Your Software Career",
  },
  {
    _id: "6805f2e2d8f584af5da78d3d",
    title: "Tips for getting the most out of apps and software",
    description:
      "<h1>Tips for Getting the Most Out of Apps and Software</h1><p>We use tons of apps daily—but most people only scratch the surface. Here's how to truly unlock their value:</p><h2>1. <strong>Learn the Shortcuts</strong></h2><p>Keyboard shortcuts or gesture controls save time and improve your workflow.</p><h2>2. <strong>Explore All Features</strong></h2><p>Take time to go beyond the basics—many apps have hidden tools that boost productivity.</p><h2>3. <strong>Use Integrations</strong></h2><p>Connect apps (like linking your calendar with your task manager) to streamline your workflow.</p><h2>4. <strong>Customize Settings</strong></h2><p>Adjust preferences, themes, and notifications to suit how you work best.</p><h2>5. <strong>Keep It Updated</strong></h2><p>Updates often bring better features, security patches, and performance improvements.</p><h2>6. <strong>Sync Across Devices</strong></h2><p>Use cloud sync to stay productive whether you're on your phone, laptop, or tablet.</p><h2>7. <strong>Read the Docs or Tutorials</strong></h2><p>Official docs, videos, or help centers can reveal pro tips you might miss on your own.</p>",
    category: "Technology",
    image: blog_pic_4,
    createdAt: "2025-04-21T07:25:22.362Z",
    updatedAt: "2025-04-24T08:20:36.979Z",
    __v: 0,
    isPublished: true,
    subTitle: "Tips for Getting the Most Out of Apps and Software",
  },
  {
    _id: "6805f307d8f584af5da78d3f",
    title: "Enhancing your skills and capturing memorable moments",
    description:
      '<h1>Enhancing Your Skills and Capturing Memorable Moments</h1><p>In today\'s fast-paced world, Personal growth and preserving memories go hand in hand. Here\'s how to do both meaningfully:</p><h2>1. <strong>Invest in Skill Building</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Set clear learning goals</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Practice consistently through real projects</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Use online platforms like YouTube, Coursera, or freeCodeCamp</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Track progress to stay motivated</li></ol><h2>2. <strong>Capture Moments That Matter</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Take photos/videos of milestones, both big and small</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Keep a digital or physical journal</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Use apps like Google Photos or Notion to organize memories</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Reflect regularly—it helps you appreciate the journey</li></ol><h2>3. <strong>Balance Growth and Presence</strong></h2><p>While chasing goals, don\'t forget to pause and enjoy the process. Learn, improve, and make time to document the moments that shape you.</p>',
    category: "Lifestyle",
    image: blog_pic_5,
    createdAt: "2025-04-21T07:25:59.789Z",
    updatedAt: "2025-04-24T08:32:42.649Z",
    __v: 0,
    isPublished: true,
    subTitle: "Enhancing Your Skills and Capturing Memorable Moments",
  },
  {
    _id: "6805f324d8f584af5da78d41",
    title: "Maximizing returns by minimizing resources in your startup",
    description:
      "<h1>Maximizing Returns by Minimizing Resources in Your Startup</h1><p>Startups thrive not by having the most, but by using the least for the most impact. Here's how to do more with less:</p><h2>1. <strong>Focus on Core Value</strong></h2><p>Build only what solves the main problem. Avoid bloated features early on.</p><h2>2. <strong>Use No-Code/Low-Code Tools</strong></h2><p>Launch faster and cheaper using platforms like Webflow, Bubble, or Airtable.</p><h2>3. <strong>Automate Repetitive Tasks</strong></h2><p>Use tools like Zapier or Make to automate workflows without hiring extra help.</p><h2>4. <strong>Outsource Smartly</strong></h2><p>Hire freelancers or agencies for specific needs instead of full-time staff too early.</p><h2>5. <strong>Test Before You Scale</strong></h2><p>Validate ideas with a small user base before investing in full development or marketing.</p><h2>6. <strong>Keep Overhead Low</strong></h2><p>Work remotely, avoid unnecessary software subscriptions, and stay lean.</p>",
    category: "Startup",
    image: blog_pic_6,
    createdAt: "2025-04-21T07:26:28.058Z",
    updatedAt: "2025-04-24T09:32:08.179Z",
    __v: 0,
    isPublished: true,
    subTitle: "Maximizing Returns by Minimizing Resources in Your Startup",
  },
  {
    _id: "68062afc8474108ecb7d7944",
    title: "Taxes on Luxury Houses",
    description:
      "<h2>Luxury Home Taxes: Are They Fair, and What Do They Mean for the Market?</h2><p>\r\n</p><p>Luxury homes. The pinnacle of real estate, often boasting breathtaking views, lavish amenities, and price tags that make your eyes water. But with great wealth comes great responsibility... and in this case, that includes taxes. But are taxes on luxury homes fair? And what impact do they actually have on the overall real estate market? Let's dive in.</p><p>\r\n</p><p><strong>What Exactly are Luxury Home Taxes?</strong></p><p>\r\n</p><p>First, let's clarify what we're talking about. Luxury home taxes aren't a specific, separate tax category in most places. Instead, they refer to the <em>property taxes</em> applied to high-value homes. These taxes are calculated based on the assessed value of the property, and because luxury homes are worth significantly more, they naturally generate higher tax bills.</p><p>\r\n</p><p>In some areas, there might also be:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>The Argument for Higher Taxes on Luxury Homes</strong></p><p>\r\n</p><p>Proponents of higher taxes on luxury homes argue that it's a matter of fairness and social responsibility. Their rationale often includes:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>The Argument Against Higher Taxes on Luxury Homes</strong></p><p>\r\n</p><p>On the other hand, arguments against higher taxes on luxury homes often center around potential negative consequences:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>The Impact on the Real Estate Market</strong></p><p>\r\n</p><p>The impact of luxury home taxes on the real estate market is a complex issue with no easy answers. Here's what we know:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>The Future of Luxury Home Taxes</strong></p><p>\r\n</p><p>The debate over luxury home taxes is likely to continue as governments grapple with funding public services and addressing income inequality. Here are some potential trends to watch:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>Conclusion</strong></p><p>\r\n</p><p>Taxation of luxury homes is a complex issue with strong arguments on both sides. While it can be a valuable source of revenue for public services, it can also have unintended consequences for the real estate market and the overall economy. Finding the right balance requires careful consideration of the specific circumstances of each community and a commitment to fairness, transparency, and economic sustainability.</p><p>\r\n</p><p><strong>What are your thoughts on luxury home taxes? Share your opinions in the comments below!</strong></p><p>\r\n</p>",
    category: "Finance",
    image: blog_pic_7,
    createdAt: "2025-04-21T11:24:44.773Z",
    updatedAt: "2025-04-24T09:31:52.102Z",
    __v: 0,
    isPublished: true,
    subTitle: "What Do They Mean for the Market?",
  },
  {
    _id: "6809f9f23e075dbeedd23bca",
    title: "The New Way of Study",
    description:
      "<h2>The New Way of Study: Ditching the Old, Embracing the Now</h2><p>\n</p><p>For years, the image of studying has been synonymous with late nights, stacks of textbooks, and the constant pressure to memorize. But let's face it: that traditional approach is often ineffective, stressful, and frankly, outdated. In today's rapidly evolving world, the \"new way of study\" is less about rote memorization and more about <strong>understanding, application, and Personalized learning.</strong></p><p>\n</p><p>So, what does this \"new way\" actually look like? Let's dive in:</p><p>\n</p><p><strong>1. Active Learning is King (and Queen!):</strong></p><p>\n</p><p>Forget passively rereading notes. The new way prioritizes actively engaging with the material. This means:</p><p>\n</p><p><br></p><p>\n</p><p><strong>2. Personalized Learning: Tailoring Your Approach:</strong></p><p>\n</p><p>One-size-fits-all doesn't work for learning. The new way encourages you to:</p><p>\n</p><p><br></p><p>\n</p><p><strong>3. Focus &amp; Mindfulness: Train Your Brain for Success:</strong></p><p>\n</p><p>Distraction is the enemy of effective learning. The new way emphasizes:</p><p>\n</p><p><br></p><p>\n</p><p><strong>4. Collaboration &amp; Community: Learning Together:</strong></p><p>\n</p><p>Learning doesn't have to be a solitary pursuit. The new way encourages:</p><p>\n</p><p><br></p><p>\n</p><p><strong>In Conclusion:</strong></p><p>\n</p><p>The \"new way of study\" is about embracing a more active, Personalized, and holistic approach to learning. It's about understanding concepts, applying knowledge, and cultivating a lifelong love of learning. By ditching the outdated methods and embracing these new strategies, you can unlock your full potential and achieve academic success without the stress and burnout. So, are you ready to embrace the new way?</p><p>\n</p><p><strong>What are your favorite study techniques? Share them in the comments below!</strong></p><p>\n</p>",
    category: "Finance",
    image: blog_pic_8,
    isPublished: true,
    createdAt: "2025-04-24T08:44:34.937Z",
    updatedAt: "2025-04-24T09:59:21.299Z",
    __v: 0,
    subTitle: "The New Way of Study: Ditching the Old",
  },
  {
    _id: "6810995bb5fd81dd0c923d5b",
    title: "Importance of Tourism",
    description:
      "<h2>Beyond Postcards: Why Tourism Matters More Than You Think</h2><p>\n</p><p>Tourism. The word conjures up images of sun-drenched beaches, historical landmarks, and exotic adventures. But beyond the beautiful photos and unforgettable experiences, tourism is a powerhouse, a driving force that shapes economies, cultures, and even the environment. It's much more than just vacations; it's a complex and vital industry that deserves our attention and understanding.</p><p>\n</p><p>So, why is tourism so important? Let's dive in:</p><p>\n</p><p><strong>1. Fueling the Economic Engine:</strong></p><p>\n</p><p><br></p><p>\n</p><p><strong>2. Preserving Culture and Heritage:</strong></p><p>\n</p><p><br></p><p>\n</p><p><strong>3. Fostering Sustainable Development:</strong></p><p>\n</p><p><br></p><p>\n</p><p><strong>The Challenges and the Future:</strong></p><p>\n</p><p>While the benefits of tourism are undeniable, it's important to acknowledge the potential challenges. Over-tourism, environmental degradation, and the exploitation of local communities are serious concerns.</p><p>\n</p><p>However, by embracing responsible and sustainable tourism practices, we can mitigate these risks and ensure that tourism benefits everyone involved. This includes:</p><p>\n</p><p><br></p><p>\n</p><p><strong>In Conclusion:</strong></p><p>\n</p><p>Tourism is a powerful force that can drive economic growth, preserve cultural heritage, and foster sustainable development. By understanding its importance and embracing responsible practices, we can unlock its full potential to create a better world for all. So, the next time you plan a trip, consider the impact you can have and choose to be a conscious and responsible traveler. Your journey can make a real difference.</p><p>\n</p><p><strong>What are your thoughts on the importance of tourism? Share your experiences and insights in the comments below!</strong></p><p>\n</p>",
    category: "Lifestyle",
    image: blog_pic_9,
    isPublished: true,
    createdAt: "2025-04-29T09:18:19.662Z",
    updatedAt: "2025-04-29T10:13:25.035Z",
    __v: 0,
    subTitle: " Why Tourism Matters More Than You Think",
  },
  {
    _id: "6810a6a2ed57ecc68a99abb3",
    title: "AI best practices in healthcare",
    description:
      '<h2>AI Best Practices in Healthcare: Navigating the Future Responsibly</h2><p>\n</p><p>Artificial Intelligence (AI) is rapidly transforming healthcare, promising to revolutionize everything from diagnosis and treatment to patient care and operational efficiency. But with great power comes great responsibility. To harness the full potential of AI in healthcare while mitigating risks, we need to adopt a set of best practices that prioritize patient safety, ethical considerations, and responsible innovation.</p><p>\n</p><p>This blog post explores key AI best practices in healthcare, offering a roadmap for organizations looking to integrate AI solutions effectively and ethically.</p><p>\n</p><p><strong>1. Prioritize Patient Safety and Well-being Above All Else:</strong></p><p>\n</p><p>This is the golden rule of AI in healthcare. Any AI application must be rigorously tested and validated to ensure it enhances, not hinders, patient care.</p><p>\n</p><p>\n</p><p><strong>2. Embrace Transparency and Explainability (XAI):</strong></p><p>\n</p><p>"Black box" AI can erode trust and make it difficult to understand how decisions are made. Strive for transparency and explainability in your AI solutions.</p><p>\n</p><p>\n</p><p><strong>3. Address Bias and Ensure Fairness:</strong></p><p>\n</p><p>AI models are trained on data, and if that data reflects existing biases in the healthcare system, the AI will perpetuate and potentially amplify those biases.</p><p>\n</p><p>\n</p><p><strong>4. Secure Patient Data and Protect Privacy:</strong></p><p>\n</p><p>Data security and patient privacy are paramount. AI systems must comply with all applicable regulations and protect sensitive patient information.</p><p>\n</p><p>\n</p><p><strong>5. Foster Collaboration and Continuous Learning:</strong></p><p>\n</p><p>AI development in healthcare is a collaborative effort.  Break down silos and encourage knowledge sharing among stakeholders.</p><p>\n\n</p><p><strong>6. Define Clear Roles and Responsibilities:</strong></p><p>\n</p><p>Clearly define the roles and responsibilities of each stakeholder involved in AI development and deployment.</p><p>\n</p><p><br></p><p>\n</p><p><strong>Conclusion: Embracing a Future of Responsible AI in Healthcare</strong></p><p>\n</p><p>AI holds immense potential to transform healthcare for the better. By embracing these best practices, healthcare organizations can navigate the complexities of AI integration responsibly, ensuring patient safety, ethical considerations, and data privacy are at the forefront.  As AI continues to evolve, a commitment to continuous learning and adaptation will be crucial to unlocking its full potential and building a future where AI empowers healthcare professionals to deliver the best possible care to patients.</p><p>\n</p><p><strong>What are your thoughts? What other best practices do you think are essential for AI in healthcare? Share your insights in the comments below!</strong></p><p>\n</p>',
    category: "Lifestyle",
    image: blog_pic_10,
    isPublished: true,
    createdAt: "2025-04-29T10:14:58.575Z",
    updatedAt: "2025-04-29T10:14:58.575Z",
    __v: 0,
    subTitle: "Navigating the Future Responsibly",
  },
];

export const comments_data = [
  {
    _id: "6811ed9e7836a82ba747cb25",
    blog: blog_data[0],
    name: "Michael Scott",
    content: "This is my new comment",
    isApproved: false,
    createdAt: "2025-04-30T09:30:06.918Z",
    updatedAt: "2025-04-30T09:30:06.918Z",
    __v: 0,
  },
  {
    _id: "6810a752fbb942aa7cbf4adb",
    blog: blog_data[1],
    name: "John Doe",
    content: "This is a nice blog",
    isApproved: false,
    createdAt: "2025-04-29T10:17:54.832Z",
    updatedAt: "2025-04-29T10:17:54.832Z",
    __v: 0,
  },
  {
    _id: "680779aebef75c08f8b4898f",
    blog: blog_data[2],
    name: "Jack London",
    content: "Hi this blog is must to read",
    isApproved: true,
    createdAt: "2025-04-22T11:12:46.547Z",
    updatedAt: "2025-04-22T11:13:10.015Z",
    __v: 0,
  },
  {
    _id: "680770aeb2897e5c28bf9b26",
    blog: blog_data[3],
    name: "Sam Smith",
    content: "This is the best blog, everybody should read it",
    isApproved: false,
    createdAt: "2025-04-22T10:34:22.020Z",
    updatedAt: "2025-04-22T10:34:22.020Z",
    __v: 0,
  },
  {
    _id: "68076468e32055c94a696cf5",
    blog: blog_data[4],
    name: "Peter Lawrence",
    content:
      "Honestly, I did not expect this to work, but it totally did. Saved my project!",
    isApproved: true,
    createdAt: "2025-04-22T09:42:00.444Z",
    updatedAt: "2025-04-22T10:24:55.626Z",
    __v: 0,
  },
];

export const dashboard_data = {
  blogs: 10,
  comments: 5,
  drafts: 0,
  recentBlogs: blog_data.slice(0, 5),
};

export const footer_data = [
  {
    title: "Quick Links",
    links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"],
  },
  {
    title: "Need Help?",
    links: [
      "Delivery Information",
      "Return & Refund Policy",
      "Payment Methods",
      "Track your Order",
      "Contact Us",
    ],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "Twitter", "Facebook", "YouTube"],
  },
];

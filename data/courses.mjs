// ------------- Web Certificates -------------------------
export const certificates = [
    {
        program: C129,
        certificate: 'Web & Computer Programming',
        employment: 'Training in web and computer programming prepares you for the constantly changing field of web and software development by helping you gain skills in designing user interfaces and a variety of programming languages. Careers that may be related to this degree include: Junior programmer, Software quality assurance tester, Web frontend developer,Web content developer, Junior JavaScript developer',
        outcome: [
            'Write programs to accomplish meaningful tasks in a variety of domains.',
            'Design websites that are visually appealing and effective.',
            'Develop dynamic webpages that follow standards and best practices.',
            'Learn and apply new technology and techniques in future programming.'
        ],
        courses: [
            'CSE110 - Introduction to Programming',
            'WDD130 - Web Fundamentals',
            'CSE111 - Programming with Functions',
            'CSE210 - Programming with Classes',
            'WDD131 - Dynamic Web Fundamentals',
            'WDD231 - Web Frontend Development I'
        ],
        completed: true,
        completedDate: '6-20-2026'
    },
    {
        program: C175,
        certificate: 'Web Development',
        employment: 'Web development training enables you to use your skills in graphic design, aesthetics, branding, and software development to create a website. You will be able to increase user traffic, while improving user experience. Other careers that may be related to this degree include: General programmer, Web developer',
        outcome: [
            'Demonstrate the design and creation of relational databases.',
            'Develop and debug HTML, CSS, and JavaScript programs that use medium complexity web technologies.',
            'Develop backend functionality for web applications.',
            'Develop, document, and deploy web services.',
            'Develop full stack web applications.',
            'Use code to solve problems.'
        ],
        courses: [
            'ITM111 - Introduction to Databases',
            'WDD330 - Web Frontend Development II',
            'CSE340 - Web Backend Development',
            'CSE341 - Web Services',
            'WDD430 - Web Full-Stack Development'
        ],
        completed: true,
        completedDate: ''
    },
    {
        program: C178,
        certificate: 'Software Development',
        employment: '',
        outcome: [
            'Develop software to solve meaningful problems in a variety of domains.',
            'Systematically evaluate the pros and cons of alternative solutions.',
            'Prepare and execute software test plans.',
            'Be self-reliant learners.',
            'Demonstrate effective skills related to getting a job as a software developer.',
            'Demonstrate the traits of an effective team member.'
        ],
        courses: [
            'CSE212 - Programming with Data Structures',
            'CSE270 - Software Testing',
            'CSE300 - Professional Readiness',
            'CSE310 - Applied Programming',
            'CSE325 - .Net Software Development',
            'CSE370 - Software Engineering Principles'
        ],
        completed: true,
        completedDate: ''
    }
]

// ------------- Web Certificate Courses -------------------------
export const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        learningOutcome: [
            'Use programming building blocks (variables, conditionals, loops, lists) to accomplish meaningful tasks in a variety of domains.',
            'Develop confidence in learning new programming skills.'
        ],

        completed: true,
        completedDate: '12-13-2025'
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        learningOutcome: [
            'Demonstrate basic proficiency in using current, valid, and semantic Hypertext Markup Language (HTML) syntax to define the structure and content of a webpage.',
            'Demonstrate basic proficiency in using current valid Cascading Style Sheets (CSS) to style an HTML document.',
            'Plan, design, and develop web pages and sites according to best practices of organization and maintainability.',
            'Discover and analyze the web design and development industry as a career path.',
            'Work effectively with others by communicating clearly, collaborating as a team member, fulfilling assignments, and meeting deadlines.'
        ],
        completed: true,
        completedDate: '2-21-2026'
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        learningOutcome: [
            'Write and call functions in programs to accomplish meaningful tasks in a variety of domains.',
            'Research and call functions written by others.',
            'Write programs that can detect and recover from invalid conditions.',
            'Write programs that use objects and libraries written by others.',
            'Follow good practices in designing, writing, and debugging functions.'
        ],
        completed: true,
        completedDate: '2-21-2026'
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        learningOutcome: [
            'Articulate the principles of programming with classes.',
            'Design software using the principles of programming with classes.',
            'Develop working software using the techniques of programming with classes.'
        ],
        completed: true,
        completedDate: '4-18-2026'
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        learningOutcome: [
            'Develop responsive web pages that follow best practices and use valid HTML and CSS.',
            'Demonstrate proficiency with JavaScript language syntax.',
            'Use JavaScript to respond to events and dynamically modify HTML.',
            'Demonstrate the traits of an effective team member (such as clear communication, collaboration, fulfilling assignments, and meeting deadlines).'
        ],
        completed: true,
        completedDate: '4-18-2026'
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        learningOutcome: [
            'Develop dynamic websites that use valid HTML and CSS that follow best practices of accessibility and compliance.',
            'Create dynamic web sites that leverage browser APIs, JSON, and remote APIs.',
            'Use industry tools to monitor performance and to optimize the user experience.',
            'Demonstrate the traits of an effective team member (such as clear communication, collaboration, fulfilling assignments, and meeting deadlines).'
        ],
        completed: true,
        completedDate: '6-20-2026'
    },
    {
        subject: 'ITM',
        number: 111,
        title: 'Introduction to Databases',
        credits: 3,
        certificate: 'Web Development',
        description: 'This course covers the basic elements of database management systems. It introduces students to the concepts of logical and physical relationships in a data model and the concepts of inner and outer joins. Students will use a computer aided software engineering (CASE) tool to design, create, and query a database.',
        technology: [
            'SQL'
        ],
        learningOutcome: [
            'Explain how data and databases are used in business systems.',
            'Demonstrate the design and creation of relational databases.',
            'Use a DBMS (Database Management System) and CASE (Computer-Aided Software Engineering) tool.',
            'Construct Create, Insert, Update, and Delete statements.',
            'Query a database using single and multiple tables, including built-in aggregate functions and WHERE clause filtering.'
        ],
        completed: true,
        completedDate: '6-20-2026'
    },
    {
        subject: 'WDD',
        number: 330,
        title: 'Web Frontend Development II',
        credits: 3,
        certificate: 'Web Development',
        description: 'This course will continue with the topics presented in WDD 231 Web Front-end Development I: Building websites with HTML, CSS, and Javascript. This course will have a stronger emphasis on Javascript development and mobile design as students create mobile web applications.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        learningOutcome: [
            'Become more efficient at applying your innate curiosity and creativity.',
            'Become more dexterous at exploring your environment.',
            'Become a person who enjoys helping and learning from others.',
            'Use a divide and conquer approach to design solutions for programming problems.',
            'Finding and trouble shooting bugs you and others will have in the code you write.',
            'Developing and debugging HTML, CSS, and JavaScript programs that use medium complexity web technologies.'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'CSE',
        number: 340,
        title: 'Web Backend Development',
        credits: 3,
        certificate: 'Web Development',
        description: 'This programming course focuses on constructing dynamic web sites using server-side languages, making use of databases and design patterns. The concepts introduced in Web Frontend Development courses are expected to be continued and implemented.',
        technology: [
            ''
        ],
        learningOutcome: [
            'Develop to current web frontend standards of validity and practice.',
            'Use variables, arrays, functions, and control structures in server code.',
            'Develop web applications that implement common design patterns.',
            'Design and use relational databases for CRUD interactions.',
            'Validate data (client-side and server-side) appropriate to the task.',
            'Demonstrate the skills of a productive team member (such as solving problems, collaborating with others, communicating clearly, fulfilling assignments, and meeting deadlines.)'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'CSE',
        number: 341,
        title: 'Web Services',
        credits: 3,
        certificate: 'Web Development',
        description: 'This course focuses on the backend development of dynamic, service-oriented web applications. Students will learn how to design and implement web services, how to interact with data storage, and how to use these tools to build functioning web application.',
        technology: [
            ''
        ],
        learningOutcome: [
            'Understand the difference between server-side rendering and REST APIs and how to implement them.',
            'Incorporate a secure authentication system in a web application that traverses the full stack.',
            'Deploy a full stack application to the web.',
            'Develop, document, and deploy a secure REST API that performs CRUD operations on a NoSQL database.',
            'Effectively contribute to a team while learning independently.'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'WDD',
        number: 430,
        title: 'Web Full-Stack Development',
        credits: 3,
        certificate: 'Web Development',
        description: 'This course will teach you how to design and build interactive web based applications using HTML, CSS, JavaScript, and a web development stack.',
        technology: [
            ''
        ],
        learningOutcome: [
            'Demonstrate the use of advanced JavaScript concepts.',
            'Design web based applications using the MEAN web development stack: MongoDB, Express, AngularJS, and Node.js.',
            'Design and develop NoSQL databases using good design principles.',
            'Develop a web based application that uses a JavaScript framework on the front end, and a Node.js application server on the back end connected to a NoSQL database. The application will allow the end user to insert new data, update existing data, delete data and return data stored in the NoSQL database.',
            'Work effectively in teams and demonstrate good communication skills.'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'CSE',
        number: 212,
        title: 'Programming with Data Structures',
        credits: 2,
        certificate: 'Software Development',
        description: 'This course will introduce students to the common programming data structures with an emphasis on how to use them to solve practical, real-world problems.',
        technology: [
            ''
        ],
        learningOutcome: [
            'Apply a systematic approach to writing code to solve problems involving data structures.',
            'Evaluate the performance of alternative solutions for code containing data structures using big O notation.',
            'Predict the purpose and behavior of existing code containing data structures.',
            'Discover defects using testing in code containing data structures.',
            'Articulate the answers to technical questions involving data structures.',
            'Solve problems using data structures independently.'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'CSE',
        number: 270,
        title: 'Software Testing',
        credits: 3,
        certificate: 'Software Development',
        description: 'Software Testing is a systematic process of verifying requirements and design elements, features, or standards against the implementation to increase product success. The verification process uses a set of test paths starting from the minor units up to the entire deliverable system using predetermined or live data to build confidence that the product works right (as specified). CSE 270 will explore testing standards, techniques, tools, and cases.',
        technology: [
            ''
        ],
        learningOutcome: [
            'Classify (list, define, and explain) the software testing concepts, tools, and processes.',
            'Appraise and assess software testing tools and techniques to address the needs of a given scenario.',
            'Prepare and implement a test plan.',
            'Work with a partner and in small teams to achieve a shared goal.',
            'Learn information from a wide variety of professional sources.'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'CSE',
        number: 300,
        title: 'Professional Readiness',
        credits: 3,
        certificate: 'Software Development',
        description: '',
        technology: [
            ''
        ],
        learningOutcome: [
            'Develop effective skills relating to building professional connections, confidence, and employability.'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'CSE',
        number: 310,
        title: '',
        credits: 3,
        certificate: 'Software Development',
        description: 'This course will teach students to work in teams on large projects using new technology on self-defined projects. The class will simulate real-word programming projects with the aim of producing workable solutions that have potential impact.',
        technology: [
            ''
        ],
        learningOutcome: [
            'Independently research and create computing solutions in a variety of languages and domains.',
            'Contribute and interact with peers to successfully develop software.'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'CSE',
        number: 325,
        title: '',
        credits: 3,
        certificate: 'Software Development',
        description: 'This course leverages a students fundamental software development and core web technology background with the Microsoft .NET framework with C# using the Visual Studio Integrated Development Environment. Students will build upon a C# foundation using the ASP.NET framework to design and develop scalable, standards-based web sites, applications, and services using contemporary methodologies and established design patterns. Team work and programming deliverables will be required.',
        technology: [
            ''
        ],
        learningOutcome: [
            'Define the role of the .NET Framework and the Microsoft Visual Studio Integrated Development Environment in the development industry.',
            'Develop a working competency of the C# language using common control structures and object-oriented principles.',
            'Demonstrate a working competency in using the MS Visual Studio platform developing applications with C#.',
            'Plan, design, and develop windows given functional and developmental specifications.',
            'Plan, design, and develop dynamic web content using ASP.NET with the Razor syntax and core web technologies (HTML, CSS, JavaScript).',
            'Leverage the power of the Model-View-Controller design pattern and plan, design, and develop ASP.NET MVC web applications.',
            'Categorize and utilize the .NET frameworks, technologies and add-ons.',
            'Analyze, design, develop, and test a web-based application using ASP.NET with C# in a small team environment.'
        ],
        completed: false,
        completedDate: ''
    },
    {
        subject: 'CSE',
        number: 370,
        title: 'Software Engineering Principles',
        credits: 2,
        certificate: 'Software Development',
        description: 'Students learn to analyze and make decisions in software projects through all phases of the software development lifecycle, including requirements elicitation, design, testing, verification, and maintenance.',
        technology: [
            ''
        ],
        learningOutcome: [
            'Describe each phase of a software development project.',
            'Compare and contrast software lifecycle models.',
            'Analyze software projects at various phases.'
        ],
        completed: false,
        completedDate: ''
    }

]
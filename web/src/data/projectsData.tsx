let route = 'images/projects/';
const softwareData = [
  {
    name: "Digital office",
    srcImage: route + "digitalOffice.png",
    text: "Web system that allows the users to generate different types of documents using Cryptographic services i.e. bills, memorandums, and private memorandums, to sign each document related to the meeting that they had attended previously and to be able to have a register of all the documents, and meetings, that the worker/employee has signed, or has been given permission to check, through their history as users of this system.",
    tech: "Python, Flask and MySQL.",
    
    teamWork: [
      {
        name: "Cesar Hernandez",
        url: "https://github.com/llCUriel"
      },
      {
        name: "Daniel Gonzalez",
        url: "https://github.com/DanielDumile"
      }
    ],
    // thereIsLink: [github, demo, documentation, awards]
    thereIsLink: [true, false, true, false], 
    links: [
        "https://github.com/abiisnn/Digital-Office",
        "",
        "documents/DigitalOffice.pdf",
        ""
    ]
  },
  {
    name: "Imaginary Friends",
    srcImage: route + "ImaginaryFriends.png",
    text: "Mobile App and WIX application that allows the kids of all kinds to draw their imaginary friends to visualize them using augmented reality and keep in the app to improve social skills.  Parents can check charts about the feelings of their children. This application is also capable of detecting the mood using the IBM Watson tone analyzer. Project winner of the 2nd Place at the category “IBM Health Hack” at TreeHacks [MLH] Hackathon.",
    tech: "Android, WIX, IBM Watson.",
    teamWork: [
        {
            name: "Sergio Sanchez",
            url: "https://github.com/searleser97"
        },
        {
            name: "Cinthya Parra",
            url: "https://github.com/DoloresPGz"
        },
        {
            name: "Ivan Hernandez",
            url: "https://github.com/Ivan-hdz"
        }
    ],
    // thereIsLink: [github, demo, documentation, awards]
    thereIsLink: [true, true, true, true], 
    links: [
        "https://github.com/abiisnn/ImaginaryFriends",
        "https://anicolass1300.wixsite.com/imaginaryfriends",
        "/documents/ImaginaryFriends.pdf",
        "https://devpost.com/software/imaginaryfriends"
    ]
},
  {
    name: "Organize an Event",
    srcImage: route + "OrganizeAnEvent.png",
    text: "A Web System to control assistance and documents to an academic ceremony. It allows us to pass assistance using bar codes and QR inside the web app. Also, it allows us to get the statistics of the event (in PDF) and to send the invitations through email. It allows having different types of users (people attending the event and admins).  This system was developed for the 'WEB Technologies' class.",
    tech: "React, PHP and MySQL.",
    teamWork: [
        {
            name: "Enrique Ramos",
            url: "https://github.com/brokenerk"
        },
        {
            name: "Oscar Rosas",
            url: "https://soyoscarrh.github.io/"
        }
    ],
    // thereIsLink: [github, demo, documentation, awards]
    thereIsLink: [true, false, false, false], 
    links: [
        "https://github.com/SoyOscarRH/OrganizeAnEvent",
        "",
        "",
        ""
    ]
},
{
  name: "Star Cluster Algorithm",
  srcImage: route + "Star.png",
  text: "This project implements the Brute Force Star Cluster Algorithm. From a big population of stars in the sky (currently in a 2D space), it finds the two of them with the minimum distance between each other. We put an animation of how the algorithm is supposed to be working when it calculates the distance from a point to point. Now is zero optimized and takes a lot of time (brute force solution) ... but take a look!",
tech: "Vis.js, Anime.js, jQuery, JavaScript, Materialize.",
teamWork: [
    {
      name: "Enrique Ramos",
      url: "https://github.com/brokenerk"
    },
    {
      name: "Cinthya Parra",
      url: "https://github.com/DoloresPGz"
    }
  ],
  // thereIsLink: [github, demo, documentation, awards]
  thereIsLink: [true, true, false, false], 
  links: [
      "https://github.com/brokenerk/brokenerk.github.io/tree/master/projects/CumuloEstrellas",
      "https://brokenerk.github.io/projects/CumuloEstrellas/index.html",
      "",
      ""
  ]
},
   { 
      name: "Earth Mozione",
      srcImage: route + "EarthMozione.PNG",
      text: "An IoT application consists of a network of seismic sensor devices connected providing feedback among them to alert with seconds of anticipation about an earthquake from a mobile application to the user. Project winner of 1st Place at MxHacks [MLH] Hackathon.",
      tech: "We use Android, Arduino and Huawei Cloud.",
		teamWork: [
			{
				name: "Sergio Sanchez",
				url: "https://github.com/searleser97"
			},
			{
					name: "Cinthya Parra",
					url: "https://github.com/DoloresPGz"
			},
			{
					name: "Ivan Hernandez",
					url: "https://github.com/Ivan-hdz"
			}
		],
		// thereIsLink: [github, demo, documentation, awards]
		thereIsLink: [true, false, true, true],        
		links: [
			"https://github.com/abiisnn/EarthMozione",
			"",
			"documents/EarthMozione.pdf",
			"https://devpost.com/software/earthmozione-4fd7hq"
		]
   },
   { 
		name: "Multicast Chat",
		srcImage: route + "chat.png",
		text: "A common public Chat Room that allows to send and receive text messages, images, and also files via multicast. All you have to do is log in with a username. Also, if you want a private chat room, you have to select the user you want to begin the conversation, and a new tab will open. Don't forget to allow pop-ups!",
		tech: "We use Socket IO, JavaScript, HTML y CSS.",
		
		teamWork: [
			{
			name: "Enrique Ramos",
			url: "https://github.com/brokenerk"
			}
		],
		// thereIsLink: [github, demo, documentation, awards]
		thereIsLink: [true, true, true, false],        
		links: [
			"https://github.com/brokenerk/Chat-Multicast",
			"https://chat-multicast.herokuapp.com/",
			"document/ChatMulticast.pdf",
			""
		]
   },
    {
      name: "SAEEB",
      srcImage: route + "saeeb.png",
      text: "SAEEB is a web system prototype for the academic management of students from elementary schools. The account created will be managed by the student's parents and it will allow scheduling appointments with the teachers, check the student grades, send emails or notes between the teachers and parents, update the student's academic and personal info and also generate PDF with the global scores.",
      tech: "HTML, CSS, PHP and MySQL.",
      
      teamWork: [
        {
          name: "Enrique Ramos",
          url: "https://github.com/brokenerk"
        },
        {
          name: "Yair Carrillo",
          url: "https://github.com/YairCarrillo"
        }
      ],
      // thereIsLink: [github, demo, documentation, awards]
      thereIsLink: [true, false, true, false], 
      links: [
          "https://github.com/abiisnn/SAEEB",
          "",
          "documents/SAEEB.pdf",
          ""
      ]
    },
    { 
      name: "AllJeux Controller", 
      srcImage: route + "AllJeux.png",
      text: "This isn't a project like the others showed. It's a prototype of a joystick for people with only one hand or with a disability that don't let them conventionally play videogames. There are a lot of designs of it and has its business plan, available for anyone who wants to read it, and even we had created an imaginary company called AllJeux. We made a little webpage for marketing, check it out!",
    tech: "HTML, Materialize, Adobe Illustrator and LaTeX to full documentation.",
    teamWork: [
        {
          name: "Enrique Romero",
          url: "https://github.com"
        },
        {
          name: "Enrique Ramos",
          url: "https://github.com/brokenerk"
        }
      ],
    // thereIsLink: [github, demo, documentation, awards]
    thereIsLink: [false, true, true, false], 
    links: [
        "",
        "https://brokenerk.github.io/projects/AllJeux/index.html",
        "documents/AllJeux.pdf",
        ""
    ]
    },
    { 
      name: "Academic Program Management", 
      srcImage: route + "is.png",
      text: "A Web application which objective was to improve the way an Academic Program was created and managed at my university (IPN). It was developed for all the class, we were working in 3 teams: Analysis and Design, Developing and Testing. It allows creating and editing a new Academic Program, when this program is accepted, you can generate a PDF with a specific format. ",
    tech: "Angular, PostgreSQL and LaTeX to full documentation.",
    
    teamWork: [
        {
          name: "Ivan Hernandez",
          url: "https://github.com/Ivan-hdz"
        },
        {
          name: "J. Manuel Calva",
          url: "https://github.com/akotadi"
        },
        {
          name: "And 16 more ...",
          url: "https://github.com/orgs/SoftwareEngineerESCOM/people"
        }
      ],
     // thereIsLink: [github, demo, documentation, awards]
     thereIsLink: [true, true, true, false], 
     links: [
         "https://github.com/SoftwareEngineerESCOM",
         "https://softwareengineerescom.gitlab.io/APMS/public/login",
         "documents/Academic.pdf",
         ""
     ]
    },
    { 
      name: "Linear Programming", 
      srcImage: route + "metodos.png",
      text: "Linear Programming Problem Solver helps you to solve complex linear Programming problems with three algorithms: Random algorithm, Genetic algorithm, and Simplex algorithm, this system show you the solution and the process step to step and found the most accurate result. Of course, it is an iterative program, Random and Genetic algorithms are based on several populations of the same size.",
      tech: "Angular, JavaScript and LaTeX for full documentation.",
      
      teamWork: [
        {
          name: "Sergio Sanchez",
          url: "https://github.com/searleser97"
        },
        {
          name: "Cinthya Parra",
          url: "https://github.com/DoloresPGz"
        },
        {
          name: "Guillermo Naranjo",
          url: "https://github.com/Me0089mo"
        }
      ],
      // thereIsLink: [github, demo, documentation, awards]
     thereIsLink: [true, false, true, false], 
     links: [
         "https://github.com/searleser97/Linear-Programming-Problem-Solver",
         "",
         "documents/Linear.pdf",
         ""
     ]
    },
    { 
      name: "Compiler", 
      srcImage: route + "Compiler.PNG",
      text: "This project implements the first half of the components of a compiler: lexical analyzer of Deterministic Finite Automata through tokens, and 6 parsers: the creation of Deterministic Finite Automata and Grammars using recursive descent analysis, LL(1), LR(0), LR(1) and LALR. Also, we offer operations with Nondeterministic Finite Automata (NFA). Each automaton will be displayed in its graphic form.",
      tech: "Flask, Python, jQuery, Jinja2, Vis.js and Materialize",
      
      teamWork: [
        {
          name: "Enrique Romero",
          url: "https://github.com"
        },
        {
          name: "Randy Villanueva",
          url: "https://github.com/RandyViG"
        }
      ],
      // thereIsLink: [github, demo, documentation, awards]
     thereIsLink: [true, true, false, false], 
     links: [
         "https://github.com/brokenerk/Compiladores",
         "https://com-piler.herokuapp.com/",
         "",
         ""
     ]
    }
];

route = 'images/networks/';

const networkData = [
    {
        name: "Blog",
        srcImage: route + "blog.png",
        text: "You can log in, post images o create a new issue about everything you want, and also you can answer any issue or blog. If you want to see a post, you can find it with the date or using a keyword.",
        tech: "We use Java and MySQL.",
        teamWork: [
            {
                name: "Enrique Ramos",
          url: "https://github.com/brokenerk"
            }
        ],
        // thereIsLink: [github, demo, documentation, awards]
        thereIsLink: [true, false, true, false],
        links: [
            "https://github.com/abiisnn/Servicios-en-Red/tree/master/1erExamen",
            "",
            "documents/Blog.pdf",
            ""
        ]
    }, 
    {
        name: "Dictionary",
        srcImage: route + "dictionary.png",
        text: "This is a dictionary service with '' n '' servers in line, each one will contain definitions of the type '' word '', '' meaning '' and the content of each server will be different.",
        tech: "We use Java.",
       teamWork: [
            {
                name: "Enrique Ramos",
          url: "https://github.com/brokenerk"
            }
        ],
        // thereIsLink: [github, demo, documentation, awards]
        thereIsLink: [true, false, true, false],        
        links: [
            "https://github.com/abiisnn/Servicios-en-Red/tree/master/Practica5",
            "",
            "documents/Dictionary.pdf",
            ""
        ]
    },
    {
        name: "DropAE",
        srcImage: route + "dropAE.png",
        text: "It is a DropBox style application, which allows the user to see the files he has in his folder (on the server), as well as uploading and/or downloading files or folders to his server folder, either through a dialog box or using Drag & Drop.",
        tech: "We use Java.",
      teamWork: [
            {
                name: "Enrique Ramos",
          url: "https://github.com/brokenerk"
            }
        ],
        // thereIsLink: [github, demo, documentation, awards]
        thereIsLink: [true, false, true, false],    
        links: [
            "https://github.com/abiisnn/Servicios-en-Red/tree/master/Practica1",
            "",
            "documents/DropAE.pdf",
            ""
        ]
    },
    {
      name: "Scores",
      srcImage: route + "Score.png",
      text: "The Score is a system like our official system to see scores at my University (IPN). Currently, the system allows you to see final scores, upload scores, and create a scholar schedule. It allows having different types of users (students and teachers).",
      tech: "We use Java.",
      teamWork: [
        {
          name: "Enrique Ramos",
          url: "https://github.com/brokenerk"
        }
      ],
      // thereIsLink: [github, demo, documentation, awards]
      thereIsLink: [true, false, true, false],    

      links: [
          "https://github.com/abiisnn/Servicios-en-Red/tree/master/Practica2",
          "",
          "documents/Scores.pdf",
          ""
      ]
    }
  ];
  
route = 'images/crypto/';
const cryptoData = [
    { 
        name: "Substitution Cipher",
        srcImage: route + "SubstitutionCipher.png",
        text: "We learned about Substitution ciphers, which is a symmetric cipher algorithm that uses the technique of Substitution. We were working with Affine Cipher and Shift Cipher. We explain the process and put the code.",
        tech: "We use C++ to code, PowerPoint to edite images and LaTeX to full documentation.",
        gitRepo: "https://github.com/abiisnn/Cryptography/blob/master/Session1/SubstitutionCipher.pdf",
        teamWork: [
            {
                name: "Guillermo Naranjo",
                url: "https://github.com/Me0089mo"
            }
        ],
        // thereIsLink: [github, demo, documentation, awards]
        thereIsLink: [true, false, true, false],
        links: [
            "https://github.com/abiisnn/Cryptography/tree/master/Session1",
            "",
            "documents/SubstitutionCipher.pdf",
            ""
        ]
    },
    {
        name: "Hill and Permutation",
        srcImage: route + "HillPer.png",
        text: "We explain the Hill Cipher and the Permutation cipher. Hill Cipher is a polygraphic Substitution cipher based on linear algebra and Permutation Cipher uses a keyword to generate a permutation. We show the code that we have implemented.",
        tech: "We use C++ to code, PowerPoint to edite images and LaTeX.",
        gitRepo: "https://github.com/abiisnn/Cryptography/blob/master/Session2/2.pdf",
        teamWork: [
            {
                name: "Guillermo Naranjo",
                url: "https://github.com/Me0089mo"
            }
        ],
        thereIsLink: [true, false, true, false],
        links: [
            "https://github.com/abiisnn/Cryptography/tree/master/Session2",
            "",
            "documents/HillPer.pdf",
            ""
        ]
    },
    {
        name: "Cryptanalysis of the Hill Cipher",
        srcImage: route + "Cryptoanalysis.png",
        text: "What happens when someone has information about your ciphertext? We use a 3x3 matrix as a key, we show an example of how to make Cryptoanalysis. It implies that given a ciphertext encrypted with this key, you must be able to decrypt it.",
        tech: "We use C++ to code, PowerPoint to edite images and LaTeX.",
        gitRepo: "https://github.com/abiisnn/Cryptography/blob/master/Session3/3.pdf",
        teamWork: [
            {
                name: "Guillermo Naranjo",
          url: "https://github.com/Me0089mo"
            }
        ],
        thereIsLink: [true, false, true, false],
        links: [
            "https://github.com/abiisnn/Cryptography/tree/master/Session3",
            "",
            "document/Cryptoanalysis.pdf",
            ""
        ]
    },
    {
        name: "Block Ciphers",
        srcImage: route + "3des.png",
        text: "Block ciphers are one of the most important primitives in cryptology. We show some examples using block ciphers with 3DES.",
        tech: "We use Java to code and LaTeX.",
        teamWork: [
            {
                name: "Guillermo Naranjo",
          url: "https://github.com/Me0089mo"
            }
        ],
        thereIsLink: [true, false, true, false],
        links: [
            "https://github.com/abiisnn/Cryptography/tree/master/Session5",
            "",
            "documents/3des.pdf",
            ""
        ]
    }
];


export const projectData = [
    {
        title: "Projects <3",
        information: softwareData
    },
    {
      title: "Programs about Networks",
      information: networkData
    },
    {
        title: "Programs about Cryptography",
        information: cryptoData
    }
]

export default projectData;
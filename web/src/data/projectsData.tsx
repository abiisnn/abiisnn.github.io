let route = 'images/projects/';
const softwareData = [
    { 
        name: "Earth Mozione",
        srcImage: route + "EarthMozione.PNG",
        text: "An IoT application that consist on a network of seismic sensor devices connected to each other providing feedback among them to alert with seconds of anticipation about an earthquake from a mobile application to the user.",
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
            "https://abiisnn.github.io/Assets/pdf/EarthMozione.pdf",
            "https://devpost.com/software/earthmozione-4fd7hq"
        ]
    },
    { 
        name: "Multicast Chat",
        srcImage: route + "chat.png",
        text: "A Web application that allow you send messages, images, emojis and files from a general room and also you can use a private room.",
        tech: "We use Socket IO, JavaScript, HTML y CSS.",
        
        teamWork: [
          {
            name: "Enrique Ramos",
            url: "https://github.com/brokenerk"
          }
        ],
        // thereIsLink: [github, demo, documentation, awards]
        thereIsLink: [true, true, true, true],        
        links: [
            "https://github.com/brokenerk/Chat-Multicast",
            "https://chat-multicast.herokuapp.com/",
            "https://github.com/brokenerk/Chat-Multicast/blob/master/p3.pdf",
            ""
        ]
      },
   {
        name: "Imaginary Friends",
        srcImage: route + "ImaginaryFriends.png",
        text: "Mobile app and WIX application that allows the kids of all kind draw their imaginary friends to visualize them using augmented reality and keep in the app with the objective to improve social skills. This application is also capable of detecting the mood using IBM Watson tone analyzer.",
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
            "https://abiisnn.github.io/Assets/pdf/ImaginaryFriends.pdf",
            "https://devpost.com/software/imaginaryfriends"
        ]
    },
    {
        name: "Organize an Event",
        srcImage: route + "OrganizeAnEvent.png",
        text: "This is a minimum viable product for a web system to control assistance and documents to an academic ceremony. It allows us to pass assistance using bar codes and QR inside the web app. Also, it allows us to get the statistics of the event (in PDF) and to send the invitations through email. It allow to have differents types fo users (normal and admins).",
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
      name: "Digital office",
      srcImage: route + "digitalOffice.png",
      text: "Web system that allows the users to generate different types of documents using Cryptographic services i.e. bills, memorandums and private memorandums, to sign each document related to the meeting that they had attended previously and to be able to have a register of all the documents, and meetings, that the worker/employee has signed, or has been given permission to check, through their history as users of this system.",
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
          "https://abiisnn.github.io/Assets/pdf/DigitalOffice.pdf",
          ""
      ]
    },
    {
      name: "Star Cluster Algorithm",
      srcImage: route + "Star.png",
      text: "This is a unfinished project that implements the Brute Force Star Cluster Algorithm. From a big population of starts in the sky (currently in a 2D space), it finds the two of them with the minimum distance between each other. We put an animation of how the algorithm is supossed to be working when it calculates the distance from point to point. Now is zero optimized and takes a lot of time... but take a look!",
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
      name: "SAEEB",
      srcImage: route + "saeeb.png",
      text: "SAEEB is a web system prototype for academic managing of students from elementary schools. The account created will be managed by the student's parents and it will allow to schedule of appoinments with the teachers, check the student grades, send emails or notes between the teachers and parents, update the student academic and personal info and also generate PDF with the global scores.",
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
          "https://abiisnn.github.io/Assets/pdf/SAEEB.pdf",
          ""
      ]
    },
    { 
      name: "Academic Programs", 
      srcImage: route + "is.png",
      text: "A Web application which objective was to improve the way an Academic Program was created and managed at my university (IPN). We were in 3 teams: Analysis and Design, Developing and Testing. Allow you create and edit  a new Academic Program, when is accepted you can generate a PDF file with an specific format. ",
    tech: "Angular, PostgreSQL and LaTeX to full documentation.",
    
    teamWork: [
        {
          name: "Sergio Sanchez",
          url: "https://github.com/searleser97"
        },
        {
          name: "Enrique Ramos",
          url: "https://github.com/brokenerk"
        },
        {
          name: "Ivan Hernandez",
          url: "https://github.com/Ivan-hdz"
        },
        {
          name: "J. Manuel Calva",
          url: "https://github.com/akotadi"
        },
        {
          name: "Cinthya Parra",
          url: "https://github.com/DoloresPGz"
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
         "https://abiisnn.github.io/Assets/pdf/Academic.pdf",
         ""
     ]
    },
    { 
      name: "AllJeux Controller", 
      srcImage: route + "AllJeux.png",
      text: "This is not a project like the others showed. In fact, it is a prototype of a controller device for people with only one hand or with a disability that do not let them play videogames in a conventional way. There is a lot of designs of it and has it is own business plan, that of course you can read next, also we had already do all our company called AllJeux. We made a little webpage for marketing but only the front-end is finished, check it out! Text is in spanish.",
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
        "https://brokenerk.github.io/allJeux.pdf",
        ""
    ]
    },
    { 
      name: "Linear Programming", 
      srcImage: route + "metodos.png",
      text: "Linear Programming Problem Solver help you to solve complex linear Programming problems with three algorithms: Random algorithm, Genetic algorithm and Simplex algorithm, this system show you the solution and the process step to step and found the most accurate result. Of course, it is a iterative program, Random and Genetic algorithms are based on a number of populations with the same size.",
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
     thereIsLink: [true, false, false, false], 
     links: [
         "https://github.com/searleser97/Linear-Programming-Problem-Solver",
         "",
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
        text: "You can login, post images o create a new issue about everything you want, and also you can answer any issue or blog. If you want to see a post, you can find it with the date or use a key word.",
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
            "https://github.com/abiisnn/Servicios-en-Red/blob/master/1erExamen/exam1.pdf",
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
            "https://github.com/abiisnn/Servicios-en-Red/blob/master/Practica5/dictionary.pdf",
            ""
        ]
    },
    {
        name: "DropAE",
        srcImage: route + "dropAE.png",
        text: "It is a DropBox style application, which allows the user to see the files he has in his folder (on the server), as well as uploading and / or downloading files or folders to his server folder, either through a dialog box or using Drag & Drop. Drop",
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
            "https://github.com/abiisnn/Servicios-en-Red/blob/master/Practica1/p1.pdf",
            ""
        ]
    },
    {
      name: "Scores",
      srcImage: route + "Score.png",
      text: "Score is a systems like our oficial system to see scores at my University (IPN). Currently the system allows you see final scores, upload scores and create a schoolar schedule. It allow to have differents types fo users (students and teachers).",
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
          "https://github.com/abiisnn/Servicios-en-Red/blob/master/Practica2/p2.pdf",
          ""
      ]
    }
  ];
  
route = 'images/crypto/';
const cryptoData = [
    { 
        name: "Substitution Cipher",
        srcImage: route + "SubstitutionCipher.png",
        text: "We learned about Substitution ciphers, it is a symmetric cipher algorithm that use the technique of Substitution. We were working with Affine Cipher and Shift Ciper. We explain the process and put the code.",
        tech: "We use C++ to code, PowerPoint to edite images and LaTeX to full documentation.",
        gitRepo: "https://github.com/abiisnn/Cryptography/blob/master/Session1/SubstitutionCipher.pdf",
        teamWork: [
            {
                name: "Guillermo Naranjo",
                url: "https://github.com/Me0089mo"
            }
        ],
        thereIsLink: [true, false, false, false],
        links: [
            "https://github.com/abiisnn/Cryptography/blob/master/Session1/SubstitutionCipher.pdf",
            "",
            "",
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
        thereIsLink: [true, false, false, false],
        links: [
            "https://github.com/abiisnn/Cryptography/blob/master/Session2/2.pdf",
            "",
            "",
            ""
        ]
    },
    {
        name: "Cryptanalysis of the Hill Cipher",
        srcImage: route + "Cryptoanalysis.png",
        text: "What happend when someone has information about your ciphertext? We use a 3x3 matrix as a key, we show a example of how to make Cryptoanalysis. It implies  that given a ciphertext encrypted with this key, you must be able to decryp it.",
        tech: "We use C++ to code, PowerPoint to edite images and LaTeX.",
        gitRepo: "https://github.com/abiisnn/Cryptography/blob/master/Session3/3.pdf",
        teamWork: [
            {
                name: "Guillermo Naranjo",
          url: "https://github.com/Me0089mo"
            }
        ],
        thereIsLink: [true, false, false, false],
        links: [
            "https://github.com/abiisnn/Cryptography/blob/master/Session3/3.pdf",
            "",
            "",
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
        thereIsLink: [true, false, false, false],
        links: [
            "https://github.com/abiisnn/Cryptography/blob/master/Session5/5.pdf",
            "",
            "",
            ""
        ]
    }
];


export const projectData = [
    {
        title: "Projects I'm proud of <3",
        information: softwareData
    },
    {
      title: "Networks Development",
      information: networkData
    },
    {
        title: "Cryptography",
        information: cryptoData
    }
]

export default projectData;
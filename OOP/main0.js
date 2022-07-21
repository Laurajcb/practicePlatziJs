//Declare an object 

const laura = {
  name: "laura",
  age: 26,
  finishedCourses: [
    "Curso definitivo de HTML y CSS",
    "Curso practico de HTML y CSS",
    "Manejo de la ansiedad",
  ],
  aprobarCurso(newCourse) {
    this.finishedCourses.push(newCourse);
  }
};

// Declare and initialize the student class:

function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;

}
//Declare a method call approveCourse, that adds a new curse to the approved ones

Student.prototype.approveCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
}

//Create a new instance of the obj Student:
const julian = new Student(
  "Julian Andres",
  24,
  [
    "Js",
    "Node",
    "Angular",
  ],
);

//Prototypes with class sintax

class Student2 {
  constructor(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
};

const maria = new Student2(
  "Maria",
  23,
  [
    "dibujo",
    "estructura",
    "ingles",
  ]
);


// class that recieves an obj as parmeters 
class Dog {
  constructor(
    {
      name,
      breed,
      color,
      size,
      vaccinated,
      gender,
    }) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.size = size;
    this.vaccinated = vaccinated;
    this.gender = gender;
  }

}
const rex = new Dog({
  name: "Rex David",
  breed: "Pitbull",
  color: "brown and white",
});

// pros of OOP

const ana = {
  name: "Ana Beltran",
  age: 44,
  points: 1200,
  socialMedia: {
    twitter: "anitatuntun",
    instagram: "anitatuntun",
    facebook: undefined,
  },
  approvedCurses: [
    "Curso HTML & CSS",
    "Curso practico de HTML & CSS",
    "Curso de python",
  ],
  learingPaths: [
    {
      name: "web development",
      courses: [
        "Curso de Js",
        "curso de Python",
      ]
    },
    {
      name: "English",
      couses: [
        "Grammar",
        "Speaking",
      ]
    },
  ]

}


const tatan = {
  name: "Jhonatan Callejas",
  age: 18,
  points: 100,
  socialMedia: {
    twitter: "tatan13",
    instagram: "tatan13",
    facebook: undefined,
  },
  approvedCurses: [
    "Curso video juegos ",
    "Curso practico de video juegos ",
  ],
  learingPaths: [
    {
      name: "desarrollo ui",
      courses: [
        "Curso de figma",
        "curso de adobe",
      ]
    },
    {
      name: "English",
      couses: [
        "listening",
        "interview",
      ]
    },
  ]

}

//Class 
class Comment {
  constructor({
    content,
    studenName,
    studentRole = "Estudiante",
  }) {
    this.content = content;
    this.studenName = studenName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publish() {
    console.log(`Name:${this.studenName}(${this.studentRole})\nLikes: ${this.likes}\nComment: ${this.content}`)
  }
}
//functions videoPlay

function videoPlay(id) {
  const secretUrl = "https://Platziultrasecreta.com/" + id;
  console.log("We're playig video from url" + secretUrl);
}
function videoPause(id) {
  const secretUrl = "https://Platziultrasecreta.com/" + id;
  console.log("We stop/ pause the video from url" + secretUrl);
}
//Class platzi class
class platziClass {
  constructor({
    name,
    videoId,
  }) {
    this.name = name;
    this.videoId = videoId;
  }

  play() {
    videoPause(this.videoId);
  }
  pause() {
    videoPause(this.videoId);
  }

}

//Class course
class Course {
  constructor({
    name,
    classes = [],
    isFree = true,
    lang = "Spanish"
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
  //we have to make sure that we return the _name so then we can get the name of an instance 
  get name() {
    return this._name;
  }
  /*
  * this is fine but there is othe better way to do it 
  changeName(newName){
    this._name = newName;
  }
  */
  set name(newName) {
    if (newName === "bad words") {
      console.error("please stop")
    } else {
      this._name = newName;
    }
  }

}
// Instamcias de Courses: 
const programacionJS = new Course({
  name: "curso basico de js",
  classes: [
    "funciones",
    "OOP",
    "variables",
  ],
  isFree: true,
  lang: "Spanish"
})

console.log(programacionJS.name);

const programacionPython = new Course({
  name: "curso basico de Python",
  classes: [
    "funciones lambda",
    "OOP",
    "identacion",
  ],
  lang: "English",
})

//Class learning path:
class LearningPath {
  constructor(name, courses = []) {
    this.name = name;
    this.courses = courses;
  }
};

const jsPath = new LearningPath("Ecuela de javascript: ", ["oop", "functions"]);
const pythonPath = new LearningPath("Ecuela de python ", ["oop", " lamda functions"]);
const uiPath = new LearningPath("Ecuela de diseño ui", ["patrones", "modelado"]);






//Class that recieves an obj as parmeters in this case I'll be the supper class

class Student {
  constructor({

    name,
    email,
    user,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.user = user;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
  publishComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studenName: this.name,
    });
    comment.publish();
  }
}

//subclasses of students
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("lo sentimos" + this.name + ",you only can take open courses.")
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "English") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("lo sentimos" + this.name + ",you only can take Spanish courses.")
    }
  }
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {

    this.approvedCourses.push(newCourse);

  }
}

class TeacherStudent extends Student {
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){
    this.approvedCourses.push(newCourse);
  }
  publishComment(commentContent){
    const comment = new Comment({
      content: commentContent,
      studenName: this.name,
      studentRole: "profesor"
    })
    comment.publish();
  }

}

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  user: "FeddyElMasCool",
  email: "FeddyVega@platzi.com",
  twitter: "FreddierVega",

})

const juan = new FreeStudent({
  name: "JuanDc",
  email: "juanito123@platzi.com",
  user: "juan123",
  twitter: "juan123",
  learningPaths: [
    programacionJS,
    programacionPython,
  ]
});

const Mari = new BasicStudent({
  name: "Maria C",
  email: "mari123@platzi.com",
  user: "mariC",
  instagram: "mariii123",
  learningPaths: [
    programacionPython,
    programacionJS,
  ]
});
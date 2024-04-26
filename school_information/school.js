const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

  function countCalculation(school) {
    const {departments:{math:{teachers:mathsTeachersCount,students:mathsStudentsCount},history:{teachers:historyTeachersCount,students:historyStudentsCount}}} = school
    
    let output ={
        mathsTeachersCount,
        historyTeachersCount,
        mathsStudentsCount,
        historyStudentsCount
    }
    return output
  }
  console.log(countCalculation(school))

  function findTopStudent(school,sub) {
    const {students} = school
    // let output = students.sort((a,b)=> {return `${b.scores[sub]}` - `${a.scores[sub]}`
    // })
    // return output[0]

    const topstudent = students.reduce((prev,curr)=> {
        return curr.scores[sub] > prev.scores[sub] ? curr : prev
    })
    return topstudent 
  }
  console.log(findTopStudent(school,"maths"))

  function addNewDept(school,dept) {
    let newDepartment = {[dept]:{teachers:2,students:50}}
    console.log(newDepartment);
    const {departments} = school
    updatedDepartments = {...departments,...newDepartment}
    // // departments[dept] = {teachers:2,students:50}
    return {...school,departments:updatedDepartments}
  }
  console.log(addNewDept(school,"art"))

  function highestStudentCountDepartment(school) {
    const {departments} = school 
    // console.log(Object.keys(school['departments']));
    let max=-100000
    let min=100000
    for(let i in departments){
      console.log();
      if(departments[i].students>max)
       max = i 
      var highestCountDept = max
    }
    return highestCountDept
  }
  console.log(highestStudentCountDepartment(school))

  function generateGreeting(name,language="English") {
    if (language.toLocaleLowerCase() === "english") {
      return `Hello ${name}!`
    }
    else if (language.toLocaleLowerCase() === "french") {
      return `Bonjour ${name}!`
    }
    else if (language.toLocaleLowerCase()=== "spanish") {
      return `Hola ${name}!`
    }
  }
  console.log(generateGreeting("John"))
  console.log(generateGreeting("Bob", "Spanish"))
  console.log(generateGreeting("Charlie", "French"))
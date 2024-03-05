const studentListDetail = [];
function validateform() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const skill = document.querySelectorAll('input[name="skills"]:checked');
  const nationality = document.getElementById("nationality").value;

  let dobPattern = /^\d{4}-\d{2}-\d{2}$/;

  if (firstName === "" || !isNaN(firstName)) {
    alert("First Name cannot be blank");
    return false;
  }
  if (lastName === "" || !isNaN(lastName) || lastName.length < 2) {
    alert("Last Name cannot be blank and must be at least two characters");
    return false;
  }
  if (email === "" || !email.includes("@") || !email.endsWith(".com")) {
    alert("Please enter a valid email address");
    return false;
  }
  if (!dob.match(dobPattern)) {
    alert("Please enter valid dob format(yyyy-mm-dd)");
    return false;
  } else {
    if (userdob > date) {
      alert("The given Date is in Future. Please enter correct Date of Birth");
      return false;
    }
  }
  if (gender === null) {
    alert("Please select a gender");
    return false;
  }
  if (skill.length === 0) {
    alert("Please select skill");
    return false;
  }
  if (nationality === "") {
    alert("Please select a Nationality");
    return false;
  }

  const studentInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    dob: dob,
    gender: gender.value,
    skills: Array.from(skill)
      .map((skillArray) => skillArray.value)
      .join(", "),
    nationality: nationality,
  };
  studentListDetail.push(studentInfo);

  displayStudentDetail();

  return false;
}

function displayStudentDetail() {
  let data = "";

  studentListDetail.forEach((student) => {
    data += `
          <tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.dob}</td>
            <td>${student.gender}</td>
            <td>${student.skills}</td>
            <td>${student.nationality}</td>
          </tr>`;
  });

  document.getElementById("studentTable").innerHTML = data;
}

function addStudent() {
    const name = document.getElementById("studentName").value;
    if (name.trim() === "") return alert("Enter a student name!");

    const tableBody = document.getElementById("studentsBody");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td><input type="radio" name="${name}" value="Present"></td>
        <td><input type="radio" name="${name}" value="Absent"></td>
        <td><button onclick="removeRow(this)">Delete</button></td>
    `;

    tableBody.appendChild(row);
    document.getElementById("studentName").value = "";
}

function removeRow(button) {
    button.parentElement.parentElement.remove();
}

function saveAttendance() {
    const rows = document.querySelectorAll("#studentsBody tr");
    let attendanceData = [];

    rows.forEach(row => {
        const name = row.children[0].innerText;
        const present = row.children[1].children[0].checked;
        const status = present ? "Present" : "Absent";

        attendanceData.push({ name, status });
    });

    localStorage.setItem("attendance", JSON.stringify(attendanceData));
    alert("Attendance Saved Successfully!");
}

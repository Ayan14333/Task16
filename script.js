// Student Data Array
const students = [
    { name: "Salman Ahmed", marks: 38, class: "3rd", address: "Vishakhapatnam" },
    { name: "Riya Sharma", marks: 85, class: "10th", address: "Delhi" },
    { name: "Rohan Patel", marks: 70, class: "12th", address: "Mumbai" },
    { name: "Priya Singh", marks: 95, class: "8th", address: "Bangalore" },
    { name: "Arjun Gupta", marks: 60, class: "9th", address: "Kolkata" },
    { name: "Neha Verma", marks: 80, class: "11th", address: "Chennai" },
    { name: "Manoj Kumar", marks: 75, class: "10th", address: "Pune" },
    { name: "Pooja Mishra", marks: 88, class: "12th", address: "Lucknow" },
    { name: "Rajesh Singhaniya", marks: 92, class: "9th", address: "Jaipur" }
];

const container = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchInput");

// Function to display students using map()
function displayStudents(data) {
    container.innerHTML = data.map(student => `
        <div class="card">
            <p><strong>Student Name:</strong> ${student.name}</p>
            <p><strong>Marks:</strong> ${student.marks}%</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        </div>
    `).join("");
}

// Initial display
displayStudents(students);

// Search using filter()
searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchValue)
    );

    displayStudents(filteredStudents);
});

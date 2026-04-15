# Task16

#  Student Records Web App

## 📌 Objective

The objective of this project is to create a web page that displays student records using **HTML, CSS, and JavaScript**. The application shows student details in card format and includes a **real-time search feature** to filter students by name.

---

## 🚀 Features

* Display student data using **cards UI**
* Dynamic rendering using **JavaScript**
* Real-time search functionality 🔍
* Responsive layout using **CSS Grid**
* Clean and simple user interface

---

## 🛠️ Technologies Used

* **HTML** – Structure of the web page
* **CSS** – Styling and layout (Grid system)
* **JavaScript** – Logic, DOM manipulation, and interactivity

---

## 🧠 Concepts Used

* Array of Objects (Student Data)
* DOM Manipulation
* `map()` function → Rendering student cards
* `filter()` function → Searching students
* Event Handling (`keyup`)
* Template Literals

---

## ⚙️ How It Works

### 1. Student Data

An array of student objects is created with:

* Name
* Marks
* Class
* Address

### 2. Rendering

The `map()` function is used to convert student data into HTML cards and display them on the screen.

### 3. Search Functionality

* User types in the search box
* `keyup` event is triggered
* `filter()` function finds matching students
* UI updates in real-time

---

## 💡 Example Functionality

* Typing **"ri"** shows:

  * Riya Sharma
* Typing **"ro"** shows:

  * Rohan Patel

---

## 📸 Output

* Student cards displayed in grid format
* Search bar filters results instantly

---
Here’s a **professional README.md** file for your project:

---

# 📄 Domain Cover Letter Generator

A **dynamic, theme-aware cover letter generator** for `.np` domain registration requests.
This tool lets you generate **personal or business domain registration cover letters**, preview them live, and **download the result as a high-quality image** — always in **light theme**, even if you're browsing in dark mode.

---

## 🚀 Features

* **Live Preview**

  * Form fields instantly update the cover letter preview as you type.
* **Personal & Business Support**

  * Generates tailored letters for personal or business `.np` domain registrations.
* **Download as Image**

  * Exports the generated letter as a **high-resolution JPEG**.
* **Responsive Design**

  * Works smoothly on desktop, tablet, and mobile devices.

---

## 🖥️ Demo

![Cover Letter Generator Screenshot](./screenshot.png)

---

## 📂 Project Structure

```
├── index.html       # Main HTML file
├── style.css        # Custom CSS styles with theme variables
├── script.js        # Core logic (theme handling, live preview, export)
├── screenshot.png   # Preview image for README
└── README.md        # Project documentation
```

---

## 📝 Usage

### 1. Fill Out the Form

* **Purpose** → Select either **Personal** or **Business**.
* **Domain Name** → Example: `example.com.np`.
* **Company Name** → Only required for **Business** registrations.
* **Primary/Secondary Name Servers** → Default provided, customize if needed.
* **Your Name & Address** → Applicant information.

### 2. Live Preview

The right panel updates **automatically** as you type.

### 3. Download

Click **📄 Download Cover Letter**:

* The app **temporarily switches to light theme**, generates a clean letter, and switches back to your previous theme seamlessly.
* The file is downloaded as:

  ```
  yourdomain_Cover_Letter.jpg
  ```

---
## 🛠️ Technologies Used

* **HTML5** – Semantic structure
* **CSS3** – Theme-aware styles with custom properties (CSS variables)
* **JavaScript (ES6+)** – Logic for live updates, theme detection, and downloads
* **[html2canvas](https://html2canvas.hertzen.com/)** – Convert DOM preview into downloadable images

---

## 📜 Example Cover Letter Output

### **Personal Request Example:**

```
Subject: Request for Personal Domain Registration - example.com.np

Dear Sir/Madam,

I am writing to formally request the registration of the domain name example.com.np for personal use. 
This domain is intended to represent my personal online presence and digital identity.

Technical Details:
Domain Name: example.com.np
Primary Name Server: ns1.babal.host
Secondary Name Server: ns2.babal.host

Thank you for considering my application.
Sincerely,
Kushal Shah
```

---

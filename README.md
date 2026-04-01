# Assignment Cover Page Generator

An intuitive, fast, and responsive web application designed to automatically generate high-quality, print-ready assignment cover pages quickly. Built by an engineer, for engineers who are too lazy to design their own covers manually!

## 🚀 Features

- **Dynamic Cover Generation**: Fill in a simple form with your details (Name, Registration No, Subject, Teacher, etc.), and the app instantly structures your data into a professionally formatted A4 assignment cover.
- **Pixel-Perfect Print Layout**: Leveraging highly tuned `@media print` CSS rules, the generated cover perfectly maps to a single A4 sheet without the hassle of margin overflows, bleeding, or unexpected blank pages. 
- **Persistent Dark/Light Theme**: Built-in visual toggle for viewing your UI comfortably, saved persistently in your browser's `localStorage`.
- **Live Preview Scaling**: The app utilizes modern CSS Container Queries (`cqw`) to seamlessly scale the preview to whatever device you are using before printing.
- **Usage Tracker**: Tracks the total number of 'Kabil Engineers' who have successfully generated their cover sheets.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend Engine**: EJS (Embedded JavaScript)
- **Styling**: Vanilla CSS (Flexbox, Container Queries, Print Media Optimization)

## 📁 Project Structure

- `app.mjs`: Node/Express server setup, GET routes, and usage counter logic.
- `views/form.ejs`: The entry UI form for tracking user inputs.
- `views/preview.ejs`: The dynamic A4 layout that compiles user details.
- `public/css/style.css`: The styling engine responsible for scaling, centering, and print alignments.
- `public/images/`: The designated location for your specific college headers, dual logos, and campus photos.

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Nischal154/Cover_Page_genrarte.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Cover_page_V2
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the server:
   ```bash
   node app.mjs
   ```
   *(Or run using `nodemon app.mjs` for hot-reloading)*
2. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```
3. Fill in your assignment details, hit **Submit**, and click **"Get's your marks!!"** to save or print your cover directly as a perfectly formatted A4 PDF!

## 🖼️ Customizing Assets
To customize the application for your own college or institution:
- Drop your own logos into the `public/images/` directory and name them `logo1.png` and `logo2.png`.
- Update the campus picture by saving it as `college-photo.jpg`.
- Modify the college string literals directly within `views/preview.ejs`.

## 👨‍💻 Author
**Nischal Pandey**
- GitHub: [Nischal154](https://github.com/Nischal154)
- LinkedIn: [nischal-pandey152004](https://www.linkedin.com/in/nischal-pandey152004/)
- Instagram: [@molumaxx](https://www.instagram.com/molumaxx/)

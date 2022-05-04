

# GREENK website

This is the source code for the GREENK website. The website aims to present the sustainable energy-saving measures which will be implemented in the ongoing construction project called the ”Nidarvoll projects”. The construction project is led by Trondheim municipality, and they have initiated project called Green Kiosk, abbreviated ”GREENK”.

## Installation

### Prerequesities

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository: `git clone git@github.com:BG4-22/GREENK.git` or `git clone https://github.com/BG4-22/GREENK.git`
2. Download dependencies: `yarn`
3. Run the application: `yarn dev`

## File structure
```
📦src  
┣ 📂__mocks__    # Mock files for Jest to be re-directed  
┣ 📂__tests__    # Files containing tests using Jest  
┃ ┣ 📂__snapshots__    # Snapshot files created by jest
┃ ┗ ... 				
┣ 📂api    # API calls and real-time data simulation
┣ 📂assets  			
┃ ┣ 📂images    # Imagefiles categorized in subfolders
┃ ┣ 📂videos    # Videofiles categorized in subfolders
┃ ┗ 📜MockData.json    # Files containing mock-data from Esave
┣ 📂components  		
┃ ┣ 📂common    # Components used throughout the product
┃ ┃ ┣ 📂Carousel    # Logic and styling of carousel elements
┃ ┃ ┗ ... 
┃ ┣ 📂game    # Logic and styling of the game
┃ ┣ 📂home    # Components displayed on the homepage
┃ ┃ ┣ 📂Competition
┃ ┃ ┣ 📂Funfacts
┃ ┃ ┣ 📂Solarpanel
┃ ┃ ┗ ...  
┃ ┗ 📂statistics    # Components displayed in the statistics page
┃ ┃ ┣ 📂DiagramMoney
┃ ┃ ┗ ... 
┣ 📂layout    # Global layout components
┃ ┣ 📂Navbar   
┃ ┗ ...  
┣ 📂pages    # The different pages of the product  
┃ ┣ 📂Home    # Logic, layout and styling of the homepage
┃ ┗ ...  
┣ 📂services    # Function for handeling API-calls
┣ 📂styles    # Global style-sheets
┣ 📂types    # Global type definitions
┣ 📂utils    # Utility functions
┣ 📜App.tsx    # Root component
┣ 📜main.tsx    # Product entry point
┗ ...
```

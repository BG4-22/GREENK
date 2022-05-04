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
 ┣ 📂__mocks__  
 ┣ 📂__tests__  
 ┃ ┣ 📂__snapshots__    
 ┣ 📂api  
 ┣ 📂assets  
 ┃ ┣ 📂images   
 ┃ ┣ 📂videos  
 ┃ ┗ 📜MockData.json  
 ┣ 📂components  
 ┃ ┣ 📂common  
 ┃ ┃ ┣ 📂Carousel    
 ┃ ┃ ┗ ... 
 ┃ ┣ 📂game     
 ┃ ┣ 📂home  
 ┃ ┃ ┣ 📂Competition    
 ┃ ┃ ┣ 📂Funfacts  
 ┃ ┃ ┣ 📂Solarpanel   
 ┃ ┃ ┗ ...  
 ┃ ┗ 📂statistics  
 ┃ ┃ ┣ 📂DiagramMoney   
 ┃ ┃ ┗ ... 
 ┣ 📂layout  
 ┃ ┣ 📂Navbar   
 ┃ ┗ ...  
 ┣ 📂pages  
 ┃ ┣ 📂Competition   
 ┃ ┣ 📂Home     
 ┃ ┗ ...  
 ┣ 📂services   
 ┣ 📂styles   
 ┣ 📂types   
 ┣ 📂utils  
 ┣ 📜App.tsx   
 ┣ 📜main.tsx   
 ┗ ...
```

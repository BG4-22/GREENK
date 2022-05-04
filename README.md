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
 ┃ ┣ 📜App.test.tsx  
 ┃ ┣ 📜Carousel.test.tsx  
 ┃ ┣ 📜EnergyFlow.test.tsx  
 ┃ ┣ 📜Game.test.tsx  
 ┃ ┣ 📜Home.test.tsx  
 ┃ ┣ 📜Navbar.test.tsx  
 ┃ ┗ 📜Statistics.test.tsx  
 ┣ 📂api  
 ┃ ┣ 📜energyData.ts  
 ┃ ┣ 📜firebase.ts  
 ┃ ┗ 📜getSolarPanelEffect.ts  
 ┣ 📂assets  
 ┃ ┣ 📂images   
 ┃ ┣ 📂videos  
 ┃ ┗ 📜MockData.json  
 ┣ 📂components  
 ┃ ┣ 📂common  
 ┃ ┃ ┣ 📂Carousel  
 ┃ ┃ ┃ ┣ 📜Carousel.css  
 ┃ ┃ ┃ ┣ 📜Carousel.tsx  
 ┃ ┃ ┃ ┗ 📜index.ts  
 ┃ ┃ ┣ 📜Card.tsx  
 ┃ ┃ ┗ 📜GameButton.tsx  
 ┃ ┣ 📂game  
 ┃ ┃ ┣ 📜AddHighscore.tsx  
 ┃ ┃ ┣ 📜Counter.tsx  
 ┃ ┃ ┣ 📜Feedback.tsx  
 ┃ ┃ ┣ 📜Game.css  
 ┃ ┃ ┣ 📜Prompt.ts  
 ┃ ┃ ┗ 📜Slide.tsx  
 ┃ ┣ 📂home  
 ┃ ┃ ┣ 📂Competition  
 ┃ ┃ ┃ ┣ 📜Bar.tsx  
 ┃ ┃ ┃ ┣ 📜Chart.tsx  
 ┃ ┃ ┃ ┣ 📜Competition.tsx  
 ┃ ┃ ┃ ┣ 📜Legend.tsx  
 ┃ ┃ ┃ ┣ 📜YAxisLabel.tsx  
 ┃ ┃ ┃ ┗ 📜index.ts  
 ┃ ┃ ┣ 📂Funfacts  
 ┃ ┃ ┃ ┣ 📜FunfactSlideshow.tsx  
 ┃ ┃ ┃ ┗ 📜index.tsx  
 ┃ ┃ ┣ 📂Solarpanel  
 ┃ ┃ ┃ ┣ 📜Mascot.css  
 ┃ ┃ ┃ ┣ 📜Mascot.tsx  
 ┃ ┃ ┃ ┣ 📜SolarPanelComponent.css  
 ┃ ┃ ┃ ┣ 📜SolarPanelComponent.tsx  
 ┃ ┃ ┃ ┣ 📜Weather.tsx  
 ┃ ┃ ┃ ┗ 📜index.tsx  
 ┃ ┃ ┗ 📜Scoreboard.tsx  
 ┃ ┗ 📂statistics  
 ┃ ┃ ┣ 📂DiagramMoney  
 ┃ ┃ ┃ ┣ 📜DiagramMoney.tsx  
 ┃ ┃ ┃ ┣ 📜index.ts  
 ┃ ┃ ┃ ┗ 📜styles.css  
 ┃ ┃ ┣ 📜EnergySources.tsx  
 ┃ ┃ ┣ 📜HeatPump.tsx  
 ┃ ┃ ┣ 📜OverallConsumption.tsx  
 ┃ ┃ ┣ 📜SolarPanel.tsx  
 ┃ ┃ ┗ 📜statistics.css  
 ┣ 📂layout  
 ┃ ┣ 📂Navbar  
 ┃ ┃ ┣ 📜Navbar.css  
 ┃ ┃ ┣ 📜Navbar.tsx  
 ┃ ┃ ┗ 📜index.tsx  
 ┃ ┗ 📜Layout.tsx  
 ┣ 📂pages  
 ┃ ┣ 📂Competition   
 ┃ ┣ 📂Home  
 ┃ ┃ ┣ 📜Home.css  
 ┃ ┃ ┣ 📜Home.tsx  
 ┃ ┃ ┗ 📜index.ts   
 ┃ ┣ 📜EnergyFlow.tsx  
 ┃ ┣ 📜Game.tsx  
 ┃ ┣ 📜Highscores.tsx  
 ┃ ┗ 📜Statistics.tsx  
 ┣ 📂services  
 ┃ ┗ 📜game.ts  
 ┣ 📂styles  
 ┃ ┗ 📜theme.ts  
 ┣ 📂types  
 ┃ ┣ 📜api.ts  
 ┃ ┗ 📜game.ts  
 ┣ 📂utils  
 ┣ 📜App.tsx  
 ┣ 📜fonts.css  
 ┣ 📜index.css  
 ┣ 📜main.tsx  
 ┣ 📜setupTests.ts  
 ┗ 📜vite-env.d.ts
```

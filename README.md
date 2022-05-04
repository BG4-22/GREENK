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
 ┃ ┣ 📜fileMock.js  
 ┃ ┗ 📜styleMock.js  
 ┣ 📂__tests__  
 ┃ ┣ 📂__snapshots__  
 ┃ ┃ ┣ 📜App.test.tsx.snap  
 ┃ ┃ ┣ 📜EnergyFlow.test.tsx.snap  
 ┃ ┃ ┣ 📜Home.test.tsx.snap  
 ┃ ┃ ┗ 📜Navbar.test.tsx.snap  
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
 ┃ ┃ ┣ 📂game  
 ┃ ┃ ┃ ┣ 📜badekar.jpg  
 ┃ ┃ ┃ ┣ 📜belysning.jpeg  
 ┃ ┃ ┃ ┣ 📜dusj.JPG  
 ┃ ┃ ┃ ┣ 📜game_console.JPG  
 ┃ ┃ ┃ ┣ 📜is.jpg  
 ┃ ┃ ┃ ┣ 📜kjøleskap.jpeg  
 ┃ ┃ ┃ ┣ 📜klimaanlegg.png  
 ┃ ┃ ┃ ┣ 📜lys.jpg  
 ┃ ┃ ┃ ┣ 📜mikrobølgeovn.jpeg  
 ┃ ┃ ┃ ┣ 📜netflix.svg  
 ┃ ┃ ┃ ┣ 📜oppvaskmaskin.jpeg  
 ┃ ┃ ┃ ┣ 📜playstation.png  
 ┃ ┃ ┃ ┣ 📜stekeovn.jpeg  
 ┃ ┃ ┃ ┣ 📜tesla.png  
 ┃ ┃ ┃ ┣ 📜tv.jpeg  
 ┃ ┃ ┃ ┣ 📜tørketrommel.jpeg  
 ┃ ┃ ┃ ┣ 📜varmtvann.jpeg  
 ┃ ┃ ┃ ┗ 📜vaskemaskin.jpeg  
 ┃ ┃ ┣ 📂stats  
 ┃ ┃ ┃ ┣ 📂battery  
 ┃ ┃ ┃ ┃ ┣ 📜fullBattery.png  
 ┃ ┃ ┃ ┃ ┣ 📜lowBattery.png  
 ┃ ┃ ┃ ┃ ┣ 📜noBattery.png  
 ┃ ┃ ┃ ┃ ┣ 📜threeBattery.png  
 ┃ ┃ ┃ ┃ ┗ 📜twoBattery.png  
 ┃ ┃ ┃ ┣ 📜Solar.png  
 ┃ ┃ ┃ ┣ 📜arrow.png  
 ┃ ┃ ┃ ┣ 📜elBike.png  
 ┃ ┃ ┃ ┣ 📜heatPump.png  
 ┃ ┃ ┃ ┣ 📜heatPumpColors.png  
 ┃ ┃ ┃ ┣ 📜heatPumpPink.png  
 ┃ ┃ ┃ ┣ 📜heatpump2.png  
 ┃ ┃ ┃ ┣ 📜hotChocolate.png  
 ┃ ┃ ┃ ┣ 📜light.png  
 ┃ ┃ ┃ ┣ 📜money.png  
 ┃ ┃ ┃ ┣ 📜playstation.png  
 ┃ ┃ ┃ ┣ 📜shower.png  
 ┃ ┃ ┃ ┣ 📜skole.svg  
 ┃ ┃ ┃ ┣ 📜solarPanelPhone.png  
 ┃ ┃ ┃ ┗ 📜sunshine.png  
 ┃ ┃ ┣ 📜.DS_Store  
 ┃ ┃ ┣ 📜Mascot.svg  
 ┃ ┃ ┣ 📜canvas_1000.png  
 ┃ ┃ ┣ 📜cloudIcon.svg  
 ┃ ┃ ┣ 📜crown.png  
 ┃ ┃ ┣ 📜greenk-logo.png  
 ┃ ┃ ┗ 📜sunIcon.svg  
 ┃ ┣ 📂videos  
 ┃ ┃ ┣ 📜Energiflyt_Nidarvoll.mp4  
 ┃ ┃ ┣ 📜Energyflow-video.mp4  
 ┃ ┃ ┣ 📜Nidarvoll-video.mp4  
 ┃ ┃ ┣ 📜Nidarvoll-videoeksempel.mov  
 ┃ ┃ ┣ 📜NidarvollGjenbruk-video.mp4  
 ┃ ┃ ┗ 📜gjenbruk.mp4  
 ┃ ┣ 📜.DS_Store  
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
 ┃ ┃ ┗ 📜.DS_Store  
 ┃ ┣ 📂Home  
 ┃ ┃ ┣ 📜Home.css  
 ┃ ┃ ┣ 📜Home.tsx  
 ┃ ┃ ┗ 📜index.ts  
 ┃ ┣ 📜.DS_Store  
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
 ┃ ┗ 📜hashcode.ts  
 ┣ 📜App.tsx  
 ┣ 📜fonts.css  
 ┣ 📜index.css  
 ┣ 📜main.tsx  
 ┣ 📜setupTests.ts  
 ┗ 📜vite-env.d.ts
```

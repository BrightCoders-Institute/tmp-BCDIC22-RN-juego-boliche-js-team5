# El Juego de boliche
![BrightCoders Logo](img/logo.png)

# Tabla de contenidos
  - [Descripción de proyecto](#descripción-del-proyecto)
  - [Como instalar y usar el proyecto](#como-instalar-y-usar-el-proyecto)
  - [Créditos](#creditos)
  - [Insignias de evaluadores de código](#insignias-de-evaluadores-de-código)

# Descripción del proyecto
The game consists of 10 frames as shown above. 

In each frame the player has two opportunities to knock down 10 pins. The score for the frame is the totalnumber of pins knocked down, plus bonuses for strikes and spares.A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll. 

So inframe 3 above, the score is 10 (the total number knocked down) plus a bonus of 5 (the number of pins knocked down on the next roll.)A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can berolled in tenth frame.

# Como instalar y usar el proyecto
- Lo primero que se tiene que hacer es clonar el repositorio
``` 
git clone [linkDelRepositorio] 
```

- Lo siguiente será instalar dependencias y modulos que requiere el proyecto para ejecutarse correctamente, para ello es necesario ejecutar en una terminal dentro del repositorio antes clonado el siguiente comando:
```
npm install
npm i -D mocha
npm i -D chai

npm install --save-dev jest

```

- Para ejecutar el funcionamiento principal del programa y empezar el juego se ejecuta el siguiente comando en la terminal:
``` 
npm run test
```

- Para ejecutar las pruebas que se aplicaron al código utilizaremos el siguiente comando en la terminal:
``` 
npm test -- --coverage
```

# Creditos
Integrantes del equipo del proyecto:
- [@McFly1208](https://github.com/McFly1208)
- [@Leonardo-Aguirre-Ponce](https://github.com/Leonardo-Aguirre-Ponce)
- [@victordoom](https://github.com/victordoom)

# Insignias de evaluadores de código
| Analizador   | Calificación |
| ------------- | ------------- |
| Codacy   | [![Codacy Badge](https://app.codacy.com/project/badge/Grade/5fb5d8e58c1f48f0bfcc30984761027d)](https://www.codacy.com/gh/BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team5/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team5&amp;utm_campaign=Badge_Grade) |
| Codecov | [![codecov](https://codecov.io/gh/BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team5/branch/master/graph/badge.svg?token=BFH60TE5BB)](https://codecov.io/gh/BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team5)  |

document.addEventListener("keydown", function (e) {

   console.log(e.key);

   switch (e.key) {

       case "g": 

            let audioG = new Audio(src="sounds/mixkit-guitar-notification-alert-2320.wav");
            audioG.play();
            break;

        case "c":
            let audioC = new Audio(src="sounds/mixkit-choir-magic-shine-658.wav");
            audioC.play();
            break;

        case "o":
            let audioO = new Audio(src="sounds/mixkit-orchestral-violin-jingle-2280.wav");
            audioO.play();
            break;
        
        case "w":
            let audioW = new Audio(src="sounds/mixkit-short-whistle-fall-406.wav");
            audioW.play();
            break;

        case "b":
            let audioB = new Audio(src="sounds/mixkit-melodic-classic-door-bell-111.wav");
            audioB.play();
            break;

        case "v":
            let audioV = new Audio(src="sounds/mixkit-vinyl-record-distorted-scratch-712.wav");
            audioV.play();
            break;
   }

});

//https://www.devmedia.com.br/javascript-switch/39761 




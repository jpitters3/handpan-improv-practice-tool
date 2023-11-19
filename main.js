const styles = [

    'arpeggios',

    'chord progression',

    'chord exploration',

    'obscure sounds',

    'rhythmic break',

    'intense',

    'calm'

  ];

  

  const timeSignatures = [

    '4/4',

    '5/4',

    '6/4',

    '7/4',

    '9/4',

    '10/4',

    '5/8',

    '6/8',

    '7/8',

    '9/8',

    '10/8',

    '11/8',

    '12/8',

    '13/8'

  ];

  

  const styleTime = 20;

  let currentTime = styleTime;

  console.log(currentTime);

  

  const signatureTime = 60;

  let currentSignatureTime = signatureTime;

  console.log(currentSignatureTime);



  function getRandomStyle() {

    const randomIndex = Math.floor(Math.random() * styles.length);

    return styles[randomIndex];

  }

  

  function getRandomTimeSignature() {

    const randomIndex = Math.floor(Math.random() * styles.length);

    return timeSignatures[randomIndex];

  }



  function displayRandomStyle() {

    const randomStyle = getRandomStyle();

    document.getElementById('random-style').textContent = randomStyle;

  }

  

  function displayRandomTimeSignature() {

    const randomSignature = getRandomTimeSignature();

    document.getElementById('random-signature').textContent = randomSignature;

  }



  displayRandomStyle(); // Display a random word immediately

  displayRandomTimeSignature();

  

  // Your other function that sets the time interval

  function startInterval() {

    // Your interval code here...

    // For example:

    progressInterval = setInterval(updateProgressBar, 1000); // Update every second

    timeSignatureProgressInterval = setInterval(updateTimeSignatureProgressBar, 1000); // Update every second

  }



  function updateProgressBar() {

      console.log(currentTime);



    const progressBar = document.getElementById('progress-bar');

    const progressBarContainer = document.getElementById('progress-bar-container');

    const styleTimer = document.getElementById('style-time');

    styleTimer.textContent = " " + currentTime;

    

    // Adjust these values according to your needs

    const totalTime = styleTime; // Total time in seconds



    // Update currentTime based on your specific logic or timekeeping function



    // Calculate the percentage of progress

    const progressPercentage = (currentTime / totalTime) * 100;



    // Update the width of the progress bar

    progressBar.style.width = `${progressPercentage}%`;



    // Change the color or add other visual effects as desired

    // For example, changing color based on progress

    if (progressPercentage < 21) {

      progressBar.style.backgroundColor = 'red';

    } else if (progressPercentage < 51) {

      progressBar.style.backgroundColor = 'orange';

    } else {

      progressBar.style.backgroundColor = 'green';

    }



    // Check if the progress is complete

    if (currentTime <= 0) {

      currentTime = styleTime;

      //clearInterval(progressInterval); // Stop the interval when progress is complete

    }

  }

  

  function updateTimeSignatureProgressBar() {

      console.log(currentSignatureTime);



    const progressBar = document.getElementById('signature-progress-bar');

    const progressBarContainer = document.getElementById('signature-progress-bar-container');

    const signatureTimer = document.getElementById('signature-time');

    signatureTimer.textContent = " " + currentSignatureTime;

    

    // Adjust these values according to your needs

    const totalTime = signatureTime; // Total time in seconds



    // Calculate the percentage of progress

    const progressPercentage = (currentSignatureTime / totalTime) * 100;



    // Update the width of the progress bar

    progressBar.style.width = `${progressPercentage}%`;



    // Change the color or add other visual effects as desired

    // For example, changing color based on progress

    if (progressPercentage < 21) {

      progressBar.style.backgroundColor = 'red';

    } else if (progressPercentage < 51) {

      progressBar.style.backgroundColor = 'orange';

    } else {

      progressBar.style.backgroundColor = 'green';

    }



    // Check if the progress is complete

    if (currentTime <= 0) {

      currentTime = signatureTime;

      //clearInterval(progressInterval); // Stop the interval when progress is complete

    }

  }



      // Start the intervals when the Start button is clicked

  document.getElementById('start-button').addEventListener('click', function() {

      styleInterval = setInterval(displayRandomStyle, styleTime*1000); // Update every second

    signatureInterval = setInterval(displayRandomTimeSignature, signatureTime*1000); // Update every second

      

    setInterval(() => {

      // Decrement currentTime by 1 every second

      currentTime--;

      currentSignatureTime--;

    }, 1000);

    

    startInterval();

    

    document.getElementById('start-button').style.display = 'none';

    document.getElementById('restart-button').style.display = 'block';

    

  });

  

  document.getElementById('restart-button').addEventListener('click', function() {

      location.reload();

  });
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;   // <-- REQUIRED FOR RENDER

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>*$*trusselina archimboldi*$*</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 40px; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 200vh;
            text-align: center;
            position: relative;
          }

          h1 { 
            padding: 50px;
            color: #ff05e6aa; 
            margin-top: 100px;
          }

          p { margin-bottom: 20px; }

          .top-left {
            position: absolute;
            top: 30px;
            left: 30px;
            max-width: 300px;
            height: auto;
          }

          .bottom-right {
            position: absolute;
            bottom: 30px;
            right: 30px;
            max-width: 300px;
            height: auto;
          }

          pre {
            text-align: left;
            font-family: monospace;
            font-size: 12px;
            white-space: pre;
          }

          a {
            color: #0066cc;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          .ascii-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            font-family: monospace;
            font-size: 14px;
            color: #ff05e6aa;
            white-space: pre;
            background: none;
            line-height: 1.1em;
            height: 4em; /* enough for robots */
            overflow: visible;
          }

          .ascii-footer .robot {
            position: absolute;
            bottom: 0;
            left: 0;
          }
        </style>
      </head>
      <body>
        <img class="top-left" src="/logo.png" alt="Logo">

        <h1>test site to look at stuff related to trusselina</h1>
        <pre>
                        ___                                          ___
    __________________ /  /                       __________________/  /
    | _    _______    /  /                       | _    _______    /  /
    |(_) .d########b. //)| _____________________ |(_) .d########b. //)|
    |  .d############//  ||        _____        ||  .d############//  |
    | .d######""####//b. ||() ||  [TRUSS]  || ()|| .d######""####//b. |
    | 9######(  )#_//##P ||()|__|  | = |  |__|()|| 9######(  )#_//##P |
    | 'b######++#/_/##d' ||() ||   | = |   || ()|| 'b######++#/_/##d' |
    |  "9############P"  ||   ||   |___|   ||   ||  "9############P"  |
    |  _"9a#######aP"    ||  _   _____..__   _  ||  _"9a#######aP"    |
    | |_|  \`""""''       || (_) |_____||__| (_) || |_|  \`""""''       |
    |  ___..___________  ||_____________________||  ___..___________  |
    | |___||___________| |                       | |___||___________| |
    |____________________|                       |____________________|
        </pre>
        <p>
          Other Things: 
          <a href="https://trusselina.bandcamp.com/" target="_blank">/bandcamp</a> | 
          <a href="/videos">/videos</a> | 
          <a href="/contact">/contact</a> | 
          <a href="/about">/about</a>
        </p>

    <header style="align-self: flex-start; text-align: left; padding: 0; margin: 0;">
        <br><br>    <br><br>    <br><br>
    NEWS: 
    <br><br>
    ╭─-----------〔❨✧✧❩〕-----------─╮<br>

    <img src="IMG_5505.jpg" style="width: 200px; height: auto; display: block; margin-left: 20px; padding: 1px;">
    
    <pre style="margin-left: 30px;">muffins fell<br></pre>
    ╰─-----------〔❨✧✧❩〕-----------─╯<br>

    <br><br>
    ╭─-----------〔❨✧✧❩〕-----------─╮<br>

    <img src="dmv.jpg" style="width: 200px; height: auto; display: block; margin-left: 20px; padding: 1px;">
    
    <pre style="margin-left: 30px;">a mug from home at the dmv<br></pre>
    ╰─-----------〔❨✧✧❩〕-----------─╯<br>

    </header>
      
        
        <!-- robots -->
        <div class="ascii-footer">
          <pre class="robot" id="robot1"></pre>
          <pre class="robot" id="robot2"></pre>
          <pre class="robot" id="robot3"></pre>
        </div>

        <script>
          // Use single quotes and escape backslashes
          const robots = [
            '[o_o]\\n /|\\\\\\n / \\\\',
            '[O_O]\\n \\\\|/\\n / \\\\',
            '[0_0]\\n /|\\\\\\n / \\\\'
          ];

          const robotEls = [
            document.getElementById('robot1'),
            document.getElementById('robot2'),
            document.getElementById('robot3')
          ];

          let positions = [-100, -200, -300]; // initial x positions
          let frame = 0;

          function updateRobots() {
            for (let i = 0; i < robotEls.length; i++) {
              robotEls[i].textContent = robots[(i + frame) % robots.length];
              robotEls[i].style.transform = 'translateX(' + positions[i] + 'px)';
              positions[i] += 4;
              if (positions[i] > window.innerWidth) positions[i] = -100;
            }
            frame = (frame + 1) % robots.length;
          }

          setInterval(updateRobots, 1000 / 60); // 60fps
        </script>

      </body>
    </html>
  `);
});

app.get('/videos', (req, res) => res.send(`

<html>
      <head>
        <title>*&&*truss vids truss vids*&&*</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
            align-items: center;
          }
     
           header{
            color: black;
            text-decoration: none;
        }

          .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            width: 90%;
            max-width: 900px;
          }

          .video-box {
            position: relative;
            width: 100%;
            /* 1:1 aspect ratio */
            aspect-ratio: 1 / 1;
            background: black;
            overflow: hidden;
          }

          .video-box iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
          
        </style>
      </head>

      <body>
      
      <header>
        videos:
      </header>
       
       <div class="grid">
       
        <div class="video-box">
          <iframe src="https://www.youtube.com/embed/HN58KbYkDZk" allowfullscreen></iframe>
        </div>

        <div class="video-box">
          <iframe src="https://www.youtube.com/embed/NfskGu7adjo?si=iKyNOUIc2adZJVlK" allowfullscreen></iframe>
        </div>

        <div class="video-box">
          <iframe src="https://www.youtube.com/embed/YkHArqWwlWE" allowfullscreen></iframe>
        </div>

        <div class="video-box">
          <iframe src="https://www.youtube.com/embed/hUre_TwlQxU" allowfullscreen></iframe>
        </div>

         <div class="video-box">
          <iframe src="https://www.youtube.com/embed/LLCtdQCtfUI?si=6MXSjy2K0leqyIrJ" allowfullscreen></iframe>
        </div>

        <div class="video-box">
          <iframe src="https://www.youtube.com/embed/Khj-4I8EskQ" allowfullscreen></iframe>
        </div>

        <div class="video-box">
          <iframe src="https://www.youtube.com/embed/1yCGzZ_vV6Q" allowfullscreen></iframe>
        </div>

        <div class="video-box">
          <iframe src="https://www.youtube.com/embed/Lmeyu0BpcfY" allowfullscreen></iframe>
        </div>

        <div class="video-box">
          <iframe src="https://www.youtube.com/embed//XJ0mPdVkp1c" allowfullscreen></iframe>
        </div>
        
        
      </body>
    </html>


`));

app.get('/about', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>bio part</title>
        <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet">
        <style>
          body {
            background: #111;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          .scary-text {
            font-family: "Creepster", cursive;
            color: #ff0000;
            font-size: 28px;
            text-shadow:
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000,
              0 0 10px #ff0000,
              0 0 20px #ff0000;
            line-height: 1.5;
            text-align: center;
          }
            .ghost {
              position: absolute;
              top: -50px; /* start above the screen */
              font-size: 24px;
              color: white;
              pointer-events: none;
              user-select: none;
              animation-name: fall;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            @keyframes fall {
              0% { transform: translateY(-50px); opacity: 1; }
              100% { transform: translateY(110vh); opacity: 0; }
            }

        </style>
  
      </head>
      <body>
        <p class="scary-text">
          Trusselina is the Philadelphia-based duo of Hayden McGarvey and Mikaela Oppenheimer, who aim to create something out of—resampled noise, field recordings, acoustic instruments, YouTube clips, and computer music that drifts somewhere between chaos and calm.

Their debut project, The Point’s a Truss, My Trusselina, moves between acoustic and electronic worlds, mixing slow, heavy stretches with bursts of rave-like energy. Some tracks lean into drawn-out noise and abrasion; others grow into moments of clear communication.

Both Hayden and Mikaela come from extensive recording and touring backgrounds—Hayden with Bleary Eyed and Mikaela with Hello Mary—and bring that experience into Trusselina’s live sets. They met on a tour of the US and now they do everything together. On stage, it’s fast-paced drum and bass tangled with synths and samples, like dance music that’s constantly rethinking itself. At its core, Trusselina is about experimenting—seeing what happens when different ideas and moods collide.

        </p>
      </body>
    </html>
  `);
});


app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>contact</title>
        <header>
        <pre>
    if you want to say smth then send us an email                        

    ____spyandmiz@gmail.com_____

          _
          |E]
        .-|=====-.
        | | mail |
    ___|________|
            ||
            ||
            ||   www
    ,;,    ||   )_(,;;;,
    &lt;_&gt;  \ ||   \|/ \_/
    \|/  \\||  \\|   |//_
    \|//_\\|///_\V/_\|//__
  </pre>
        </header>
        <style>
          body {
            display: flex;
            justify-content: left;
            align-items: left;
            height: 100vh;
            margin: 0;
          }
          img {
            max-width: 90%;
            max-height: 90%;
          }
        </style>
      </head>
      <body>
        <img src="IMG_5472.jpg">
      </body>
    </html>
  `);
});

// Catch all other routes
app.use((req, res) => res.status(404).send('404 - Page not found'));

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let lyrics = ['I', 'give', 'you', 'my', 'heart', 'Hold', 'on,', 'let', 'me', 'sign', 'it', 'Your', 'señorita,', 'aka', 'your', 'best', 'friend', 'Hereby,', 'let', 'it', 'be', 'known', 'Love', 'like,', 'never', 'before', 'I\u2019m', 'always', 'at', 'your', 'service', 'You', 'just','have', 'to', 'holler', 'at', 'me', 'NYC,', 'NYC', ' what,', 'what? ', 'Tokyo,', 'Tokyo', ' what,', 'what? ', 'Send', 'it', 'out', 'from', 'the', 'streets', 'to', 'the', 'highest,', 'to', 'the', 'highest', 'high', 'MP3,', 'MP3,', 'players', 'Work', 'it', 'out,', 'work', 'it', 'out,', 'hustlers', 'Om', 'Mani', 'Padme', 'Hum,', 'Hum', 'You', 'know', 'why,', 'I\u2019m', 'gonna', 'be', 'yours', 'tonight', 'We\u2019re', 'gonna', 'ooh', 'ah', 'FYI,', 'we\u2019re', 'gonna', 'be', 'up', 'all', 'night', 'I\u2019ll', 'see', 'you', 'later', 'Call', 'me', 'You', 'know', 'my', 'number', 'Like', 'Captain', 'Picard', 'I\u2019m', 'chillin\u2019', 'and', 'flossin\u2019', 'It\u2019s', 'seven', 'o\u2019clock', 'I', 'issue', 'you', 'the', 'warning', 'That\u2019s', 'right,', 'we\u2019re', 'stealing', 'this', 'show', 'Damn', 'right,', 'letting', 'him', 'know', 'We\u2019re', 'sipping', 'Chardonnay', 'on', '2PM', 'on', 'our', 'working', 'day', 'Ching', 'a', 'ling,', 'ching', 'a', 'ling', ' what,', 'what? ', 'Ching', 'a', 'ling,', 'ching', 'a', 'ling', ' what,', 'what? ', 'Take', 'me', 'down', 'to', 'the', 'fields', 'where', 'the', 'grasses,', 'where', 'the', 'grasses,', 'lie', 'MP3,', 'MP3,', 'players', 'Work', 'it', 'out,', 'work', 'it', 'out,', 'hustlers', 'Om', 'Mani', 'Padme', 'Hum,', 'Hum', 'You', 'know', 'why,', 'I\u2019m', 'gonna', 'be', 'yours', 'tonight', 'We\u2019re', 'gonna', 'ooh', 'ah', 'FYI,', 'we\u2019re', 'gonna', 'be', 'up', 'all', 'night', 'I\u2019ll', 'see', 'you', 'later', 'Call', 'me', 'You', 'know', 'my', 'number', 'See', 'I', 'don\u2019t', 'need', 'a', 'freeloader', 'No,', 'I', 'don\u2019t', 'want', 'a', 'freeloader', 'If', 'you', 'want', 'a', 'piece', 'of', 'this', 'stuff', 'Got', 'to', 'give,', 'got', 'to', 'give', 'something', 'You', 'know', 'why', ' you', 'know', 'why ,', 'I\u2019m', 'gonna', 'be', 'yours', 'tonight', ' yours', 'tonight ', 'We\u2032re', 'gonna', 'ooh', 'ah', 'FYI,', 'we\u2019re', 'gonna', 'be', 'up', 'all', 'night', 'I\u2019ll', 'see', 'you', 'later', ' see', 'you', 'later ', 'Call', 'me', 'You', 'know', 'my', 'number', 'You', 'know', 'why', ' you', 'know', 'why ', 'I\u2019m', 'gonna', 'be', 'yours', 'tonight', ' I\u2019m', 'gonna', 'be', 'yours', 'tonight ', 'We\u2019re', 'gonna', 'ooh', 'ah', 'FYI', ' FYI ,', 'we\u2019re', 'gonna', 'be', 'up', 'all', 'night', ' we\u2019re', 'gonna', 'be', 'up', 'all', 'night ', 'I\u2019ll', 'see', 'you', 'later', ' I\u2019ll', 'see', 'you', 'later ', 'Call', 'me', 'You', 'know', 'my', 'number'];

let alpha_bg = 0;
let bg_appear_start_frame = 150
let bg_appear_end_frame = 1180
//let bg_fade_start_frame = 1200
//let bg_fade_end_frame = 1300

let img1, img2, img3, img4, img5, img6, img7;
let imgs = [img1, img2, img3, img4, img5, img6, img7];
let alpha_imgs = [0, 0, 0, 0, 0, 0, 0];
let alpha_appear_max = [255, 255, 255, 255, 255, 255, 255]
let imgs_appear_start_frame = [1150, 1800, 2100, 2450, 2800, 3350, 3650]
let imgs_appear_end_frame = [1250, 2000, 2350, 2550, 2950, 3450, 3750]
let alpha_fade_min = [10, 10, 10, 10, 10, 10, 20]
let imgs_fade_start_frame = [1500, 2200, 2400, 2700, 3100, 3500, 3800]
let imgs_fade_end_frame = [1700, 2300, 2500, 3000, 3400, 3800, 4050]

let input;
let button;
let userText = "";
let showInput = true;
let finale_start = 4000;

let restart_button;
let restart_show = false;

let myMusic;

let textsize = 32
let word_sepration = 200
let word_heights
let word_widths
let fall_speed = 15
let current_first_idx = 0
let loop_idx = 0

function preload() {
  imgs[0] = loadImage('tokyo tower.png');
  imgs[1] = loadImage('david-bowie.png');
  imgs[2] = loadImage('brooklyn-bridge.png');
  imgs[3] = loadImage('1kneel.png');
  imgs[4] = loadImage('1moth.png');
  imgs[5] = loadImage('new-york.png');
  imgs[6] = loadImage('finale.png');
  myMusic = loadSound('merrychristmas.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  word_heights = new Array(ceil(windowHeight / word_sepration)).fill(0 - 100)
  word_widths = Array.from({length: word_heights.length}, () => Math.random());
  myMusic.play();
  myMusic.setLoop(true);
  frameRate(24);
  
  input = createInput();
  input.position(150, 150);
  input.hide();
  
  input.style('font-family', 'plantin');
  input.style('font-size', '16px');
  input.style('background-color', 'white'); 
  input.style('color', 'rgb(0,47,197)');

  button = createButton('It\u2019s me');
  button.position(input.x + input.width + 40, 150);
  button.hide();
  
  button.style('background-color', 'white');
  button.style('color', 'rgb(0,47,197)');
  button.style('font-size', '16px');
  button.style('font-family', 'plantin');
  button.style('border', 'none');        
  button.style('padding', '3px 12px');
  button.style('border-radius', '3px');
  button.style('cursor', 'pointer');

  button.mousePressed(displayText);
  
  restart_button = createButton('You wanna start over again?');
  restart_button.position(windowWidth - (input.x + input.width + 40), windowHeight - 150);
  restart_button.hide();
  
  restart_button.style('background-color', 'white');
  restart_button.style('color', 'rgb(0,47,197)');
  restart_button.style('font-size', '16px');
  restart_button.style('font-family', 'plantin');
  restart_button.style('border', 'none');        
  restart_button.style('padding', '3px 12px');
  restart_button.style('border-radius', '3px');
  restart_button.style('cursor', 'pointer');
 
  restart_button.mousePressed(restart);
}

function draw() {
  fill('rgb(0,47,197)');
  textFont('plantin');
  textAlign(CENTER, CENTER);
  textsize = mouseX / 10 + 10;
  textSize(textsize);

// draw bg image
  
 if (myMusic.isPlaying()) {text(111,100,100)}
 text(222,100,200
 if (frameCount >= bg_appear_start_frame && frameCount <= bg_appear_end_frame) {
    alpha_bg = map(frameCount, bg_appear_start_frame, bg_appear_end_frame, 0, 255);  
  }
  
 //if (frameCount >= bg_fade_start_frame && frameCount <= bg_fade_end_frame) {
    //alpha_bg = map(frameCount, bg_fade_start_frame, bg_fade_end_frame, 255, 10);  
  //}
  
  background(220, 221, 240, alpha_bg);

// draw images
  
  set_alpha_imgs()
  
//draw text 
  
  for (let i = 0; i < word_heights.length; i++) {
    text(lyrics[(i + loop_idx) % lyrics.length], width * word_widths[(i + loop_idx) % word_heights.length], word_heights[(i + loop_idx) % word_heights.length]);
  }
  
  word_heights[current_first_idx] += fall_speed
  
  for (let i = 1; i < word_heights.length; i++) {
    if (word_heights[current_first_idx] > word_sepration * i){
      word_heights[(current_first_idx + i) % word_heights.length] += fall_speed
    }
  }
  
  if (word_heights[current_first_idx] > height + 100){
    word_heights[current_first_idx] = 0 - 100;
    word_widths[current_first_idx] = Math.random()
    current_first_idx++;
    current_first_idx = current_first_idx % word_heights.length;
    loop_idx++;
    loop_idx = loop_idx % lyrics.length;
  }
  
  
//draw finale

  if (frameCount >= finale_start) {
    alpha_bg = map(frameCount, finale_start, 4320, 0, 255);  
    alpha_bg = constrain(alpha_bg, 0, 255);
    background(0,47,197,alpha_bg);
  }
  
  if (frameCount >= finale_start && showInput) {
    input.show(); 
    button.show();
    //restart_button.show();
    textSize(16);
    fill(255);
    textAlign(LEFT, CENTER);
    text('Your Name?',150, 130)
  }
  else { 
    input.hide();  
    button.hide(); 
  }
  
  if (userText) {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    let sentence = "Merry Christmas, " + userText + "!";
    text(sentence, windowWidth / 2, windowHeight / 2);
    restart_show = true;
  }
    
  if (restart_show) {
      restart_button.show();
  }
  
}

function displayText() {
  if (input.value()) {
    userText = input.value(); 
    showInput = false
  }
}

function restart() {
  location.reload();
}

function set_alpha_imgs() {
  for (let idx = 0; idx < imgs.length; idx += 1) {
    if (frameCount >= imgs_appear_start_frame[idx] && frameCount <= imgs_appear_end_frame[idx]) {
      alpha_imgs[idx] = map(frameCount, imgs_appear_start_frame[idx], imgs_appear_end_frame[idx], 0, alpha_appear_max[idx]); 
    }

    if (frameCount >= imgs_fade_start_frame[idx] && frameCount <= imgs_fade_end_frame[idx]) {
      alpha_imgs[idx] = map(frameCount, imgs_fade_start_frame[idx], imgs_fade_end_frame[idx], alpha_appear_max[idx], alpha_fade_min[idx]); 
    }
    
    tint(255, alpha_imgs[idx]);
    image(imgs[idx], 0, 0, windowWidth, windowHeight);
  }
}

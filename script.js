const music=document.getElementById('bgMusic'),s1=document.getElementById('musicStatus'),s2=document.getElementById('musicStatus2');
function st(t){if(s1)s1.textContent=t;if(s2)s2.textContent=t}
function playMusic(){if(!music){st('Áudio não encontrado');return}music.volume=.85;let p=music.play();if(p){p.then(()=>st('Música tocando ❤️')).catch(()=>st('Clique em Tocar novamente ▶'))}}
document.getElementById('startBtn').onclick=()=>{document.body.classList.add('on');playMusic();setTimeout(()=>document.getElementById('start').style.display='none',1000);confetti()};
document.getElementById('playBtn').onclick=playMusic;document.getElementById('playBtn2').onclick=playMusic;
if(music){music.onerror=()=>st('Erro: confira o arquivo em assets/musica.mp3 ou musica.m4a');music.oncanplaythrough=()=>st('Música carregada. Clique para tocar.')}
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('show')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
function confetti(){let colors=['#d6a84f','#ffdf8a','#fff4df','#8a4d20'];for(let i=0;i<130;i++){let c=document.createElement('span');c.className='conf';c.style.left=Math.random()*100+'vw';c.style.background=colors[Math.floor(Math.random()*colors.length)];c.style.animationDelay=Math.random()+'s';document.body.appendChild(c);setTimeout(()=>c.remove(),5000)}}
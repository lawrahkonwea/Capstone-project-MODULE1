const hambuger = document.querySelector('.hambuger');
const navList = document.querySelector('.nav-list');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navList.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-item');
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    hambuger.classList.remove('active');
    navList.classList.remove('active');
  });
}

const featured = [
  {
    speaker: 'images/speaker_01.png',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies, Harvard Law School',
    school: 'Benkler studies commons-based peer production, the Internet, and the law.',
  },
  {
    speaker: 'images/speaker_02.png',
    name: 'SohYeong Noh',
    profession: 'Director of Art Center Nabi, Seoul, Korea and Board Member of Creative Commons Korea',
    school: 'As the main venue for new media art production in Korea,',
  },
  {
    speaker: 'images/speaker_03.png',
    name: 'Ryan Merkley',
    profession: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    school: 'Ryan had been leading open source and open data projects for over 15 years.',
  },
  {
    speaker: 'images/speaker_04.png',
    name: 'Lila Tretikov',
    profession: 'Executive Director of Creative Commons, Former Executive Director of the Wikimedia Foundation',
    school: 'Lila Tretikov is the Executive Director of Creative Commons, ',
  },
  {
    speaker: 'images/speaker_05.png',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe, Member of the European Parliament',
    school: 'European ingetration, political democracy, and participation of youth through online as her major condemn,',
  },
  {
    speaker: 'images/speaker_06.png',
    name: 'Kilnam Chon',
    profession: 'Data science. Data visualization ; Python. Tim Cook. UX design ;',
    school: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate.',
  },
];

const wholeSpeakers = document.getElementById('speakers-grid');
for (let i = 0; i < featured.length; i += 1) {
  const div = document.createElement('div');
  div.className = 'speaker';
  div.innerHTML = `
    <img src="${featured[i].speaker}" alt="${featured[i].name}}" class="image">                  
   <div class="description">
   <h3>${featured[i].name}</h3>
    <p class="sub-heading push">${featured[i].profession}</p>
    <span class="institution">${featured[i].school}</span>
   </div>
    `;
  wholeSpeakers.appendChild(div);
}

const seemore = document.getElementById('viewmore');
seemore.addEventListener('click', () => {
  wholeSpeakers.classList.toggle('activated');
  if (seemore.textContent === 'see more speakers') {
    seemore.textContent = 'see less';
  } else {
    seemore.textContent = 'see more speakers';
  }
});
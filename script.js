// South Indian Wedding Invitation Script

const translations = {
  en: {
    door_mantra: "|| SHREE GANESHAY NAMAH ||",
    hero_mantra: "|| SHREE GANESHAY NAMAH ||",
    hero_subtext: "Invite You To Celebrate The Matrimony Of",
    groom_name: "Karthik",
    weds_label: "weds",
    bride_name: "Meenakshi",
    hero_date: "28th November 2026",
    hero_venue: "Taj Falaknuma Palace, Hyderabad",
    open_invitation: "Open Invitation",
    save_the_date: "SAVE THE DATE",
    cnt_days: "DAYS",
    cnt_hours: "HOURS",
    cnt_mins: "MINUTES",
    cnt_secs: "SECONDS",
    story_tag: "PRECIOUS MOMENTS",
    story_title: "Our Journey Together",
    story_subtitle: "Precious moments written in stars & sacred vows",
    s1_title: "The First Encounter",
    s1_desc: "Two souls met under the shade of ancient banyan trees. What started with a shared smile turned into endless conversations.",
    s2_title: "Under the Stars",
    s2_desc: "Surrounded by glowing diyas and jasmine garlands, a quiet promise was made to walk together forever.",
    s3_title: "The Sacred Knot",
    s3_desc: "With the blessings of our elders, sacred Vedic mantras, and Talambralu showers, our journey of seven lifetimes begins.",
    events_title: "Events Schedule",
    lbl_date: "DATE",
    lbl_time: "TIME",
    lbl_venue: "VENUE",
    e1_name: "Ganesh Pujan & Muhurtham",
    e1_desc: "A sacred prayer to begin our wedding journey",
    e1_date: "Fri, 27 Nov 2026",
    e1_time: "10:00 AM onwards",
    e1_venue: "Poolside Gardens, Falaknuma Palace",
    e2_name: "Haldi & Nalangu Ceremony",
    e2_desc: "Auspicious turmeric blessings, henna designs & marigold showers",
    e2_date: "Fri, 27 Nov 2026",
    e2_time: "02:00 PM onwards",
    e2_venue: "Mango Orchard Lawns, Falaknuma Palace",
    e3_name: "Sundowner Sangeeth",
    e3_desc: "An evening of song, dance and laughter under the setting sun",
    e3_date: "Fri, 27 Nov 2026",
    e3_time: "07:00 PM onwards",
    e3_venue: "Grand Ballroom, Taj Falaknuma",
    e4_name: "Mapillai Azhaippu & Swagat",
    e4_desc: "The grand welcome of the groom & procession family blessings",
    e4_date: "Sat, 28 Nov 2026",
    e4_time: "04:30 PM onwards",
    e4_venue: "Palace Courtyard & Main Gateway",
    e5_name: "Kalyanam & Mangalyadharanam",
    e5_desc: "The sacred wedding vows and tying of the holy Mangalsutra",
    e5_date: "Sat, 28 Nov 2026",
    e5_time: "07:00 PM onwards",
    e5_venue: "Durbar Hall & Mandap",
    hosts_sub: "WITH THE BLESSINGS OF OUR ELDERS",
    hosts_title: "Elders & Parivaar",
    welcomed_by: "Warmly Welcomed By",
    family_names: "The Subramanian & Ramachandran Families",
    groom_fam_label: "Groom's Family",
    groom_parents: "Smt. Lakshmi & Shri Subramanian",
    groom_grandparents: "Grandparents: Late Smt. Visalakshi & Late Shri Sundaram",
    bride_fam_label: "Bride's Family",
    bride_parents: "Smt. Saraswathi & Shri Ramachandran",
    bride_grandparents: "Grandparents: Smt. Kamakshi & Shri Ananthakrishnan",
    hosts_note: '"With open arms, joyful hearts, and immense gratitude, we warmly invite your presence on our children\'s wedding."',
    venue_label: "VENUE",
    where_celebrate: "Where We Celebrate",
    get_directions: "Get Directions",
    footer_love: "WITH LOVE & BLESSINGS",
    hashtag: "#KARTHIKWEDSMEENAKSHI"
  },
  ta: {
    door_mantra: "|| ஸ்ரீ கணேசாய நமஃ ||",
    hero_mantra: "|| ஸ்ரீ கணேசாய நமஃ ||",
    hero_subtext: "தங்களை அன்போடு அழைக்கும் சுபமுகூர்த்தப் பத்திரிகை",
    groom_name: "கார்த்திக்",
    weds_label: "இணை",
    bride_name: "மீனாட்சி",
    hero_date: "28th November 2026",
    hero_venue: "தாஜ் பலக்னுமா அரண்மனை, ஹைதராபாத்",
    open_invitation: "அழைப்பிதழைத் திறக்க",
    save_the_date: "நன்நாளைக் குறித்துக் கொள்ளுங்கள்",
    cnt_days: "நாட்கள்",
    cnt_hours: "மணிநேரம்",
    cnt_mins: "நிமிடங்கள்",
    cnt_secs: "விநாடிகள்",
    story_tag: "இனிய நினைவுகள்",
    story_title: "எங்கள் இனிய பயணம்",
    story_subtitle: "விண்மீன்களிலும் புனித பந்தத்திலும் எழுதிய இனிய தருணங்கள்",
    s1_title: "முதல் சந்திப்பு",
    s1_desc: "அன்பும் மரியாதையும் மலர்ந்த அந்த இனிய முதல் தருணம். ஒரு புன்னகையில் தொடங்கி முடிவில்லா உரையாடலாக மாறியது.",
    s2_title: "நிச்சயதார்த்தம்",
    s2_desc: "மல்லிகை மலர்கள் மற்றும் தீபங்களின் ஒளியில், என்றென்றும் இணைந்து வாழக் கொடுத்த சத்தியம்.",
    s3_title: "மங்கல நாண்",
    s3_desc: "பெரியோர்களின் ஆசியோடும், வேத மந்திரங்களோடும், மங்கல நாண் பூட்டி எங்கள் புதிய வாழ்க்கை தொடங்குகிறது.",
    events_title: "நிகழ்ச்சி நிரல்",
    lbl_date: "DATE",
    lbl_time: "TIME",
    lbl_venue: "VENUE",
    e1_name: "விநாயகர் பூஜை & முகூர்த்தம்",
    e1_desc: "சுபமங்கள தொடக்கத்திற்காக இறைவனின் ஆசீர்வாதம் பெறும் புனித பூஜை",
    e1_date: "Fri, 27 Nov 2026",
    e1_time: "10:00 AM onwards",
    e1_venue: "பூல்சைடு தோட்டம், பலக்னுமா அரண்மனை",
    e2_name: "நலங்கு & மஞ்சள் விழா",
    e2_desc: "மஞ்சள் பூசி, மருதாணி இட்டு, மகிழ்வோடு நடக்கும் வண்ணமயமான விழா",
    e2_date: "Fri, 27 Nov 2026",
    e2_time: "02:00 PM onwards",
    e2_venue: "மாந்தோப்பு தோட்டம், பலக்னுமா அரண்மனை",
    e3_name: "சங்கீத் இசை இரவு",
    e3_desc: "இசையும் நடனமும் இணையும் வண்ணமயமான மாலைப் பொழுது",
    e3_date: "Fri, 27 Nov 2026",
    e3_time: "07:00 PM onwards",
    e3_venue: "கிராண்ட் பால்ரூம், தாஜ் பலக்னுமா",
    e4_name: "மாப்பிள்ளை அழைப்பு",
    e4_desc: "மணமகனுக்கு அளிக்கப்படும் கம்பீரமான பாரம்பரிய வரவேற்பு",
    e4_date: "Sat, 28 Nov 2026",
    e4_time: "04:30 PM onwards",
    e4_venue: "அரண்மனை முற்றவெளி & முதன்மை வாயில்",
    e5_name: "திருமணம் & மங்கல்யதாரணம்",
    e5_desc: "வேத மந்திரங்கள் முழங்க நடக்கும் புனித மங்கல்யதாரணம்",
    e5_date: "Sat, 28 Nov 2026",
    e5_time: "07:00 PM onwards",
    e5_venue: "தர்பார் மண்டபம் & கல்யாண மேடை",
    hosts_sub: "பெரியோர்களின் ஆசியுடன்",
    hosts_title: "குடும்பத்தினர் & பெரியோர்கள்",
    welcomed_by: "அன்புடன் அழைக்கும்",
    family_names: "சுப்பிரமணியன் & ராமச்சந்திரன் குடும்பத்தினர்",
    groom_fam_label: "மணமகன் வீட்டார்",
    groom_parents: "திருமதி லக்ஷ்மி & திரு சுப்பிரமணியன்",
    groom_grandparents: "தாத்தா பாட்டி: அமரர் விசாலாட்சி & அமரர் சுந்தரம்",
    bride_fam_label: "மணமகள் வீட்டார்",
    bride_parents: "திருமதி சரஸ்வதி & திரு ராமச்சந்திரன்",
    bride_grandparents: "தாத்தா பாட்டி: திருமதி காமாக்ஷி & திரு அனந்தகிருஷ்ணன்",
    hosts_note: '"அன்போடும் மகிழ்ச்சியோடும், எங்கள் பிள்ளைகளின் சுபமுகூர்த்த விழாவிற்கு உங்களை அன்போடு அழைக்கின்றோம்."',
    venue_label: "VENUE",
    where_celebrate: "சுபமுகூர்த்த இடம்",
    get_directions: "வழித்தடத்தைப் பெற",
    footer_love: "அன்பும் ஆசிகளும் கொண்டு",
    hashtag: "#KARTHIKWEDSMEENAKSHI"
  },
  te: {
    door_mantra: "|| శ్రీ గణేశాయ నమః ||",
    hero_mantra: "|| శ్రీ గణేశాయ నమః ||",
    hero_subtext: "మిమ్మల్ని సంతోషంగా ఆహ్వానిస్తున్న శుభ ముహూర్తం",
    groom_name: "కార్తీక్",
    weds_label: "మరియు",
    bride_name: "మీనాక్షి",
    hero_date: "28th November 2026",
    hero_venue: "తాజ్ ఫలక్‌నుమా ప్యాలెస్, హైదరాబాద్",
    open_invitation: "ఆహ్వాన పత్రికను తెరవండి",
    save_the_date: "తేదీని గుర్తుంచుకోండి",
    cnt_days: "రోజులు",
    cnt_hours: "గంటలు",
    cnt_mins: "నిమిషాలు",
    cnt_secs: "సెకన్లు",
    story_tag: "తీపి జ్ఞాపకాలు",
    story_title: "మా తీపి ప్రయాణం",
    story_subtitle: "నక్షత్రాలలో మరియు పవిత్ర బంధంలో రాయబడిన తీపి క్షణాలు",
    s1_title: "మొదటి కలయిక",
    s1_desc: "మొదటి చూపులోనే మొదలైన చిరునవ్వు, కాలక్రమేణా ఎప్పటికీ వీడని అనుబంధంగా మారింది.",
    s2_title: "నిశ్చితార్థం",
    s2_desc: "మల్లె పూల పరిమళాలు, ప్రమిద కాంతుల నడుమ ఎప్పటికీ తోడుంటానని ఇచ్చిన మాట.",
    s3_title: "మాంగల్య ధారణ",
    s3_desc: "పెద్దల ఆశీస్సులు, వేద మంత్రాల సాక్షిగా తలంబ్రాలు చల్లుకుంటూ మొదలవుతున్న మా ఏడేళ్ల బంధం.",
    events_title: "వివాహ కార్యక్రమాలు",
    lbl_date: "DATE",
    lbl_time: "TIME",
    lbl_venue: "VENUE",
    e1_name: "గణపతి పూజ & ముహూర్తం",
    e1_desc: "శుభ ప్రారంభం కోసం దైవ ఆశీస్సులు పొందే పవిత్ర పూజ",
    e1_date: "Fri, 27 Nov 2026",
    e1_time: "10:00 AM onwards",
    e1_venue: "పూల్‌సైడ్ గార్డెన్స్, ఫలక్‌నుమా ప్యాలెస్",
    e2_name: "నలుగు & పసుపు వేడుక",
    e2_desc: "పసుపు పూతల శోభ, గోరింటాకు కాంతులు, సంబరాల వేడుక",
    e2_date: "Fri, 27 Nov 2026",
    e2_time: "02:00 PM onwards",
    e2_venue: "మామిడి తోట ప్రాంగణం, ఫలక్‌నుమా ప్యాలెస్",
    e3_name: "సంగీత్ & నృత్య రాత్రి",
    e3_desc: "సంగీతం, నృత్యాలు మరియు ఆనందాల కలయిక",
    e3_date: "Fri, 27 Nov 2026",
    e3_time: "07:00 PM onwards",
    e3_venue: "గ్రాండ్ బాల్‌రూమ్, తాజ్ ఫలక్‌నుమా",
    e4_name: "ఎదురుకోళ్ళు & స్వాగతం",
    e4_desc: "పెళ్లికొడుకుకు ఘనంగా ఇచ్చే సంప్రదాయ స్వాగతం",
    e4_date: "Sat, 28 Nov 2026",
    e4_time: "04:30 PM onwards",
    e4_venue: "ప్యాలెస్ ప్రాంగణం & ప్రధాన ద్వారం",
    e5_name: "కల్యాణం & మాంగల్య ధారణ",
    e5_desc: "వేద మంత్రాల సాక్షిగా జరిగే పవిత్ర మాంగల్య ధారణ",
    e5_date: "Sat, 28 Nov 2026",
    e5_time: "07:00 PM onwards",
    e5_venue: "దర్బార్ హాల్ & కల్యాణ మంటపం",
    hosts_sub: "పెద్దల దివ్య ఆశీస్సులతో",
    hosts_title: "కుటుంబ సభ్యులు & పెద్దలు",
    welcomed_by: "సాదరంగా ఆహ్వానించువారు",
    family_names: "సుబ్రహ్మణ్యం & రామచంద్రన్ కుటుంబ సభ్యులు",
    groom_fam_label: "పెళ్లికొడుకు తరఫున",
    groom_parents: "శ్రీమతి లక్ష్మి & శ్రీ సుబ్రహ్మణ్యం",
    groom_grandparents: "తాతయ్య అవ్వ: స్వర్గీయ విశాలాక్షి & స్వర్గీయ సుందరం",
    bride_fam_label: "పెళ్లికూతురు తరఫున",
    bride_parents: "శ్రీమతి సరస్వతి & శ్రీ రామచంద్రన్",
    bride_grandparents: "తాతయ్య అవ్వ: శ్రీమతి కామాక్షి & శ్రీ అనంతకృష్ణన్",
    hosts_note: '"ప్రేమానురాగాలతో, సంతోషభరిత హృదయంతో మా పిల్లల వివాహ మహోత్సవానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము."',
    venue_label: "VENUE",
    where_celebrate: "వివాహ వేదిక",
    get_directions: "మార్గం చూడండి",
    footer_love: "ప్రేమానురాగాలతో",
    hashtag: "#KARTHIKWEDSMEENAKSHI"
  }
};

let currentLang = localStorage.getItem('selected_language') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('selected_language', lang);

  document.body.classList.remove('lang-en', 'lang-ta', 'lang-te');
  document.body.classList.add('lang-' + lang);

  document.querySelectorAll('.lang-pill').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('lang-btn-' + lang);
  if (activeBtn) activeBtn.classList.add('active');

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  if (window.drawScratchCover) {
    window.drawScratchCover();
  }
}

// ----------------------------------------------------
// ANIMATED STORY PLAYER LOGIC
// ----------------------------------------------------
let currentStory = 0;
const totalStories = 3;
let storyProgressInterval = null;
let isStoryPlaying = true;
let storyProgress = 0;

function updateStoryUI() {
  const slides = document.querySelectorAll('.story-slide');
  slides.forEach((slide, idx) => {
    if (idx === currentStory) {
      slide.classList.remove('opacity-0', 'pointer-events-none');
      slide.classList.add('opacity-100');
    } else {
      slide.classList.remove('opacity-100');
      slide.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  for (let i = 0; i < totalStories; i++) {
    const bar = document.getElementById(`story-bar-${i}`);
    if (bar) {
      if (i < currentStory) {
        bar.style.width = '100%';
      } else if (i > currentStory) {
        bar.style.width = '0%';
      }
    }
  }

  resetStoryProgress();
}

function resetStoryProgress() {
  clearInterval(storyProgressInterval);
  storyProgress = 0;

  if (!isStoryPlaying) return;

  const currentBar = document.getElementById(`story-bar-${currentStory}`);
  storyProgressInterval = setInterval(() => {
    storyProgress += 2;
    if (currentBar) currentBar.style.width = `${storyProgress}%`;

    if (storyProgress >= 100) {
      clearInterval(storyProgressInterval);
      nextStory();
    }
  }, 100);
}

function nextStory(e) {
  if (e) e.stopPropagation();
  currentStory = (currentStory + 1) % totalStories;
  updateStoryUI();
}

function prevStory(e) {
  if (e) e.stopPropagation();
  currentStory = (currentStory - 1 + totalStories) % totalStories;
  updateStoryUI();
}

function goToStory(index) {
  currentStory = index;
  updateStoryUI();
}

function toggleStoryPlay() {
  isStoryPlaying = !isStoryPlaying;
  const playBtn = document.getElementById('story-play-btn');
  if (playBtn) playBtn.textContent = isStoryPlaying ? '⏸' : '▶';

  if (isStoryPlaying) {
    resetStoryProgress();
  } else {
    clearInterval(storyProgressInterval);
  }
}

// ----------------------------------------------------
// ULTRA-SLOW & GENTLE FALLING LEAVES & FLOWERS CANVAS
// ----------------------------------------------------
function initSlowPetalsCanvas() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numPetals = 26;
  const petals = [];

  for (let i = 0; i < numPetals; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 7 + Math.random() * 10,
      vy: 0.25 + Math.random() * 0.4,
      vx: -0.15 + Math.random() * 0.3,
      swayFreq: 0.006 + Math.random() * 0.01,
      swayAmp: 0.8 + Math.random() * 1.4,
      angle: Math.random() * Math.PI * 2,
      vAngle: 0.004 + Math.random() * 0.008,
      opacity: 0.2 + Math.random() * 0.25,
      type: Math.random() > 0.4 ? 'flower' : Math.random() > 0.5 ? 'petal' : 'leaf'
    });
  }

  function drawJasmineFlower(ctx, x, y, size, angle, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity;

    ctx.fillStyle = '#FFFDF7';
    for (let i = 0; i < 5; i++) {
      ctx.rotate((Math.PI * 2) / 5);
      ctx.beginPath();
      ctx.ellipse(0, size * 0.6, size * 0.35, size * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = '#E5A93C';
    ctx.fill();

    ctx.restore();
  }

  function drawMarigoldPetal(ctx, x, y, size, angle, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity;

    ctx.fillStyle = opacity > 0.3 ? '#D4AF37' : '#E89000';
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.quadraticCurveTo(size * 0.7, 0, 0, size);
    ctx.quadraticCurveTo(-size * 0.7, 0, 0, -size);
    ctx.fill();

    ctx.restore();
  }

  function drawSoftLeaf(ctx, x, y, size, angle, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity * 0.8;

    ctx.fillStyle = '#2C5E43';
    ctx.beginPath();
    ctx.moveTo(0, -size * 1.2);
    ctx.quadraticCurveTo(size * 0.6, 0, 0, size * 1.2);
    ctx.quadraticCurveTo(-size * 0.6, 0, 0, -size * 1.2);
    ctx.fill();

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let p of petals) {
      p.y += p.vy;
      p.x += Math.sin(p.y * p.swayFreq) * p.swayAmp + p.vx;
      p.angle += p.vAngle;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      if (p.type === 'flower') {
        drawJasmineFlower(ctx, p.x, p.y, p.size, p.angle, p.opacity);
      } else if (p.type === 'petal') {
        drawMarigoldPetal(ctx, p.x, p.y, p.size, p.angle, p.opacity);
      } else {
        drawSoftLeaf(ctx, p.x, p.y, p.size, p.angle, p.opacity);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ----------------------------------------------------
// CONTINUOUS HERO VIDEO PLAYBACK ENGINE
// ----------------------------------------------------
function ensureContinuousHeroVideo() {
  const video = document.getElementById('hero-bg-video');
  if (!video) return;

  video.muted = true;
  video.loop = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      const resumeVideo = () => {
        video.play();
        document.removeEventListener('touchstart', resumeVideo);
        document.removeEventListener('click', resumeVideo);
      };
      document.addEventListener('touchstart', resumeVideo, { once: true });
      document.addEventListener('click', resumeVideo, { once: true });
    });
  }

  video.addEventListener('pause', () => {
    video.play();
  });
}

// ----------------------------------------------------
// DOM READY & EVENTS ENGINE
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initSlowPetalsCanvas();
  ensureContinuousHeroVideo();

  if (window.lucide) {
    lucide.createIcons();
  }

  // Double Door opening logic
  const doorOverlay = document.getElementById('door-overlay');
  const doorSealBtn = document.getElementById('door-seal-btn');

  function openRoyalDoor() {
    if (!doorOverlay || doorOverlay.classList.contains('is-opened')) return;
    doorOverlay.classList.add('is-opened');
    document.body.classList.add('is-revealed');
    ensureContinuousHeroVideo();

    setTimeout(() => {
      doorOverlay.style.display = 'none';
    }, 5500);

    startIndianRagaMusic();
  }

  if (doorOverlay) doorOverlay.addEventListener('click', openRoyalDoor);
  if (doorSealBtn) doorSealBtn.addEventListener('click', openRoyalDoor);

  // Countdown timer
  const destination = new Date('2026-11-28T16:00:00').getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const diff = destination - now;
    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cnt-days');
    const hEl = document.getElementById('cnt-hours');
    const mEl = document.getElementById('cnt-mins');
    const sEl = document.getElementById('cnt-secs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Scratch card cover logic
  const scratchCanvas = document.getElementById('scratch-canvas');
  const scratchWrapper = document.getElementById('scratch-card-wrapper');

  if (scratchCanvas && scratchWrapper) {
    const ctx = scratchCanvas.getContext('2d');
    let isScratching = false;
    let isRevealed = false;

    function resizeScratchCanvas() {
      const rect = scratchWrapper.getBoundingClientRect();
      scratchCanvas.width = rect.width;
      scratchCanvas.height = rect.height;
      drawCover();
    }

    function drawCover() {
      if (isRevealed) return;
      const w = scratchCanvas.width;
      const h = scratchCanvas.height;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);

      const cardGrad = ctx.createLinearGradient(0, 0, w, h);
      cardGrad.addColorStop(0, '#D4AF37');
      cardGrad.addColorStop(0.5, '#F3D69A');
      cardGrad.addColorStop(1, '#B58E29');

      ctx.fillStyle = cardGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, w - 20, h - 20);

      ctx.fillStyle = '#7A001E';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const fontSize = Math.min(Math.max(w / 22, 16), 22);
      ctx.font = `bold ${fontSize}px "Cormorant Garamond", serif`;
      
      const scratchText = currentLang === 'ta' ? '✦ திறந்து பார்க்க தேய்க்கவும் ✦' : 
                         currentLang === 'te' ? '✦ చూడటానికి తుడవండి ✦' : 
                         '✦ Scratch to Reveal ✦';
      ctx.fillText(scratchText, w / 2, h / 2);
    }

    window.drawScratchCover = drawCover;

    function getScratchPos(e) {
      const rect = scratchCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function scratch(e) {
      if (!isScratching || isRevealed) return;
      e.preventDefault();
      const pos = getScratchPos(e);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 44, 0, Math.PI * 2);
      ctx.fill();

      checkProgress();
    }

    function checkProgress() {
      if (isRevealed) return;
      const w = scratchCanvas.width;
      const h = scratchCanvas.height;
      const pixels = ctx.getImageData(0, 0, w, h).data;
      let clearPixels = 0;
      for (let i = 3; i < pixels.length; i += 64) {
        if (pixels[i] === 0) clearPixels++;
      }
      if ((clearPixels / (pixels.length / 64)) * 100 > 30) {
        isRevealed = true;
        scratchCanvas.style.opacity = '0';
        setTimeout(() => { scratchCanvas.style.display = 'none'; }, 700);
        triggerConfetti();
      }
    }

    function triggerConfetti() {
      if (!window.confetti) return;
      confetti({ particleCount: 80, angle: 60, spread: 75, origin: { x: 0.05, y: 0.75 }, colors: ['#D4AF37', '#7A001E', '#FFFDF7'] });
      confetti({ particleCount: 80, angle: 120, spread: 75, origin: { x: 0.95, y: 0.75 }, colors: ['#D4AF37', '#7A001E', '#FFFDF7'] });
    }

    scratchCanvas.addEventListener('mousedown', () => isScratching = true);
    scratchCanvas.addEventListener('mouseup', () => isScratching = false);
    scratchCanvas.addEventListener('mousemove', scratch);
    scratchCanvas.addEventListener('touchstart', () => isScratching = true);
    scratchCanvas.addEventListener('touchend', () => isScratching = false);
    scratchCanvas.addEventListener('touchmove', scratch);

    window.addEventListener('resize', resizeScratchCanvas);
    setTimeout(resizeScratchCanvas, 150);
  }

  // Scroll reveal animation
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  scrollElements.forEach(el => observer.observe(el));

  // Audio Music Engine (Tumhi Dekho Naa - Sitar Lofi)
  let isPlayingMusic = false;
  const audioBtn = document.getElementById('audio-toggle-btn');
  const bgAudio = new Audio('assets/wedding_tune.mp3');
  bgAudio.loop = true;
  bgAudio.volume = 0.65;

  function startIndianRagaMusic() {
    if (isPlayingMusic) return;
    bgAudio.play().then(() => {
      isPlayingMusic = true;
      if (audioBtn) audioBtn.classList.add('animate-pulse');
    }).catch(() => {
      // Browser autoplay policy catch
    });
  }

  // Global browser gesture unlock: Start audio on very first user interaction anywhere
  const unlockAudioOnUserGesture = () => {
    startIndianRagaMusic();
    document.removeEventListener('click', unlockAudioOnUserGesture);
    document.removeEventListener('touchstart', unlockAudioOnUserGesture);
    document.removeEventListener('scroll', unlockAudioOnUserGesture);
    document.removeEventListener('keydown', unlockAudioOnUserGesture);
  };

  document.addEventListener('click', unlockAudioOnUserGesture);
  document.addEventListener('touchstart', unlockAudioOnUserGesture);
  document.addEventListener('scroll', unlockAudioOnUserGesture, { passive: true });
  document.addEventListener('keydown', unlockAudioOnUserGesture);

  if (audioBtn) {
    audioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPlayingMusic) {
        bgAudio.pause();
        isPlayingMusic = false;
        audioBtn.classList.remove('animate-pulse');
      } else {
        bgAudio.play().then(() => {
          isPlayingMusic = true;
          audioBtn.classList.add('animate-pulse');
        }).catch(() => {});
      }
    });
  }

  // Initialize Story UI
  updateStoryUI();
});

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

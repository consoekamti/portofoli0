var googleDriveImage = fileId => fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : '';
const achievementPhoto = (achievementNumber, filename) => `Assets/achievement/ach_${achievementNumber}/${filename}`;

window.achievementItems = [
  {
    period: 'Mar - Apr 2026 | International',
    title: '🏅 Judgements Comendation - SAFMC 2026',
    org: 'Cat. D1 - Man Machine',
    detail: [
      'Judgements Commendation Award Singapore Amazing Flying Machine Competition (SAFMC) 2026.',
      'Received the Judgements Commendation award as a Project Manager of Team Cakrawala Skala at the Singapore Amazing Flying Machine Competition (SAFMC) 2026, an international UAV and aerospace competition organized by DSO National Laboratories and Science Centre Singapore.',
      'Contributed to the design, integration, testing, and operation of a UAV system in the Category D1: Man Machine.'
    ],
    photos: [
      { label: 'SAFMC 2026 Photo 1', src: achievementPhoto(15, '1.jpeg') },
      { label: 'SAFMC 2026 Photo 2', src: achievementPhoto(15, '2.jpeg') },
      { label: 'SAFMC 2026 Photo 3', src: achievementPhoto(15, '3.jpeg') },
      { label: 'SAFMC 2026 Photo 4', src: achievementPhoto(15, '4.jpeg') }
    ]
  },
  {
    period: 'Oct - Nov 2025 | National',
    title: '🥈 2nd Place - WEPC 2025',
    org: 'Politeknik Negeri Malang - PLC Competition',
    detail: [
      '2nd Place - Workshop Electro PLC Competition (WEPC) 2025.',
      'Awarded 2nd Place as a member of the competition team at the Workshop Electro PLC Competition (WEPC) 2025, a national-level PLC programming competition organized by Politeknik Negeri Malang (POLINEMA) and sponsored by OMRON.',
      'Demonstrated expertise in industrial automation, PLC programming, troubleshooting, and control system implementation.'
    ],
    photos: [
      { label: 'WEPC 2025 Photo 1', src: achievementPhoto(14, '1.jpeg') },
      { label: 'WEPC 2025 Photo 2', src: achievementPhoto(14, '2.jpeg') },
      { label: 'WEPC 2025 Photo 3', src: achievementPhoto(14, '3.jpeg') }
    ]
  },
  {
    period: 'Mar - Apr 2025 | International',
    title: '🥈 2nd Place - SAFMC 2025',
    org: 'Cat. D1 - Man Machine',
    detail: [
      '2nd Place Award Singapore Amazing Flying Machine Competition (SAFMC) 2025.',
      'Received the 2nd Place award as a member of Team Cakrawala Skala at the Singapore Amazing Flying Machine Competition (SAFMC) 2025.',
      'Contributed to design, integration, testing, and operation of a UAV system in Category D1: Man Machine.'
    ],
    photos: [
      { label: 'SAFMC 2025 Photo 1', src: achievementPhoto(13, '1.jpeg') },
      { label: 'SAFMC 2025 Photo 2', src: achievementPhoto(13, '2.jpeg') },
      { label: 'SAFMC 2025 Photo 3', src: achievementPhoto(13, '3.jpeg') },
      { label: 'SAFMC 2025 Photo 4', src: achievementPhoto(13, '4.jpeg') },
      { label: 'SAFMC 2025 Photo 5', src: achievementPhoto(13, '5.jpeg') },
      { label: 'SAFMC 2025 Photo 6', src: achievementPhoto(13, '6.jpeg') }
    ]
  },
  {
    period: 'February 2025 | National',
    title: '🥈 2nd Place - ATMI CUP 2025',
    org: 'Politeknik ATMI Surakarta - PLC Competition',
    detail: [
      '2nd Place - ATMI CUP PLC Competition 2025.',
      'Awarded 2nd Place at the ATMI CUP PLC Competition 2025, a national-level industrial automation competition organized by Alpha Mechatronics, Schneider Electric Indonesia, and Politeknik ATMI Surakarta.',
      'Demonstrated strong competencies in PLC programming, industrial control systems, troubleshooting, and automation problem-solving.'
    ],
    photos: [
      { label: 'ATMI 2025 Photo 1', src: achievementPhoto(12, '1.jpeg') },
      { label: 'ATMI 2025 Photo 2', src: achievementPhoto(12, '2.jpeg') },
      { label: 'ATMI 2025 Photo 3', src: achievementPhoto(12, '3.jpeg') },
      { label: 'ATMI 2025 Photo 4', src: achievementPhoto(12, '4.jpeg') },
      { label: 'ATMI 2025 Photo 5', src: achievementPhoto(12, '5.jpeg') },
      { label: 'ATMI 2025 Photo 6', src: achievementPhoto(12, '6.jpeg') },
      { label: 'ATMI 2025 Photo 7', src: achievementPhoto(12, '7.jpeg') },
      { label: 'ATMI 2025 Photo 8', src: achievementPhoto(12, '8.jpeg') }
    ]
  },
  { period: 'Oct - Nov 2024 | National', title: '🏅 Semi-Finalist - TED', org: 'Universitas Gadjah Mada PLC Competition' },
  { period: 'October 2024 | National', title: '🏅 Semi-Finalist - WEPC', org: 'Polinema PLC Competition' },
  {
    period: 'November 2022 | City Level',
    title: '🥇 1st Place - Robocon 2022',
    org: 'PoliBatam - Line Followers Competition',
    photos: [
      { label: 'Robocon Photo 1', src: achievementPhoto(9, '1.jpeg') },
      { label: 'Robocon Photo 2', src: achievementPhoto(9, '2.jpeg') },
      { label: 'Robocon Photo 3', src: achievementPhoto(9, '3.jpeg') },
      { label: 'Robocon Photo 4', src: achievementPhoto(9, '4.jpeg') }
    ]
  },
  { period: 'January 2022 | City Level', title: '🥈 2nd Place - Trofeo Yonif', org: 'Futsal Competition - PDO FC' },
  { period: 'December 2021 | Province Level', title: '🥇 1st Place - Trofeo PS 780', org: 'Futsal Competition - PDO FC' },
  { period: 'July 2021 | Province Level', title: '🥈 2nd Place - Traditional Music Creation', org: 'FLS2N - Festival Lomba Seni Siswa Nasional' },
  { period: 'November 2019 | City Level', title: '🥉 3rd Place - Church Music Festival', org: '9th church music festival' },
  { period: 'October 2019 | City Level', title: '🥇 1st Place - ATB JHS Jingle Creation', org: 'Adya Tirta Batam - Jingle Competition' },
  { period: 'April 2019 | City Level', title: '🥈 2nd Place - Traditional Music Creation', org: 'FLS2N - Festival Lomba Seni Siswa Nasional' },
  { period: 'March 2019 | Pre-City Level', title: '🥇 1st Place - Traditional Music Creation', org: 'FLS2N - Festival Lomba Seni Siswa Nasional' },
  { period: 'March 2018 | City Level', title: '🥉 3rd Place - National Student GALA', org: 'Soccer Competition' }
];

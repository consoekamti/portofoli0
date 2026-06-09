var googleDriveImage = fileId => fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : '';
const experiencePhoto = (experienceNumber, filename) => `Assets/experience/exp_${experienceNumber}/${filename}`;

window.experienceItems = [
  {
    period: 'Sep 2025 - now',
    title: 'Technical Project Manager',
    org: 'Cakrawala Skala (CAKSA) - International Aeronautics Research Team'
  },
  {
    period: 'Jul 2025 - now',
    title: 'Cohort Leader',
    org: 'Cohort Leader - Mechatronics Engineering of 2024'
  },
  {
    period: 'Sep 2024 - Sep 2025',
    title: 'Mechanic Division',
    org: 'Cakrawala Skala (CAKSA) - International Aeronautics Research Team'
  },
  {
    period: 'Mar 2024 - Jul 2024',
    title: 'PLC Programmer - Full-Time',
    org: 'PT Djitoe Mesindo Batam, Indonesia'
  },
  {
    period: 'Jan 2024 - Mar 2024',
    title: 'Manual Books Developer - Internship',
    org: 'PT Djitoe Mesindo Batam, Indonesia'
  },
  {
    period: 'Jun 2023 - Jan 2024',
    title: 'Mechanic Assemblies - Internship',
    org: 'PT Djitoe Mesindo Batam, Indonesia'
  },
  {
    period: 'Dec 2022 - May 2023',
    title: 'PLC Programmer - Subcontractor',
    org: 'NXP Semiconductors, Malaysia',
    photos: [
      { label: 'UCM Photo 1', src: experiencePhoto(12, '1.jpeg') },
      { label: 'UCM Photo 2', src: experiencePhoto(12, '2.jpeg') }
    ]
  },
  {
    period: 'October 2022',
    title: 'Millenial Action, Literation Week',
    org: 'Live Performers On Batam City Event'
  },
  {
    period: 'September 2022',
    title: 'Performers On Provincial 20th Anniversary',
    org: 'Modern Traditional Music, Tanjung Pinang'
  },
  {
    period: 'Jul 2022 - Dec 2022',
    title: 'PLC Programmer - Project Worker',
    org: 'PT Louis Alain | Indonesia'
  },
  {
    period: 'Jul 2022 - Dec 2022',
    title: 'PLC Programmer - Project Worker',
    org: 'PT Louis Alain | Indonesia'
  },
  {
    period: 'Jun 2022 - Aug 2023',
    title: 'Chairman of SENDRATASIK',
    org: '"Seni Drama Tari & Musik" Public Vocational School 1'
  },
  {
    period: 'Jun 2022 - Jul 2023',
    title: 'Live Music Performs In Cafe',
    org: 'Reguler Time - Runa Cafe'
  },
  {
    period: 'Feb 2021 - Feb 2022',
    title: 'Leader of PDO',
    org: '"Persekutuan Doa Oikumene" Public Vocational School 1'
  },
  {
    period: 'Jul 2021 - Mar 2022',
    title: 'Leader of Music Organization',
    org: '"Seni Drama Tari & Musik" Public Vocational School 1'
  },
  {
    period: 'Jan 2021 - Jun 2022',
    title: 'Member of The Robotics Dept.',
    org: 'Mechatronics Engineering, Public Vocational School 1'
  },
  {
    period: 'Jul 2020 - Jul 2021',
    title: 'Member of Music Organization',
    org: '"Seni Drama Tari & Musik" Public Vocational School 1'
  },
  {
    period: 'Jul 2020 - Dec 2021',
    title: 'Member of PDO',
    org: '"Persekutuan Doa Oikumene" Public Vocational School 1'
  }
];

const projectPhoto = (projectNumber, filename) => `Assets/project/project_${projectNumber}/${filename}`;

window.projectItems = [
  {
    cat: 'automation',
    icon: 'fa-industry',
    tag: 'Industrial Automation',
    title: 'UNIVERSAL CLEANING MACHINE at NXP SEMICONDUTORS',
    desc: 'Designed and programmed Omron PLC automation system for semiconductor production lines at NXP Malaysia.',
    assetFolder: 'project_2',
    photos: [
      { label: 'UCM Photo 1', src: experiencePhoto(12, '1.jpeg') },
      { label: 'UCM Photo 2', src: experiencePhoto(12, '2.jpeg') }
    ],
    links: []
  },
  {
    cat: 'robotics',
    icon: 'fa-paper-plane',
    tag: 'Innovation / Robotics',
    title: 'Smart River - Autonomus River Cleaner',
    desc: 'Autonomous River Cleaner is an automated river-cleaning system that uses smart sensors and AI to detect and collect floating waste, helping maintain cleaner rivers and better water quality.',
    assetFolder: 'project_6',
    photos: [
      { label: 'river photo 1', src: projectPhoto(6, '1.jpeg') },
      { label: 'river Photo 2', src: projectPhoto(6, '2.jpeg') },
      { label: 'river photo 3', src: projectPhoto(6, '3.jpeg') },
      { label: 'river Photo 4', src: projectPhoto(6, '4.jpeg') }
    ],
    links: []
  },
  {
    cat: 'robotics',
    icon: 'fa-microchip',
    tag: 'Aeronautics / Robotics',
    title: 'Drone Mechanism for CANSAT Drop Test',
    desc: 'Drone-based deployment system designed to safely carry and release a Can Satelite (CANSAT) at a specified altitude, enabling controlled drop tests, and mission functionality.',
    assetFolder: 'project_5',
    photos: [
      { label: 'drone photo 1', src: projectPhoto(5, '1.jpeg') },
      { label: 'drone Photo 2', src: projectPhoto(5, '2.jpeg') },
      { label: 'drone photo 3', src: projectPhoto(5, '3.jpeg') },
    ],
    links: []
  },

  /*
  {
    cat: 'design',
    icon: 'fa-cubes',
    tag: '3D Mechanical Design',
    title: '3D Models on TurboSquid',
    desc: 'Professional 3D mechanical models published on TurboSquid - available for commercial and industrial use.',
    assetFolder: 'project_3',
    photos: [],
    links: [{ icon: 'fa-external-link-alt', href: 'https://www.turbosquid.com/Search/Artists/consoekamti' }]
  },
  {
    cat: 'design',
    icon: 'fa-drafting-compass',
    tag: 'CAD Design',
    title: 'Engineering Designs on GrabCAD',
    desc: 'Collection of engineering CAD designs published on GrabCAD, spanning mechanical components and assemblies.',
    assetFolder: 'project_4',
    photos: [],
    links: [{ icon: 'fa-external-link-alt', href: 'https://grabcad.com/thompson.ray-1' }]
  },
  {
    cat: 'robotics',
    icon: 'fa-robot',
    tag: 'Robotics',
    title: 'Robocon 2022 - Line Followers',
    desc: 'Designed and built a precision line-following robot, winning 1st place at city-level Robocon 2022.',
    assetFolder: 'project_1',
    photos: [],
    links: []
  }
  */

];

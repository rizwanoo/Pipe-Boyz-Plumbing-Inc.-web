import { ServiceItem, ProjectItem } from '../types';

export const COMPANY = {
  name: 'Pipe Boyz Plumbing Inc.',
  tagline: 'Plumbing Done Right. Built To Last.',
  subtitle:
    'Reliable residential and commercial plumbing solutions across North Hollywood, the San Fernando Valley and greater Los Angeles.',
  license: {
    state: 'California',
    classification: 'C-36 Plumbing Contractor',
    number: '1112334',
    status: 'Active & Verified',
  },
  contact: {
    address: '7242 Beck Ave',
    city: 'North Hollywood',
    state: 'CA',
    zip: '91605',
    fullAddress: '7242 Beck Ave, North Hollywood, CA 91605, USA',
    phone: '+1 818-476-9945',
    phoneFormatted: '(818) 476-9945',
    email: 'pipeboyzinc@gmail.com',
    hours: 'Mon – Fri: 7:00 AM – 6:00 PM | Sat – Sun: 8:00 AM – 4:00 PM',
    emergencyAvailability: '24/7 Emergency Dispatch Available for Critical Water & Sewer Emergencies',
  },
  serviceAreas: [
    { city: 'North Hollywood', zipCodes: ['91601', '91602', '91605', '91606'] },
    { city: 'Burbank', zipCodes: ['91501', '91502', '91504', '91505', '91506'] },
    { city: 'Studio City', zipCodes: ['91604'] },
    { city: 'Sherman Oaks', zipCodes: ['91403', '91413', '91423'] },
    { city: 'Van Nuys', zipCodes: ['91401', '91405', '91406', '91411'] },
    { city: 'Arleta', zipCodes: ['91331'] },
    { city: 'Montrose', zipCodes: ['91020'] },
    { city: 'Glendale', zipCodes: ['91201', '91202', '91203', '91204', '91205'] },
    { city: 'Toluca Lake', zipCodes: ['91602', '91610'] },
    { city: 'Valley Village', zipCodes: ['91607'] },
    { city: 'Greater Los Angeles', zipCodes: ['90068', '90046', '90028'] },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'water-heaters',
    number: '01',
    title: 'Water Heaters',
    subtitle: 'Tank & Tankless Systems, Conversions & Seismic Compliance',
    shortDesc:
      'High-efficiency tank and tankless installations, emergency replacements, annual descaling, thermal expansion control, and California seismic strapping.',
    fullDesc:
      'From 40- and 50-gallon residential gas and electric tank replacements to endless hot water Navien and Rinnai condensing tankless units, our installations meet rigorous California Title 24 efficiency standards. We handle new gas line sizing, dedicated vent piping, thermal expansion tanks, and double seismic strapping for full municipal code compliance.',
    scopeItems: [
      'Tankless condensing water heater conversions & installations',
      'Atmospheric & power-vent gas storage water heater replacements',
      'Electric & hybrid heat pump water heater retrofits',
      'Annual mineral descaling and heat-exchanger flushes',
      'Thermal expansion tank installations and PRV pressure balancing',
      'California earthquake seismic strap bracing & gas shutoff valves',
    ],
    keySpecs: [
      { label: 'Leading Brands', value: 'Bradford White, Rheem, Navien, Rinnai' },
      { label: 'Compliance', value: 'California Title 24 & Seismic Code' },
      { label: 'Typical Turnaround', value: 'Same-Day Emergency Replacements' },
    ],
    image: '/assets/images/services_water_heater_tankless_1794310653410.jpg',
    imageAlt: 'High efficiency tankless water heater installation with copper manifold by Pipe Boyz Plumbing',
  },
  {
    id: 'sewer-lines',
    number: '02',
    title: 'Sewer Lines',
    subtitle: 'Diagnostic Fiber-Optic Cameras, Hydro-Jetting & Line Replacements',
    shortDesc:
      'Pinpoint fiber-optic video camera diagnostic inspections, aggressive root clearing, hydro-jetting descaling, and surgical trenchless sewer replacements.',
    fullDesc:
      'Tree roots, ground shifting, and aged clay or cast-iron lines cause repeated backups across older San Fernando Valley neighborhoods. We utilize high-definition color camera inspection reels with sonde locators to find exact depth and fault positions before proposing minimally invasive trenchless epoxy lining or heavy-duty SDR-35 PVC excavation replacements.',
    scopeItems: [
      'HD color sewer camera inspections with digital video recording',
      'Sonde underground transmitter locator for pinpoint excavation',
      'High-pressure commercial hydro-jetting for grease and scale removal',
      'Mechanical root cutting and mainline snake clearance',
      'Trenchless sewer pipe relining & pipe bursting solutions',
      'Main sewer line replacements and double two-way cleanout additions',
    ],
    keySpecs: [
      { label: 'Diagnostic Tech', value: 'RIDGID SeeSnake HD Camera Reels' },
      { label: 'Line Diameters', value: '2" to 8" Residential & Commercial' },
      { label: 'Code Standard', value: 'LADBS & LA County Plumbing Code' },
    ],
    image: '/assets/images/services_sewer_camera_inspection_1794310654357.jpg',
    imageAlt: 'Professional high-definition sewer camera diagnostic inspection equipment by Pipe Boyz Plumbing',
  },
  {
    id: 'adu-construction',
    number: '03',
    title: 'ADU & New Construction',
    subtitle: 'Ground-Up Plumbing, Rough-In Manifolds & Finish Trim',
    shortDesc:
      'Complete mechanical rough and finish plumbing for accessory dwelling units (ADUs), garage conversions, home additions, and architectural ground-up builds.',
    fullDesc:
      'We work directly from architectural blueprints and mechanical plans to deliver flawless plumbing infrastructure. From underground sanitary drainage grading and sub-slab water service to multi-story ABS stack venting, Type L copper supply manifolds, gas piping calculations, and high-end fixture trim-outs, we manage every phase through final city inspector sign-off.',
    scopeItems: [
      'Architectural blueprint review & plumbing layout engineering',
      'Underground ABS sanitary drainage and sewer lateral tie-ins',
      'Main water service line upgrades and sub-metering configurations',
      'In-wall and ceiling top-out rough plumbing with seismic nail guards',
      'Natural gas line branch piping for kitchens, water heaters, and HVAC',
      'Final fixture trim: sinks, showers, toilets, dishwashers, and trims',
    ],
    keySpecs: [
      { label: 'Project Scope', value: 'Garage Conversions, Detached ADUs, New Homes' },
      { label: 'Inspections', value: 'City Plan Check & Final Sign-Off Management' },
      { label: 'Piping Specs', value: 'Schedule 40 ABS & Type L Hard Drawn Copper' },
    ],
    image: '/assets/images/adu_new_construction_roughin_1794310654865.jpg',
    imageAlt: 'Precision residential ADU rough plumbing framing with copper lines and ABS drainage',
  },
  {
    id: 'fixtures-toilets',
    number: '04',
    title: 'Fixtures & Toilets',
    subtitle: 'Designer Faucets, Custom Showers, Toilets & Disposal Systems',
    shortDesc:
      'Expert installation and precision repair for high-efficiency toilets, designer kitchen faucets, custom thermostatic shower valves, and undermount sinks.',
    fullDesc:
      'Whether replacing an unreliable builder-grade toilet with an ultra-efficient dual-flush Kohler or installing a multi-head thermostatic shower valve system with integrated body sprays, we guarantee leak-free joints, true plumb alignment, and balanced water pressure throughout your home.',
    scopeItems: [
      'High-efficiency low-flow toilet installations and wax seal rebuilding',
      'Thermostatic & pressure-balanced shower valve rough-in and trim',
      'Kitchen sink replacements, bar sinks, and custom undermount basins',
      'Heavy-duty continuous-feed garbage disposal installations',
      'Freestanding soaking tub filler valves and Roman tub faucets',
      'Bidet seat retrofits with dedicated GFCI water tie-ins',
    ],
    keySpecs: [
      { label: 'Supported Brands', value: 'Kohler, Moen, Delta, Grohe, Toto, InSinkErator' },
      { label: 'Water Savings', value: 'California CalGreen Compliant Fixtures' },
      { label: 'Mounting Precision', value: 'Laser-Leveled Brass & Copper Rough-In' },
    ],
    image: '/assets/projects/shower-valve-rough-in.jpg',
    imageAlt: 'Authentic copper rough plumbing for shower valve installed inside open wall by Pipe Boyz Plumbing',
  },
  {
    id: 'water-lines-valves',
    number: '05',
    title: 'Water Lines & Valves',
    subtitle: 'Copper Repipes, Smart Shutoffs & Pressure Regulators',
    shortDesc:
      'Complete home copper repiping, main line pressure reducing valves (PRVs), smart Wi-Fi leak detection shutoffs, and heavy-duty brass hose bibs.',
    fullDesc:
      'High municipal water pressure across Los Angeles routinely exceeds 90 to 120 PSI, which ruptures flexible hoses and ruins water heaters. We install lead-free Wilkins and Watts pressure regulators calibrated to optimal 60-70 PSI, alongside Moen Flo smart automatic shutoff valves that monitor your pipes 24/7 and cut off supply the instant a leak occurs.',
    scopeItems: [
      'Moen Flo and Phyn smart automatic water shutoff valve installations',
      'Main water pressure reducing valve (PRV) replacements and gauge tuning',
      'Whole-house Type L rigid copper repiping & Uponor PEX-A expansions',
      'Main quarter-turn ball valve shutoff replacements with drain taps',
      'Frost-proof exterior brass quarter-turn hose bibs and vacuum breakers',
      'Slab leak isolation and non-invasive overhead rerouting',
    ],
    keySpecs: [
      { label: 'Pressure Target', value: 'Calibrated to 55 – 65 PSI Code Optimum' },
      { label: 'Smart Tech', value: 'Moen Flo Smart Water Monitor & Shutoff Certified' },
      { label: 'Materials', value: 'USA-Made Type L Copper & Brass Ball Valves' },
    ],
    image: '/assets/projects/moen-smart-shutoff-valve.jpg',
    imageAlt: 'Authentic Moen automatic water shutoff valve installed on new copper line by Pipe Boyz Plumbing',
  },
  {
    id: 'commercial-plumbing',
    number: '06',
    title: 'Commercial Plumbing',
    subtitle: 'Restaurants, Retail Facilities, Industrial Drains & Interceptors',
    shortDesc:
      'Comprehensive commercial plumbing infrastructure: grease interceptors, roof and storm drainage, commercial water heaters, and backflow prevention assemblies.',
    fullDesc:
      'Commercial facilities require zero-downtime reliability and strict compliance with health department and municipal environmental standards. Pipe Boyz handles grease interceptor sizing, commercial kitchen line hydro-jetting, roof scuppers and storm drains, multi-occupancy ADA restroom rough-ins, and backflow prevention device installations.',
    scopeItems: [
      'Commercial restaurant grease trap and interceptor plumbing',
      'Roof drain and secondary overflow storm drainage systems',
      'Commercial high-volume gas water heaters & recirculating loops',
      'Backflow preventer assembly installation, testing & repairs',
      'ADA-compliant commercial multi-fixture restroom build-outs',
      'Floor drains, cleanout access manifolds & sanitary waste stacks',
    ],
    keySpecs: [
      { label: 'Sectors', value: 'Restaurants, Retail, Warehouses, Multi-Family' },
      { label: 'Code Rigor', value: 'California Uniform Plumbing Code (UPC)' },
      { label: 'Capacity', value: 'Heavy Industrial & High-Volume Systems' },
    ],
    image: '/assets/images/commercial_plumbing_system_1794310653934.jpg',
    imageAlt: 'Industrial commercial plumbing mechanical room with large-diameter distribution lines and backflow preventers',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Gas Water Heater Replacement & Copper Expansion Manifold',
    category: 'water-heaters',
    categoryLabel: 'Water Heating',
    location: 'North Hollywood, CA',
    image: '/assets/projects/water-heater-replacement.jpg',
    alt: 'Authentic water heater replacement in a closet, with new copper, expansion tank and venting by Pipe Boyz Plumbing',
    summary:
      'Complete emergency removal of failed water heater and precision installation of a new high-efficiency gas unit with dedicated thermal expansion tank, rigid copper piping, and dual California seismic strapping.',
    technicalDetails: [
      'New 50-gallon high-recovery atmospheric gas water heater',
      'Type L rigid copper supply lines with dielectric unions',
      'Pre-pressurized thermal expansion tank to absorb pressure spikes',
      'California code-mandated heavy-gauge double seismic strap bracing',
      'Double-wall B-vent flue connection verified for proper draft',
    ],
    specs: [
      { label: 'Type', value: 'Gas Storage Water Heater' },
      { label: 'Capacity', value: '50 Gallons' },
      { label: 'City Code', value: 'Title 24 & Seismic Compliant' },
    ],
  },
  {
    id: 'proj-2',
    title: 'Moen Flo Smart Water Shutoff Valve & Copper Tie-In',
    category: 'valves',
    categoryLabel: 'Smart Valves & Pressure',
    location: 'Studio City, CA',
    image: '/assets/projects/moen-smart-shutoff-valve.jpg',
    alt: 'Authentic Moen automatic water shutoff valve installed on new copper line by Pipe Boyz Plumbing',
    summary:
      'Integrated Wi-Fi smart automatic shutoff system with daily micro-leak testing, flow rate monitoring, and automated emergency shutoff to safeguard estate residence against catastrophic water damage.',
    technicalDetails: [
      'Precision Moen Flo 1" Smart Water Shutoff valve installation',
      'Hard-soldered Type L copper transition fittings and isolation bypass',
      'Direct electrical conduit routing and Wi-Fi synchronization',
      'Calibrated for automated pressure burst and micro-drip detection',
      'Verified with homeowner smartphone app for live telemetry',
    ],
    specs: [
      { label: 'Device', value: 'Moen Flo Smart Shutoff' },
      { label: 'Line Size', value: '1-Inch Copper' },
      { label: 'Safety', value: 'Instant Auto-Shutoff on Leak' },
    ],
  },
  {
    id: 'proj-3',
    title: '1-Inch Wilkins Pressure Regulating Valve & Pressure Gauge Manifold',
    category: 'valves',
    categoryLabel: 'Smart Valves & Pressure',
    location: 'Sherman Oaks, CA',
    image: '/assets/projects/pressure-regulating-valve-1inch.jpg',
    alt: 'Authentic new 1 inch pressure regulating valve, shutoffs and gauge on a new copper water line by Pipe Boyz Plumbing',
    summary:
      'Municipal water pressure in the hills measured 115 PSI, endangering household appliances. Installed a lead-free 1" Wilkins PRV, brass quarter-turn ball valves, and a glycerine-filled pressure gauge dialed to 65 PSI.',
    technicalDetails: [
      'Wilkins 1" lead-free bronze pressure reducing valve',
      'High-precision oil-damped downstream pressure test gauge',
      'Dual full-port brass quarter-turn isolation valves',
      'Custom copper loop manifold with dielectric protection',
      'Static and dynamic pressure verified under full household draw',
    ],
    specs: [
      { label: 'Inlet Pressure', value: 'Reduced from 115 PSI to 65 PSI' },
      { label: 'Valve Size', value: '1" Full Flow Wilkins PRV' },
      { label: 'Warranty', value: '100% Code & Pressure Balanced' },
    ],
  },
  {
    id: 'proj-4',
    title: 'Precision Copper Rough-In for Multi-Port Shower Valve',
    category: 'rough-in',
    categoryLabel: 'ADU & Rough-In',
    location: 'Burbank, CA',
    image: '/assets/projects/shower-valve-rough-in.jpg',
    alt: 'Authentic copper rough plumbing for a shower valve inside an open wall by Pipe Boyz Plumbing',
    summary:
      'Architectural master bath remodel featuring custom copper manifold routing for a thermostatic pressure-balanced shower valve, laser-aligned drop ears, and heavy steel blocking.',
    technicalDetails: [
      'Type L rigid copper supply lines braced to structural studs',
      'Solid brass drop ear elbows anchored with stainless structural screws',
      'Pressure test held at 100 PSI hydrostatic overnight without drop',
      'Clean solder joints wiped with neutralizer to prevent oxidation',
      'Configured for independent thermostatic control and rain head supply',
    ],
    specs: [
      { label: 'Valve', value: 'Thermostatic Pressure Balanced' },
      { label: 'Piping', value: 'Type L Hard Drawn Copper' },
      { label: 'Inspection', value: 'City of Burbank Rough Plumbing Passed' },
    ],
  },
  {
    id: 'proj-5',
    title: 'Heavy-Duty Under-Sink Commercial Garbage Disposal Installation',
    category: 'valves',
    categoryLabel: 'Smart Valves & Pressure',
    location: 'North Hollywood, CA',
    image: '/assets/projects/garbage-disposal-installation.jpg',
    alt: 'Authentic garbage disposal installed under a kitchen sink with new drain by Pipe Boyz Plumbing',
    summary:
      'Rebuilt under-sink drainage layout with high-impact ABS trap, dedicated dishwasher drain loop, and a high-torque continuous feed disposal with anti-vibration mount.',
    technicalDetails: [
      'High-torque InSinkErator commercial-grade motor assembly',
      'Smooth sweep sanitary tee and P-trap assembly with cleanout',
      'Dishwasher high-loop backflow siphon prevention installed',
      'Heavy-duty rubber sink baffle with sound insulation jacket',
      'Zero-leak flow test completed under dual basin max discharge',
    ],
    specs: [
      { label: 'Disposal', value: '3/4 HP Dura-Drive Induction Motor' },
      { label: 'Drain Material', value: 'Schedule 40 ABS Solvent-Welded' },
      { label: 'Sound Level', value: 'Quiet-Pak Acoustic Shielding' },
    ],
  },
  {
    id: 'proj-6',
    title: 'High-Capacity Pressure Regulator with Copper Line & Hose Bib',
    category: 'valves',
    categoryLabel: 'Smart Valves & Pressure',
    location: 'Van Nuys, CA',
    image: '/assets/projects/pressure-regulator-hose-bib.jpg',
    alt: 'Authentic new pressure regulating valve with copper line and hose bib by Pipe Boyz Plumbing',
    summary:
      'Full exterior main entry redesign replacing corroded galvanized supply with clean Type L copper, adjustable pressure regulator, and quarter-turn frost-resistant hose bib.',
    technicalDetails: [
      'Eliminated rusted galvanized entry pipe to main foundation wall',
      'Installed lead-free brass pressure reducing valve with bypass',
      'Quarter-turn brass sillcock hose bib with atmospheric vacuum breaker',
      'Protective ground bonding jumper wire installed per electrical code',
      'Weather-resistant pipe insulation and UV protective wrapping',
    ],
    specs: [
      { label: 'Application', value: 'Exterior Main Water Entry' },
      { label: 'PRV Model', value: 'Lead-Free Watts Regulator' },
      { label: 'Protection', value: 'Integrated Vacuum Breaker & Ground Wire' },
    ],
  },
  {
    id: 'proj-7',
    title: 'Moen Flo Automatic Shutoff Tied Into Existing Copper Main',
    category: 'valves',
    categoryLabel: 'Smart Valves & Pressure',
    location: 'Arleta, CA',
    image: '/assets/projects/moen-shutoff-copper-tie-in.jpg',
    alt: 'Authentic Moen shutoff valve with new copper piping tied into an existing line by Pipe Boyz Plumbing',
    summary:
      'Clean retrofitted smart shutoff valve spliced into residential copper mainline with minimal wall penetration and secure structural mounting.',
    technicalDetails: [
      'Surgically spliced into main distribution loop with copper press fittings',
      'Installed dedicated manual isolation valve before and after sensor',
      'Integrated ultrasonic flow sensors to detect flows as low as 1 drop/min',
      'Configured remote shutoff capability from client mobile device',
      'Compliant with home insurance water damage prevention credits',
    ],
    specs: [
      { label: 'Smart Sensor', value: 'Moen Ultrasonic Transducer' },
      { label: 'Sensitivity', value: 'Micro-Leak Detection (1 Drop / Min)' },
      { label: 'Insurance', value: 'Certified for Premium Reductions' },
    ],
  },
  {
    id: 'proj-8',
    title: 'Commercial High-Recovery Gas Water Heater & Recirculating Header',
    category: 'commercial',
    categoryLabel: 'Commercial Infrastructure',
    location: 'Los Angeles, CA',
    image: '/assets/projects/commercial-gas-water-heater.jpg',
    alt: 'Authentic large gas water heater installed with new copper piping and insulation by Pipe Boyz Plumbing',
    summary:
      'Heavy commercial water heating installation for multi-unit commercial complex with large-diameter copper distribution manifold, closed-cell insulation, and continuous circulation pump.',
    technicalDetails: [
      'Commercial-grade high-BTU gas water heater with ASME rated tank',
      '1-1/2" copper distribution header with balanced branch feeds',
      'High-efficiency recirculating pump with aquastat temperature sensor',
      'Commercial thermal expansion tank with rigid Unistrut support',
      'Fiberglass and closed-cell pipe insulation to conserve thermal energy',
    ],
    specs: [
      { label: 'Application', value: 'Commercial / Multi-Unit Complex' },
      { label: 'Capacity', value: 'High-Recovery Continuous Supply' },
      { label: 'Header Size', value: '1-1/2" Type L Copper' },
    ],
  },
  {
    id: 'proj-9',
    title: 'Complete Bathroom Remodel Copper Supply & ABS Drain Rough-In',
    category: 'rough-in',
    categoryLabel: 'ADU & Rough-In',
    location: 'Montrose, CA',
    image: '/assets/projects/bathroom-rough-plumbing.jpg',
    alt: 'Authentic copper supply lines and ABS drain rough-in during a bathroom remodel by Pipe Boyz Plumbing',
    summary:
      'Full down-to-the-studs bathroom renovation with new hot and cold copper lines, properly pitched ABS waste branches, vent stack extensions, and seismic nailing plates.',
    technicalDetails: [
      'Rerouted hot and cold water supplies in 1/2" and 3/4" Type L copper',
      'Pitched 2" and 3" Schedule 40 ABS drain branches at 1/4" per foot',
      'Reinforced structural studs with heavy steel anti-nail safety plates',
      'Water hammer arrestors installed at rapid-closing fixture locations',
      'Passed complete city rough mechanical inspection on first visit',
    ],
    specs: [
      { label: 'Scope', value: 'Full Bath Rough Plumbing' },
      { label: 'Inspection', value: 'Passed First Attempt - City of Montrose/LA' },
      { label: 'Materials', value: 'Type L Copper & Schedule 40 ABS' },
    ],
  },
];

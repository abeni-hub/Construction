export type ProjectStatus = 'Completed' | 'Ongoing';

export interface Project {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  status: ProjectStatus;
  image: string;
  feature?: boolean;
  client?: string;
  scope?: string;
  area?: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: 'commercial-tower',
    name: 'Nexus Commercial Tower',
    category: 'Commercial Construction',
    location: 'Bole, Addis Ababa',
    year: '2023',
    status: 'Completed',
    image: '/images/projects/commercial-tower.jpg',
    feature: true,
    client: 'Private Investment Group',
    scope: 'Turnkey General Contracting & Structural Works',
    area: '48,500 m²',
    description:
      'A 24-storey landmark office tower featuring curved curtain glass, deep piled foundations, triple-basement parking, and energy-efficient environmental systems.',
  },
  {
    id: 'corporate-headquarters',
    name: 'CBE Financial District Headquarters',
    category: 'General Contracting',
    location: 'Dembel / Ras Desta Damtew St, Addis Ababa',
    year: '2024',
    status: 'Ongoing',
    image: '/images/projects/corporate-headquarters.jpg',
    feature: true,
    client: 'Commercial Banking Corporation',
    scope: 'Superstructure, MEP Integration & High-Rise Finishing',
    area: '150,000 m²',
    description:
      'East Africa’s premier corporate tower standing over 200 meters. Sur Construction executed major structural packages, reinforced core walls, and advanced MEP engineering.',
  },
  {
    id: 'residential-compound',
    name: 'Arcadia Enclave Luxury Villas',
    category: 'Residential Construction',
    location: 'Bole, Addis Ababa',
    year: '2024',
    status: 'Ongoing',
    image: '/images/projects/residential-compound.jpg',
    client: 'Arcadia Properties Ltd.',
    scope: 'Gated Master-Planned Community Construction',
    area: '62,000 m²',
    description:
      'An exclusive compound of 38 modern luxury villas with private access roads, underground utilities, security perimeter systems, and sustainable landscaping.',
  },
  {
    id: 'mixed-use-center',
    name: 'The Exchange Lifestyle & Retail Center',
    category: 'Building Construction',
    location: 'Kazanchis, Addis Ababa',
    year: '2022',
    status: 'Completed',
    image: '/images/projects/mixed-use-center.jpg',
    client: 'Urban Development Consortium',
    scope: 'Commercial Center, Retail Plazas & Underground Transit',
    area: '34,000 m²',
    description:
      'A multi-level retail and dining promenade with cantilevered glass balconies, bronze metal louvers, and a public outdoor gathering square.',
  },
  {
    id: 'highway-civil-works',
    name: 'Expressway Viaduct & Flyover Package 3',
    category: 'Infrastructure & Civil Works',
    location: 'Adama Corridor, Oromia',
    year: '2021',
    status: 'Completed',
    image: '/images/projects/highway-civil-works.jpg',
    feature: true,
    client: 'Ethiopian Roads Authority',
    scope: 'Pre-Stressed Concrete Bridges, Flyovers & Drainage',
    area: '14.2 km dual carriageway',
    description:
      'High-capacity transport link consisting of multiple pre-cast segmental flyovers, deep caisson foundations, and comprehensive stormwater management systems.',
  },
  {
    id: 'apartment-blocks',
    name: 'Skyline Terrace Luxury Residences',
    category: 'Residential Construction',
    location: 'CMC, Addis Ababa',
    year: '2023',
    status: 'Completed',
    image: '/images/projects/apartment-blocks.jpg',
    client: 'Highland Living Development',
    scope: 'Twin 16-Storey Residential Towers',
    area: '29,800 m²',
    description:
      'High-specification residential complex with expansive cantilevered balconies, integrated greenery, thermal insulation, and double-height arrival lobby.',
  },
  {
    id: 'warehouse-facility',
    name: 'National Logistics & Freight Hub',
    category: 'General Contracting',
    location: 'Mojo Dry Port Corridor, Oromia',
    year: '2021',
    status: 'Completed',
    image: '/images/projects/warehouse-facility.jpg',
    client: 'Global Logistics Partners',
    scope: 'Heavy Industrial Steel Structures & Loading Aprons',
    area: '55,000 m²',
    description:
      'State-of-the-art cold storage and dry cargo distribution facility built with wide-span pre-engineered steel frames and laser-leveled post-tensioned slabs.',
  },
  {
    id: 'hotel-renovation',
    name: 'The Grand Capitol Hotel & Historic Portico',
    category: 'Renovation & Remodeling',
    location: 'Piassa Historic Quarter, Addis Ababa',
    year: '2022',
    status: 'Completed',
    image: '/images/projects/hotel-renovation.jpg',
    client: 'Heritage Hospitality Group',
    scope: 'Architectural Restoration, Facade Strengthening & Expansion',
    area: '18,500 m²',
    description:
      'Meticulous structural modernization preserving the historic stone facade while upgrading seismic resilience, mechanical ventilation, and luxury interior amenities.',
  },
  {
    id: 'office-interior-fitout',
    name: 'Corporate Executive Headquarters Fit-Out',
    category: 'Project Management',
    location: 'Bole Financial District, Addis Ababa',
    year: '2025',
    status: 'Ongoing',
    image: '/images/projects/office-interior-fitout.jpg',
    client: 'International Finance Corporation Tenant',
    scope: 'Turnkey Architectural Interior & Acoustic Engineering',
    area: '8,200 m²',
    description:
      'Double-height atrium fit-out utilizing natural walnut acoustic paneling, Italian calacatta marble feature walls, automated lighting control, and bespoke millwork.',
  },
  {
    id: 'villa-compound',
    name: 'Private Ambassadorial Residence & Grounds',
    category: 'Construction Supervision',
    location: 'Old Airport / Ayat, Addis Ababa',
    year: '2025',
    status: 'Ongoing',
    image: '/images/projects/villa-compound.jpg',
    client: 'Diplomatic Mission',
    scope: 'High-Security Structural Construction & Finishing',
    area: '12,000 m²',
    description:
      'Ultra-secure compound with reinforced perimeter retaining walls, diplomatic grade security infrastructure, and premium handcrafted stone masonry.',
  },
];

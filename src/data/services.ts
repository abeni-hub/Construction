export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'general-contracting',
    title: 'General Contracting',
    description:
      'Full-scope contracting — we take a project from groundwork to handover with one accountable team.',
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    description:
      'Offices, retail and mixed-use buildings delivered to the standards commercial tenants expect.',
  },
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    description:
      'Apartment blocks, compounds and private residences built for comfort, safety and the long term.',
  },
  {
    id: 'building-construction',
    title: 'Building Construction',
    description:
      'Multi-storey structural construction executed with disciplined engineering and site control.',
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    description:
      'Careful structural upgrades and remodeling of existing buildings, occupied or vacant.',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description:
      'Programmes, budgets and timelines managed professionally from first sketch to final account.',
  },
  {
    id: 'construction-supervision',
    title: 'Construction Supervision',
    description:
      'Resident engineers and inspectors on site, holding every stage to the specified standard.',
  },
  {
    id: 'infrastructure-civil-works',
    title: 'Infrastructure & Civil Works',
    description:
      'Roads, drainage, utilities and foundations — the civil works everything else stands on.',
  },
];

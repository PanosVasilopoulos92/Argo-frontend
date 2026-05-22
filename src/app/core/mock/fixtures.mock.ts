import {
  Vessel, Voyage, PortCall, BunkerOrder, Fixture,
  Certificate, InventoryItem, CrewRotation,
} from '../models';

export const VESSELS: Vessel[] = [
  { id: 'ARG-001', name: 'Argo Titan',     type: 'Bulk Carrier',   dwt: 81250,  imo: '9747821', flag: 'MLT', built: 2019, status: 'Laden',       voyage: 'V-2026-0142', lat: 36.1, lon: -5.4,   speed: 12.4, hdg: 84,  next: 'Gibraltar',     eta: 'May 23 14:20' },
  { id: 'ARG-002', name: 'Argo Helios',    type: 'Container',      teu: 8200,   imo: '9802155', flag: 'SGP', built: 2021, status: 'Laden',       voyage: 'V-2026-0138', lat: 1.3,  lon: 103.8,  speed: 14.1, hdg: 12,  next: 'Singapore',     eta: 'May 22 06:45' },
  { id: 'ARG-003', name: 'Argo Phoenix',   type: 'Tanker (MR)',    dwt: 49980,  imo: '9665432', flag: 'LBR', built: 2018, status: 'Discharging', voyage: 'V-2026-0135', lat: 29.4, lon: 48.5,   speed: 0.2,  hdg: 0,   next: 'Mina Al Ahmadi', eta: '—'           },
  { id: 'ARG-004', name: 'Argo Atlas',     type: 'Bulk Carrier',   dwt: 75100,  imo: '9711209', flag: 'PAN', built: 2017, status: 'Ballast',     voyage: 'V-2026-0144', lat: -33.9,lon: 18.4,   speed: 13.2, hdg: 312, next: 'Cape Town',     eta: 'May 24 09:10' },
  { id: 'ARG-005', name: 'Argo Orion',     type: 'Container',      teu: 6500,   imo: '9655998', flag: 'MLT', built: 2016, status: 'Laden',       voyage: 'V-2026-0141', lat: 51.9, lon: 4.1,    speed: 11.8, hdg: 268, next: 'Rotterdam',     eta: 'May 22 22:00' },
  { id: 'ARG-006', name: 'Argo Lyra',      type: 'Tanker (LR2)',   dwt: 109500, imo: '9788145', flag: 'MHL', built: 2020, status: 'Laden',       voyage: 'V-2026-0140', lat: 25.3, lon: 56.8,   speed: 13.9, hdg: 158, next: 'Fujairah',      eta: 'May 22 18:30' },
  { id: 'ARG-007', name: 'Argo Nereid',    type: 'General Cargo',  dwt: 28400,  imo: '9543210', flag: 'CYP', built: 2015, status: 'Loading',     voyage: 'V-2026-0143', lat: -23.5,lon: -46.6,  speed: 0.0,  hdg: 0,   next: 'Santos',        eta: '—'           },
  { id: 'ARG-008', name: 'Argo Triton',    type: 'Tanker (VLCC)',  dwt: 299800, imo: '9821044', flag: 'LBR', built: 2022, status: 'Laden',       voyage: 'V-2026-0136', lat: 13.1, lon: 80.3,   speed: 14.4, hdg: 92,  next: 'Chennai',       eta: 'May 23 04:15' },
  { id: 'ARG-009', name: 'Argo Poseidon',  type: 'Container',      teu: 13800,  imo: '9899012', flag: 'SGP', built: 2023, status: 'Laden',       voyage: 'V-2026-0139', lat: 35.0, lon: 139.7,  speed: 22.1, hdg: 215, next: 'Yokohama',      eta: 'May 22 11:30' },
  { id: 'ARG-010', name: 'Argo Hyperion',  type: 'Bulk Carrier',   dwt: 92300,  imo: '9766544', flag: 'PAN', built: 2018, status: 'Drydock',     voyage: '—',           lat: 22.3, lon: 114.2,  speed: 0.0,  hdg: 0,   next: '—',             eta: '—'           },
];

export const VOYAGES: Voyage[] = [
  { id: 'V-2026-0142', vessel: 'Argo Titan',    load: 'Constanta',  disch: 'Alexandria', cargo: 'Wheat 55.4kt',  progress: 0.68, etd: 'May 04', eta: 'May 23', charterer: 'Glencore'  },
  { id: 'V-2026-0138', vessel: 'Argo Helios',   load: 'Shanghai',   disch: 'Singapore',  cargo: '8,142 TEU',     progress: 0.91, etd: 'May 14', eta: 'May 22', charterer: 'Trafigura' },
  { id: 'V-2026-0141', vessel: 'Argo Orion',    load: 'Halifax',    disch: 'Rotterdam',  cargo: '6,310 TEU',     progress: 0.96, etd: 'May 11', eta: 'May 22', charterer: 'Trafigura' },
  { id: 'V-2026-0140', vessel: 'Argo Lyra',     load: 'Ras Tanura', disch: 'Fujairah',   cargo: 'Crude 108kt',   progress: 0.81, etd: 'May 17', eta: 'May 22', charterer: 'Vitol'     },
  { id: 'V-2026-0144', vessel: 'Argo Atlas',    load: 'Tubarão',    disch: 'Cape Town',  cargo: 'Iron Ore 74kt', progress: 0.42, etd: 'May 12', eta: 'May 24', charterer: 'Cargill'   },
  { id: 'V-2026-0139', vessel: 'Argo Poseidon', load: 'Yokohama',   disch: 'Long Beach', cargo: '13,720 TEU',    progress: 0.18, etd: 'May 21', eta: 'Jun 02', charterer: 'Mitsui'    },
];

export const PORT_CALLS: PortCall[] = [
  { id: 'PC-2026-214', vessel: 'Argo Helios',   port: 'Singapore PSA',  berth: 'PPT 4', eta: 'May 22 06:45', etd: 'May 23 14:00', agent: 'GAC Group',       da: 124500, ccy: 'USD', status: 'Approaching' },
  { id: 'PC-2026-213', vessel: 'Argo Lyra',     port: 'Fujairah',       berth: 'B9',    eta: 'May 22 12:30', etd: 'May 23 06:00', agent: 'Inchcape',        da: 87450,  ccy: 'USD', status: 'Berthed'     },
  { id: 'PC-2026-212', vessel: 'Argo Orion',    port: 'Rotterdam APM',  berth: 'T2-3',  eta: 'May 22 22:00', etd: 'May 24 10:00', agent: 'Hartmann',        da: 142300, ccy: 'EUR', status: 'Approaching' },
  { id: 'PC-2026-211', vessel: 'Argo Poseidon', port: 'Yokohama',       berth: 'Y-7',   eta: 'May 22 11:30', etd: 'May 23 19:00', agent: 'Nippon Yusen',    da: 98200,  ccy: 'USD', status: 'Approaching' },
  { id: 'PC-2026-210', vessel: 'Argo Phoenix',  port: 'Mina Al Ahmadi', berth: 'T1',    eta: 'May 19 14:00', etd: 'May 22 16:00', agent: 'Kuwait Maritime', da: 64300,  ccy: 'USD', status: 'Discharging' },
  { id: 'PC-2026-209', vessel: 'Argo Atlas',    port: 'Tubarão',        berth: 'B-4',   eta: 'May 12 08:00', etd: 'May 13 18:00', agent: 'Wilson Sons',     da: 78200,  ccy: 'USD', status: 'Departed'    },
];

export const BUNKER_ORDERS: BunkerOrder[] = [
  { id: 'BNK-2026-088', vessel: 'Argo Helios',   port: 'Singapore', supplier: 'Vitol',         grade: 'VLSFO', qty: 1820, price: 612, ccy: 'USD/MT', date: 'May 22', status: 'Scheduled' },
  { id: 'BNK-2026-087', vessel: 'Argo Orion',    port: 'Rotterdam', supplier: 'BP Marine',     grade: 'VLSFO', qty: 1240, price: 598, ccy: 'USD/MT', date: 'May 22', status: 'Pending'   },
  { id: 'BNK-2026-086', vessel: 'Argo Lyra',     port: 'Fujairah',  supplier: 'ENOC',          grade: 'MGO',   qty: 280,  price: 845, ccy: 'USD/MT', date: 'May 22', status: 'Delivered' },
  { id: 'BNK-2026-085', vessel: 'Argo Titan',    port: 'Gibraltar', supplier: 'Vitol',         grade: 'VLSFO', qty: 980,  price: 615, ccy: 'USD/MT', date: 'May 23', status: 'Confirmed' },
  { id: 'BNK-2026-084', vessel: 'Argo Triton',   port: 'Singapore', supplier: 'Petro Summit',  grade: 'VLSFO', qty: 2400, price: 608, ccy: 'USD/MT', date: 'May 24', status: 'Confirmed' },
];

export const FIXTURES: Fixture[] = [
  { id: 'FIX-2026-118', counterparty: 'Glencore Agriculture', vessel: 'Argo Titan',    cargo: '55,400 MT Wheat',   route: 'Constanta → Alexandria', rate: '26.50/MT',     type: 'Voyage', status: 'Confirmed'   },
  { id: 'FIX-2026-119', counterparty: 'Cargill Ocean',        vessel: 'Argo Atlas',    cargo: '74,000 MT Iron Ore', route: 'Tubarão → Cape Town',    rate: '14.20/MT',     type: 'Voyage', status: 'Confirmed'   },
  { id: 'FIX-2026-120', counterparty: 'Trafigura',            vessel: 'Argo Helios',   cargo: '8,142 TEU mixed',    route: 'Shanghai → Singapore',   rate: '18,200 USD/d', type: 'TC',     status: 'Active'      },
  { id: 'FIX-2026-121', counterparty: 'Vitol',                vessel: 'Argo Lyra',     cargo: '108,400 MT Crude',   route: 'Ras Tanura → Fujairah',  rate: 'WS 92.5',      type: 'Voyage', status: 'Loading'     },
  { id: 'FIX-2026-122', counterparty: 'Mitsui & Co.',         vessel: 'Argo Poseidon', cargo: '13,720 TEU mixed',   route: 'Yokohama → Long Beach',  rate: '22,400 USD/d', type: 'TC',     status: 'Active'      },
  { id: 'FIX-2026-123', counterparty: 'Glencore',             vessel: 'Argo Hyperion', cargo: 'Wheat / Corn TBD',   route: 'Black Sea → Med',        rate: '—',            type: 'COA',    status: 'Negotiating' },
  { id: 'FIX-2026-124', counterparty: 'BP Trading',           vessel: 'TBD',           cargo: 'Distillates 40kt',   route: 'Singapore → Rotterdam',  rate: '—',            type: 'Voyage', status: 'Inquiry'     },
];

export const CERTIFICATES: Certificate[] = [
  { vessel: 'Argo Phoenix', cert: 'Safety Equipment Cert', issuer: 'DNV', issued: 'Jun 04 2021', expires: 'Jun 04 2026', days: 13,  severity: 'warn'     },
  { vessel: 'Argo Atlas',   cert: 'ISM DoC',               issuer: 'LR',  issued: 'Jun 18 2021', expires: 'Jun 18 2026', days: 27,  severity: 'warn'     },
  { vessel: 'Argo Nereid',  cert: 'Class — DNV',           issuer: 'DNV', issued: 'Jul 02 2016', expires: 'Jul 02 2026', days: 41,  severity: 'info'     },
  { vessel: 'Argo Titan',   cert: 'IOPP',                  issuer: 'BV',  issued: 'Aug 14 2021', expires: 'Aug 14 2026', days: 84,  severity: 'info'     },
  { vessel: 'Argo Triton',  cert: 'MLC 2006',              issuer: 'DNV', issued: 'Jul 14 2021', expires: 'Jul 14 2026', days: 53,  severity: 'info'     },
  { vessel: 'Argo Helios',  cert: 'SMC',                   issuer: 'LR',  issued: 'Sep 30 2021', expires: 'Sep 30 2026', days: 131, severity: 'ok'       },
  { vessel: 'Argo Lyra',    cert: 'ISPS',                  issuer: 'ABS', issued: 'Oct 12 2021', expires: 'Oct 12 2026', days: 143, severity: 'ok'       },
];

export const INVENTORY: InventoryItem[] = [
  { sku: 'ME-PIST-WART',  description: 'Piston crown — Wärtsilä RT-flex 50',     location: 'Argo Titan',  stock: 2,  min: 1,  onOrder: 1, unitValue: 18400, status: 'OK'      },
  { sku: 'TG-IMP-MAN-B',  description: 'Turbocharger impeller — Mann B&W S60ME', location: 'Argo Atlas',  stock: 0,  min: 1,  onOrder: 1, unitValue: 22100, status: 'Reorder' },
  { sku: 'PMP-SEAL-PU40', description: 'Mechanical seal — Pumpex PU40',          location: 'Argo Lyra',   stock: 6,  min: 3,  onOrder: 0, unitValue: 1840,  status: 'OK'      },
  { sku: 'ELC-MCB-160',   description: 'MCB 160A — ABB S801N',                   location: 'Stock',       stock: 18, min: 8,  onOrder: 0, unitValue: 4320,  status: 'OK'      },
  { sku: 'CHK-BRK-PAD',   description: 'Brake pad set — Hitachi deck crane',     location: 'Argo Nereid', stock: 1,  min: 2,  onOrder: 4, unitValue: 980,   status: 'Low'     },
  { sku: 'FIL-FUEL-RT60', description: 'Fuel filter element — RT-flex 60',       location: 'Stock',       stock: 42, min: 20, onOrder: 0, unitValue: 1260,  status: 'OK'      },
  { sku: 'PNT-MARINE-G',  description: 'Marine paint — gray (208L)',             location: 'Stock',       stock: 4,  min: 6,  onOrder: 8, unitValue: 2400,  status: 'Low'     },
];

export const CREW_ROTATIONS: CrewRotation[] = [
  { vessel: 'Argo Titan',    rank: 'Master',     name: 'Capt. M. Volkov',    signOn: 'Apr 12', signOff: 'Jul 12', daysRemaining: 41, status: 'active'   },
  { vessel: 'Argo Titan',    rank: 'Chief Eng.', name: 'S. Aliyev',          signOn: 'Apr 12', signOff: 'Jul 12', daysRemaining: 41, status: 'active'   },
  { vessel: 'Argo Helios',   rank: 'Master',     name: 'Capt. J. Tanaka',    signOn: 'May 02', signOff: 'Aug 02', daysRemaining: 20, status: 'active'   },
  { vessel: 'Argo Phoenix',  rank: 'Master',     name: 'Capt. R. Patel',     signOn: 'Mar 18', signOff: 'Jun 18', daysRemaining: 65, status: 'rotating' },
  { vessel: 'Argo Atlas',    rank: 'Chief Off.', name: 'L. Mendes',          signOn: 'Feb 28', signOff: 'May 28', daysRemaining: 83, status: 'rotating' },
  { vessel: 'Argo Orion',    rank: 'Master',     name: 'Capt. P. Halvorsen', signOn: 'Apr 30', signOff: 'Jul 30', daysRemaining: 22, status: 'active'   },
  { vessel: 'Argo Lyra',     rank: 'Master',     name: 'Capt. F. Costa',     signOn: 'May 06', signOff: 'Aug 06', daysRemaining: 16, status: 'active'   },
  { vessel: 'Argo Triton',   rank: 'Master',     name: 'Capt. K. Bergstrom', signOn: 'Apr 04', signOff: 'Jul 04', daysRemaining: 48, status: 'active'   },
  { vessel: 'Argo Poseidon', rank: 'Master',     name: 'Capt. Y. Lin',       signOn: 'May 08', signOff: 'Aug 08', daysRemaining: 14, status: 'active'   },
];

import { Invoice, InvoiceDetail } from '../models';

export const MOCK_INVOICES: Invoice[] = [
  { id: 'INV-2026-0418', date: 'May 18, 2026', due: 'Jun 17, 2026', type: 'Freight',          counterparty: 'Glencore Agriculture',    vessel: 'Argo Titan',    voyage: 'V-2026-0142', amount: 1_485_200, ccy: 'USD', status: 'sent',    ar: true,  daysOut: 30 },
  { id: 'INV-2026-0417', date: 'May 17, 2026', due: 'May 31, 2026', type: 'Bunker',           counterparty: 'Vitol Bunkers',           vessel: 'Argo Helios',   voyage: 'V-2026-0138', amount: 412_600,   ccy: 'USD', status: 'due',     ar: false, daysOut: 9  },
  { id: 'INV-2026-0416', date: 'May 16, 2026', due: 'May 20, 2026', type: 'Port Disbursement',counterparty: 'Inchcape Shipping',       vessel: 'Argo Phoenix',  voyage: 'V-2026-0135', amount: 87_450,    ccy: 'USD', status: 'over',    ar: false, daysOut: -2 },
  { id: 'INV-2026-0415', date: 'May 15, 2026', due: 'Jun 14, 2026', type: 'Time Charter Hire',counterparty: 'Cargill Ocean Transport', vessel: 'Argo Atlas',    voyage: 'V-2026-0144', amount: 612_000,   ccy: 'USD', status: 'sent',    ar: true,  daysOut: 23 },
  { id: 'INV-2026-0414', date: 'May 14, 2026', due: 'May 14, 2026', type: 'Freight',          counterparty: 'Trafigura Maritime',      vessel: 'Argo Orion',    voyage: 'V-2026-0141', amount: 988_750,   ccy: 'EUR', status: 'paid',    ar: true,  daysOut: 0  },
  { id: 'INV-2026-0413', date: 'May 14, 2026', due: 'May 28, 2026', type: 'Agency Fees',      counterparty: 'GAC Group',               vessel: 'Argo Poseidon', voyage: 'V-2026-0139', amount: 18_240,    ccy: 'USD', status: 'due',     ar: false, daysOut: 6  },
  { id: 'INV-2026-0412', date: 'May 13, 2026', due: 'Jun 12, 2026', type: 'Freight',          counterparty: 'Mitsui & Co.',            vessel: 'Argo Poseidon', voyage: 'V-2026-0139', amount: 2_140_500, ccy: 'USD', status: 'partial', ar: true,  daysOut: 21 },
  { id: 'INV-2026-0411', date: 'May 12, 2026', due: 'May 12, 2026', type: 'Bunker',           counterparty: 'BP Marine Fuels',         vessel: 'Argo Lyra',     voyage: 'V-2026-0140', amount: 318_900,   ccy: 'USD', status: 'paid',    ar: false, daysOut: 0  },
  { id: 'INV-2026-0410', date: 'May 11, 2026', due: 'May 15, 2026', type: 'Port Disbursement',counterparty: 'Port of Rotterdam',       vessel: 'Argo Orion',    voyage: 'V-2026-0141', amount: 142_300,   ccy: 'EUR', status: 'over',    ar: false, daysOut: -7 },
  { id: 'INV-2026-0409', date: 'May 10, 2026', due: 'Jun 09, 2026', type: 'Freight',          counterparty: 'Glencore Agriculture',    vessel: 'Argo Hyperion', voyage: 'V-2026-0137', amount: 1_212_800, ccy: 'USD', status: 'sent',    ar: true,  daysOut: 18 },
  { id: 'INV-2026-0408', date: 'May 09, 2026', due: 'Jun 08, 2026', type: 'Time Charter Hire',counterparty: 'Trafigura Maritime',      vessel: 'Argo Helios',   voyage: 'V-2026-0138', amount: 745_000,   ccy: 'USD', status: 'sent',    ar: true,  daysOut: 17 },
  { id: 'INV-2026-0407', date: 'May 08, 2026', due: 'May 22, 2026', type: 'Agency Fees',      counterparty: 'Inchcape Shipping',       vessel: 'Argo Titan',    voyage: 'V-2026-0142', amount: 12_500,    ccy: 'USD', status: 'draft',   ar: false, daysOut: 0  },
];

export const MOCK_INVOICE_DETAIL: InvoiceDetail = {
  ...MOCK_INVOICES[0],
  cp: 'Charter Party dated 24 April 2026',
  charterer: {
    name: 'Glencore Agriculture',
    contact: 'ops.shipping@glencore.com',
    ref: 'GLN-CP-2026-118',
  },
  voyageInfo: {
    id: 'V-2026-0142',
    load: 'Constanta, RO',
    disch: 'Alexandria, EG',
    cargo: '55,400 MT Wheat in Bulk',
    laycan: 'May 02 – 04, 2026',
  },
  lines: [
    { desc: 'Ocean Freight — 55,400 MT × USD 26.50/MT',     qty: 55400, rate: 26.50, amount: 1_468_100 },
    { desc: 'Demurrage — 18 hrs 24 min @ USD 12,500/day',    qty: 0.767, rate: 12500, amount: 9_587 },
    { desc: 'Bunker Adjustment Factor (BAF) — May 2026',     qty: 1,    rate: 7513,  amount: 7_513 },
  ],
  subtotal: 1_485_200,
  tax: 0,
  total: 1_485_200,
  docs: [
    { name: 'Bill of Lading — BL-218849.pdf',     size: '1.2 MB', kind: 'PDF' },
    { name: 'Statement of Facts — SOF-V0142.pdf', size: '418 KB', kind: 'PDF' },
    { name: "Mate's Receipt — MR-V0142.pdf",      size: '204 KB', kind: 'PDF' },
    { name: 'Notice of Readiness — NOR.pdf',      size: '92 KB',  kind: 'PDF' },
    { name: 'Cargo Manifest — manifest.xlsx',     size: '88 KB',  kind: 'XLS' },
  ],
  timeline: [
    { t: 'May 02, 09:12 UTC', what: 'Notice of Readiness tendered',         who: 'Master / Argo Titan',    state: 'done' },
    { t: 'May 02, 14:00 UTC', what: 'All-fast at berth — Constanta',        who: 'Port of Constanta',      state: 'done' },
    { t: 'May 04, 03:24 UTC', what: 'Loading completed — 55,400 MT wheat',  who: 'Surveyor (SGS)',         state: 'done' },
    { t: 'May 18, 11:08 UTC', what: 'Invoice issued and sent to charterer', who: 'L. Petrov, Operations',  state: 'done' },
    { t: 'May 22, 09:00 UTC', what: 'Payment expected (30 d net)',          who: '—',                       state: 'active' },
  ],
  audit: [
    { t: 'May 18, 11:08', what: 'Sent via email + EDI', who: 'L. Petrov' },
    { t: 'May 18, 11:06', what: 'Approved by Finance',  who: 'M. Okafor' },
    { t: 'May 18, 10:42', what: 'Submitted for review', who: 'L. Petrov' },
    { t: 'May 18, 10:38', what: 'Created from CP-118',  who: 'L. Petrov' },
  ],
};

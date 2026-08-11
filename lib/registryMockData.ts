export interface RegistryEntity {
  id: string;
  name: string;
  status: 'Active' | 'Inactive' | 'Pending';
  createdAt: string;
}

export interface Horse extends RegistryEntity {
  sire: string;
  dam: string;
  color: string;
  sex: 'Colt' | 'Filly' | 'Horse' | 'Mare' | 'Gelding';
  foaledDate: string;
}

export interface Jockey extends RegistryEntity {
  licenseType: 'Apprentice' | 'Professional';
  weight: number;
  nationality: string;
  dob: string;
  licensingClub: string;
}

export interface Trainer extends RegistryEntity {
  stables: string;
  licenseGrade: 'A' | 'B' | 'C';
  licensingClub: string;
}

export interface Owner extends RegistryEntity {
  syndicateName?: string;
  type: 'individual' | 'partnership' | 'company' | 'syndicate';
  registeredColours: string;
  homeClub: string;
}

export interface Club extends RegistryEntity {
  location: string;
  trackType: 'Turf' | 'Dirt' | 'Synthetic';
  shortCode: string;
  city: string;
  state: string;
  website: string;
}

export interface StudFarm extends RegistryEntity {
  location: string;
  regionCode: string;
  sizeAcres: number;
  ownerName: string;
}

export interface Race extends RegistryEntity {
  clubName: string;
  distance: number;
  grade: string;
  prizeMoneyStr: string;
  date: string;
}

export interface RaceEntry extends RegistryEntity {
  raceName: string;
  horseName: string;
  jockeyName: string;
  finishPosition: string;
  weightCarried: string;
  startingPrice: string;
  trainerName: string;
  ownerName: string;
}

// Mock Data
export const mockHorses: Horse[] = [
  { id: 'HR-FLEM-2026-001', name: 'Thunder Strike', status: 'Active', createdAt: '2026-01-15', sire: 'Lightning Bolt', dam: 'Cloud Dancer', color: 'Bay', sex: 'Colt', foaledDate: '2022-08-10' },
  { id: 'HR-RAND-2026-002', name: 'Golden Ridge', status: 'Active', createdAt: '2026-02-20', sire: 'Gold Digger', dam: 'Mountain Peak', color: 'Chestnut', sex: 'Gelding', foaledDate: '2021-09-05' },
  { id: 'HR-CAUL-2026-003', name: 'Midnight Express', status: 'Inactive', createdAt: '2025-11-01', sire: 'Dark Knight', dam: 'Speedy Gal', color: 'Black', sex: 'Filly', foaledDate: '2023-10-12' },
  { id: 'HR-ROSE-2026-004', name: 'Desert Mirage', status: 'Active', createdAt: '2026-03-05', sire: 'Sandstorm', dam: 'Oasis Dream', color: 'Grey', sex: 'Mare', foaledDate: '2020-07-22' },
  { id: 'HR-MOON-2026-005', name: 'Starry Night', status: 'Pending', createdAt: '2026-08-01', sire: 'Stargazer', dam: 'Night Sky', color: 'Brown', sex: 'Colt', foaledDate: '2024-01-15' },
];

export const mockJockeys: Jockey[] = [
  { id: 'JK-RWITC-2026-00001', name: 'P. S. Chouhan', status: 'Active', createdAt: '2024-05-10', licenseType: 'Professional', weight: 55, nationality: 'Indian', dob: '12/4/1985', licensingClub: 'Royal Western India Turf Club' },
  { id: 'JK-BTC-2026-00001', name: 'Suraj Narredu', status: 'Active', createdAt: '2023-08-22', licenseType: 'Professional', weight: 54, nationality: 'Indian', dob: '10/2/1984', licensingClub: 'Bangalore Turf Club' },
  { id: 'JK-RWITC-2026-00002', name: 'Trevor Patel', status: 'Active', createdAt: '2022-11-15', licenseType: 'Professional', weight: 56, nationality: 'Indian', dob: '05/9/1990', licensingClub: 'Royal Western India Turf Club' },
  { id: 'JK-BTC-2026-00002', name: 'A. Sandesh', status: 'Active', createdAt: '2025-02-28', licenseType: 'Professional', weight: 55.5, nationality: 'Indian', dob: '18/1/1992', licensingClub: 'Bangalore Turf Club' },
  { id: 'JK-MRC-2026-00001', name: 'Neeraj Rawal', status: 'Active', createdAt: '2026-01-05', licenseType: 'Apprentice', weight: 52, nationality: 'Indian', dob: '22/11/1995', licensingClub: 'Madras Race Club' },
];

export const mockTrainers: Trainer[] = [
  { id: 'TR-RWITC-2026-00001', name: 'Pesi Shroff', status: 'Active', createdAt: '2020-01-10', stables: 'Shroff Racing Stables', licenseGrade: 'A', licensingClub: 'Royal Western India Turf Club' },
  { id: 'TR-BTC-2026-00001', name: 'S. Padmanabhan', status: 'Active', createdAt: '2019-05-15', stables: 'Padmanabhan Stables', licenseGrade: 'A', licensingClub: 'Bangalore Turf Club' },
  { id: 'TR-RWITC-2026-00002', name: 'Arti Doctor', status: 'Active', createdAt: '2021-08-20', stables: 'Doctor Racing', licenseGrade: 'B', licensingClub: 'Royal Western India Turf Club' },
  { id: 'TR-MRC-2026-00001', name: "L. D'Silva", status: 'Active', createdAt: '2022-03-12', stables: "D'Silva Stables", licenseGrade: 'A', licensingClub: 'Madras Race Club' },
  { id: 'TR-BTC-2026-00002', name: 'A. Neasham', status: 'Active', createdAt: '2023-11-05', stables: 'Warwick Farm', licenseGrade: 'C', licensingClub: 'Bangalore Turf Club' },
];

export const mockOwners: Owner[] = [
  { id: 'OW-RWITC-2026-00001', name: 'Mr. A. R. Deshmukh', status: 'Active', createdAt: '2021-02-20', type: 'individual', registeredColours: 'Emerald green, gold sash, white cap', homeClub: 'Royal Western India Turf Club' },
  { id: 'OW-BTC-2026-00001', name: 'Kalyani & Bhagwat Racing', status: 'Active', createdAt: '2018-07-15', type: 'partnership', registeredColours: 'Navy blue, red epaulettes', homeClub: 'Bangalore Turf Club' },
  { id: 'OW-MRC-2026-00001', name: 'Southern Turf Holdings Pvt Ltd', status: 'Active', createdAt: '2020-09-10', type: 'company', registeredColours: 'Maroon, silver chevron', homeClub: 'Madras Race Club' },
  { id: 'OW-HRC-2026-00001', name: 'Deccan Bloodstock Syndicate', status: 'Active', createdAt: '2022-12-05', type: 'syndicate', syndicateName: 'Deccan Bloodstock Syndicate', registeredColours: 'Yellow, black stars', homeClub: 'Hyderabad Race Club' },
];

export const mockClubs: Club[] = [
  { id: 'CL-IND-00001', name: 'Royal Western India Turf Club', status: 'Active', createdAt: '2000-01-01', location: 'Mahalaxmi', trackType: 'Turf', shortCode: 'RWITC', city: 'Mumbai', state: 'Maharashtra', website: 'rwitc.com' },
  { id: 'CL-IND-00002', name: 'Bangalore Turf Club', status: 'Active', createdAt: '2005-05-10', location: 'High Grounds', trackType: 'Turf', shortCode: 'BTC', city: 'Bengaluru', state: 'Karnataka', website: 'bangaloreraces.com' },
  { id: 'CL-IND-00003', name: 'Madras Race Club', status: 'Active', createdAt: '2010-08-15', location: 'Guindy', trackType: 'Turf', shortCode: 'MRC', city: 'Chennai', state: 'Tamil Nadu', website: 'madrasraceclub.com' },
  { id: 'CL-IND-00004', name: 'Hyderabad Race Club', status: 'Active', createdAt: '2012-11-20', location: 'Malakpet', trackType: 'Turf', shortCode: 'HRC', city: 'Hyderabad', state: 'Telangana', website: 'hydraces.com' },
  { id: 'CL-IND-00005', name: 'Royal Calcutta Turf Club', status: 'Active', createdAt: '1995-03-25', location: 'Maidan', trackType: 'Turf', shortCode: 'RCTC', city: 'Kolkata', state: 'West Bengal', website: 'rctconline.com' },
  { id: 'CL-IND-00006', name: 'Delhi Race Club', status: 'Active', createdAt: '2001-01-01', location: 'Safdarjung', trackType: 'Turf', shortCode: 'DRC', city: 'New Delhi', state: 'Delhi', website: 'delhiraceclub.com' },
  { id: 'CL-IND-00007', name: 'Mysore Race Club', status: 'Active', createdAt: '2004-04-04', location: 'Chamundi Hills', trackType: 'Turf', shortCode: 'MYRC', city: 'Mysuru', state: 'Karnataka', website: 'mysoreraceclub.com' },
  { id: 'CL-IND-00008', name: 'Hyderabad Polo & Riding Club', status: 'Active', createdAt: '2015-05-05', location: 'Aziz Nagar', trackType: 'Dirt', shortCode: 'HPRC', city: 'Hyderabad', state: 'Telangana', website: 'hprc.com' },
];

export const mockStudFarms: StudFarm[] = [
  { id: 'ST-MH-2026-00001', name: 'Nanoli Stud Farm', status: 'Active', createdAt: '2015-02-10', location: 'Pune, Maharashtra', regionCode: 'MH', sizeAcres: 2500, ownerName: 'Mr. A. R. Deshmukh' },
  { id: 'ST-KA-2026-00001', name: 'Kunigal Stud Farm', status: 'Active', createdAt: '2012-06-15', location: 'Kunigal, Karnataka', regionCode: 'KA', sizeAcres: 8000, ownerName: 'Kalyani & Bhagwat Racing' },
  { id: 'ST-KA-2026-00002', name: 'Usha Stud Farm', status: 'Active', createdAt: '2018-09-20', location: 'Bengaluru, Karnataka', regionCode: 'KA', sizeAcres: 1500, ownerName: 'Southern Turf Holdings Pvt Ltd' },
];

export const mockRaces: Race[] = [
  { id: 'RC-RWITC-2026-00001', name: 'Indian Derby', status: 'Active', createdAt: '2026-01-01', clubName: 'Royal Western India Turf Club', distance: 2400, grade: 'Grade 1', prizeMoneyStr: '₹ 3,00,00,000', date: '1/2/2026' },
  { id: 'RC-BTC-2026-00001', name: 'Bangalore Winter Million', status: 'Active', createdAt: '2026-02-15', clubName: 'Bangalore Turf Club', distance: 1600, grade: 'Grade 2', prizeMoneyStr: '₹ 50,00,000', date: '18/1/2026' },
  { id: 'RC-MRC-2025-00001', name: 'Madras Gold Cup', status: 'Active', createdAt: '2026-03-10', clubName: 'Madras Race Club', distance: 2000, grade: 'Grade 3', prizeMoneyStr: '₹ 25,00,000', date: '14/12/2025' },
];

export const mockRaceEntries: RaceEntry[] = [
  { id: 'EN-IND-2026-00001', name: 'Race Entry 1', status: 'Active', createdAt: '2026-08-01', raceName: 'Indian Derby', horseName: 'Monsoon Sonnet', jockeyName: 'P. S. Chouhan', finishPosition: '1', weightCarried: '55.5', startingPrice: '3/1', trainerName: 'Pesi Shroff', ownerName: 'Mr. A. R. Deshmukh' },
  { id: 'EN-IND-2026-00002', name: 'Race Entry 2', status: 'Active', createdAt: '2026-08-05', raceName: 'Indian Derby', horseName: 'Deccan Thunder', jockeyName: 'Suraj Narredu', finishPosition: '2', weightCarried: '57', startingPrice: '5/2', trainerName: 'S. Padmanabhan', ownerName: 'Kalyani & Bhagwat Racing' },
  { id: 'EN-IND-2026-00003', name: 'Race Entry 3', status: 'Pending', createdAt: '2026-08-10', raceName: 'Bangalore Winter Million', horseName: 'Coromandel Star', jockeyName: 'A. Sandesh', finishPosition: '1', weightCarried: '54', startingPrice: '2/1', trainerName: 'Arti Doctor', ownerName: 'Southern Turf Holdings Pvt Ltd' },
  { id: 'EN-IND-2026-00004', name: 'Race Entry 4', status: 'Active', createdAt: '2026-08-11', raceName: 'Madras Gold Cup', horseName: 'Nilgiri Mist', jockeyName: 'Neeraj Rawal', finishPosition: '3', weightCarried: '52.5', startingPrice: '9/2', trainerName: "L. D'Silva", ownerName: 'Deccan Bloodstock Syndicate' },
];

export const getRegistryTotals = () => ({
  horses: mockHorses.length,
  jockeys: mockJockeys.length,
  trainers: mockTrainers.length,
  owners: mockOwners.length,
  clubs: mockClubs.length,
  studFarms: mockStudFarms.length,
  races: mockRaces.length,
  raceEntries: mockRaceEntries.length,
});

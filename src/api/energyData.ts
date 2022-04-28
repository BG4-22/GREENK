import { EnergySourceList, MonthlySpendings } from 'types/api';
import dataJson from '../assets/MockData.json';

export const getMonthlySpendings: () => MonthlySpendings = () => {
    return dataJson.EnergyMoneyMonthly;
};

export const getEnergySources: () => EnergySourceList[] = () => {
    return dataJson.EnergySources as EnergySourceList[];
};

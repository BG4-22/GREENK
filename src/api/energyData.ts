import { MonthlySpendings } from 'types/api';
import dataJson from '../assets/MockData.json';

export const getMonthlySpendings: () => MonthlySpendings = () => {
    return dataJson.EnergyMoneyMonthly;
};

import getSolarPanelEffect from 'api/getSolarPanelEffect';
import Maskot from '../../assets/Maskot.svg';

const SolarPanelMascot = () => {
    const effect = getSolarPanelEffect();

    const msg = 'Nidarvoll generer ' + effect + ' KWh nå :)';

    return <img src={Maskot} alt="Maskot" style={{ marginBottom: '60px' }} />;
};
export default SolarPanelMascot;

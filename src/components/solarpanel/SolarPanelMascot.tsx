import getSolarPanelEffect from 'api/getSolarPanelEffect';
import Mascot from '../../assets/images/Mascot.svg';
import SolarPanelComponent from './SolarPanelComponent';

const SolarPanelMascot = () => {
    const effect = getSolarPanelEffect();

    const msg = 'Nidarvoll generer ' + effect + ' KWh nå :)';

    return (
        <>
            <SolarPanelComponent />
            <img src={Mascot} alt="Mascot" id={'mascot'} />
        </>
    );
};
export default SolarPanelMascot;

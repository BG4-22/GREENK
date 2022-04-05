import getSolarPanelEffect from 'api/getSolarPanelEffect';
import Maskot from '../../assets/Maskot.svg';
import SolarPanelComponent2 from './SolarPanelComponent';

const SolarPanelMascot = () => {
    const effect = getSolarPanelEffect();

    const msg = 'Nidarvoll generer ' + effect + ' KWh nå :)';

    return (
        <>
            <SolarPanelComponent2 />
            <img
                src={Maskot}
                alt="Maskot"
                style={{ marginBottom: '60px', zIndex: '2' }}
            />
        </>
    );
};
export default SolarPanelMascot;

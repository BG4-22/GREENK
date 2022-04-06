import getSolarPanelEffect from 'api/getSolarPanelEffect';
import Mascot from '../../assets/images/Mascot.svg';
import SolarPanelComponent from './SolarPanelComponent';

const SolarPanelMascot = () => {
    const effect = getSolarPanelEffect();

    const msg = 'Nidarvoll generer ' + effect + ' KWh nå :)';

    return (
        <>
            <SolarPanelComponent />
            <img
                src={Mascot}
                alt="Mascot"
                width={'80%'}
                style={{
                    marginBottom: '60px',
                    zIndex: '2',
                }}
            />
        </>
    );
};
export default SolarPanelMascot;

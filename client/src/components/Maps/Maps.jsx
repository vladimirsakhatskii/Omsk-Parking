import { YMaps, Map } from '@pbe/react-yandex-maps';
import './Maps.css';

export default function Maps() {
    return (
        <YMaps>
                <Map className='map'
                    defaultState={{
                        center: [54.989347, 73.368221],
                        zoom: 12,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                />
        </YMaps>
    )
}
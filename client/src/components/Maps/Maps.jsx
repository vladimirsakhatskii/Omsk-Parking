import { YMaps, Map } from '@pbe/react-yandex-maps';
import './Maps.css';

export default function Maps() {
    return (
        <YMaps>
            <div className='map'>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
        </YMaps>
    )
}
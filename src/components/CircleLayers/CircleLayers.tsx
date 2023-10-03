
import './CircleLayers.scss'

export function CircleLayers({ logo }: { logo: 'pause-icon' | 'alarm-icon' }) {

    const logoPath = `/${logo}.svg`
    return (
        <div className="circle circle--biggest">
            <div className="circle circle--next-biggest">
                <div className="circle circle--next-smallest">
                    <div className="circle circle--smallest">
                        <img src={logoPath} alt={logo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

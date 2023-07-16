import toggle from "../functions/toggle"

export default function ToggleBox() {
    return (
    <div className="togglebox" id="togglebox" onClick={toggle.bind(null, '.togglebox')}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
    )
}
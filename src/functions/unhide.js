export default function unhide() {
    const travelfiles = ['.JP15', '.TW17', '.TH18', '.NZ18', '.IN22']
    for (let i = 0; i < travelfiles.length; i++) {
        const travelfile = document.querySelector(travelfiles[i])
        if ((travelfile && travelfile.classList.contains('open'))) {
            travelfile.classList.toggle('open');
        }
    }
    const snippet = document.getElementById('snippet');
    const JP15 = document.querySelector('.JP15');
    const TW17 = document.querySelector('.TW17');
    const TH18 = document.querySelector('.TH18');
    const NZ18 = document.querySelector('.NZ18');
    const IN22 = document.querySelector('.IN22');
    snippet.classList.toggle('unhide');
    JP15.classList.toggle('unhide');
    TW17.classList.toggle('unhide');
    TH18.classList.toggle('unhide');
    NZ18.classList.toggle('unhide');
    IN22.classList.toggle('unhide');
}
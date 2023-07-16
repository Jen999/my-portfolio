export default function unfile(filename){
    const file = document.querySelector(filename);
    file.classList.toggle('open');
    
    const travelfiles = ['.JP15', '.TW17', '.TH18', '.NZ18', '.IN22']
    for (let i = 0; i < travelfiles.length; i++) {
        const travelfile = document.querySelector(travelfiles[i])
        if ((travelfile && travelfile.classList.contains('open')) && travelfile !== file) {
            travelfile.classList.toggle('open');
        }
    }
  }
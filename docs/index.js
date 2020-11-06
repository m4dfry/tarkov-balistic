function getAmmoRow(ammo) {
    const eff = ammo.Efficency;

    var accuracyInfo = ""
    if(ammo.Accuracy !== 0) {
        var color = "red";
        if(ammo.Accuracy > 0) {
            color = "green";
            ammo.Accuracy = "+" + ammo.Accuracy;
        }
        accuracyInfo = `<bullseye-center> </bullseye-center> <span style="color:${color}">${ammo.Accuracy}</span>`;
    }
    var recoilInfo = ""
    if(ammo.Recoil !== 0) {
        color = "green";
        if(ammo.Recoil > 0) {
            color = "red";
            ammo.Recoil = "+" + ammo.Recoil;
        }
        recoilInfo = `<arrow-up-right> </arrow-up-right> <span style="color:${color}">${ammo.Recoil}</span>`;
    }

    
    const template = document.createElement('template');
    template.innerHTML = `<div class="row">
    <div class="container-fluid">
        <div class="row">
            <div class="col col-4">
                <h5 class="font-weight-light">${ammo.Name}</h2>
            </div>
            <div class="col col-8">
                <div class="container">
                    <div class="row">
                        <div class="col">
                                <span class="badge badge-p${eff[0]}">${eff[0]}</span>
                                <span class="badge badge-p${eff[1]}">${eff[1]}</span>
                                <span class="badge badge-p${eff[2]}">${eff[2]}</span>
                                <span class="badge badge-p${eff[3]}">${eff[3]}</span>
                                <span class="badge badge-p${eff[4]}">${eff[4]}</span>
                                <span class="badge badge-p${eff[5]}">${eff[5]}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            
                                <droplet-half-icon></droplet-half-icon> ${ammo.Flesh}
                                <arrow-bar-right> </arrow-bar-right> ${ammo.Penetration}
                                <shield-shaded> </shield-shaded> ${ammo.Armor}
                                ${accuracyInfo}
                                ${recoilInfo}
                                <diamond-fill> </diamond-fill> ${ammo.Fragmentation}%
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <hr />
    </div>`;
    const node = template.content.firstElementChild;
    return node;
}

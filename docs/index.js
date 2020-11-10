function getAmmoRow(ammo) {
    const eff = ammo.Efficency;

    var accuracyInfo = ""
    if (ammo.Accuracy !== 0) {
        var color = "red";
        if (ammo.Accuracy > 0) {
            color = "green";
            ammo.Accuracy = "+" + ammo.Accuracy;
        }
        accuracyInfo = `<div class="p-2"><bullseye-center> </bullseye-center> <span  class="font-weight-normal" style="color:${color}">${ammo.Accuracy}</span></div>`;
    }
    var recoilInfo = ""
    if (ammo.Recoil !== 0) {
        color = "green";
        if (ammo.Recoil > 0) {
            color = "red";
            ammo.Recoil = "+" + ammo.Recoil;
        }
        recoilInfo = `<div class="p-2"><arrow-up-right> </arrow-up-right> <span  class="font-weight-normal" style="color:${color}">${ammo.Recoil}</span></div>`;
    }


    const template = document.createElement('template');
    template.innerHTML = `<div class="row">
    <div class="container-fluid">
        <div class="row">
            <div class="col col-4">
                <h5 class="font-weight-bold">${ammo.Name}</h2>
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
                        <div class="col d-flex flex-wrap">
                        <div class="p-2"><droplet-half-icon></droplet-half-icon> <span class="font-weight-normal">${ammo.Flesh}</span></div>
                        <div class="p-2"><arrow-bar-right> </arrow-bar-right> <span class="font-weight-normal"> ${ammo.Penetration}</span></div>
                        <div class="p-2"><shield-shaded> </shield-shaded> <span class="font-weight-normal">${ammo.Armor}</span></div>
                        ${accuracyInfo}
                        ${recoilInfo}
                        <div class="p-2"><diamond-fill> </diamond-fill> <span class="font-weight-normal">${ammo.Fragmentation}</span></div>
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

function getLegend() {
    const template = document.createElement('template');
    template.innerHTML = `<div class='row'>
        <div class='col'>
        <br />

        <div class="alert alert-warning" role="alert">
        <h4 class="alert-heading">Alert warning!</h4>
        <p>This page is a partial export of <a href="https://escapefromtarkov.gamepedia.com/Ballistics">this wiki page</a>. </p>
        <p>For complete and up-to-date information, always refer to the original wiki.</p>
        </div>

        <br />
            <h3>Legend</h3>
            <h5>Armor Effectiveness against Class:</h5>
            <div class="row">
                <div class="col">
                    <span class="badge badge-primary">1</span>
                    <span class="badge badge-primary">2</span>
                    <span class="badge badge-primary">3</span>
                    <span class="badge badge-primary">4</span>
                    <span class="badge badge-primary">5</span>
                    <span class="badge badge-primary">6</span>
                </div>
            </div>
            <br /><br />
            <h5>Others info:</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <droplet-half-icon></droplet-half-icon> <span class="font-weight-bold"> Flesh Damage</span>
                </li>
                <li class="list-group-item">
                    <arrow-bar-right></arrow-bar-right> <span class="font-weight-bold"> Penetration Power</span>
                </li>
                <li class="list-group-item">
                    <shield-shaded></shield-shaded> <span class="font-weight-bold"> Armor Damage (%)</span>
                </li>
                <li class="list-group-item">
                    <bullseye-center></bullseye-center> <span class="font-weight-bold"> Accuracy (%)</span>
                </li>
                <li class="list-group-item">
                    <arrow-up-right></arrow-up-right> <span class="font-weight-bold"> Recoil (%)</span>
                </li>
                <li class="list-group-item">
                    <diamond-fill></diamond-fill> <span class="font-weight-bold"> Fragmentation Chance (%)</span>
                </li>
            </ul>
        </div>
    </div>`;
    const node = template.content.firstElementChild;
    return node;
}

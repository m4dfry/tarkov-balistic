function getAmmoRow(ammo) {

    const template = document.createElement('template');
    template.innerHTML = `<div class="row">
    <div class="container-fluid">
        <div class="row">
            <div class="col col-4">
                <h5 class="font-weight-light">HP Slug Copper Sabot Premier</h2>
            </div>
            <div class="col col-8">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            
                                Effectiveness:
                                <span class="badge badge-p0">0</span>
                                <span class="badge badge-p1">1</span>
                                <span class="badge badge-p2">2</span>
                                <span class="badge badge-p3">3</span>
                                <span class="badge badge-p4">4</span>
                                <span class="badge badge-p5">5</span>
                                <span class="badge badge-p6">6</span>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            
                                <droplet-half-icon></droplet-half-icon> 206
                                <arrow-bar-right> </arrow-bar-right> 14
                                <shield-shaded> </shield-shaded> 46
                                <bullseye-center> </bullseye-center> <span style="color:green">+150</span>
                                <arrow-up-right> </arrow-up-right> <span style="color:red">+15</span>
                                <diamond-fill> </diamond-fill> 138%

                        </div>
                    </div>
                </div>


                
            </div>
        </div>
    </div>
</div>`;
    const node = template.content.firstElementChild;
    return node;
}

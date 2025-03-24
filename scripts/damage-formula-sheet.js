class ShrimpsTweaks {
    static ID = 'shrimps-tweaks';

    static SHOULD_LOG = true;

    static FLAGS = {
        SHRIMPS_TWEAKS: 'shrimps-tweaks'
    }

    static TEMPLATES = {
        SHRIMPS_TWEAKS: `modules/${this.ID}/templates/damage-formula-sheet.hbs`
    }

    static log(...args) {
    
        if (this.SHOULD_LOG) {
            console.log(this.ID, '|', ...args);
        }
    }

    static capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
}

Hooks.on('renderActorSheet', (app, html, data) => {
    let weaponList = html.find(".items-list .item");

    weaponList.each((index, element) => {
        let itemId = $(element).data("item-id");
        let item = data.actor.items.get(itemId);
        
        
        if (item && item.type === "weapon") {
            let toHitBonus = item.labels.toHit;
            let damageDice = item.labels.damages;
            let damageType = damageDice.map(damage => damage.damageType);
            let damageFormula = damageDice.map(damage => damage.formula);
            if (item.name && item.name === "Unarmed Strike") {
                let unarmedDamage = 1 + Math.max(data.abilities.str.mod, 0);
                damageFormula = [unarmedDamage.toString()];
                damageType = ["Bludgeoning"];
            }

            let tooltipHTML = `
                <div class="weapon-stats">
                    <div class="to-hit">
                        <span class="stat-value">${toHitBonus}</span>
                        <div class="stat-label">To Hit</div>
                    </div>
                    <div class="damage">
                        <span class="stat-value">${damageFormula[0]}</span>
                        <div class="stat-label">${ShrimpsTweaks.capitalizeFirstLetter(damageType[0])} Damage</div>
                    </div>
                </div>
            `;

            $(tooltipHTML).insertBefore($(element).find(".item-price")[0]);
        }
    });
})
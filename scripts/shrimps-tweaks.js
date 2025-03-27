import DamageFormulaSheet from './damage-formula-sheet.js';

export class ShrimpsTweaks {
    static ID = 'shrimps-tweaks';

    static SHOULD_LOG = true;

    static log(...args) {
        if (this.SHOULD_LOG) {
            console.log(this.ID, '|', ...args);
        }
    }
}

Hooks.on('renderActorSheet', (app, html, data) => {
    DamageFormulaSheet.RenderDamageFormula(html, data);
});

// Hooks.on("init", () => {    
//     IgnoreCoinWeight.ignoreCoinWeight(CONFIG)
// });
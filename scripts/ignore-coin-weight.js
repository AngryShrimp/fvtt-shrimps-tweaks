export default class IgnoreCoinWeight {
    static ID = 'ignore-coin-weight';

    static SHOULD_LOG = true;

    static FLAGS = {
        IGNORE_COIN_WEIGHT: 'ignore-coin-weight'
    }

    static TEMPLATES = {
        IGNORE_COIN_WEIGHT: `modules/shrimps-tweaks/templates/ignore-coin-weight.hbs`
    }

    static ignoreCoinWeight(CONFIG) {
        CONFIG.DND5E.encumbrance.currencyPerWeight = {imperial: 1000000000000, metric: 1000000000000}
    }
}
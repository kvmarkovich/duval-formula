/**
 * Базис влажности
 * @type {number}
 */
const xbazis = 8;
/**
 * Базис сорности
 * @type {number}
 */
const sbazis = 3;

/**
 * Хв — процент уменьшения влажности
 * а — показатель влажности за поступлением (в процентах)
 * b — показатель влажности согласно договору (в процентах).
 */
export const xb = (a, b = xbazis) => {
    if (!a || a < b) {
        a = b;
    }
    return (100 * (a - b)) / (100 - b);
};


/**
 * Сс — процент уменьшения сорной примеси (в процентах)
 * Сн — показатель сорной примеси за поступлением (в процентах)
 * Сд — показатель сорной примеси согласно договору (в процентах).
 * @param xb процент уменьшения влажности
 * @param sn показатель сорной примеси за поступлением (в процентах)
 * @param sd показатель сорной примеси согласно договору (в процентах).
 * @returns {number}
 */
export const ss = (xb, sn, sd = sbazis) => {
    if (!sn || sn < sd) {
        sn = sd;
    }
    return ((100 - xb) * (sn - sd)) / (100 - sd);
};

/**
 * Фм — физическая масса зерна, кг
 */
export const fm = (massT) => massT * 1000;


/**
 * Зм — зачетная масса зерна, кг
 * @param massT масса в тоннах
 * @param dirt заявленная сорность
 * @param humidity заявленная влажность
 * @returns {number}
 */
export const zm = (massT, dirt, humidity) => {
    const fmKg = fm(massT);
    const xb1 = xb(humidity);
    return fmKg - (fmKg * (ss(xb1, dirt) + xb1) / 100);
};
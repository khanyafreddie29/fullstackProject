const db = require('../config/db');

exports.getAllDeals = async () => {
    const [rows] = await db.query('SELECT * FROM deals');
    return rows.map(deal => ({
        ...deal,
        includes: JSON.parse(deal.includes),
    }));
};

exports.getDealById = async (deal_id) => {
    const [rows] = await db.query('SELECT * FROM deals WHERE deal_id = ?', [deal_id]);
    if (rows.length === 0) return null;

    const deal = rows[0];
    return {
        ...deal,
        includes: JSON.parse(deal.includes),
    };
}

exports.getDealByCategories = async(deal_category) => {
    const [rows] =await db.query('SELECT * FROM deals WHERE category = ?', [deal_category]);
    if (rows.length === 0) return null;

    return rows.map(deal => ({
        ...deal,
        includes: JSON.parse(deal.includes),
    }));
}
const db = require('../config/db');

exports.getAllPackages = async () => {
    const [rows] = await db.query('SELECT * FROM packages');
    return rows.map(pkg => ({
        ...pkg,
        includes: JSON.parse(pkg.includes),
    }));
};

exports.getPackageById = async (package_id) => {
    const [rows] = await db.query('SELECT * FROM packages WHERE package_id = ?', [package_id]);
    if (rows.length === 0) return null;

    const pkg = rows[0];
    return {
        ...pkg,
        includes: JSON.parse(pkg.includes),
    };
}
const PackagesModel = require('../models/packagesModel.js');

exports.getPackages = async (req, res) => {
    try {
        const packages = await PackagesModel.getAllPackages();
        res.json(packages);
    } catch (error) {
        console.error('Error fetching packages', error);
        res.status(500).json({ error: 'Failed to retrieve packages' });
    }
    };

exports.getPackage = async (req, res) => {
    const {package_id} = req.params;
    try{
        const package = await PackagesModel.getPackageById(package_id);
        if (!package) return res.status(404).json({ error: 'Package not found' });
        res.json(package);
    } catch (error) {
        console.error('Error fetching package', error);
        res.status(500).json({ error: 'Failed to retrieve package' });
    }
}
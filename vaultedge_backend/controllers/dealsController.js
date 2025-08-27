const DealsModel = require('../models/dealsModel.js');

exports.getDeals = async (req, res) => {
    try {
        const deals = await DealsModel.getAllDeals();
        res.json(deals);
    } catch (error) {
        console.error('Error fetching deals', error);
        res.status(500).json({ error: 'Failed to retrieve deals' });
    }
    };

exports.getDeal = async (req, res) => {
    const {deal_id} = req.params;
    try{
        const deal = await DealsModel.getDealById(deal_id);
        if (!deal) return res.status(404).json({ error: 'deal not found' });
        res.json(deal);
    } catch (error) {
        console.error('Error fetching deal', error);
        res.status(500).json({ error: 'Failed to retrieve deal' });
    }
}

exports.getDealByCategory = async (req, res) => {
    const {deal_category} = req.params;
    try{
        const deals = await DealsModel.getDealByCategories(deal_category);
        if (!deals) return res.status(404).json({ error: 'deals not found' });
        res.json(deals);
    } catch (error) {
        console.error('Error fetching deals', error);
        res.status(500).json({ error: 'Failed to retrieve deals' });
    }
}
const router = require('express').Router();

const company = require('../controllers/company.controller');

// Create a new Company
router.get('/', company.getCompanies);
router.get('/:id', company.getOneCompany);
router.get('/:id/requests', company.companyRequests);
router.get('/:id/collectioncenters', company.CompanyCollectionCenters);

module.exports = router;

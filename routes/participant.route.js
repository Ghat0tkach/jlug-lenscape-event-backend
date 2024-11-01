const express = require('express');
const {getUserDetails,onboardTeam,joinTeam,getTeamDetails,getInvitationsByTeamId } = require('../controllers/participant.controller');

const authenticateToken = require('../middleware/auth');

const router = express.Router();


router.get('/users/:userId',authenticateToken, getUserDetails);
router.get('/team/:teamId',authenticateToken,getTeamDetails);
router.post('/onboarding',authenticateToken, onboardTeam);
router.post('/join-team',authenticateToken, joinTeam);
router.get('/invitations/:teamId',authenticateToken, getInvitationsByTeamId);





module.exports = router;

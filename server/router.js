const Router = require('koa-router');

const router = new Router();

const prompt = require('./controllers/prompts.js');

const submission = require('./controllers/submissions.js');

const home = require('./controllers/home.js')

router.get('/', home);

router.get('/prompts', prompt.getPrompts);

router.post('/prompts', prompt.postPrompt);

router.delete('/prompts/:id', prompt.deletePrompt);

router.get('/submissions', submission.getSubmissions);

router.post('/submissions', submission.postSubmission);

// path for deleting submissions?

// path for editing submissions?

module.exports = router;
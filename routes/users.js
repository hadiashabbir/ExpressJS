const express = require("express");
const router = express.Router();
router.use(logger);


router.get("/", (req, res) => {
    console.log(req.query.name);
    res.send("User Info");
});

router.post("/", (req, res) => {
    const isValid = false;
    if (isValid) {
        users.push({firstName: req.body.firstName});
        res.redirect(`users/${users.length - 1}`);
    } else {
        console.log("Error");
        res.render("users/new", {firstName: req.body.firstName})
    }
});

router.get("/new", (req, res) => {
    res.render("users/new")
});

router
.route("/:id")
.get((req, res) => {
    console.log(res.user)
    res.send(`Get the user with ID ${req.params.id}`);
})
.put((req, res) => {
    res.send(`Get the user with ID ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`Get the user with ID ${req.params.id}`);
});

const users = [{name: "kylie"}, {name: "Sally"}]
router.param("id", (res, req, next, id) => {
    req.user = users[id];
    next();
})

function logger(res, req, next) {
    console.log(res.originalUrl);
    next();
}


module.exports = router;

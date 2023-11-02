const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};
const withAuthAdmin = (req, res, next) => {
    if (!req.session.loggedInUserData.isAdmin) {
        res.redirect("/");
    } else {
        next();
    }
};

module.exports = [withAuth, withAuthAdmin];
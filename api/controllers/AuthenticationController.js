/**
 * AuthenticationController
 *
 * @description :: Server-side logic for managing Authentications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    /**
     * `AuthenticationController.login()`
     */
    login: function (req, res) {

        // See `api/responses/login.js`
        // return res.render({
        //     successRedirect: 'admin/main',
        //     invalidRedirect: 'admin/main'
        // });
      res.redirect('main');
    },


    /**
     * `AuthenticationController.logout()`
     */
    logout: function (req, res) {

        // "Forget" the Authentication from the session.
        // Subsequent requests from this Authentication agent will NOT have `req.session.me`.
        req.session.me = null;
        req.session.email = '';
        req.session.authenticated = false;
        req.session.admin = false;
        req.session.freedriving = false;

        // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
        // send a simple response letting the Authentication agent know they were logged out
        // successfully.
        if (req.wantsJSON) {
            return res.ok('Logged out successfully!');
        }

        // Otherwise if this is an HTML-wanting browser, do a redirect.
        return res.redirect('/');
    }
};

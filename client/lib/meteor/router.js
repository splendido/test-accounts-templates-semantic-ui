Router.configure({
    notFoundTemplate: 'pageNotFound',
    layoutTemplate: 'masterLayout',
    yieldTemplates: {
        nav: {
            to: 'nav'
        },
        footer: {
            to: 'footer'
        },
    }
});


Router.onRun(function(){setActiveLinks();});

Router.map(function() {

    this.route('home', {
        path: '/',
        template: 'homeMain',
        onBeforeAction: function(){
            AccountsTemplates.setState('signIn');
            AccountsTemplates.clearFieldErrors();
        }
    });

    this.route('fullPage', {
        path: '/full',
        template: 'fullPage',
        onBeforeAction: function(){
            AccountsTemplates.setState('signIn');
            AccountsTemplates.clearFieldErrors();
        }
    });

    this.route('aboutPage', {
        path: '/about',
        template: 'about',
    });

    this.route('profilePage', {
        path: '/profile',
        template: 'profile',
    });

    this.route('loginNeeded', {
        path: '/loginNeeded',
        template: 'loginNeeded',
        onBeforeAction: AccountsTemplates.ensureSignedIn,
    });
});

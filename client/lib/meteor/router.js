Router.configure({
    notFoundTemplate: 'pageNotFound',
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    yieldTemplates: {
        aside: {
            to: 'aside'
        },
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
            AccountsTemplates.setState('sgin');
        }
    });

    this.route('fullPage', {
        path: '/full',
        template: 'fullPage',
        onBeforeAction: function(){
            AccountsTemplates.setState('sgin');
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

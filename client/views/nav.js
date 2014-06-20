Template.nav.rendered = function(){
    $('#lang-dropdown').dropdown();
    setActiveLinks();
};

Template.nav.helpers({
    currLang: function(){
        return T9n.getLanguage().toUpperCase();
    },
    languages: function(){
        return T9n.getLanguages();
    },
    uppercase: function(){
        return this.toUpperCase();
    }
});

Template.nav.events({
    'click a.setlang': function(event){
        console.log('Changing language');
        event.preventDefault();
        event.stopPropagation();
        var currTarg = event.currentTarget;
        var lang = currTarg.id.slice(5); // Skips 'lang-'
        T9n.setLanguage(lang);
    },
});
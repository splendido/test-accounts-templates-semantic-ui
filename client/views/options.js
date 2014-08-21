Template.options.helpers({
    options: function(){
        var config = AccountsTemplates._config;
        var options = [];
        for (var option in config){
            if (typeof config[option] === "boolean")
                options.push(option);
        }
        return options;
    },
    signup: function() {
        return AccountsTemplates.getState() === 'signUp';
    },
});

Template.option.helpers({
    checked: function(){
        return AccountsTemplates.getConfig(this);
    },
});

Template.option.events({
    'click input': function(event) {
        var currTarg = event.currentTarget;
        var option = currTarg.id.slice(7); // Skips 'option-'
        AccountsTemplates._config[option] = !AccountsTemplates.getConfig(option);
        AccountsTemplates._initialized = false;
        AccountsTemplates.init();
        console.log('Init again!');
        $('div.at').remove();
        UI.insert(UI.render(Template.atForm), $('#atFormDiv').get(0));
    }
});
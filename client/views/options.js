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
        return AccountsTemplates.getState() === 'sgup';
    },
});

Template.option.helpers({
    checked: function(){
        if (AccountsTemplates.ready()){
            return AccountsTemplates.getConfig(this);
        }
    },
});

Template.option.events({
    'click input': function(event) {
        if (AccountsTemplates.ready()){
            var currTarg = event.currentTarget;
            var option = currTarg.id.slice(7); // Skips 'option-'
            AccountsTemplates._config[option] = !AccountsTemplates.getConfig(option);
            $('div.at').remove();
            UI.insert(UI.render(Template.signinForm), $('#signinFormDiv').get(0));
        }
    }
});
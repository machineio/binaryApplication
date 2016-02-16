fun.views.reedem = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.reedem = this.$el;
    },
    
    /*
    * Render the reedem view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.reedem));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    },

});

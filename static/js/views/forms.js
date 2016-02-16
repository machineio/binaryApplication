fun.views.forms = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.forms = this.$el;
    },
    
    /*
    * Render the forms view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.forms));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});

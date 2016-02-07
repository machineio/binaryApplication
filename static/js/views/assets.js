fun.views.assets = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.assets = this.$el;
    },
    
    /*
    * Render the assets view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.assets));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});

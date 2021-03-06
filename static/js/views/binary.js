fun.views.binary = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.binary = this.$el;
    },
    
    /*
    * Render the binary view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.binary));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});

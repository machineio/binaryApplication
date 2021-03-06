fun.views.trader = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {

    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.trader = this.$el;
    },
    
    /*
    * Render the trader view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.trader));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    }

});

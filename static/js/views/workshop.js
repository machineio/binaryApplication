fun.views.workshop = Backbone.View.extend({

    /*
    * Bind the event functions to the different HTML elements
    */
    events : {
        'click #incoming-form-btn': 'showHideForm',
        'click #show-node': 'showNode',
        'click #show-cluster': 'showCluster',
    },
    
    /*
    * Class constructor
    */
    initialize : function(options) {
        fun.containers.workshop = this.$el;
    },
    
    /*
    * Render the workshop view
    */
    render : function(){
        if (!this.$el.html()){
            var template = _.template(fun.utils.getTemplate(fun.conf.templates.workshop));
            this.$el.html(template);
        }
        this.$el.removeClass("hide").addClass("show");
    },

    showHideForm: function(){
        if($('#formView').hasClass('hide')){
            $('#pills').removeClass('show');
            $('#pills').addClass('hide');
            $('#formView').removeClass('hide');
            $('#formView').addClass('show');
            $('#incoming-form-btn').text(fun.strings.contact);
        } else {
            $('#formView').removeClass('show');
            $('#formView').addClass('hide');
            $('#pills').removeClass('hide');
            $('#pills').addClass('show');
            $('#incoming-form-btn').text(fun.strings.form);
        }
    },

    showNode: function(){
        console.log('bitch better have my money');
        $('#nodeModal').modal({
            'show': true
        });
    },

    showCluster: function(){
        console.log('bitch better have my money');
        $('#clusterModal').modal({
            'show': true
        });
    },

});

/*
* Routes are resource address capability service nouns.
*/
fun.Router = Backbone.Router.extend({

    /*
     Seed server routes
    */
    routes: {
        "": "home",
        "home": "home",
        "landing": "landing",
        "calendars": "calendars",
        "monitors": "monitors",
        "dashboard": "dashboard",
        "dashboard/a:account": "dashboard",
        "dashboard/a:account/o:org": "dashboard",
        "signup": "signup",
        "login": "login",
        "terms": "terms",
        "security": "security",
        "privacy": "privacy",
        "status": "status",
        "help": "help",
        "contact": "contact",
        "contacts": "contacts",
        "contacts/p:page": "contacts",
        "tasks": "tasks",
        "tasks/p:page": "tasks",
        "orgs": "orgs",
        "activity": "activity",
        "profile": "profile",
        "members": "members",
        "teams": "teams",
        "reports": "reports",
        "reports/p:page": "reports",
        "accounts":"accounts",
        "messages": "messages",
        "about": "about",
        "binary": "binary",
        "education": "education",
        "resources": "resources",
        "assets":"assets",
        "currencies":"currencies",
        "stocks":"stocks",
        "deposit": "deposit",
        "withdraw": "withdraw",
        "settings": "settings",
        "logout": "logout"
    },

    initialize: function(){
        'use strict';
        // navigation bar
        fun.instances.navbar = new fun.views.navbar({
            el:"#fun-navbar"
        });
        // sub header
        fun.instances.subheader = new fun.views.subheader({
            el:"#fun-subheader"
        });
        // landing
        fun.instances.landing = new fun.views.landing({
            el:"#fun-landing"
        });
        // terms
        fun.instances.terms = new fun.views.terms({
            el:"#fun-terms"
        });
        // privacy
        fun.instances.privacy = new fun.views.privacy({
            el:"#fun-privacy"
        });
        // security
        fun.instances.security = new fun.views.security({
            el:"#fun-security"
        });
        // status
        fun.instances.status = new fun.views.status({
            el:"#fun-status"
        });
        // help
        fun.instances.help = new fun.views.help({
            el:"#fun-help"
        });
        // login
        fun.instances.login = new fun.views.login({
            el:"#fun-login"
        });
        // dashboard
        fun.instances.dashboard = new fun.views.dashboard({
            el:"#fun-dashboard"
        });
        // orgs
        fun.instances.orgs = new fun.views.orgs({
            el:"#fun-orgs"
        });
        // profile
        fun.instances.profile = new fun.views.profile({
            el:"#fun-profile"
        });
        // members
        fun.instances.members = new fun.views.members({
            el:"#fun-members"
        });
        // teams
        fun.instances.teams = new fun.views.teams({
            el:"#fun-teams"
        });
        // tasks
        fun.instances.tasks = new fun.views.tasks({
            el:"#fun-tasks"
        });
        // contact
        fun.instances.contact = new fun.views.contact({
            el:"#fun-contact"
        });
        // contacts
        fun.instances.contacts = new fun.views.contacts({
            el:"#fun-contacts"
        });
        // assets
        fun.instances.assets = new fun.views.assets({
            el:"#fun-assets"
        });
        // currencies
        fun.instances.currencies = new fun.views.currencies({
            el:"#fun-currencies"
        });
        // deposit
        fun.instances.deposit = new fun.views.deposit({
            el:"#fun-deposit"
        });
        // stocks
        fun.instances.stocks = new fun.views.stocks({
            el:"#fun-stocks"
        });
        // withdraw
        fun.instances.withdraw = new fun.views.withdraw({
            el:"#fun-withdraw"
        });
        // accounts
        fun.instances.accounts = new fun.views.accounts({
            el:"#fun-accounts"
        });
        // resources
        fun.instances.resources = new fun.views.resources({
            el:"#fun-resources"
        });
        // messages
        fun.instances.messages = new fun.views.messages({
            el:"#fun-messages"
        });
        // about
        fun.instances.about = new fun.views.about({
            el:"#fun-about"
        });
        // binary
        fun.instances.binary = new fun.views.binary({
            el:"#fun-binary"
        });
        // education
        fun.instances.education = new fun.views.education({
            el:"#fun-education"
        });
        // reports
        fun.instances.reports = new fun.views.reports({
            el:"#fun-reports"
        });
        // signup
        fun.instances.signup = new fun.views.signup({
            el:"#fun-signup"
        });
        // settings
        fun.instances.settings = new fun.views.settings({
            el:"#fun-settings"
        });
        // extra
        fun.instances.extra = new fun.views.extra({
            el:"#fun-extra"
        });
        // footer
        fun.instances.footer = new fun.views.footer({
            el:"#fun-footer"
        });
    },

    home: function(){
        'use strict';
        console.log('getting account and context');
        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");
        console.log(this.account, this.context);
        // cognitive, i don't know car engine by account and context.
        if (this.account === this.context){
            console.log('account same as context');
        } else {
            console.log('missing or different context');
        }
        // see if user is inside the dungeon or out of the dungeon.
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.profile);
        } else {
            fun.utils.redirect(fun.conf.hash.landing);
        }
    },

    landing: function(){
        'use strict';
        fun.utils.hideAll();
        fun.utils.showLanding();
        fun.instances.navbar.render();
        fun.instances.landing.render();
        fun.instances.extra.render();
        fun.instances.footer.render();
    },

    terms: function(){
        'use strict';
        var terms = translate('terms');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(terms);
        fun.instances.terms.render();
        fun.instances.footer.render();
    },

    about: function(){
        'use strict';
        var about = translate('about');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(about);
        fun.instances.about.render();
        fun.instances.footer.render();
    },

    binary: function(){
        'use strict';
        var binary = translate('binary');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(binary);
        fun.instances.binary.render();
        fun.instances.footer.render();
    },

    education: function(){
        'use strict';
        var education = translate('education');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(education);
        fun.instances.education.render();
        fun.instances.footer.render();
    },

    messages: function(){
        'use strict';
        var messages = translate('messages');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(messages);
        fun.instances.messages.render();
        fun.instances.footer.render();
    },

    tasks: function(){
        'use strict';
        var tasks = translate('tasks'),
            account,
            context,
            vonCount = 0,
            resources,
            resource,
            onSuccess;

        // get account and context
        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );

        resources = {
            
            user: new fun.models.User({'account':account}),
            tasks: new fun.models.Tasks(),
            now: new fun.models.TasksNow(),
            later: new fun.models.TasksLater(),
            done: new fun.models.TasksDone(),
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.tasks.renderTasksList(
                    resources.tasks
                );

                fun.instances.settings.setProfileInformation(
                    resources.user
                );

                fun.instances.tasks.renderNowTasksList(
                    resources.now
                );

                fun.instances.tasks.renderLaterTasksList(
                    resources.later
                );

                fun.instances.tasks.renderDoneTasksList(
                    resources.done
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.navbar.renderDropdown();
            fun.instances.subheader.render(tasks);
            fun.instances.subheader.renderHeadNav();
            
            fun.instances.tasks.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    companies: function(){
        'use strict';
        var companies = translate('companies'),
            account,
            context,
            vonCount = 0,
            resources,
            resource,
            onSuccess;

        // get account and context
        account = localStorage.getItem("username");
        context = sessionStorage.getItem("context");

        console.log(
            fun.utils.format('username: %s, context: %s', account, context)
        );

        resources = {
            //account: new fun.models.Account({'account':account}),
            user: new fun.models.User({'account':account}),
            companies: new fun.models.Companies(),
            active: new fun.models.CompaniesActive(),
            disable: new fun.models.CompaniesDisable(),
            suspended: new fun.models.CompaniesSuspended()
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');
                fun.instances.companies.renderCompaniesList(
                    resources.companies
                );
                fun.instances.settings.setProfileInformation(
                    resources.user
                );
                fun.instances.companies.renderActiveCompaniesList(
                    resources.active
                );
                fun.instances.companies.renderDisableCompaniesList(
                    resources.disable
                );
                fun.instances.companies.renderSuspendedCompaniesList(
                    resources.suspended
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.navbar.renderDropdown();
            fun.instances.subheader.render(companies);
            fun.instances.subheader.renderHeadNav();
            
            fun.instances.companies.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    privacy: function(){
        'use strict';
        var privacy = translate('privacy');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(privacy);
        fun.instances.privacy.render();
        fun.instances.footer.render();
    },

    security: function(){
        'use strict';
        var security = translate('security');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(security);
        fun.instances.security.render();
        fun.instances.footer.render();
    },

    assets: function(){
        'use strict';
        var assets = translate('assets');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(assets);
        fun.instances.subheader.renderHeadNav();
        fun.instances.assets.render();
        fun.instances.footer.render();
    },

    currencies: function(){
        'use strict';
        var currencies = translate('currencies');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(currencies);
        fun.instances.subheader.renderHeadNav();
        fun.instances.currencies.render();
        fun.instances.footer.render();
    },

    stocks: function(){
        'use strict';
        var stocks = translate('stocks');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(stocks);
        fun.instances.subheader.renderHeadNav();
        fun.instances.stocks.render();
        fun.instances.footer.render();
    },

    deposit: function(){
        'use strict';
        var deposit = translate('deposit');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(deposit);
        fun.instances.deposit.render();
        fun.instances.footer.render();
    },

    withdraw: function(){
        'use strict';
        var withdraw = translate('withdraw');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(withdraw);
        fun.instances.withdraw.render();
        fun.instances.footer.render();
    },

    contact: function(){
        'use strict';
        var contact = translate('contact');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.subheader.render(contact);
        fun.instances.contact.render();
        fun.instances.footer.render();
    },

    status: function(){
        'use strict';
        var status = translate('status');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(status);
        fun.instances.status.render();
        fun.instances.footer.render();
    },

    help: function(){
        'use strict';
        var help = translate('help');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.navbar.renderDropdown();
        fun.instances.subheader.render(help);
        fun.instances.help.render();
        fun.instances.footer.render();
    },

    teams: function(){
        'use strict';
        var vonCount = 0,
            resources,
            resource,
            account,
            context,
            teams,
            onSuccess;

        teams = translate('teams');

        context = sessionStorage.getItem("context");

        console.log(context);
        // Yeah resources bitch! fucking missing since years ago...
        resources = {
            org: new fun.models.Org({'account':context})
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');
                fun.instances.teams.render(
                    resources.org
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(teams);
            fun.instances.subheader.renderHeadNav();
            //fun.instances.teams.render();
            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    members: function(){
        'use strict';
        var vonCount = 0,
            resources,
            resource,
            account,
            context,
            members,
            onSuccess;

        members = translate('members');

        context = sessionStorage.getItem("context");

        console.log(context);
        resources = {
            org: new fun.models.Org({'account':context})
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.members.render(
                    resources.org
                );
            }
        };

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render(members);
            fun.instances.subheader.renderHeadNav();

            // render memberss view
            //fun.instances.members.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }

        fun.instances.footer.render();
    },

    contacts: function(page){
        'use strict';
        var contacts,
            vonCount,
            resources,
            resource,
            onSuccess;

        contacts = translate('contacts');
        // and now for something completely different
        vonCount = 0;
        
        resources = {
            contacts: new fun.models.Contacts(),
            directories: new fun.models.Directories()
        };

        onSuccess = function(){
            if(++vonCount === _.keys(resources).length){
                console.log('get resources success!');

                fun.instances.contacts.renderContactLists(
                    resources.contacts
                );

                fun.instances.contacts.renderDirectoryLists(
                    resources.directories
                );
            }
        };

        if (isNaN(page)) {
            page = 1;
        }

        if(fun.utils.loggedIn()){
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.navbar.renderDropdown();
            fun.instances.subheader.render(contacts);
            fun.instances.subheader.renderHeadNav();
            // render contacts view
            fun.instances.contacts.render();

            for (resource in resources){
                resources[resource].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('fuck error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.footer.render();
    },

    signup: function(){
        'use strict';
        var signup = translate('signup');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.profile);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render('Signup');
            fun.instances.signup.render();
        }
        fun.instances.footer.render();
    },

    login: function(){
        'use strict';
        var login = translate('login');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.profile);
        } else {
            fun.utils.hideAll();
            fun.utils.hideLanding();
            fun.instances.navbar.render();
            fun.instances.subheader.render(login);
            fun.instances.login.render();
        }

        fun.instances.footer.render();
    },

    dashboard: function(account, org){
        'use strict';
        var account,
            vonCount = 0,
            models,
            onSuccess,
            dashboard,
            message;

        console.log(
            fun.utils.format('account: %s, organization: %s', account, org)
        );

        if (!account){
            account = localStorage.getItem("username");
        } else {
            if (account.substring(0, 1) === ':') { 
                account = account.substring(1);
            }
        }
        
        models = {
            user: new fun.models.User({'account':account}),
            records: new fun.models.Records(),
            billing: new fun.models.Billing(),
            summary: new fun.models.Summary(),
            lapseSummary: new fun.models.LapseSummary({
                lapse: 'hours'
            })
        };

        if (org) {
            models.org = new fun.models.Org({'account': org});
            
            // Set custom url tree, it's not a tree but you got it...
            // window.history.pushState('orgDashboard', 'Dashboard', '/orgs/iofun/dashboard');
        }

        onSuccess = function(){
            if(++vonCount === _.keys(models).length){
                console.log('spawn daemon success!');

                fun.instances.navbar.renderAccountDropdown(
                    models.user
                );

                fun.instances.dashboard.renderTodaySummary(
                    models.summary, models.billing
                );

                fun.instances.dashboard.renderLatestRecords(
                    models.records
                );
                  
                fun.instances.dashboard.renderRecordType();

                // set profile info
                fun.instances.settings.setProfileInformation(
                    models.user
                );
            }
        };

        if(fun.utils.loggedIn()){

            dashboard = translate('dashboard');

            fun.utils.hideAll();
            fun.utils.hideLanding();
            fun.instances.navbar.render();

            fun.instances.subheader.render(dashboard);
            fun.instances.subheader.renderHeadNav();

            fun.instances.dashboard.render();
            for (message in models){
                models[message].fetch({
                    success: onSuccess,
                    error: function() {
                        console.log('error!');
                    }
                });
            }
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        fun.instances.footer.render();
    },

    orgs: function(){
        'use strict';
        var organizations = translate('organizations');
        
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.navbar.renderDropdown();
        fun.instances.subheader.render(organizations);
        fun.instances.subheader.renderHeadNav();
        fun.instances.orgs.render();
        
        fun.instances.footer.render();
    },

    profile: function(){
        'use strict';
        var profile = translate('binaryOptions');

        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.navbar.renderDropdown();
        fun.instances.subheader.render(profile);
        fun.instances.subheader.renderHeadNavProfile();
        fun.instances.profile.render();
        
        fun.instances.footer.render();
    },

    reports: function(page){
        'use strict';
        if(fun.utils.loggedIn()){
            var reports = translate('reports');
            fun.utils.hideAll();
            fun.utils.hideLanding();
            fun.instances.navbar.render();
            fun.instances.navbar.renderDropdown();
            fun.instances.subheader.render(reports);
            fun.instances.subheader.renderHeadNavReports();

            fun.instances.reports.render();
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        
        fun.instances.footer.render();
    },

    settings: function(){
        'use strict';
        this.account = localStorage.getItem("username");
        var settings = translate('settings');
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.navbar.render();
        fun.instances.navbar.renderDropdown();
        fun.instances.subheader.render(settings);
        fun.instances.subheader.renderHeadNav();
        fun.instances.settings.render(this.account);
        fun.instances.footer.render();
    },

    logout: function(){
        'use strict';
        var goodBye = translate('goodBye'),
            onSuccess;

        // the stupid shit with the navbar on logout is probably related to this.

        onSuccess = function(){
            fun.instances.navbar.render()
            fun.instances.navbar.renderDropdown();
        };

        fun.utils.hideAll();
        fun.utils.hideLanding();

        fun.utils.logout({
            success: function() {
                console.log('fuck error with kika and success!');
            },
            error: onSuccess
        });

        fun.instances.subheader.render(goodBye);      
        fun.instances.login.render();
        fun.instances.footer.render();
    }
});

// init the shit out of this
$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});

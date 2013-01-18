/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Page', function(Y, NAME) {

/**
 * The Page module.
 *
 * @module Page
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.assets.addCss('./bootstrap.css');
            ac.assets.addCss('./bootstrap-responsive.css');
            ac.assets.addCss('./index.css');


            ac.models.get('PageModelProfile').getProfile(function(error, profile){
                ac.composite.done({
                    template: {
                        profile: profile
                    }
                });
            });



            
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'mojito-composite-addon', 'PageModelProfile']});

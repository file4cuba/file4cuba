/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Explorer', function(Y, NAME) {

/**
 * The Explorer module.
 *
 * @module Explorer
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
            ac.models.get('ExplorerModelFile').getChilds(345,function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }

                Y.log('la data en el index');
                Y.log(data[0]);
                ac.assets.addCss('./index.css');
                ac.done({
                    list: data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'ExplorerModelFile']});

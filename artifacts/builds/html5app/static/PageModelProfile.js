/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('PageModelProfile', function(Y, NAME) {

/**
 * The PageModelFoo module.
 *
 * @module Page
 */

    /**
     * Constructor for the PageModelFoo class.
     *
     * @class PageModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getProfile: function(callback) {
            var profile = {
                id: true,
                name: 'Yuri Victor Munayev',
                user: 'yvmunayev',
                credit: '99.50',
                roll: 'admin',
                notifications: {
                    cant_new: 4,
                    list: [
                        {
                            id: '1233',
                            user: 'reinier',
                            text: 'Su pedido fue entregado',
                            'new': true
                        },
                        {
                            id: 're3343',
                            user: 'reinier',
                            text: 'Su Credito fue aumentado en $50.00',
                            'new': true
                        },
                        {
                            id: 'xdsad3',
                            user: 'dnvila',
                            text: 'Su pedido esta camino',
                            'new': true
                        },
                        {
                            id: 'de233',
                            user: 'dnvila',
                            text: 'Su perido esta listo',
                            'new': true
                        },
                        {
                            id: '34sere',
                            user: 'dnvila',
                            text: 'Su perido ha sido chequeado',
                            'new': false
                        },
                        {
                            id: 'rew324',
                            user: 'reinier',
                            text: 'Usted ha hecho un pedido',
                            'new': false
                        }
                    ]
                }
            };

            callback(null, profile);
        }

    };

}, '0.0.1', {requires: []});

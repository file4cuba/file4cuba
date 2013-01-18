/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('HeroModelModel', function(Y, NAME) {

/**
 * The HeroModelFoo module.
 *
 * @module Hero
 */

    /**
     * Constructor for the HeroModelFoo class.
     *
     * @class HeroModelFoo
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
        getData: function(callback) {
            var data = {
                    favs: [],
                    news: [],
                    pres: []
                },
                i,
                item;

            for(i = 0; i < 6; i++){
                item = 'trello' + i + '.ipa';
                data.favs.push({name: item, cant: 5});
                data.news.push({name: item, cant: 5});
                data.pres.push({name: item, cant: 5});
            }


            callback(null, data);
        }

    };

}, '0.0.1', {requires: []});

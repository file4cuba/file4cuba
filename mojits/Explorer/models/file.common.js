/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ExplorerModelFile', function(Y, NAME) {

/**
 * The ExplorerModelFoo module.
 *
 * @module Explorer
 */

    /**
     * Constructor for the ExplorerModelFoo class.
     *
     * @class ExplorerModelFoo
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
        getFiles: function(callback, name) {
            var data = this._getTree();

            callback(null, data);
        },

        _getTree: function (){
            var data =  {
                    name: 'Explorer',
                    size: '4.5 TB',
                    price: 5000.00,
                    cant: 0,
                    childs: [
                        {
                            name: 'Aplications',
                            size: '50 GB',
                            price: 1000.00,
                            cant: 2,
                            childs: {
                                Trello: {
                                    name: 'Trello',
                                    size: '2.5 MB',
                                    price: 10,
                                    cant: 2,
                                    ext: '.ipa'
                                },
                                Firefox: {
                                    name: 'Firefox',
                                    size: '15.7 MB',
                                    price: 3.50,
                                    cant: 50,
                                    ext: '.exe'
                                },
                                iTunes: {
                                    name: 'iTunes',
                                    size: '81,20 MB',
                                    price: 32.00,
                                    cant: 20,
                                    ext: '.app'
                                },
                                Picasa: {
                                    name: 'Picasa',
                                    size: '27 MB',
                                    price: 13.25,
                                    cant: 7,
                                    ext: '.deb'
                                },
                                Pidgin: {
                                    name: 'Pidgin',
                                    size: '3.5 MB',
                                    price: 5.00,
                                    cant: 2,
                                    ext: '.ipa'
                                },
                                iTerminal: {
                                    name: 'iTerminal',
                                    size: '2.4 MB',
                                    price: 2.50,
                                    cant: 1,
                                    ext: '.exe'
                                },
                                VLC: {
                                    name: 'VLC',
                                    size: '45.9 MB',
                                    price: 5.00,
                                    cant: 25,
                                    ext: '.ipa'
                                },
                                "Sublime Text": {
                                    name: 'Sublime Text',
                                    size: '25.4 MB',
                                    price: 15.00,
                                    cant: 4,
                                    ext: '.app'
                                }
                            }
                        },
                        {
                            name: 'Document',
                            size: '1 GB',
                            price: 200.00,
                            cant: 2,
                            childs: {
                                Trello: {
                                    name: 'Trello',
                                    size: '2.5 MB',
                                    price: 10,
                                    cant: 2,
                                    ext: '.doc'
                                },
                                Firefox: {
                                    name: 'Firefox',
                                    size: '15.7 MB',
                                    price: 3.50,
                                    cant: 50,
                                    ext: '.pdf'
                                },
                                iTunes: {
                                    name: 'iTunes',
                                    size: '81,20 MB',
                                    price: 32.00,
                                    cant: 20,
                                    ext: '.txt'
                                },
                                Picasa: {
                                    name: 'Picasa',
                                    size: '27 MB',
                                    price: 13.25,
                                    cant: 7,
                                    ext: '.pdf'
                                },
                                Pidgin: {
                                    name: 'Pidgin',
                                    size: '3.5 MB',
                                    price: 5.00,
                                    cant: 2,
                                    ext: '.doc'
                                },
                                iTerminal: {
                                    name: 'iTerminal',
                                    size: '2.4 MB',
                                    price: 2.50,
                                    cant: 1,
                                    ext: '.txt'
                                },
                                VLC: {
                                    name: 'VLC',
                                    size: '45.9 MB',
                                    price: 5.00,
                                    cant: 25,
                                    ext: '.doc'
                                },
                                "Sublime Text": {
                                    name: 'Sublime Text',
                                    size: '25.4 MB',
                                    price: 15.00,
                                    cant: 4,
                                    ext: '.doc'
                                }
                            }
                        },
                        {
                            name: 'Presentation',
                            size: '50 GB',
                            price: 1000,
                            cant: 2,
                            childs: {
                                Trello: {
                                    name: 'Trello',
                                    size: '2.5 MB',
                                    price: 10,
                                    cant: 2,
                                    ext: '.ppt'
                                },
                                Firefox: {
                                    name: 'Firefox',
                                    size: '15.7 MB',
                                    price: 3.50,
                                    cant: 50,
                                    ext: '.ppt'
                                },
                                iTunes: {
                                    name: 'iTunes',
                                    size: '81,20 MB',
                                    price: 32.00,
                                    cant: 20,
                                    ext: '.pdf'
                                }
                            },
                            Games: {
                            name: 'Games',
                            size: '30 HB',
                            price: 550.00,
                            cant: 5,
                            childs: {
                                "Angry Bird": {
                                    name: 'Angry Bird',
                                    size: '2.5 MB',
                                    price: 10,
                                    cant: 2,
                                    ext: '.ipa'
                                },
                                "Call of Dutty": {
                                    name: 'Firefox',
                                    size: '4.3 HB',
                                    price: 3.50,
                                    cant: 50,
                                    ext: '.iso'
                                },
                                'FIFA': {
                                    name: 'FIFA',
                                    size: '3.2 HB',
                                    price: 32.00,
                                    cant: 20,
                                    ext: '.pdf'
                                }
                            }
                        }
                    }
                ]
            };


            return data;
        }

    };

}, '0.0.1', {requires: []});

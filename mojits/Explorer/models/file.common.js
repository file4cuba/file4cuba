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
    
    var data = {};

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
            var data = this._getTree(),
                id = 'er43';
            Y.log('-------------------------------------');
            this.getChilds(id,callback);
            //callback(null, data);
        },

        _getTree: function (){


            return  [{
                                    name: 'Angry Bird',
                                    id:'2346',
                                    size: '2.5 MB',
                                    price: 10,
                                    date: 2,
                                    ext: '.ipa'
                     },
                     {
                                    name: 'Firefox',
                                    id:'1234',
                                    size: '4.3 HB',
                                    price: 3.50,
                                    date: 50,
                                    ext: '.iso'
                    },
                    {
                                    name: 'FIFA',
                                    id:'1290',
                                    size: '3.2 HB',
                                    price: 32.00,
                                    date: 20,
                                    ext: '.pdf'
                    }];            

        },

        getChilds: function(id,callback){
            var tree = this._getTree(),
                apiValue;
                
                Y.log(data);
                if(data.hasOwnProperty(id)){
                    //retornar lo ke hay ahi
                    callback(null,data[id]);
                }else{
                    //pedirlo a la api
                    apiValue = tree;
                    data[id] = apiValue;
                    callback(null,apiValue);
                }

        },

        apiRetrieve: function(id,callback){
            
        }

    };

}, '0.0.1', {requires: []});

'use strict';
/* global process */
/*******************************************************************************
 * Copyright (c) 2015 IBM Corp.
 *
 * All rights reserved. 
 *
 * Contributors:
 *   David Huffman - Initial implementation
 *******************************************************************************/
var express = require('express');
var router = express.Router();
var setup = require('../setup.js');

//anything in here gets passed to JADE template engine
function build_bag(){
	return {
				setup: setup,								//static vars for configuration settings
				e: process.error,							//send any setup errors
				jshash: process.env.cachebust_js,			//js cache busting hash (not important)
				csshash: process.env.cachebust_css,			//css cache busting hash (not important)
			};
}

// ============================================================================================================================
// Home
// ============================================================================================================================
router.route('/').get(function(req, res){
	res.redirect('/v1');
});


// ============================================================================================================================
// Part 2
// ============================================================================================================================
router.route('/v1').get(function(req, res){
	res.render('part2', {title: 'Marbles', bag: build_bag()});
});
router.route('/v1/:page?').get(function(req, res){
	res.render('part2', {title: 'Marbles', bag: build_bag()});
});

module.exports = router;
/*
 * grunt-bluemix-deploy
 * https://github.com/oligibson/grunt-bluemix-deploy
 *
 * Copyright (c) 2015 Oli Gibson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var pkg = require('./package.json');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    buildcontrol: {
      options: {
        dir: 'dist',
      },
      testbranch: {
        options: {
          branch: 'test-branch',
          remote: '../',
          commit: true,
          push: true,
          connectCommits: false,
          tag: pkg.version
        }
      },
      production: {
        options: {
          branch: 'master',
          remote: 'https://github.com/aistictech/estic_website.git',
          commit: true,
          message: 'Check *this* out.',
          push: true
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'buildcontrol',
    'nodeunit'
  ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

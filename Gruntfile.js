'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['default'],
        options: {
          spawn: false,
        }
      }
    },
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'greet*.js', 'test/**/*.js']
      },
      options: {
        jshintrc: true
      }
    },
    simplemocha: {
      dev: {
        src: ['test/**/*.js']
      },
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      }
    }
  });
  grunt.registerTask('linter', ['jshint:dev']);
  grunt.registerTask('test', 'simplemocha:dev');
  grunt.registerTask('default', ['linter', 'test']);
};

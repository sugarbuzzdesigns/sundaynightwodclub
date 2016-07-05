module.exports = function(grunt) {
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('sassBuild', ['sass', 'cssmin']);

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		cssBuildDir: 'library/css/build',
		cssDistDir: 'library/css/dist',

		sassDir: 'library/scss',

		jsSrcDir: 'library/js/src',
		jsBuildDir: 'library/js/build',
		jsDistDir: 'library/js/dist',

		clean: {
			all: [
				'<%= cssBuildDir %>',
				'<%= cssDistDir %>',
				'<%= jsBuildDir %>',
				'<%= jsDistDir %>'
			]
		},

		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},

		sass: {
			all: {
				options: {
					sourcemap: 'none',
					style: 'expanded'
				},
				files: {
					'<%= cssBuildDir %>/style.css' : '<%= sassDir %>/style.scss',
					'<%= cssBuildDir %>/admin.css' : '<%= sassDir %>/admin.scss',
					'<%= cssBuildDir %>/editor-style.css' : '<%= sassDir %>/editor-style.scss',
					'<%= cssBuildDir %>/ie.css' : '<%= sassDir %>/ie.scss',
					'<%= cssBuildDir %>/login.css' : '<%= sassDir %>/login.scss'
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			all: {
				files: {
					'<%= cssDistDir %>/style.min.css' : '<%= cssBuildDir %>/style.css',
					'<%= cssDistDir %>/admin.min.css' : '<%= cssBuildDir %>/admin.css',
					'<%= cssDistDir %>/editor-style.min.css' : '<%= cssBuildDir %>/editor-style.css',
					'<%= cssDistDir %>/ie.min.css' : '<%= cssBuildDir %>/ie.css',
					'<%= cssDistDir %>/login.min.css' : '<%= cssBuildDir %>/login.css'
				}
			}
		},

		watch: {
			css: {
				options: {
					spawn: false
				},
				files: [
					'<%= sassDir %>/**/*.scss'
				],
				tasks: ['sassBuild']
			}
		}
	});
};